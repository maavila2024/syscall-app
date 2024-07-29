import axios from 'axios';
import { useLocalStorage } from '@vueuse/core';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

// Adicionar token CSRF
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

// Interceptor para adicionar o header 'Team'
axios.interceptors.request.use(function (config) {
  const team = useLocalStorage('team_id').value;
  if (team) {
    config.headers['Team'] = team;
  }
  return config;
});

// Interceptor para lidar com respostas e erros
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  const response = error.response;
  const message = error.response.data.message || 'Unknown error';

  return Promise.reject({
    message,
    status: response.status
  });
});

export default axios;
