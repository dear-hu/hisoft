import Vue from 'vue';
//import './plugins/axios'
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';

import BaiduMap from 'vue-baidu-map'

import { post, get }  from "./plugins/axios";
Vue.prototype.$get=get;
Vue.prototype.$post=post;
Vue.config.productionTip = false;


Vue.use(BaiduMap,{
    ak:'EYdfvUm65uiBXoXF1A1Abvgxa5OQnZ4S'		//使用申请的百度地图秘钥
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
