import {defineStore} from 'pinia';
import axios from 'axios';

export const useInteractionsStore = defineStore('interactions', {
  state: () => ({
    interactions: [],
    toEdit: {},
    toChat: {},
    toDelete: {},
    toShowChat: {},
    toAddChat: {},
  }),

  actions: {
    async getInteractions() {
      this.interactions = await axios.get('api/interactions')
        .then(r => r.data.data)
    },

    async storeInteraction(payload) {
      const interaction = await axios.post('api/interactions', payload)
        .then(r => r.data.data)
      this.interactions.push(interaction)
    },

    async updateInteraction(interactionId, payload) {
      const interaction = await axios.put(`api/interactions/${interactionId}`, payload)
        .then(r => r.data.data)

      const idx = this.interactions.findIndex(o => o.id === interactionId)
      console.log(idx)
      this.interactions.splice(idx, 1, interaction)
      this.getInteractions()
    },

    async deleteInteraction(interactionId) {
      await axios.delete(`api/interactions/${interactionId}`)
        .then(r => r.data.data)

      const idx = this.interactions.findIndex(o => o.id === interactionId)
      this.interactions.splice(idx, 1)
    }
  }
})
