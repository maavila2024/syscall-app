import { createApp } from 'vue';
// import { createPinia } from 'pinia';
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

import './plugins/yup';
import './plugins/axios';
import './plugins/pinia';
import pinia from './plugins/pinia';

import axios from 'axios';
import { useMeStore } from './stores/me';

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'your-app-key',
    cluster: 'your-app-cluster',
    encrypted: true
});

const i18n = createI18n({
    locale: 'en',
    silentTranslationWarn: true,
    silentFallbackWarn: true
});

const app = createApp(App);
app.use(pinia);

const meStore = useMeStore()

meStore.getMe()
  .finally(() => {
    app
      .use(router)
      .component('EasyDataTable', Vue3EasyDataTable)
      .use(i18n)
      .use(VueScrollTo, {
        duration: 1000,
        easing: "ease"
        })
      .use(vuetify)
      .mount('#app')
})

