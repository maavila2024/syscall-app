import {defineStore} from 'pinia';
import axios from 'axios';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    priori: [],
    users: [],
    taskStatus: [],
    toEdit: {},
    toDelete: {},
    toShowChat: {},
    toAddChat: {},
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

    async getUsers() {
      this.users = await axios.get('api/users')
        .then(r => r.data.data)
    },

    async getTasksStatus() {
      this.taskStatus = await axios.get('api/tasks-status')
        .then(r => r.data.data)
    },

    async storeTask(payload) {
      const task = await axios.post('api/tasks', payload)
        .then(r => r.data.data)
      this.tasks.push(task)
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
    }
  }
})
