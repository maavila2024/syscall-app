import {defineStore} from 'pinia';
import axios from 'axios';  

export const useTasksStatusStore = defineStore('tasksStatus', {
  state: () => ({
    tasksStatus: [],
    toEdit: {},
    toDelete: {},
  }),

  actions: {
    async getTasksStatus() {
      this.tasksStatus  = await axios.get('api/tasks-status')
        .then(r => r.data.data)
    },

    async storeTaskStatus(payload) {
      const taskStatus = await axios.post('api/tasks-status', payload)
        .then(r => r.data.data)
      // this.tasksStatus.push(taskStatus)
      await this.getTasksStatus();
    },

    async updateTaskStatus(taskStatusId, payload) {
      const taskStatus = await axios.put(`api/tasks-status/${taskStatusId}`, payload)
        .then(r => r.data.data)

      const idx = this.tasksStatus.findIndex(o => o.id === taskStatusId)
      this.tasksStatus.splice(idx, 1, taskStatus)
      this.getTasksStatus()
    },

    async deleteTaskStatus(taskStatusId) {
      await axios.delete(`api/tasks-status/${taskStatusId}`)
        .then(r => r.data.data)

      const idx = this.tasksStatus.findIndex(o => o.id === taskStatusId)
      this.tasksStatus.splice(idx, 1)
    }
  }
})
