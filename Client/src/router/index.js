import Vue from "vue";
import VueRouter from "vue-router";
// 1.引入相对应的组件
import Index from "../views/Index.vue";
import Classify from "../views/Classify";
import Shop from "../views/Shop.vue";
import Mine from "../views/Mine.vue";
import Details from "../views/Details/details.vue";
import Login from "../views/Login/Login.vue";


Vue.use(VueRouter);

const routes = [
   //主页
  {
    path: "/",
    name: "index",
    component: Index,
    meta:{showFooter:true}
  },
  //详情页
  {
    path: "/index/details",
    name: "details",
    component: Details,
    meta:{showFooter:false}
 },

 //登录页
 {
  path: "/mine/login",
  name: "login",
  component: Login,
  meta:{showFooter:false}
},
  //分类页
  {
    path: "/classify",
    name: "classify",
    component: Classify,
    meta:{showFooter:true}
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ "../views/About.vue");
  },
 //购物车页
  {
    path: "/shop",
    name: "shop",
    component: Shop,
    meta:{showFooter:false}
  },
  //我的
  {
    path: "/mine",
    name: "mine",
    component: Mine,
    meta:{showFooter:true}
  },

  {
    // 重定向 访问根目录
    path: "/",
    name:"home",
    redirect:"/index"
  },
  // 输入有误 不存在跳到指定路由
  {
    path:"*",
    redirect:"/Index"

  }
];

const router = new VueRouter({
  // HTML5模式 /index 访问路径没有# 
  mode: "history",//打包的时候修改为hash
  base: process.env.BASE_URL,
  routes,

  //切换组件时 不记录滚动条的位置，初始化滚动条
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
});

export default router;
