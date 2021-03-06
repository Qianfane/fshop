import Vue from 'vue';

import App from "./App";
import router from "./router"

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App),
  router // 注册路由器
})
