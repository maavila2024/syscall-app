<template>
  <div class="notification-container">
    <span v-if="unreadNotifications.length > 0" class="notification-message">
      Nova notificação!
    </span>
  </div>  
  <v-menu :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <div class="d-flex align-center">
        <IdleCountdown />
        <v-btn icon variant="text" color="primary" v-bind="props">
          <v-badge
            dot
            :color="unreadNotifications.length > 0 ? '#F44336' : '#2196F3'"
            class="custom-dot"
          >
            <BellIcon stroke-width="1.5" size="42" />
          </v-badge>
        </v-btn>
      </div>
    </template>
    <v-sheet rounded="md" width="360" elevation="10">
      <div class="px-8 pb-4 pt-6">
        <div class="d-flex align-center justify-space-between">
          <h6 class="text-h5">Notificações</h6>
          <v-chip color="primary" variant="flat" size="small"
            >{{ unreadNotifications.length }} Novas</v-chip
          >
        </div>
        <v-btn color="primary" @click="markAllAsRead" variant="outlined"
          >Marcar todas como lidas</v-btn
        >
      </div>
      <perfect-scrollbar style="height: 400px">
        <v-list class="py-0 theme-list" lines="two">
          <v-list-item
            v-for="item in displayedNotifications"
            :key="item.id"
            :value="item"
            class="py-4 px-8"
            @click="markAsReadAndNavigate(item)"
          >
            <div>
              <h6 class="text-subtitle-1 font-weight-bold mb-1">
                {{ item.data.title }}
              </h6>
              <p class="text-subtitle-1 font-weight-regular">
                {{ item.data.interaction?.comment || item.data.message || "No comment available" }}
              </p>
              <div v-if="item.data.type === 'password_reset_request'" class="mt-2">
                <v-btn
                  size="small"
                  color="primary"
                  variant="outlined"
                  @click.stop="handlePasswordReset(item)"
                >
                  Resetar Senha
                </v-btn>
              </div>
            </div>
          </v-list-item>
        </v-list>
      </perfect-scrollbar>
      <div class="py-4 px-6 text-center">
        <v-btn
          color="primary"
          variant="outlined"
          block
          @click="fetchAllNotifications"
        >
          Ver todas as notificações
        </v-btn>
      </div>
    </v-sheet>
  </v-menu>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { useMeStore } from "@/stores/me";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { BellIcon } from "vue-tabler-icons";
import IdleCountdown from '@/components/ui/IdleCountdown.vue';

export default {
  components: {
    BellIcon,
    IdleCountdown,
  },
  setup() {
    const meStore = useMeStore();
    const authStore = useAuthStore();
    const router = useRouter();
    const notifications = ref([]);
    const allNotifications = ref([]);
    const showAllNotifications = ref(false);
    const resettingPassword = ref(false);

    const unreadNotifications = computed(() => {
      return notifications.value.filter(
        (notification) => !notification.read_at
      );
    });

    const displayedNotifications = computed(() => {
      return showAllNotifications.value
        ? allNotifications.value
        : unreadNotifications.value;
    });

    const markAsReadAndNavigate = async (notification) => {
      // Não navegar se for notificação de reset de senha
      if (notification.data.type === 'password_reset_request') {
        return;
      }

      await meStore.markNotificationComplete(notification.id);
      notifications.value = notifications.value.filter(
        (n) => n.id !== notification.id
      );

      const taskCode =
        notification.data.task?.task_code || notification.data.task_code;

      if (taskCode) {
        router.push({ name: "tasks", query: { search: taskCode } });
      } else {
        console.error("Task code not found in notification data", notification);
      }
    };

    const handlePasswordReset = async (notification) => {
      if (resettingPassword.value) return;
      
      resettingPassword.value = true;
      
      try {
        const userId = notification.data.user_id;
        const response = await authStore.supportResetPassword(userId);
        
        // Marcar notificação como lida
        await meStore.markNotificationComplete(notification.id);
        notifications.value = notifications.value.filter(
          (n) => n.id !== notification.id
        );
        
        // Mostrar mensagem de sucesso com o link
        const resetUrl = response.data.reset_url || `http://localhost:5174/reset-password-by-token/${response.data.reset_token}`;
        const message = `Token de reset gerado para o usuário ${notification.data.user_email}.\n\nLink: ${resetUrl}\n\nCopie este link e envie para o usuário via email interno.`;
        alert(message);
        
        // Copiar link para clipboard se possível
        if (navigator.clipboard) {
          navigator.clipboard.writeText(resetUrl).then(() => {
            console.log('Link copiado para clipboard');
          });
        }
      } catch (error) {
        console.error('Erro ao gerar token de reset:', error);
        alert('Erro ao gerar token de reset. Tente novamente.');
      } finally {
        resettingPassword.value = false;
      }
    };

    const markAllAsRead = async () => {
      await meStore.markAllNotificationComplete();
      notifications.value = notifications.value.map((notification) => ({
        ...notification,
        read_at: new Date(),
      }));
      if (showAllNotifications.value) {
        allNotifications.value = allNotifications.value.map((notification) => ({
          ...notification,
          read_at: new Date(),
        }));
      }
    };

    const fetchAllNotifications = async () => {
      showAllNotifications.value = !showAllNotifications.value;
      if (showAllNotifications.value) {
        allNotifications.value = await meStore.getAllNotifications();
      }
    };

    onMounted(() => {
      console.log('🔔 [FRONTEND] NotificationDD montado');
      
      meStore.getMe().then(() => {
        console.log('🔔 [FRONTEND] getMe() concluído', {
          user: meStore.user,
          user_id: meStore.user?.id,
          notifications_count: meStore.user?.notifications?.length || 0,
        });

        notifications.value = meStore.user ? meStore.user.notifications : [];
        
        const channelName = `notifications.${meStore.user.id}`;
        console.log('🔔 [FRONTEND] Configurando listener Echo', {
          channel_name: channelName,
          user_id: meStore.user.id,
          echo_configured: typeof Echo !== 'undefined',
        });

        try {
          const channel = Echo.private(channelName);
          console.log('🔔 [FRONTEND] Canal privado criado', { channel });

          channel
            .notification((e) => {
              console.log('🔔 [FRONTEND] ⭐ NOTIFICAÇÃO RECEBIDA VIA PUSHER ⭐', {
                notification: e,
                channel: channelName,
                timestamp: new Date().toISOString(),
              });

              // Garantir que a estrutura dos dados recebidos seja consistente
              const notification = {
                ...e,
                data: {
                  ...e.data,
                  task: e.data.task || { task_code: e.data.task_code },
                },
              };

              notifications.value.push(notification);
              if (showAllNotifications.value) {
                allNotifications.value.push(notification);
              }

              console.log('🔔 [FRONTEND] Notificação adicionada ao array', {
                notifications_count: notifications.value.length,
                unread_count: unreadNotifications.value.length,
              });
            })
            .error((error) => {
              console.error('🔔 [FRONTEND] Erro no canal Echo', {
                error,
                channel: channelName,
              });
            });

          console.log('🔔 [FRONTEND] Listener configurado com sucesso');
        } catch (error) {
          console.error('🔔 [FRONTEND] Erro ao configurar Echo listener', {
            error,
            channel: channelName,
          });
        }
      }).catch((error) => {
        console.error('🔔 [FRONTEND] Erro ao obter dados do usuário', error);
      });
    });

    return {
      notifications,
      allNotifications,
      unreadNotifications,
      displayedNotifications,
      markAsReadAndNavigate,
      markAllAsRead,
      fetchAllNotifications,
      showAllNotifications,
      handlePasswordReset,
      resettingPassword,
    };
  },
};
</script>

<style scoped>
.theme-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.v-list-item {
  display: flex;
  align-items: center;
}
.v-list-item div {
  flex-grow: 1;
}
.v-list-item h6 {
  margin: 0;
}
.v-list-item p {
  margin: 0;
}

.notification-container {
  display: flex;
  align-items: center;
}

.custom-dot .v-badge__dot {
  width: 32px;
  height: 32px; 
}

.notification-message {
  color: #F44336; 
  font-weight: bold;
  margin-left: 8px;
  animation: blink 3s infinite; 
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

</style>
