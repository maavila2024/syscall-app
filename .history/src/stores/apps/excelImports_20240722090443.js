import { defineStore } from 'pinia';
import axios from 'axios';

export const useExcelImportsStore = defineStore('excelImports', {
  actions: {
    async importTasks(formData) {
      try {
        await axios.post('/import', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } catch (error) {
        console.error('Erro ao importar tarefas:', error);
        throw error;
      }
    }
  }
});
