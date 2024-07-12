import { defineStore } from 'pinia';
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
  }),

  actions: {
    async getTasks() {
      try {
        const response = await axios.get('api/tasks');
        this.tasks = response.data.data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
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

    async storeTask(payload) {
      try {
        const response = await axios.post('api/tasks', payload);
        const task = response.data.data;
        this.tasks.push(task);
        await this.getTasks();
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
  },
});
