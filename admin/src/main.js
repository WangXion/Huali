import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import  axios from 'axios'
//引入elementUI
import ElementUI from 'element-ui';
//引入Echarts
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
//引入axios
Vue.prototype.$axios=axios;
//引入Echarts
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
