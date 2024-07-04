import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import axios from 'axios';
import { useMeStore } from './stores/me';
import { initializeEcho } from './echo';  // Certifique-se de que isso está correto
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
//i18
import { createI18n } from 'vue-i18n';

//ScrollTop
import VueScrollTo from 'vue-scrollto';

//LightBox
import VueEasyLightbox from 'vue-easy-lightbox';

import './plugins/yup';
import './plugins/axios';
import './plugins/pinia';
import pinia from './plugins/pinia';

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
        if (meStore.user && meStore.user.id) {
            initializeEcho(meStore.user.id);  // Inicializar Echo aqui
        }

        app.use(router);
        app.component('EasyDataTable', Vue3EasyDataTable);
        app.use(i18n);
        app.use(vuetify).mount('#app');

        //Lightbox
        app.use(VueEasyLightbox);

        //ScrollTop Use
        app.use(VueScrollTo, {
            duration: 1000,
            easing: "ease"
        });
    });
