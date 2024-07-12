import {defineStore} from 'pinia';
import axios from 'axios';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    priori: [],
    complexity: [],
    users: [],
    taskStatus: [],
    toEdit: {},
    toDelete: {},
    toShowChat: {},
    toAddChat: {},
    taskFiles: [],
  }),

  actions: {
    async getTasks() {
      this.tasks = await axios.get('api/tasks')
        .then(r => r.data.data)
    },

    async getPriorities() {
      this.priori = await axios.get('api/priorities')
        .then(r => r.data.data)
    },

    async getComplexities() {
      this.complexity = await axios.get('api/complexities')
        .then(r => r.data.data)
    },

    async getUsers() {
      this.users = await axios.get('api/users')
        .then(r => r.data.data)
    },

    async getTasksStatus() {
      this.taskStatus = await axios.get('api/tasks-status')
        .then(r => r.data.data)
    },

    async storeTask(payload) {
      console.log('valor do payload na storeTask', payload)
      const task = await axios.post('api/tasks', payload)
        .then(r => r.data.data)
      this.tasks.push(task)
      this.getTasks()
    },

    async updateTask(taskId, payload) {
      const task = await axios.put(`api/tasks/${taskId}`, payload)
        .then(r => r.data.data)

      const idx = this.tasks.findIndex(o => o.id === taskId)
      this.tasks.splice(idx, 1, task)
      this.getTasks()
    },

    async deleteTask(taskId) {
      await axios.delete(`api/tasks/${taskId}`)
        .then(r => r.data.data)

      const idx = this.tasks.findIndex(o => o.id === taskId)
      this.tasks.splice(idx, 1)
    },

    async uploadTaskFile(taskId, file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('task_id', taskId);

      const response = await axios.post('api/task-file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      this.taskFiles.push(response.data.data);
    },

    async deleteTaskFile(fileId) {
      await axios.delete(`api/task-file/${fileId}`);
      this.taskFiles = this.taskFiles.filter(file => file.id !== fileId);
    },

    async getTaskFiles(taskId) {
      this.taskFiles = await axios.get(`api/task-file?task_id=${taskId}`)
        .then(r => r.data.data);
    }
  
  }
})
