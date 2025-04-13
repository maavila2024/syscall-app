import { defineStore } from 'pinia';
import axios from 'axios';

export const useChatStore = defineStore('chats', {
  state: () => ({
    messages: [],
  }),
  actions: {
    // async fetchMessages(taskId) {
    //   try {
    //     const response = await axios.get(`/api/interactions/${taskId}`);
    //     this.messages = response.data;
    //   } catch (error) {
    //     console.error('Error fetching messages:', error);
    //   }
    // },
    async fetchMessages(taskId, showAll = false) {
      try {
        let url = `/api/interactions/${taskId}`;
        if (!showAll) {
          url += '?task_updated=1'; // Filtrar por task_updated = true
        }
        const response = await axios.get(url);
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
        // Log para debug
        console.log('Enviando formData:', formData);
        
        const response = await axios.post('/api/interaction-file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });
        
        console.log('Resposta do upload:', response.data);
        return response.data;
      } catch (error) {
        console.error('Erro no upload:', error);
        throw error;
      }
    },
  },
});
