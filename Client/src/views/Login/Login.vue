<template>
  <div id="mylogin">
    <my-header>登录注册</my-header>

    <div class="hualogo">
      <img src="/img/m_hualogo.png" alt />
    </div>

    <div class="login">
      <div class="login-item">
        <div class="login-item-title" v-show="loginFlag">手机号</div>
        <div class="login-item-title" v-show="!loginFlag">手机号/邮箱</div>
        <div class="login-item-info">
          <input
            placeholder="请输入手机号"
            id="mail"
            autocomplete="off"
            type="text"
            v-show="loginFlag"
             v-model="tel"
          />
          <input placeholder="请输入手机号" id="phone" autocomplete="off" type="text" v-show="!loginFlag" />
        </div>
      </div>
      <div class="login-item">
        <div class="login-item-title" v-show="loginFlag">验证码</div>
        <div class="login-item-title" v-show="!loginFlag">密码</div>
        <div class="login-item-info">
          <input
            placeholder="请输入验证码"
            id="mailPassword"
            autocomplete="off"
            type="password"
            v-show="loginFlag"
            v-model="yzm"
           
          />
          <input
            placeholder="请输入密码"
            id="phonePassword"
            autocomplete="off"
            type="password"
            v-show="!loginFlag"
          />
          <!---->
          <div class="login-item-info-icon" @click="iconFlag =!iconFlag" v-show="loginFlag">
            <i class="iconfont icon-yincang" v-show="iconFlag"></i>
            <i class="iconfont icon-xianshi" v-show="!iconFlag"></i>
          </div>
          <div class="login-item-info-btn" v-show="loginFlag">获取验证码</div>
          <div class="login-item-info-btn" v-show="!loginFlag">忘记密码</div>
        </div>
      </div>
      <button class="to-login" v-show="loginFlag" @click="register">手机注册</button>
      <button class="to-login" v-show="!loginFlag">登录</button>
      <div class="login-by-password" v-show="loginFlag" @click="loginFlag=!loginFlag">账号密码登录</div>
      <div class="login-by-password" v-show="!loginFlag" @click="loginFlag=!loginFlag">手机短信登录</div>
    </div>
    <div class="quick">
      <div class="quick-tips">其他登录方式</div>
      <div class="quick-login">
        <div class="quicklogin-item">
          <i class="iconfont">&#xe619;</i>
          <span>QQ</span>
        </div>
        <div class="quicklogin-item">
          <i class="iconfont">&#xe606;</i>
          <span>支付宝</span>
        </div>
        <div class="quicklogin-item">
          <i class="iconfont">&#xe605;</i>
          <span>微博</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "../../components/MyHeader";
export default {
  name: "login",
  
  data() {
    return {
      tel:'',//手机号
      yzm:'',//验证码
      iconFlag: true,
      loginFlag: true,
      globalNav:null,
    };
  },
  components: {
    myHeader
  },
  methods: {
    register(){
      // console.log(this.tel)
      let userInfo={
        tel:this.tel,
        yzm:this.yzm,
      }
      //压到缓存里面
      window.localStorage.setItem('userInfo',JSON.stringify(userInfo));
       window.alert('注册成功')
       setTimeout(()=>{
       this.$router.push('/Mine')
       },1000)
     
    }
  }
};
</script>

<style lang='less' scoped>
#mylogin {
  height: 100vh;
  width: 100%;
  font-size: 0.373333rem;
  background-color: #fff;
  .hualogo {
    text-align: center;
    padding-top: 2.133333rem;
    img {
      width: 4.88rem;
    }
  }
  .login {
    margin-top: 0.8rem;
    padding: 0 0.533333rem;
    .login-item {
      border-bottom: 1px solid #e9ecf0;
      &:nth-child(2) {
        margin-top: 0.666667rem;
      }
      .login-item-title {
        font-size: 0.346667rem;
      }
      .login-item-info {
        margin-top: 0.106667rem;
        display: flex;
        align-items: center;
        input {
          flex: 1;
          font-size: 11px;
          outline: none;
          border: none;
          padding: 0.186667rem 0 0.186667rem 0.053333rem;
          color: #232628;
        }
        .login-item-info-icon {
          width: 0.666667rem;
          text-align: center;
          color: #b4babf;
          i {
            color: #b4babf;
          }
        }
        .login-item-info-btn {
          padding: 0.106667rem 0.213333rem;
          color: #71797f;
          font-size: 0.346667rem;
          white-space: nowrap;
          text-align: center;
        }
      }
    }
    .to-login {
      margin-top: 1.066667rem;
      height: 1.066667rem;
      line-height: 1.066667rem;
      background: #ff734c;
      color: #fff;
      font-size: 0.373333rem;
      border-radius: 0.533333rem;
      width: 100%;
      text-align: center;
      border: 1px solid #ff734c;
      outline: none;
      transition: 0.3s;
    }
    .login-by-password {
      margin-top: 0.8rem;
      color: #71797f;
      font-size: 0.426667rem;
      text-align: center;
    }
  }
  .quick {
    margin: 2.133333rem 5% 0.533333rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    width: 90%;
    .quick-tips {
      color: rgba(0, 0, 0, 0.2);
      width: 3.733333rem;
      margin: -0.293333rem auto 0.426667rem;
      background: #fff;
      text-align: center;
    }
    .quick-login {
      height: 0.8rem;
      line-height: 0.8rem;
      display: flex;
      justify-content: space-around;
      .quicklogin-item {
        display: flex;
        align-items: center;
      }
      span {
        padding-left: 0.266667rem;
        font-size: 0.32rem;
      }
      i {
        line-height: 0.8rem;
        color: #1cacea;
        font-size: 0.666667rem;
      }
    }
  }
}
</style>