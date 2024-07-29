<template>
  <v-menu :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-btn icon variant="text" color="primary" v-bind="props">
        <v-badge dot color="primary">
          <BellIcon stroke-width="1.5" size="22" />
        </v-badge>
      </v-btn>
    </template>
    <v-sheet rounded="md" width="360" elevation="10">
      <div class="px-8 pb-4 pt-6">
        <div class="d-flex align-center justify-space-between">
          <h6 class="text-h5">Notifications</h6>
          <v-chip color="primary" variant="flat" size="small">{{ notifications.length }} New</v-chip>
        </div>
      </div>
      <perfect-scrollbar style="height: 400px">
        <v-list class="py-0 theme-list" lines="two">
          <v-list-item
            v-for="item in notifications"
            :key="item.id"
            :value="item"
            class="py-4 px-8"
            @click="navigateToTask(item)"
          >
            <div>
              <h6 class="text-subtitle-1 font-weight-bold mb-1">{{ item.data.title }}</h6>
              <p class="text-subtitle-1 font-weight-regular">{{ item.data.interaction.comment }}</p>
            </div>
          </v-list-item>
        </v-list>
      </perfect-scrollbar>
      <div class="py-4 px-6 text-center">
        <v-btn color="primary" variant="outlined" block>See all Notifications</v-btn>
      </div>
    </v-sheet>
  </v-menu>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useMeStore } from '@/stores/me';
import { useRouter } from 'vue-router';
import { BellIcon } from 'vue-tabler-icons'; // Importe o ícone aqui

export default {
  components: {
    BellIcon,
  },
  setup() {
    const meStore = useMeStore();
    const router = useRouter();
    const notifications = ref([]);

    const navigateToTask = (notification) => {
      const taskCode = notification.data.task.task_code;
      router.push({ name: 'tasks', query: { search: taskCode } });
    };

    onMounted(() => {
      meStore.getMe().then(() => {
        notifications.value = meStore.user ? meStore.user.notifications : [];
        Echo.private(`notifications.${meStore.user.id}`).notification((e) => {
          console.log("Notification received:", e);
          notifications.value.push(e);
        });
      });
    });

    return {
      notifications,
      navigateToTask,
    };
  }
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
</style>
