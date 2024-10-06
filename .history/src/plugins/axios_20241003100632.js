import axios from 'axios';
import { useLocalStorage } from '@vueuse/core';
import { useAuthStore } from '@/stores/auth'; // Importar a store de autenticação

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const csrfTokenMetaTag = document.querySelector('meta[name="csrf-token"]');
if (csrfTokenMetaTag) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfTokenMetaTag.getAttribute('content');
} else {
    console.warn('CSRF token meta tag not found');
}

axios.interceptors.request.use(function (config) {
  const team = useLocalStorage('team_id').value;
  if (team) {
    config.headers['Team'] = team;
  }
  return config;
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  const response = error.response;
  const message = error.response.data.message || 'Unknown error';

  // Verificar se a sessão expirou (status 419)
  if (response && response.status === 419) {
    const authStore = useAuthStore(); // Acessar a store do Pinia
    authStore.setSessionExpired(true); // Atualizar o estado da sessão expirada
  }

  return Promise.reject({
    message,
    status: response.status
  });
});

export default axios;
