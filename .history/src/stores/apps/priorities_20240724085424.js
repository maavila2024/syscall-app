import {defineStore} from 'pinia';
import axios from 'axios';

export const usePrioritiesStore = defineStore('priorities', {
  state: () => ({
    priorities: [],
    toEdit: {},
    toDelete: {},
  }),

  actions: {
    async getPriorities() {
      this.priorities = await axios.get('api/priorities')
        .then(r => r.data.data)
    },

    async storePriority(payload) {
      const priority = await axios.post('api/priorities', payload)
        .then(r => r.data.data)
      // this.priorities.push(priority)
      await this.getPriorities();
    },

    async updatePriority(priorityId, payload) {
      const priority = await axios.put(`api/priorities/${priorityId}`, payload)
        .then(r => r.data.data)

      const idx = this.priorities.findIndex(o => o.id === priorityId)
      this.priorities.splice(idx, 1, priority)
      this.getPriorities()
    },

    async deletePriority(priorityId) {
      await axios.delete(`api/priorities/${priorityId}`)
        .then(r => r.data.data)

      const idx = this.priorities.findIndex(o => o.id === priorityId)
      this.priorities.splice(idx, 1)
    }
  }
})
