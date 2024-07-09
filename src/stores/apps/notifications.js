import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notifications', {
  state: () => ({
    notifications: [],
  }),
  actions: {
    addNotification(notification) {
      this.notifications.push(notification);
    },
  },
});
