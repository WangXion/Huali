<template>
  <!-- head -->
  <div id="header">
    <div class="headerbox">
      <p @click="goBack()">
        <i class="iconfont icon-xiangzuo"></i>
      </p>
      <p>
        <slot></slot>
      </p>
      <p @click="menuFlag=!menuFlag">
        <i class="iconfont icon-menu"></i>
      </p>
    </div>
    <div id="activeMenu" v-if="menuFlag">
      <p v-for="(item, index) in list" :key="index">
        <a :href="item.path">
          <i class="iconfont" :class="item.icon"></i>
          {{item.text}}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: [
        { icon: "icon-shouye", text: "首页", path: "/index" },
        { icon: "icon-fenlei1", text: "分类", path: "/category" },
        { icon: "icon-gouwuche", text: "购物车", path: "/shop" },
        { icon: "icon-xiaolianchenggong", text: "我的", path: "/my" }
      ],
      menuFlag: false
    };
  },
  methods: {
    //头部点击回退事件
    goBack() {
      window.history.go(-1);
    }
  }
};
</script>

<style lang='less' scoped>
#header {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
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
        img {
          vertical-align: middle;
          width: 4.266667rem;
        }
      }
    }
  }
}
#activeMenu {
  background-color: #fff;
  position: absolute;
  top: 1.333333rem;
  right: 0.213333rem;
  z-index: 99;
  width: 2.533333rem;
  border: 1px solid #e9ecf0;
  border-radius: 0.133333rem;
  -webkit-box-shadow: 0 4px 12px 0 #e9ecf0;
  -ms-box-shadow: 0 4px 12px 0 #e9ecf0;
  -o-box-shadow: 0 4px 12px 0 #e9ecf0;
  box-shadow: 0 4px 12px 0 #e9ecf0;
  &::before {
    content: "";
    position: absolute;
    top: -0.106667rem;
    right: 0.213333rem;
    width: 0.106667rem;
    height: 0.106667rem;
    background: #fff;
    border-top: 1px solid #e9ecf0;
    border-left: 1px solid #e9ecf0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  p {
    width: 100%;
    height: 1.333333rem;
    line-height: 1.333333rem;
    a {
      box-sizing: border-box;
      padding: 0 0.32rem;
      width: 100%;
      height: 100%;
      display: inline-block;
      font-size: 0.346667rem;
      color: #232628;
      text-align: left;
      i {
        padding-right: 0.213333rem;
      }
    }
  }
}
</style>