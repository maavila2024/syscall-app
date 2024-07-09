import {defineStore} from 'pinia';
import axios from 'axios';

export const useComplexitiesStore = defineStore('complexities', {
  state: () => ({
    complexities: [],
    toEdit: {},
    toDelete: {},
  }),

  actions: {
    async getcomplexities() {
      this.complexities = await axios.get('api/complexities')
        .then(r => r.data.data)
    },

    async storePriority(payload) {
      const priority = await axios.post('api/complexities', payload)
        .then(r => r.data.data)
      this.complexities.push(priority)
    },

    async updatePriority(complexityId, payload) {
      const priority = await axios.put(`api/complexities/${complexityId}`, payload)
        .then(r => r.data.data)

      const idx = this.complexities.findIndex(o => o.id === complexityId)
      console.log(idx)
      this.complexities.splice(idx, 1, priority)
      this.getcomplexities()
    },

    async deletePriority(complexityId) {
      await axios.delete(`api/complexities/${complexityId}`)
        .then(r => r.data.data)

      const idx = this.complexities.findIndex(o => o.id === complexityId)
      this.complexities.splice(idx, 1)
    }
  }
})
