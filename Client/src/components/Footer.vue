<template>

  <div id="">
    <div class="content">
    <div class="nav" v-if="$route.meta.showFooter">
      <div class="nav-item" v-for='(item,index) in nav' :key="index" >
        <router-link :to="item.path">
            <span :class="['iconfont',item.icon]"></span>{{item.text}}
        </router-link>
      </div>
      <!-- //购物车数量 -->
      <span class="logo" v-if="this.$store.state.numAll!==0">{{this.$store.state.numAll}}</span>
    </div>
     </div>
  </div>
</template>

<script>
export default {
    name:'Footer',
    data(){
        return {
            nav:[
              {path:'/index',icon:"icon-zhuye",text:"首页"},
              {path:'/classify',icon:"icon-feneli-copy",text:"分类"},
              {path:'/shop',icon:"icon-gouwuche",text:"购物车"},
              {path:'/mine',icon:"icon-wodedangxuan",text:"我的"}
            ],
            iSon:null
        }
    },
    //接收父组件传过来的值
    props:["globalNav"],
    methods: {



}
}
</script>

<style lang="less" scoped>
   .nav{
    position: fixed;
    left: 0;
    bottom:-1px;
    width: 100%;
    height: 50px;
    display:flex;
    background-color: #f7f9fa;
    .nav-item{
      flex: 1;
      display: flex;
      justify-content: center;
      a{
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000;
        text-decoration: none;
        font-size: 12px;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }
      a.router-link-active{
        color:#FF734C
      }
    }  
     .logo{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #f00;
    color: #fff;
    text-align: center;
    line-height: 16px;
    font-size: 12px;
    position: absolute;
    top: -4%;
    left: 63%;
  } 
  }
</style>