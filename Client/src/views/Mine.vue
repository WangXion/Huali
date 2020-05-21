<template>
  <div id="user">
    <!-- head -->
    <div id="header">
      <div class="headerbox">
        <p>
          <i class="iconfont icon-xiangzuo"></i>
        </p>
        <p>个人中心</p>
        <p>
          <!-- <i class="iconfont icon-wodexiaoxiicon"></i> -->
        </p>
      </div>
    </div>
    <div id="main">
      <!-- 登录状态 -->
      <div class="userinformation">
        <!--未登录 -->
        <div class="userinformation-notlogin" v-if="isLogin">
          <p>Hi,欢迎来到花礼网</p>
          <p>
            <!-- 跳转登录页 -->
            <a   @click="login">登录/注册</a>
          </p>
        </div>
        <!-- 已登录 -->
        <div class="userinformation-login" v-else>
          <div>
            <img src="/images/users.jpg" alt="/images/users.jpg">
          </div>
          <div>
            <p>{{userInfo.tel}}</p>
            <div>
                <p> <span class="iconfont">&#xe748;注册会员</span></p>
                  <span @click="quit">退出登录</span>
            </div>

          </div>
        </div>
      </div>
      <div class="planA shadow">
        <div class="planA-head">
          <p>我的订单</p>
          <p>
            <a href>
              全部订单
              <i class="iconfont icon-jf-row"></i>
            </a>
          </p>
        </div>
        <div class="planA-cont">
          <div class="contItem">
            <a href>
              <img src="images/obligation.png" alt />
              <p>待付款</p>
            </a>
          </div>
          <div class="contItem">
            <a href>
              <img src="images/distribution.png" alt />
              <p>今日配送</p>
            </a>
          </div>
          <div class="contItem">
            <a href>
              <img src="images/evaluate.png" alt />
              <p>待评价</p>
            </a>
          </div>
        </div>
      </div>
      <div class="planB shadow">
        <div class="linkbox">
          <div class="linkItem" v-for="(item, index) in linkList.linkListOne" :key="index">
            <a :href="item.src">
              <i class="iconfont" :class="item.icon"></i>
              <p>{{item.name}}</p>
            </a>
          </div>
        </div>
        <div class="linkbox">
          <div class="linkItem" v-for="(item, index) in linkList.linkListTwo" :key="index">
            <a :href="item.src">
              <i class="iconfont" :class="item.icon"></i>
              <p>{{item.name}}</p>
            </a>
          </div>
        </div>
      </div>
      <div class="planC shadow">
        <div class="linkbox">
          <div class="linkItem" v-for="(item, index) in linkList.linkListThree" :key="index">
            <a :href="item.src">
              <i class="iconfont" :class="item.icon"></i>
              <p>{{item.name}}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      isLogin:true,
      userInfo:{},
      linkList: {
        linkListOne: [
          { src: "", icon: "icon-youhuiquan", name: "优惠券" },
          { src: "", icon: "icon-quanyiqia", name: "权益卡" },
          { src: "", icon: "icon-yue1", name: "余额" },
          { src: "", icon: "icon-huiyuanjifen", name: "会员积分" }
        ],
        linkListTwo: [
          { src: "", icon: "icon-dizhi", name: "收货地址" },
          { src: "", icon: "icon-shengrijiniantixing", name: "生日纪念提醒" },
          { src: "", icon: "icon-shoucang", name: "我的收藏" },
          { src: "", icon: "icon-history1-copy", name: "浏览记录" }
        ],
        linkListThree: [
          { src: "", icon: "icon-kefu", name: "联系客服" },
          { src: "", icon: "icon-bangzhu", name: "帮助中心" },
          { src: "", icon: "icon-guanyu", name: "关于我们" },
          { src: "", icon: "icon-shezhi", name: "设置" }
        ]
      }
    };

  },
  methods: {
      //  跳转登录页
       login(id){
           this.$router.push('/mine/login');
       },
       //退出
       quit(){
         //移除某一个
          window.localStorage.removeItem('userInfo')
         
          //不能使用window.localstrong.clear()清除所有缓存
        this.$router.push('/index')
       }
  },
  created() {
    let userInfo=window.localStorage.getItem('userInfo');
    // console.log(userInfo)
   if (userInfo) {
         this.isLogin=false;
         this.userInfo=JSON.parse(userInfo);
    }else{
      this.isLogin=true;
    }
    
  },
};
</script>


<style lang="less" scoped>
a{
    text-decoration: none;
}
#user {
  max-width: 800px;
  margin: 0 auto;
  font-size: 0.426667rem;
  text-align: center;
}

#header {
  width: 100%;
  height: 1.333333rem;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 99;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  background: #fff;
  overflow: hidden;
  border-bottom: 2px solid #f1f3f6;

  .headerbox {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 1.333333rem;

    p {
      &:nth-child(1),
      &:nth-child(3) {
        width: 12%;
        height: 1.333333rem;
        line-height: 1.226667rem;
        text-align: center;

        i {
          font-size: 0.533333rem;
          color: #000;
        }
      }

      &:nth-child(2) {
        width: 76%;
        font-size: 0.48rem;
        line-height: 1.333333rem;
        text-align: center;
      }
    }
  }
}

#main {
  background: url("/images/background.png")no-repeat;
  background-color: #fff;
  height: 100vh;
  // -moz-box-sizing: border-box;
  // box-sizing: border-box;
  padding: 1.333333rem 0;
  background-repeat: no-repeat;
  -o-background-size: 100% 4.8rem;
  background-size: 100% 4.8rem;
  background-position: top center;

  .userinformation {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 2.986667rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
//未登录
    .userinformation-notlogin {
      p {
        &:nth-child(1) {
          color: #fff;
        }

        &:nth-child(2) {
          margin-top: 0.213333rem;
          text-align: center;

          a {
            color: #000;
            display: block;
            width: 3.36rem;
            height: 0.96rem;
            line-height: 0.96rem;
            background-color: #fff;
            border-radius: 0.533333rem;
            font-weight: 500;
          }
        }
      }

    }
    //已登录
    .userinformation-login{
      display: flex;
      justify-content: center;
      align-items:center ;
      div:nth-child(1) img{
        width: 65px;
        height: 65px;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.5);

      }
      div:nth-child(2) {
        color: #fff;
        margin-left: 20px; 
        font-size: 14px;
        div:nth-child(2) {
          display: flex;
            justify-content: center;
            align-items:center ;
             margin-top: 5px;
            p{
              background: #FE6600;
              border-radius: 12px;
              font-size: 12px;
              padding: 2px 8px;
              span:nth-child(1){
                font-size: 12px;
              }
              span:nth-child(2){
                font-size: 12px;
              }
            }
            span:nth-last-child(1){
              background: #FE6600;
              border-radius: 12px;
              font-size: 12px;
              padding: 2px 8px;
            }
        }
      }
    }
  }

  .shadow {
    width: 94%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 3%;
    background: #fff;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0 5px 10px 0 #dee2e5;
  }

  .planA {
    .planA-head {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -moz-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      width: 100%;
      height: 1.173333rem;
      border-bottom: 1px solid #e9ecf0;
      line-height: 1.173333rem;

      p {
        &:nth-child(1) {
          font-size: 0.48rem;
          color: #000;
        }

        &:nth-child(2) {
          a {
            font-size: 0.346667rem;
            color: #000;

            i {
              font-size: 0.346667rem;
            }
          }
        }
      }
    }

    .planA-cont {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -moz-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;

      .contItem {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        padding: 0.346667rem 0.186667rem;
        font-size: 12px;

        a {
          width: 100%;
          height: 100%;
          font-size: 0.373333rem;
          color: #000;
        }

        img {
          width: 0.933333rem;
          height: 0.933333rem;
        }
      }
    }
  }

  .planB,
  .planC {
    margin-top: 0.213333rem;
  }
  .linkbox {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    &:nth-child(2) {
      border-top: 1px solid #f5f6f8;
    }
    .linkItem {
      width: 2.4rem;
      height: 2.4rem;
      a {
        font-size: 0.32rem;
        color: #000;
        display: inline-block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        // line-height: 60px;
        padding: 0.4rem 0;
        i {
          display: inline-block;
          height: 0.8rem;
          font-size: 0.48rem;
          line-height: 0.8rem;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
