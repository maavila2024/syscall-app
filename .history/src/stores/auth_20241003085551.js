import { defineStore } from 'pinia';
import axios from 'axios';
import { useMeStore } from '@/stores/me';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    sessionExpired: false, // Adiciona o estado para controlar sessão expirada
  }),
  
  actions: {
    setSessionExpired(status) {
      this.sessionExpired = status;
    },
    sanctum() {
      return axios.get('sanctum/csrf-cookie');
    },
    login(email, password) {
      return axios.post('api/login', {
        email,
        password
      }).then((response) => {
        const meStore = useMeStore();
        meStore.user = response.data.data;
        meStore.setDefaultTeam();
        this.setSessionExpired(false); // Resetar a sessão expirada ao logar
      });
    },
    logout() {
      return axios.post('api/logout')
        .then(() => {
          const meStore = useMeStore();
          meStore.$reset();
          this.setSessionExpired(false); // Resetar a sessão expirada ao deslogar
        });
    },
    register(firstName, email, password) {
      return axios.post('api/register', {
        first_name: firstName,
        email,
        password
      });
    },
    verifyEmail(token) {
      return axios.post('api/verify-email', { token });
    },
    forgotPassword(email) {
      return axios.post('api/forgot-password', { email });
    },
    resetPassword(token, password) {
      return axios.post('api/reset-password', { token, password });
    },
    changePassword(currentPassword, newPassword) {
      return axios.post('api/change-password', { current_password: currentPassword, new_password: newPassword });
    },
    updateFirstName(firstName) {
      return axios.post('api/update-first-name', { first_name: firstName });
    },
  }
});
