<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
      <Footer></Footer>
  </div>
</template>

<script>
//1.引入组件
import Footer from "./components/Footer"

export default {
        data () {
          return {
            globalNav:true
          }
        },
  components:{
    //2.注册组件
    Footer
  },
  // watch: {
  //   //路由改变监听
  //   '$route.path'(newval){
  //     if(newval=='/shop'){
  //       this.globalnav=false;
  //     }else if(newval=='/index/details'){
  //         this.globalnav=false;
  //     }else{ 
  //          this.globalnav=true;
  //     }
  //   }
  // },
  //挂载
  created() {
       let productlen=JSON.parse(window.localStorage.getItem('productArr'))||[];
        let num=0;
       for (let i = 0; i < productlen.length; i++) {
         num+=productlen[i].num;      
       }
       this.$store.state.numAll=num;

  },
};

</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
