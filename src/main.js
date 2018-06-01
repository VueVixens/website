import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import StoryblokVue from 'storyblok-vue'
import VueMoment from 'vue-moment'
import VueCalendar from 'vue-simple-calendar'
import VueAnalytics from 'vue-ua'
import VueI18n from 'vue-i18n'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'flag-icon-css/css/flag-icon.min.css'
import router from './router'

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(StoryblokVue);
Vue.use(VueMoment);
Vue.use(VueCalendar);
Vue.use(VueI18n);
Vue.use(VueAnalytics, {
  appName: 'Vue Vixens',
  appVersion: '1.0',
  trackingId: 'UA-65309624-3',
  vueRouter: router
});
Vue.config.productionTip = false;

const messages = {
  en: {},
  es: {}
};

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

Vue.prototype.$eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
