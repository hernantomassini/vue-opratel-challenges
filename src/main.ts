import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import Router from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faEdit, faCheck, faTrashAlt, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import router from './router/router';

library.add(faTimes, faEdit, faCheck, faTrashAlt, faCalendar);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(Router);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
