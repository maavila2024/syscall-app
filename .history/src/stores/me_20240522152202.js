import { defineStore } from "pinia"


export const useMeStore = defineStore('me', {
    state: () => ({}),
    actions: {
        getMe() {
            return axios.get('api/me')
        }
    },
})