import Vue from 'vue';
//import './plugins/axios'
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';

import { post, get }  from "./plugins/axios";
Vue.prototype.$get=get;
Vue.prototype.$post=post;
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
