// 引入echarts
import echarts from 'echarts';
import moment from 'moment';
import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import axios from 'axios';

import 'vant/lib/button/style'

// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

// import Antd from 'ant-design-vue';
// Vue.use(Antd);


// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);


Vue.config.productionTip = false;

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.prototype.$moment = moment;


console.log(process.env);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
