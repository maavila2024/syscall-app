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

    async storeComplexity(payload) {
      const priority = await axios.post('api/complexities', payload)
        .then(r => r.data.data)
      this.complexities.push(priority)
    },

    async updateComplexity(complexityId, payload) {
      const priority = await axios.put(`api/complexities/${complexityId}`, payload)
        .then(r => r.data.data)

      const idx = this.complexities.findIndex(o => o.id === complexityId)
      console.log(idx)
      this.complexities.splice(idx, 1, priority)
      this.getcomplexities()
    },

    async deleteComplexity(complexityId) {
      await axios.delete(`api/complexities/${complexityId}`)
        .then(r => r.data.data)

      const idx = this.complexities.findIndex(o => o.id === complexityId)
      this.complexities.splice(idx, 1)
    }
  }
})
