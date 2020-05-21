import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import addHome from "../views/Home/addHome.vue";
import Login from "../views/Login/Login.vue";
import Content from "../views/content/content.vue";
import Register from "../views/register/Register.vue";
import Banner from "../views/banner/banner.vue";
import Users from "../views/users/users.vue";
import Hot from "../views/hot/hot.vue";
import Underway from "../views/Underway/underway.vue";
import History from "../views/history/history.vue";
import Allorders from "../views/Allorders/allorders.vue";
import Update from "../views/users/users.vue";
import Delete from "../views/users/users.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "*",
  //   name: "Logins",
  //   component: Login
  // },
  //登录
   {
    path: "/",
    name: "Login",
    component: Login
  },
    //注册
    {
      path: "/register",
      name: "Register",
      component: Register
    },
  //主页内容
  {
    path: "/content",
    name: "Content",
    component: Content
  },
    //进行中订单
    {
      path: "/underway",
      name: "Underway",
      component: Underway
    },
        //历史订单
        {
          path: "/history",
          name: "History",
          component: History
        },
                //全部订单
                {
                  path: "/allorders",
                  name: "Allorders",
                  component: Allorders
                },

  //热门推荐
  {
    path: "/hot",
    name: "Hot",
    component: Hot,
 },
  //主页
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  //主页添加
  {
    path: "/addhome",
    name: "addHome",
    component: addHome
  },
  //轮播
  {
    path: "/banner",
    name: "banner",
    component: Banner
  },
  //用户
  {
    path: "/users",
    name: "users",
    component: Users
  },
  //更新
  {
    path: "/update",
    name: "update",
    component: Update
  },
    //删除
    {
      path: "/delete",
      name: "delete",
      component: Delete
    },

];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

// 路由守卫
router.beforeEach((to,from,next)=>{
  if(to.path=='/' || to.path=='/register'){
    return next()
  }
  let userinfo=window.sessionStorage.getItem('userinfo')
  if(!userinfo){
    return next('/login')
  }
    next() 
})
export default router;