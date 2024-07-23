import { createApp } from 'vue';
// import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
// import VueApexCharts from 'vue3-apexcharts';
// import VueTablerIcons from 'vue-tabler-icons';
// import { fakeBackend } from '@/utils/helpers/fake-backend';
// import 'vue3-carousel/dist/carousel.css';
//Mock Api data
// import './_mockApis';

// import VCalendar from 'v-calendar';
// import VueRecaptcha from 'vue3-recaptcha-v2';
// import Maska from 'maska';
// print
// import print from 'vue3-print-nb';
// Table
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

import axios from 'axios';
import { useMeStore } from './stores/me';

const i18n = createI18n({
    locale: 'en',
    silentTranslationWarn: true,
    silentFallbackWarn: true
});

const app = createApp(App);
app.use(pinia);
app.use(PerfectScrollbar);

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

