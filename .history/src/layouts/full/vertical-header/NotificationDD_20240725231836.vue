<template>
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn icon variant="text" color="primary" v-bind="props">
          <v-badge dot color="primary">
            <BellRingingIcon stroke-width="1.5" size="22" />
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
            <v-list-item v-for="item in notifications" :key="item.id" :value="item" class="py-4 px-8">
              <template v-slot:prepend>
                <v-avatar size="48" class="mr-3">
                  <v-img :src="item.avatar" width="48" />
                </v-avatar>
              </template>
              <div>
                <h6 class="text-subtitle-1 font-weight-bold mb-1">{{ item.data.title }}</h6>
                <p class="text-subtitle-1 font-weight-regular">{{ item.data.body }}</p>
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
  import { onMounted } from 'vue';
  import { useMeStore } from '@/stores/me';
  import { useNotificationStore } from '@/stores/apps/notifications';
  
  export default {
    setup() {
      const meStore = useMeStore();
      const notificationStore = useNotificationStore();
  
      onMounted(() => {
        meStore.getMe().then(() => {
          Echo.private(`notifications.${meStore.user.id}`).notification((e) => {
            console.log("Notification received:", e);
            meStore.user.notifications.push(e);
          });
        });
      });
  
      return {
        notifications: meStore.user ? meStore.user.notifications : [],
      };
    }
  };
  </script>
  