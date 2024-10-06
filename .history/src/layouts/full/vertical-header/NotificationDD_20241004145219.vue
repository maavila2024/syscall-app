<template>
  <div class="notification-container">
    <span v-if="unreadNotifications.length > 0" class="notification-message">
      Nova notificação!
    </span>
  </div>  
  <v-menu :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-btn icon variant="text" color="primary" v-bind="props">
        <v-badge
          dot
          :color="unreadNotifications.length > 0 ? 'error' : 'primary'"
          class="custom-dot"
        >
          <BellIcon stroke-width="1.5" size="42" />
        </v-badge>
      </v-btn>
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
                {{ item.data.interaction?.comment || "No comment available" }}
              </p>
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
import { useRouter } from "vue-router";
import { BellIcon } from "vue-tabler-icons";

export default {
  components: {
    BellIcon,
  },
  setup() {
    const meStore = useMeStore();
    const router = useRouter();
    const notifications = ref([]);
    const allNotifications = ref([]);
    const showAllNotifications = ref(false);

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
      meStore.getMe().then(() => {
        notifications.value = meStore.user ? meStore.user.notifications : [];
        Echo.private(`notifications.${meStore.user.id}`).notification((e) => {
          console.log("Notification received:", e);

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
        });
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
  animation: blink 1s infinite; 
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

</style>
