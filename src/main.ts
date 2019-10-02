import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import Router from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import router from './router/router';

Vue.use(BootstrapVue);
Vue.use(Router);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
