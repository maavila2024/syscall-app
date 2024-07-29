import { defineStore } from 'pinia';
import axios from '../axios';

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notifications: []
  }),
  actions: {
    async fetchNotifications() {
      try {
        const response = await axios.get('/api/notifications');
        this.notifications = response.data;
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    },
    addNotification(notification) {
      this.notifications.push(notification);
    }
  }
});
