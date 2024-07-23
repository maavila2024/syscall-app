import { defineStore } from 'pinia';
import axios from 'axios';

export const useExcelImportsStore = defineStore('excelImports', {
  actions: {
    async importTasks(formData) {
      try {
        const response = await axios.post('api/import', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          withCredentials: true // Adicionando withCredentials para lidar com CORS
        });

        return response.data;
      } catch (error) {
        if (error.response) {
          console.error('Erro ao importar tarefas:', error.response.data);
          throw new Error(error.response.data.message || 'Erro ao importar tarefas');
        } else if (error.request) {
          console.error('Erro na requisição ao importar tarefas:', error.request);
          throw new Error('Erro na requisição ao importar tarefas');
        } else {
          console.error('Erro ao configurar a requisição ao importar tarefas:', error.message);
          throw new Error('Erro ao configurar a requisição ao importar tarefas');
        }
      }
    }
  }
});
