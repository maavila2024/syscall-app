import axios from 'axios';
import { useLocalStorage } from '@vueuse/core';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

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

  return Promise.reject({
    message,
    status: response.status
  });
});

export default axios;
