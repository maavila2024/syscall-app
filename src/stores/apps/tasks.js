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
    filterOptions: {
      owners: [],
      responsibles: [],
      statuses: [],
      priorities: [],
      complexities: []
    }
  }),

  actions: {
    async getTasks(search = '', segment = '0', page = 1, filters = {}) {
      try {
        console.log('📥 Iniciando requisição getTasks:', { search, segment, page, filters });

        const serializeArray = (val) => {
          if (!val) return [];
          if (Array.isArray(val)) return [...val];
          return [];
        };

        // Garantir que per_page seja sempre válido
        const perPage = Number(filters.per_page);
        const safePerPage = Number.isInteger(perPage) && perPage > 0 ? perPage : 10;
        
        const params = {
          search,
          segment,
          page,
          per_page: safePerPage,
          taskStatus: serializeArray(filters.taskStatus),
          userResponsible: serializeArray(filters.userResponsible),
          userOwner: serializeArray(filters.userOwner),
          priority: serializeArray(filters.priority),
          complexity: serializeArray(filters.complexity),
          show_all: String(filters.show_all ?? false),
        };

        // Processamento dos filtros de data
        if (filters.filter_month != null && filters.filter_year != null) {
          const month = parseInt(filters.filter_month);
          const year = parseInt(filters.filter_year);
          
          if (!isNaN(month) && !isNaN(year) && month > 0 && month <= 12 && year > 2000) {
            params.filter_month = month;
            params.filter_year = year;
          }
        }

        console.log('📤 Parâmetros da requisição:', params);

        const response = await axios.get('api/tasks', {
          params,
          paramsSerializer: params => {
            const searchParams = new URLSearchParams();
          
            for (const key in params) {
              const value = params[key];
          
              if (Array.isArray(value)) {
                value.forEach(v => searchParams.append(key + '[]', v));
              } else {
                searchParams.set(key, String(value));
              }
            }
          
            return searchParams.toString();
          }
          
        });

        // Limpar e atualizar tasks
        this.tasks = [];
        await nextTick();
        this.tasks = response.data.data;

        // Atualizar paginação mantendo per_page consistente
        this.pagination = {
          current_page: response.data.meta.current_page,
          last_page: response.data.meta.last_page,
          per_page: response.data.meta.per_page,
          total: response.data.meta.total,
        };

        return response.data;
      } catch (error) {
        console.error('❌ Erro em getTasks:', error);
        throw error;
      }
    },

    async getPriorities() {
      try {
        const response = await axios.get('api/priorities');
        this.priori = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar prioridades:', error);
      }
    },

    async getComplexities() {
      try {
        const response = await axios.get('api/complexities');
        this.complexity = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar complexidades:', error);
      }
    },

    async getUsers() {
      try {
        const response = await axios.get('api/users');
        this.users = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    },

    async getTasksStatus() {
      try {
        const response = await axios.get('api/tasks-status');
        this.taskStatus = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar status de tarefas:', error);
      }
    },

    async storeTask(payload, files) {
      try {
        const response = await axios.post('api/tasks', payload);
        const task = response.data;
        await this.getTasks();

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
        console.error('Erro ao salvar tarefa:', error);
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
        console.error('Erro ao atualizar tarefa:', error);
      }
    },

    async deleteTask(taskId) {
      try {
        await axios.delete(`api/tasks/${taskId}`);
        const idx = this.tasks.findIndex(o => o.id === taskId);
        if (idx !== -1) {
          this.tasks.splice(idx, 1);
        }
      } catch (error) {
        console.error('Erro ao deletar tarefa:', error);
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
        console.error('Erro ao enviar arquivos:', error);
        throw error;
      }
    },

    async getTaskFiles(taskId) {
      try {
        const response = await axios.get(`api/task-file/${taskId}`);
        this.taskFiles = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar arquivos da tarefa:', error);
      }
    },

    async deleteTaskFile(fileId) {
      try {
        await axios.delete(`api/task-file/${fileId}`);
        const idx = this.taskFiles.findIndex(file => file.id === fileId);
        if (idx !== -1) {
          this.taskFiles.splice(idx, 1);
        }
      } catch (error) {
        console.error('Erro ao excluir arquivo da tarefa:', error);
      }
    },

    async fetchTaskStatistics() {
      try {
        const response = await axios.get('api/tasks/statistics');
        this.taskStatistics = response.data;
      } catch (error) {
        console.error('Erro ao buscar estatísticas:', error);
      }
    },

    async fetchTaskStatisticsBySegment(segment, date) {
      try {
        const response = await axios.get('api/tasks/chart-statistics', {
          params: { segment, date }
        });
        return response.data;
      } catch (error) {
        console.error('Erro ao buscar estatísticas segmentadas:', error);
        throw error;
      }
    },

    async fetchFilterOptions() {
      try {
        const response = await axios.get('/api/tasks/filters-data');
        this.filterOptions = response.data;
        return response.data;
      } catch (error) {
        console.error('Erro ao buscar opções de filtro:', error);
        throw error;
      }
    }
  },
});
