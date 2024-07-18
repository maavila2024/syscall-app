import { defineStore } from 'pinia';
import axios from 'axios';

export const useChatStore = defineStore('chats', {
  state: () => ({
    messages: [],
  }),
  actions: {
    async fetchMessages(taskId) {
      try {
        const response = await axios.get(`/api/interactions/${taskId}`);
        this.messages = response.data;
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    },
    async createInteraction(taskId, comment, userId) {
      try {
        const response = await axios.post('/api/interactions', {
          task_id: taskId,
          comment: comment,
          user_id: userId,
        });
        return response.data;
      } catch (error) {
        console.error('Error creating interaction:', error);
      }
    },
    async uploadFile(formData) {
      try {
        const response = await axios.post('/api/interaction-file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
      }
    },
  },
});
