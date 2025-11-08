import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import { createI18n } from 'vue-i18n';
import VueScrollTo from 'vue-scrollto';
import VueEasyLightbox from 'vue-easy-lightbox';
import VueApexCharts from 'vue3-apexcharts';

import './plugins/yup';
import './plugins/axios';
import pinia from './plugins/pinia';

import axios from 'axios';
import { useMeStore } from './stores/me';

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: import.meta.env.VITE_PUSHER_KEY,
  cluster: import.meta.env.VITE_PUSHER_CLUSTER,
  forceTLS: true,
  authorizer: (channel, options) => {
    console.log('🔔 [FRONTEND] Echo authorizer chamado', {
      channel: channel.name,
      pusher_key: import.meta.env.VITE_PUSHER_KEY,
      pusher_cluster: import.meta.env.VITE_PUSHER_CLUSTER,
    });
    
    return {
      authorize: (socketId, callback) => {
        console.log('🔔 [FRONTEND] Autorizando canal', {
          socket_id: socketId,
          channel_name: channel.name,
        });
        
        axios.post('/api/broadcasting/auth', {
          socket_id: socketId,
          channel_name: channel.name
        })
        .then(response => {
          console.log('🔔 [FRONTEND] ✅ Canal autorizado com sucesso', {
            channel: channel.name,
            response: response.data,
          });
          callback(false, response.data);
        })
        .catch(error => {
          console.error('🔔 [FRONTEND] ❌ Erro ao autorizar canal', {
            channel: channel.name,
            error: error.response?.data || error.message,
            status: error.response?.status,
          });
          callback(true, error);
        });
      }
    };
  }
});

console.log('🔔 [FRONTEND] Echo configurado', {
  broadcaster: 'pusher',
  key: import.meta.env.VITE_PUSHER_KEY ? '✅ Configurado' : '❌ Não configurado',
  cluster: import.meta.env.VITE_PUSHER_CLUSTER ? '✅ Configurado' : '❌ Não configurado',
});
         
const i18n = createI18n({
  locale: 'en',
  silentTranslationWarn: true,
  silentFallbackWarn: true
});

const app = createApp(App);

app.use(pinia);

const meStore = useMeStore();

meStore.getMe()
  .finally(() => {
    app
      .use(router)
      .component('EasyDataTable', Vue3EasyDataTable)
      .use(i18n)
      .use(VueApexCharts)
      .use(VueScrollTo, {
        duration: 1000,
        easing: "ease"
      })
      .use(vuetify)
      .mount('#app');
  });

app.config.errorHandler = (err, vm, info) => {
  console.error("🔴 Erro capturado globalmente:", {
    error: err,
    component: vm?.$options?.name || 'Unknown',
    info: info,
    stack: err.stack
  });
};

// Interceptor global para Axios
axios.interceptors.response.use(
  response => {
    console.log('�� Resposta API:', {
      url: response.config.url,
      status: response.status,
      data: response.data
    });
    return response;
  },
  error => {
    console.error('🚫 Erro API:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    return Promise.reject(error);
  }
);
