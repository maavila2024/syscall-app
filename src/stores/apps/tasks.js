import { defineStore } from 'pinia';
import axios from 'axios';
import { useMeStore } from '@/stores/me';
import { nextTick } from 'vue';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    priori: [],
    complexity: [],
    users: [],
    taskStatus: [],
    toEdit: {},
    toShow: {},
    toDelete: {},
    toShowChat: {},
    toAddChat: {},
    taskFiles: [],
    search: '',
    taskStatistics: {},
    pagination: {
      current_page: 1,
      last_page: 1,
      per_page: 5,
      total: 0,
    },
  }),

  actions: {
    async getTasks(search = '', segment = '0', page = 1, filters = {}) {
      try {
        console.log('📡 Iniciando requisição getTasks:', { search, segment, page, filters });
        const params = {
          search,
          segment,
          page,
          per_page: 5,
          show_all: filters.show_all || false,
          sort_by: filters.sortBy || 'created_at',
          sort_order: filters.sortOrder || 'desc',
          ...filters
        };
          
        console.log('Requesting tasks with params:', params);

        const response = await axios.get('api/tasks', { params });
        console.log('✅ Resposta do backend:', response.data);
        
        // Limpa o array atual
        this.tasks = [];
        
        // Força atualização do Vue com os novos dados
        await nextTick();
        
        // Atualiza com os novos dados
        this.tasks = response.data.data;
        console.log('📊 Tasks atualizadas:', this.tasks.length);
        
        this.pagination = {
          current_page: response.data.current_page,
          last_page: response.data.last_page,
          per_page: response.data.per_page,
          total: response.data.total,
        };
        console.log('📄 Paginação atualizada:', this.pagination);

        return response.data;
      } catch (error) {
        console.error('❌ Erro em getTasks:', error);
        console.error('Stack:', error.stack);
        throw error; // Propaga o erro para ser tratado no componente
      }
    },

    async getPriorities() {
      try {
        const response = await axios.get('api/priorities');
        this.priori = response.data.data;
      } catch (error) {
        console.error('Error fetching priorities:', error);
      }
    },

    async getComplexities() {
      try {
        const response = await axios.get('api/complexities');
        this.complexity = response.data.data;
      } catch (error) {
        console.error('Error fetching complexities:', error);
      }
    },

    async getUsers() {
      try {
        const response = await axios.get('api/users');
        this.users = response.data.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },

    async getTasksStatus() {
      try {
        const response = await axios.get('api/tasks-status');
        this.taskStatus = response.data.data;
      } catch (error) {
        console.error('Error fetching task statuses:', error);
      }
    },

    async storeTask(payload, files) {
      try {
        const response = await axios.post('api/tasks', payload);
        // this.tasks.push(task);
        const task = response.data;
        await this.getTasks();
        // Se houver arquivos, faz o upload de cada um associado à task criada
        if (files && files.length > 0) {
          const formData = new FormData();
          formData.append('task_id', task.id);
          for (const file of files) {
            formData.append('files[]', file);
          }

          await this.uploadTaskFile(formData);
        }

        return task;
      } catch (error) {
        console.error('Error storing task:', error);
      }
    },

    async updateTask(taskId, payload) {
      
      try {
        const response = await axios.put(`api/tasks/${taskId}`, payload);
        const task = response.data.data;
        const idx = this.tasks.findIndex(o => o.id === taskId);
        this.tasks.splice(idx, 1, task);
        await this.getTasks();
      } catch (error) {
        console.error('Error updating task:', error);
      }
    },

    async deleteTask(taskId) {
      try {
        await axios.delete(`api/tasks/${taskId}`);
        const idx = this.tasks.findIndex(o => o.id === taskId);
        this.tasks.splice(idx, 1);
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    },

    async uploadTaskFile(formData) {
      try {
        const response = await axios.post('api/task-file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error uploading task file:', error);
        throw error;
      }
    },

    // Adicionando a função getTaskFiles   
    async getTaskFiles(taskId) {
      try {
        const response = await axios.get(`api/task-file/${taskId}`);
        this.taskFiles = response.data.data;
      } catch (error) {
        console.error('Error fetching task files:', error);
      }
    },

    // Adicionando a função deleteTaskFile
    async deleteTaskFile(fileId) {
      try {
        await axios.delete(`api/task-file/${fileId}`);
        const idx = this.taskFiles.findIndex(file => file.id === fileId);
        if (idx !== -1) {
          this.taskFiles.splice(idx, 1);
        }
      } catch (error) {
        console.error('Error deleting task file:', error);
      }
    },

    async fetchTaskStatistics() {
      try {
        const response = await axios.get('api/tasks/statistics');
        this.taskStatistics = response.data;
      } catch (error) {
        console.error('Error fetching task statistics:', error);
      }
    },

    async fetchTaskStatisticsBySegment(segment, date) {
      try {
        // Supondo que a API backend aceita uma data no formato "YYYY-MM"
        const response = await axios.get('api/tasks/chart-statistics', {
          params: { segment, date }
        });
        return response.data;
      } catch (error) {
        console.error('Error fetching task statistics:', error);
        throw error;
      }
    }    
  },
});
