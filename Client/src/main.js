import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入轮播插件
// 使用vue-swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
//阿里矢量图标
import "@/assets/iconfont/iconfont.css";
Vue.config.productionTip = false;
// 全局配置  vue-swiper插件
//引入axios
import axios from 'axios'
import Qs from 'qs'
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

new Vue({
  router,
  store,
 
  render: h => h(App)
}).$mount("#app");
