import { defineStore } from 'pinia';
import axios from 'axios'
import {useMeStore} from '@/stores/me';

export const useAuthStore = defineStore('auth', {
  state: () => ({}),
  
  actions: {
    sanctum() {
      return axios.get('sanctum/csrf-cookie')
    },
    login(email, password) {
      return axios.post('api/login', {
        email,
        password
      }).then((response) => {
        const meStore = useMeStore();
        meStore.user = response.data.data
        
        // Verificar se precisa alterar senha
        if (response.data.must_change_password || response.data.data.must_change_password) {
          return Promise.resolve({ must_change_password: true });
        }
        
        meStore.setDefaultTeam()
        return Promise.resolve({ must_change_password: false });
      })
    },
    logout() {
      return axios.post('api/logout')
        .then(() => {
          const meStore = useMeStore();
          meStore.$reset()
        })
    },
    register(firstName, email, password) {
      return axios.post('api/register', {
        first_name: firstName,
        email,
        password
      })
    },
    verifyEmail(token) {
      return axios.post('api/verify-email', {token})
    },
    forgotPassword(email) {
      return axios.post('api/forgot-password', {email})
    },
    resetPassword(token, password) {
      return axios.post('api/reset-password', {token, password})
    },
    resetPasswordByToken(token, password, passwordConfirmation) {
      return axios.post(`api/reset-password-by-token/${token}`, {
        password,
        password_confirmation: passwordConfirmation
      })
    },
    changePassword(currentPassword, newPassword) {
      return axios.post('api/change-password', { current_password: currentPassword, new_password: newPassword });
    },
    updateFirstName(firstName) {
      return axios.post('api/update-first-name', { first_name: firstName });
    },
    supportResetPassword(userId) {
      return axios.post('api/support/reset-password', { user_id: userId })
        .then(response => {
          // Retornar response completo para acessar data
          return response;
        });
    },
    forceChangePassword(currentPassword, newPassword, newPasswordConfirmation) {
      return axios.post('api/force-change-password', {
        current_password: currentPassword,
        new_password: newPassword,
        new_password_confirmation: newPasswordConfirmation
      });
    },
  }
});
