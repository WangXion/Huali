<template>

  <div class="page">
    <!-- 头部 -->
    <div class="header">
      <span class="iconfont" @click="skip">&#xe66a;</span>
      <span class="hua">Hua.com花礼网</span>
      <span class="iconfont">&#xe50c;</span>
    </div>
    <!-- 轮播 -->
      <!-- 首页轮播 -->
      <div class="mySwiper" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
            <div class="swiper-slide" :key="index" v-for="(item,index) in lunboimg">
                <img :src="item">
            </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    <!-- 首页轮播结束 -->
    <!-- 介绍 -->
    <div class="introduce" v-for="(item,index) in pageint" :key="index">
      <div class="introduce_top">
        <div>
          <span>{{ item.name }}</span>
          <span class="jd">{{ item.text1 }}</span>
        </div>
        <span class="iconfont icon-shoucang"></span>
      </div>
      <div class="introduce_buttom">
        <div>
          <p>{{ item.newprice }}</p>
          <span>{{ item.oldprice }}</span>
        </div>
        <span>{{ item.off }}</span>
      </div>
    </div>
    <!-- app下单 -->
    <div class="app">
      <div>
        <span class="iconfont icon-bangdingshouji01"></span>
        <span>App下单立减五元</span>
      </div>
      <span class="iconfont icon-xiangyou"></span>
    </div>
    <!-- 花语 配送 材料 -->
    <div class="language">
      <div>
        <span class="left">花语</span>
        <span class="right"
          >你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。</span
        >
      </div>
      <div>
        <span class="left">材料</span>
        <span class="right text" >{{text}}</span>
      </div>
      <div>
        <span class="left">配送</span>
        <span class="right">
          限送100多个主要城市的市区及近郊：北京,上海,深圳,广州,成都,武汉,南京,杭州,苏州,天津,西安,长沙,东莞,厦门,佛山,沈阳,合肥,重庆,大连,郑州,青岛,太原,无锡,石家庄,济南,宁波,哈尔滨,乌鲁木齐,贵阳,昆明,福州,长春,南昌,兰州,珠海,南宁,中山,常州,金华,邯郸,泉州,海口,嘉兴,南通,呼和浩特,廊坊,唐山,温州,徐州,绵阳,烟台,襄阳,保定,潍坊,镇江,衡阳,包头,赣州,扬州,清远,荆州,莆田,汉中,洛阳,湛江,九江,鞍山,大庆,秦皇岛,张家口,桂林,吉林,淄博,蚌埠,柳州,遵义,邢台,宜春,漳州,三亚,宜宾,东营,临沂,德州,开封,大同,龙岩,齐齐哈尔,连云港,新乡,黄冈,焦作,十堰,驻马店,信阳,牡丹江,黄石,宝鸡,丹东,阜阳,北海,聊城,锦州,许昌,内江,萍乡,安庆,承德,商丘,盘锦,乐山,沧州,河源,营口,平顶山,临汾,韶关,日照,新余,晋城,松原,淮北,淮南,晋中,潮州,滨州,自贡,六安,株州,濮阳,常熟,晋江,顺德,江阴,吴江,昆山,义乌,惠阳,银川,温江,燕郊,新都,涿州,南沙,宜兴,即墨,海安县,都江堰,增城,仙桃,菏泽
        </span>
        <span class="iconfont icon-xiangxia"></span>
      </div>
    </div>
    <!-- 已选择 -->
    <div class="select">
      <div class="top">
        <span class="left">已选</span>
        <div class="right">
          <span class="">一往情深</span>
          <span class="iconfont icon-xiangxia"></span>
        </div>
      </div>
      <div class="top">
        <span class="left">配送至</span>
        <div class="right">
          <span class="iconfont icon-dingwei1">请选择配送地区</span>
          <span class="iconfont icon-xiangxia"></span>
        </div>
      </div>
    </div>
    <!-- 订单评价 -->
    <div class="evaluate">
      <div class="evaluate_top">
        <span>订单评价</span>
        <span>最近已有8413条评论<i class="iconfont icon-xiangyou"></i></span>
      </div>
      <div
        class="evaluate_center"
        v-for="(item, index) in evaluate"
        :key="index"
      >
        <div>
          <img :src="item.head" alt="" />
          <b>{{ item.name }}</b>
          <img src="/images/星星.png" alt="" class="xingxing" />
        </div>
        <p>{{ item.text }}</p>
        <a href=""><img :src="item.img" alt=""/></a>
        <span class="iconfont icon-dingwei1">{{ item.slit }}</span>
      </div>
      <a href="##" class="many">查看更多</a>
    </div>
    <!-- 为什么选择我们 -->
    <div class="select">
      <h2>为什么选择我们</h2>
      <ul>
        <li v-for="(item, index) in select" :key="index">
          <img :src="item.img" alt="" />
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
    <!-- 图文详情 -->
    <div class="picture">
      <h4>图文详情</h4>
      <ul>
        <li  v-for="(item,index) in picture" :key="index">
            <img :src="item" alt="" />
        </li>
      </ul>
      <div v-for="(item, index) in page" :key="index" class="text">
        <a
          href="###"
          v-for="(val, index) in item.text"
          :key="index"
          class="text_a"
        >
          <p>{{ val.text }}</p>
          <span class="title">{{ val.title }}</span>
          <a href="##"><img :src="val.img" alt=""/></a>
        </a>
      </div>
    </div>
    <!-- 返回顶部 -->
    <scrolltop v-show="onscrolltop" @click.native="backtop"></scrolltop>

    <div class="button">
      <button>立即购买</button>
      <button>加入购物车</button>
    </div>
  </div>
</template>
<script>
//引入返回顶部
import scrolltop from "../../components/Scrollbox";
export default {
  data() {
    return {
swiperOption: {
            autoplay:true, // 循环
            loop:true,     // 无缝
            pagination: {
                el: '.swiper-pagination'
            },
        },
      lunboimg: [],
      text:[],
      pageint: [
        // {
        //   text: "一往情深-精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎",
        //   text1: "经典爆款，年销售冠军！",
        //   newprice: "¥249",
        //   oldprice: "¥315",
        //   off: "已售12.04万件",
        // },
      ],
      evaluate: [
        {
          head: "/images/evaluate1.jpg",
          name: "李*",
          text: "送货及时，品质也不错",
          img: "/images/evaluate2.jpeg",
          slit: "广东广州市越秀区",
        },
        {
          head: "/images/evaluate3.jpg",
          name: "杨*",
          text: "鲜花一如既往的新鲜，老婆很喜欢！",
          img: "/images/evaluate4.jpeg",
          slit: "上海静安区",
        },
        {
          head: "/images/evaluate5.jpg",
          name: "周*发",
          text: "感觉挺好看的",
          img: "/images/evaluate6.jpg",
          slit: "上海长宁区",
        },
      ],
      //为什么选择我们
      select: [
        { img: "/images/brand1.png", text: "获评鲜花龙头企业" },
        { img: "/images/brand2.png", text: "1~3小时送花上门" },
        { img: "/images/brand3.png", text: "赛事冠军花艺师团队" },
        { img: "/images/brand4.png", text: "严选花材" },
        { img: "/images/brand5.png", text: "12道严苛品控标准" },
        { img: "/images/brand6.png", text: "500万用户信赖好评" },
      ],
      //图文详情
      picture:[],
      page: [
        {
          id: 1,
          text: [
            {
              img: "/images/detailed1.png",
              text: "龙头企业认证·15年品牌",
              title: "始于2005，多次获中国电子商务协会“鲜花龙头企业”认证。",
            },
            {
              img: "/images/detailed2.png",
              text: "12道品控标准 + 送前实拍",
              title:
                "行业内率先研发并实施12道严苛品控标准：从花材采购、制作、成品、配送、售后全程覆盖，将产品及服务标准化；每束花均实拍回传总部审核，符合品控标准方可送出。",
            },
             {
              img: "/images/detailed3.png",
              text: "臻选品质礼品",
              title:
                "专业礼品选品团队，从市场筛选和评测创意、品质、价格各维度表现优秀的品牌和产品，并走访供应商实地考察、多批次随机抽检，最终为用户提供精美、别出心意的 礼品。",
            },
             {
              img: "/images/detailed4.png",
              text: "客服团队",
              title:
                "建设一支较其他电商更大规模的客服团队，将常规客服升级为售前订花顾问、售中专人跟单、售后快速响应的一站式管家客服模式。",
            },
            {
              img: "/images/detailed5.png",
              text: "优秀平台汇聚优秀人才",
              title:
                "我们相信优秀的平台环境可以吸引同样气质、热爱花礼行业的优秀人才。",
            },
             
            {
              img: "/images/detailed6.png",
              text: "不只鲜花 · 跨界音乐微电影",
              title:
                "联合GIMC打造“勇敢爱”系列原创微电影、赞助《不要音乐》大型音乐旅行节目，全网播放超5000万次。",
            },
        
          ],
        },
      ],
     
      // 返回顶部
      onscrolltop: false,
      scrolltop: 0,
      // globalNav:null


    };
 
 },
  //方法
  methods: {

       //回退
    skip() {
     
      // this.$router.push("/index");
      window.history.go(-1)
    },
    // 回到顶部的显示隐藏
    Scrolltop() {
      this.scrolltop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (this.scrolltop > 600) {
        this.onscrolltop = true;
      } else {
        this.onscrolltop = false;
      }
    },
    // 回到顶部
    backtop() {
      let timer = setInterval(() => {
        let speed = Math.floor(-this.scrolltop / 5);
        document.documentElement.scrollTop = this.scrolltop + speed;
        if (this.scrolltop == 0) {
          // this.onscrolltop = false;
          clearInterval(timer);
        }
      }, 16);
    },
  },

  
  //注册组件
  components: {
   scrolltop,

  },
  mounted() {

    window.addEventListener("scroll", this.Scrolltop);

this.axios.get('http://localhost:3000/banner')
          .then(function(res){
              // console.log(res.data)
            //获取页面传过来的id      
          var id=this.$route.query.id
              // console.log(id)
            for (const i in res.data) {
              let zhi=res.data[i]
                  // console.log(zhi.id) 
                 if (id==zhi.id) {
                  let lunboimg = zhi.bannerimg; 
                        //  console.log(zhi.bannerimg)    
                  let picture = zhi.detailimg;
                    //  console.log(zhi.Science)
                     // 轮播图片
                      this.lunboimg=lunboimg; 
                      
                        // // 商品名字价格等
                           let name= zhi.name;
                           let text1= zhi.Science;
                           let newprice= zhi.newPrice;
                           let oldprice= zhi.oldPrice;
                           let off= zhi.num;
                           this.pageint=[{
                             name:name,text1:text1,newprice:newprice,oldprice:oldprice,off:off
                           }]

                          // console.log( this.pageint) 
                        

                    // 内容图片
                      for (const z in picture) {
                           let xq=picture[z]
                          this.picture.push(xq.img)
                          // console.log(this.picture)
                      }
                      // console.log(this.text)
                  }
              


            }
                  //控制台打印请求成功时返回的数据
               //bind(this)可以不用
          }.bind(this))
          .catch(function(err){
            if(err.response) {
              console.log(err.response)
                //控制台打印错误返回的内容
            }
                //bind(this)可以不用
          }.bind(this))



  },
};

 
</script>
<style lang="less" scoped>
.page {

  height: 2000px;
  a {
    text-decoration: none;
    color: #242628;
  }
  li {
    list-style: none;
  }
  padding: 0 0 40px 0;
}
// 头部
.header {
    width: 100%;
    display: flex;
    top: 0;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
  .iconfont {
    font-size: 20px;
  }
  .hua {
    color: pink;
    font-style: oblique;
    text-align: center;
  }
}
/* 轮播 */
.mySwiper {
  width: 100%;


.swiper-container {
  --swiper-theme-color: #ff734c;
}

 .swiper-slide {
  width: 100%;

       img {
  width: 100%;
  height: 100%;
}
}

}

// 介绍
.introduce {
  width: 100%;
  font-size: 14px;
  padding: 10px 0;
  box-sizing: border-box;
  background: #fff;
  .introduce_top {
    display: flex;
    justify-content: space-around;
    div {
      width: 75%;
      .jd {
        color: #ff734c;
        margin-left: 10px;
      }
    }
  }
  .introduce_buttom {
    margin-top: 5px;
    display: flex;
    justify-content: space-around;
    div {
      width: 60%;
      display: flex;
      p {
        color: #ff734c;
        font-weight: 600;
        font-size: 20px;
        text-align: center;
      }
      span {
        text-decoration: line-through;
        color: #b4babf;
        text-align: center;
        line-height: 26px;
      }
    }
  }
}
// app
.app {
  background-color: #fff;
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  div {
    width: 75%;
    display: flex;
    align-items: center;
    span {
      padding: 0 10px 0 0;
    }
  }
}
// 花语 配送 材料
.language {
  margin: 5px 0;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  div {
    width: 100%;
    display: flex;
    margin: 15px 0;
    .left {
      text-align: center;
      width: 20%;
    }
    .right {
      width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
// 已选择
.select {
  background-color: #fff;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    margin: 15px 0;
    .left {
      text-align: center;
      width: 20%;
    }
    .right {
      width: 80%;
      display: flex;
      justify-content: space-between;
    }
  }
}
// 评价
.evaluate {
  width: 100%;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10px;
  box-sizing: border-box;
  background-color: #fff;
  margin: 5px 0;
  .evaluate_top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    padding: 10px 0;
    span {
      color: #71797f;
    }
  }
  .evaluate_center {
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ccc;
    padding: 10px 0;
    box-sizing: border-box;

    div {
      display: flex;
      position: relative;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .xingxing {
        width: 60px;
        height: 9px;
        position: absolute;
        right: 0;
      }
    }
    p {
      margin: 10px 0;
      font-size: 14px;
    }
    a {
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      font-size: 12px;
      color: #b4babf;
      margin-top: 5px;
    }
  }
  .many {
    width: 96px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    color: black;
    border: 1px solid #ccc;
    margin: 0 auto;
    margin-bottom: 15px;
  }
}
/* 为什么选择我们 */
.select {
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;

  h2 {
    font-size: 16px;
    text-align: center;
    color: #232628;
    margin: 15px 0;
  }
  ul {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-flow: row wrap;

    li {
      list-style: none;
      width: 33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px 0;

      img {
        width: 64px;
        height: 64px;
      }
      p {
        font-size: 12px;
      }
    }
  }
}
// 图片详情
.picture {
  width: 100%;
  background-color: #fff;
  margin: 10px 0;
  h4 {
    padding-left: 10px;
  }
  ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    img {
      width: 100%;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    color: #242628;
    font-size: 12px;
    padding: 10px;
    box-sizing: border-box;
    .text_a {
      margin: 10px 0;
      p {
        font-size: 20px;
        color: black;
        width: 100%;
        text-align: center;
      }
      .title {
        display: block;
        width: 100%;
        margin: 10px 0;
      }
      a {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }

}
  .button{
    width: 100%;
    height: 55px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    background: white;
    background-color: white;
    z-index: 100;
   
    button:nth-child(1){
     width: 50%;
      color: white;
       border: none;
     background-color: #3D4D42;

    }
     button:nth-child(2){
     width: 50%;
      color: white;
    background-color: #FF734C;
    border: none;
    }
  }
</style>
