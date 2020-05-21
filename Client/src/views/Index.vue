<template>
  <div class="index">
    <div class="header">
        <span class="iconfont icon-sousuo"></span>
         <h2>礼花网</h2>
       <span class="iconfont icon-erji"></span>
    </div>
    <!-- 首页轮播 -->
      <div class="mySwiper" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
            <div class="swiper-slide" :key="index" v-for="(item,index) in banners">
                <img :src="item">
            </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    <!-- 首页轮播结束 -->
        <!-- //广告 -->
        <div class="notice">
          <div class="notice-item" v-for="(item,index) in notice" :key="index">
            <span class="iconfont">&#xe62a;{{item}}</span>
          </div>
        </div>
          <!-- 图片导航 -->
        <div class="navitem">
        <div class="imgNav-item" v-for = "(item,index) in navitem" :key = "index">
        <img :src="item.img" :alt="item.img">{{item.text}}
      </div>
      </div>
     <!-- 一秒选花 -->
     <div class="Flowers">
       <div class="Flowers-biaoTi">一秒选花</div>
       <div class="application">
        <a href="" v-for="(item,index) in application" :key="index">
           <p class="application-item">
           <img :src="item.img" :alt="item.img"><span>{{item.text}}</span>
           </p>
        </a>
       </div>
         <!-- 表白 -->
         <div class="rose">
           <a href="" v-for="(item,index) in rose" :key="index">
           <div  class="rose-item">
            <img :src="item.img" :alt="item.img"><span>{{item.text}}</span>
           </div>
           </a> 
         </div>
       <!-- 热销特价 -->
       <div class="sellSpecial">
         <div class="Special">
           <a href="">
             <img src="/images/sell.png" alt="">
             <h3>热销榜</h3>
             <p class="Special-p">集千万宠爱</p>
              <p class="log">
               <span >大家都在买</span>
               <span>热销11.7万束</span>
             </p>
           </a>
         </div>
         <div class="Special">
           <a href="">
             <img src="/images/special.png" alt="">
             <h3>特价专区</h3>
             <p class="Special-p">超值好货</p>
              <p class="log">
               <span >限时直降</span>
               <span >¥158<s>¥186</s></span>
             </p>
           </a>
         </div>
       </div>
       <!-- 新品 -->
       <div class="new">
         <div class="new-item" v-for="(item,index) in New" :key="index">
           <a href="">
             <img :src="item.img" :alt="item.img">
           <span>{{item.text}}</span>
           </a>
         </div>
       </div>
     </div>
     <!-- 送恋人 -->
		   <div class="product"> 
        <div class="product-title" >
           <div class="feige"></div>
             <div class="present">送恋人/爱情鲜花</div> 
        </div>
        <div class="product-item"  v-for="(item,index) in product" :key="index" @click="details(item.id)">
          <div class="item-Img"><a :href="'#/index/details?id='+item.id"><img :src="item.img" alt=""></a></div>
           <div class="item-div">
            <a :href="'#/index/detail?id='+index.id" >
              <p class="name">{{item.name}}</p>
             <p class="described">{{item.described}}</p>
             <p class="headline">{{item.headline}}</p>
             <div class="item-p">
               <p><span class="price">{{item.price}}</span><s class="del">{{item.del}}</s><span class="count">{{item.count}}</span></p>
               <p><a href="" class="shop"  @click.prevent.stop="addShopp(item)"><span class="iconfont icon-gouwuche" ></span></a></p>
             </div>
            </a>
           </div>
        </div>
        <!-- 查看更多 -->
        <div class="more">
          <a href="">查看更多</a>
        </div>
        
       </div>

      <!-- 送长辈 -->
      <div class="eldership">
         <div class="product"> 
        <div class="product-title" >
           <div class="feige"></div>
             <div class="present">送长辈鲜花</div> 
        </div>
        <div class="product-item"  v-for="(item,index) in eldership" :key="index">
          <div class="item-Img"><a :href="'#/index/details?id='+item.id"><img :src="item.img" alt=""></a></div>
           <div class="item-div">
            <a :href="'#/index/detail?id='+index.id">
              <p class="name">{{item.name}}</p>
             <p class="described">{{item.described}}</p>
             <p class="headline">{{item.headline}}</p>
             <div class="item-p">
               <p><span class="price">{{item.price}}</span><s class="del">{{item.del}}</s><span class="count">{{item.count}}</span></p>
               <p><a href="" class="shop"><span class="iconfont icon-gouwuche"></span></a></p>
             </div>
            </a>
           </div>
        </div>
        <!-- 查看更多 -->
        <div class="more">
          <a href="">查看更多</a>
        </div>
        
       </div>
      
          
      </div>
      <div class="preserved">

     
       <!-- 永生花 -->
       <div class="product-title" >
           <div class="feige"></div>
             <div class="present">永生花推荐</div> 
        </div>
        <div class="preserved">
          <div class="preserved-item" >
         <div class="preserved-item-div">
           <!-- 第一张 -->
          <a href='#/index/details?id=15' count=1>
             <div class="Img"><img src="/images/preserved1.jpg" alt=""></div>
             <div class=""></div>
           <div>
             <div class="logo">畅销</div>
             <div class="name">我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥598</span> <s class="del">¥698</s></p>
                 <p  class="count">已销售6787件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>

                 <!-- 第二张 -->
           <a href='#/index/details?id=16' count=1>
             <div class="Img"><img src="/images/preserved2.jpg" alt=""></div>
           <div>
             <div class="logo">创意新品</div>
             <div class="name">一鹿(路)有你永生花小夜灯·永生花礼盒</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥298</span> <s class="del">¥698</s></p>
                 <p  class="count">已销售6787件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>
         </div>
          <div class="preserved-item-div">
           <!-- 第一张 -->
          <a href='#/index/details?id=17' count=1>
             <div class="Img"><img src="/images/preserved3.jpg" alt=""></div>
           <div>
             <div class="logo">送长辈畅销款</div>
             <div class="name">爱与祝福·紫心奥斯汀玫瑰1朵，进口粉色康乃馨1枝，浅粉桃色小玫瑰2朵</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥598</span> <s class="del">¥698</s></p>
                 <p  class="count">已销售6787件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>

                 <!-- 第二张 -->
           <a href='#/index/details?id=18' count=1>
             <div class="Img"><img src="/images/preserved4.jpg" alt=""></div>
           <div>
             <div class="logo">2020新品</div>
             <div class="name">爱的小屋永生花灯光蓝牙音箱/浪漫粉·创意蓝牙音箱</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥598</span> <s class="del">¥698</s></p>
                 <p  class="count">已销售6787件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>
         </div>
         </div>
        
         </div>

            <!-- 查看更多 -->
        <div class="more">
          <a href="">查看更多</a>
        </div>
 </div>

         <!-- 蛋糕推荐 -->
         <div class="cake">
       <div class="product-title" >
           <div class="feige"></div>
             <div class="present">蛋糕推荐</div> 
        </div>
        <div class="preserved">
          <div class="preserved-item" >
         <div class="preserved-item-div">
           <!-- 第一张 -->
          <a href='#/index/details?id=19' count=1>
             <div class="Img"><img src="/images/cake1.jpg" alt=""></div>
           <div>
            
             <div class="name">小精灵（6寸）</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥198</span> <s class="del">¥298</s></p>
                 <p  class="count">已销售167件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>

                 <!-- 第二张 -->
           <a href='#/index/details?id=20' count=1>
             <div class="Img"><img src="/images/cake2.jpg" alt=""></div>
           <div>
  
             <div class="name">（新款）榴芒双拼(约2磅)·双拼蛋糕</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥218</span> <s class="del">¥276</s></p>
                 <p  class="count">已销售188件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>
         </div>
          <div class="preserved-item-div">
           <!-- 第一张 -->
          <a href='#/index/details?id=21' count=1>
             <div class="Img"><img src="/images/cake3.jpg" alt=""></div>
           <div>
            
             <div class="name">蝶恋花景(8寸)·元祖鲜奶蛋糕，布丁加水果夹层</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥258</span> <s class="del">¥358</s></p>
                 <p  class="count">已销售6787件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>

                 <!-- 第二张 -->
           <a href='#/index/details?id=22' count=1>
             <div class="Img"><img src="/images/cake4.jpg" alt=""></div>
           <div>
          
             <div class="name">鲜果缤纷·2磅(8寸)水果蛋糕</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥179</span> <s class="del">¥209</s></p>
                 <p  class="count">已销售6787件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>
         </div>
         </div>
        
         </div>
            <!-- 查看更多 -->
        <div class="more">
          <a href="">查看更多</a>
        </div>
   </div>
  
    <!-- 礼品推荐 -->
   <div class="present ">
        <div class="product-title" >
           <div class="feige"></div>
             <div class="present">礼品推荐</div> 
        </div>
        <div class="preserved">
          <div class="preserved-item" >
         <div class="preserved-item-div">
           <!-- 第一张 -->
          <a href='#/index/details?id=23' count=1>
             <div class="Img"><img src="/images/present1.jpg" alt=""></div>
           <div>
             
             <div class="name">woody手工气泡玻璃小鹿灯（海天蓝）·</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥168</span> <s class="del">¥298</s></p>
                 <p  class="count">已销售167件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>

                 <!-- 第二张 -->
           <a href='#/index/details?id=24' count=1>
             <div class="Img"><img src="/images/present2.jpg" alt=""></div>
           <div>

             <div class="name">林深时见鹿/创意卡通小鹿小夜灯led实木台灯·创意小鹿台灯</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥268</span> <s class="del">¥276</s></p>
                 <p  class="count">已销售188件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>
         </div>
          <div class="preserved-item-div">
           <!-- 第一张 -->
          <a href='#/index/details?id=25' count=1>
             <div class="Img"><img src="/images/present3.jpg" alt=""></div>
           <div>
       
             <div class="name">迪奥口红2支(#520+#999)+迪奥花漾淡香水50ml·Dior口红香水礼盒套装</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥1398</span> <s class="del">¥358</s></p>
                 <p  class="count">已销售6787件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>

                 <!-- 第二张 -->
           <a href='#/index/details?id=26' count=1>
             <div class="Img"><img src="/images/present4.jpg" alt=""></div>
           <div>

             <div class="name">星期耳钉礼盒·s925银个性耳钉</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥198</span> <s class="del">¥209</s></p>
                 <p  class="count">已销售6787件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>
         </div>
         </div>
        
         </div>
            <!-- 查看更多 -->
        <div class="more">
          <a href="">查看更多</a>
        </div>
   </div>

   <!-- 巧克力推荐 -->
<div class="chocolate">
    <div class="product-title" >
           <div class="feige"></div>
             <div class="present">巧克力推荐</div> 
        </div>
        <div class="preserved">
          <div class="preserved-item" >
         <div class="preserved-item-div">
           <!-- 第一张 -->
          <a href='#/index/details?id=27' count=1>
             <div class="Img"><img src="/images/chocolate1.jpg" alt=""></div>
           <div>
             
             <div class="name">光板金樽礼遇多口味夹心巧克力礼盒装25颗·夹心巧克力25颗</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥99</span> <s class="del">¥298</s></p>
                 <p  class="count">已销售167件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>

                 <!-- 第二张 -->
           <a href='#/index/details?id=28' count=1>
             <div class="Img"><img src="/images/chocolate2.jpg" alt=""></div>
           <div>

             <div class="name">Felchlin妃亭12粒装巧克力礼盒·德国手工夹心巧克力</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥238</span> <s class="del">¥276</s></p>
                 <p  class="count">已销售188件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>
         </div>
          <div class="preserved-item-div">
           <!-- 第一张 -->
          <a href='#/index/details?id=29' count=1>
             <div class="Img"><img src="/images/chocolate3.jpg" alt=""></div>
           <div>
       
             <div class="name">巧克巧蔻定制16粒装手工夹心巧克力·手工夹心巧克力</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥288</span> <s class="del">¥358</s></p>
                 <p  class="count">已销售6787件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>

                 <!-- 第二张 -->
           <a href='#/index/details?id=30' count=1>
             <div class="Img"><img src="/images/chocolate4.jpg" alt=""></div>
           <div>

             <div class="name">德国进口LAUENSTEIN巧克力手工松露酒味夹心金装礼盒·德国进口酒心黑巧克力20粒</div>
             <div class="bottom">
               <div>
                 <p><span class="price">¥318</span> <s class="del">¥209</s></p>
                 <p  class="count">已销售6787件</p>
               </div>
               <div class="shop"><span class="iconfont icon-gouwuche"></span></div>
             </div>
           </div>
           </a>
         </div>
         </div>
        
         </div>
            <!-- 查看更多 -->
        <div class="more">
          <a href="">查看更多</a>
        </div>
   </div>
   <div class="enterprise">    
      <a href=""> <img src="/images/enterprise1.png" alt=""></a>
   </div>

   <!-- 为什么选择我们 -->
   <div class="brand">
     <h3>为什么选择我们</h3>
     <p class="brand-item"><img src="/images/brand1.png" alt="">
        <span>获评鲜花龙头企业</span>
     </p>
     <p class="brand-item"><img src="/images/brand2.png" alt="">
        <span>1~3小时送花上门</span>
     </p>
     <p class="brand-item"><img src="/images/brand3.png" alt="">
        <span>赛事冠军花艺师团队</span>
     </p>
     <p class="brand-item"><img src="/images/brand4.png" alt="">
        <span>严选花材</span>
     </p>
     <p class="brand-item"><img src="/images/brand5.png" alt="">
        <span>12道严苛品控标准</span>
     </p>
     <p class="brand-item"><img src="/images/brand6.png" alt="">
        <span>500万用户信赖好评</span>
     </p>
     </div> 
     <div class="botn"></div>
       <div class="product-title" >
           <div class="feige"></div>
        </div>
     <!-- 常见问题 -->
     <div class="footer">
       <div class="footer-item">
         <a href="">企业团购</a>
         <a href="">设计师款</a>
         <a href="">同城鲜花</a>
         <a href="">花语大全</a>
       </div>
         <div class="footer-item">
         <a href="">花礼优势</a>
         <a href="">勇敢爱</a>
         <a href="">常见问题</a>
         <a href="">关于我们</a>
       </div>
       <div class="footer-genre">
           <a href="">
             <span class="iconfont">&#xe8d3;</span>
             客服端
           </a>
            <a href="">
             <span class="iconfont">&#xe848;</span>
             客服
           </a>
       </div>
       <div class="footer-statement">
         <p>
           Copyright © 2005~2020 花礼网（中国鲜花礼品网）版权所有<br>
           中国鲜花网领先品牌，鲜花速递专家！<br>
           深圳市百易信息技术有限公司  粤ICP备09171662号
         </p>
       </div>
     </div>
     <!-- 返回顶部 -->
     <scrolltop v-show="onscrolltop" @click.native="backtop"></scrolltop>
     <!-- 返回顶部结束 -->
  </div>
</template>
<script>
//引入返回顶部
import scrolltop from '../components/Scrollbox'

export default {
  name:'index',
  data() {
    return {
      banners:['images/lunbo01.jpg','images/lunbo02.jpg','images/lunbo03.jpg','images/lunbo04.jpg'],
     //轮播
swiperOption: {
            autoplay:true, // 循环
            loop:true,     // 无缝
            pagination: {
                el: '.swiper-pagination'
            },
        },
      notice:['认证龙头企业','15年品牌','3小时送花','最近条评论'],
       navitem:[
        {img:"/images/procate1.png",text:"鲜花"},
        {img:"/images/procate2.png",text:"永生花"},
        {img:"/images/procate3.png",text:"蛋糕"},
        {img:"/images/procate4.png",text:"礼品"},
        {img:"/images/procate5.png",text:"巧克力"},
       ],
       application:[
         {img:'/images/lover.png',text:'送恋人'},
         {img:'/images/jiaren.png',text:'送长辈'},
         {img:'/images/friend.png',text:'送朋友'},
       ],
       rose:[
         {img:'/images/rose1.png',text:'生日祝福'},
         {img:'/images/rose2.png',text:'表白求婚'},
         {img:'/images/rose3.png',text:'开业商务'},
         {img:'/images/rose4.png',text:'周年纪念'},
       ],
       New:[
         {img:'/images/new.png',text:'新品来袭'},
         {img:'/images/taste.png',text:'品味之选'},
         {img:'/images/choosing.png',text:'设计师臻选'},
       ],
       //正文
       product:[
         {id:"1",img:'/images/product1.jpg',name:'一往情深',described:'精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎',headline:'经典爆款，年销售冠军！',price:249,del:'￥315',count:'已销售12.0万件',num:1},
         {id:"2",img:'/images/product2.jpg',name:'一心一意',described:'玫瑰11枝，粉色勿忘我0.3扎',headline:'经典款式 精选爆款',price:139,del:'¥189',count:'已销售11.7万件',num:1},
         {id:"3",img:'/images/product3.jpg',name:'忘情巴黎',described:'精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎',headline:'经典爆款，年销售冠军！',price:249,del:'￥315',count:'已销售12.0万件',num:1},
         {id:"4",img:'/images/product4.jpg',name:'恋恋情深',described:'精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎',headline:'经典爆款，年销售冠军！',price:249,del:'￥315',count:'已销售12.0万件',num:1},
         {id:"5",img:'/images/product5.jpg',name:'韩式系列/亲爱的你',described:'精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎',headline:'经典爆款，年销售冠军！',price:249,del:'￥315',count:'已销售12.0万件',num:1},
         {id:"6",img:'/images/product6.jpg',name:'不变的承诺',described:'精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎',headline:'经典爆款，年销售冠军！',price:249,del:'￥315',count:'已销售12.0万件',num:1},
         {id:"7",img:'/images/product7.jpg',name:'韩式系列/一路向阳',described:'精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎',headline:'经典爆款，年销售冠军！',price:249,del:'￥315',count:'已销售12.0万件',num:1},
         {id:"8",img:'/images/product8.jpg',name:'韩式系列/初心不负',described:'精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎',headline:'经典爆款，年销售冠军！',price:249,del:'￥315',count:'已销售12.0万件',num:1},
       ],
       eldership:[
          {id:"9",img:'/images/eldership1.jpg',name:'留住好时光',described:'粉绣球1枝，粉雪山玫瑰6枝',headline:'经典爆款，年销售冠军！',price:249,del:'￥315',count:'已销售12.0万件',num:1},
          {id:"10",img:'/images/eldership2.jpg',name:'母爱',described:'紫红色康乃馨9枝，粉色多头',headline:'经典爆款，年销售冠军！',price:249,del:'￥315',count:'已销售12.0万件',num:1},
          {id:"11",img:'/images/eldership3.jpg',name:'韩式系列/温柔以待',described:'粉色康乃馨13枝，戴安娜玫瑰5枝、粉色洋桔梗5枝、浅紫紫罗兰5枝、尤加利10枝',headline:'经典爆款，年销售冠军！',num:1,price:249,del:'￥315',count:'已销售12.0万件'},
          {id:"12",img:'/images/eldership4.jpg',name:'幸福绽放',described:'粉色康乃馨19枝',headline:'经典爆款，年销售冠军！',price:249,del:'￥315',count:'已销售12.0万件'},
          {id:"13",img:'/images/eldership5.jpg',name:'健康长久',described:'红色康乃馨99枝、多头红色康乃馨1扎',headline:'经典爆款，年销售冠军！',price:249,del:'￥315',count:'已销售12.0万件',num:1},
          {id:"14",img:'/images/eldership6.jpg',name:'恩情无限',described:'粉色康乃馨11枝，百合2枝',headline:'经典爆款，年销售冠军！',price:249,del:'￥315',count:'已销售12.0万件',num:1},
       ],
       //返回顶部
  // 返回顶部
      onscrolltop: false,
      scrolltop: 0,
      shopCart:true
      
     
    }
  },
  methods: {
    //跳转详情页
     details(id){
      //  console.log(id)
      //  this.$router.push('#/index/details?id='+id)
     },
     addShop(){
       this.$store.commit('add')
     },
     // 回到顶部的显示隐藏
    Scrolltop() {
      // console.log(this.scrolltop)
      this.scrolltop =
     window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop;
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
     //添加到购物车
      addShopp(shoppTtem){
      
        //  this.$store.commit('add');
        //首先先拿到值
        let productArr= window.localStorage.getItem('productArr') || [];
        //作比较    
        if (productArr.length==0) {
        this.$store.commit('add');
        // console.log('1111111')
        productArr.push(shoppTtem);
        window.localStorage.setItem('productArr',JSON.stringify(productArr)) 
        }else{
            // console.log("只执行一次")
           let productArr1=JSON.parse(productArr)
            //      console.log(productArr1)
            //  console.log(typeof productArr1);
       
           productArr1.every((item)=>{
             if (shoppTtem.img==item.img) {
                return  this.shopCart=false;

     
             }else{
               return this.shopCart=true;

             }
            // console.log(item.img)

           })
            // console.log(this.shopCart)
           if (this.shopCart) {
        this.$store.commit('add');
        productArr1.push(shoppTtem);
        window.localStorage.setItem('productArr',JSON.stringify(productArr1));
           }
 
        }
   
      }
  },

  mounted() {
  window.addEventListener('scroll',this.Scrolltop)
  },

  //局部配置
  components:{
   scrolltop,
  }
}
</script>
<style lang="less" scoped>

  .header{
    width: 100%;
    z-index: 100;
    height: 50px;
    background: #435448;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    box-sizing: border-box;
    padding: 0 10px;   
 
   h2{
    font-size: 18px;
    color: #FF734C;
  }
 span{
    font-size: 28px;
    color: #fff;
  }
 }
 //轮播
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
 .notice{
   width: 100%;
   height: 40px;
   display: flex;
   justify-content: space-around;
   .notice-item{
    span{
       font-size: 12px;
       color: #435448;
    }
   }
 }
/* 广告 */
  .navitem{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 10px 0;
  
  .imgNav-item{
    font-size: 12px;
    color: #435448;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   img{
    width: 40px;
    height: 40px;
  } 
  }

}
.Flowers{
  width: 100%;
  .Flowers-biaoTi{
    border-left: 3px solid gray;
    margin-left: 10px;
    padding-left: 10px;
    font-size: 16px;
  }
}
.application{
  width: 100%;
  display: flex;
  justify-content: space-around;
  a{
    text-decoration: none;
  .application-item{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  
    padding: 5px 2px;
    img{
    width: 100%;
    vertical-align: middle;

    }
    span{
    position: absolute;
    bottom: 0.25rem;
    font-size: 12px;
    left: 0;
    right: 0;
    z-index: 1;
    color: #fff;
    text-align: center;

    }
  }
  }
}

  .rose{
   width: 100%;
  display: flex;
  justify-content: space-around;
    a{
      text-decoration: none;
      font-size: 14px;
      color: #232628;
    .rose-item{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 5px 2px;
    border-radius: 8px;
    img{
      width: 100%;
      position: relative;
    }
      span{
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
       }
      }
    }
  }
   .sellSpecial{
     width: 100%;
     display: flex;
     justify-content: space-around;
    .Special{
       border: 1px solid #E9ECF0;
       position: relative;
       
       a{
         text-decoration: none;
         img{
           width: 100%;
         }
         .Special-p{
           color: #71797F;
           font-size: 13px;
           position: absolute;
           left: 0;
           right: 0;
           top: 22px;
         }
         h3{
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              font-size: 14px;
              color: #232628;
         }
       .log{
             display: flex;
             justify-content: space-around;
             font-size: 12px;
         :nth-child(1){
               border-radius: 10px;
               background: #FF734C;
               color: white;
               padding: 0 7px;
         }
         :nth-child(2){
             color: black;
         }
       }
       }
     }
   }
   .new{
     display: flex;
     justify-content: space-around;
     .new-item{
       position: relative;
       a{
          text-decoration: none;
          color: white;
       img{
         width: 100%;
       }
       span{
       width: 100%;
       position: absolute;
       left: 0;
       bottom: 0;
       text-align: center;
       background: rgba(35, 38, 40, 0.8);
       }
       }
     }
   }
   .product{
     width: 100%;
     .product-item{
         width: 100%;
       display: flex;
       justify-content: space-around;
       margin-top: 5px;
      .item-Img{
        width: 100%;
        max-width: 640px;
        img{
          width: 100%;
          height: 217px;
        
        }      
      }
        .item-div{
          background: #FFFFFF;
          width: 100%;
          max-width: 600px;
              a{
                color: inherit;
                text-decoration: none;
                .name{
                  font-family: 楷体;
                 border: 0;
                 padding: 0;
                 margin: 0;
                 box-sizing: border-box;
                 font-size: 22px;
                 padding-top: 20px;
                 margin-left: 11px;
            
                }
                .described{
                  font-size: 13px;
                  font-weight: 300;
                  padding-bottom: 11px;
                  margin-left: 13px;
                }
                .headline{
                          padding: 13px;
                          border-top: 1px solid #E9ECF0;
                          border-bottom: 1px solid #E9ECF0;
                          font-size: 15px;
                }
                .item-p{
                  display: flex;
                  justify-content: space-around;
                  position: relative;
                  .price{
                        font-size:20px;
                        color: #FF734C;
                        font-weight: 500;
                  }
                  s{
                      font-size: 14px;
                      color: #71797F;
                      margin-left: 18px;
                  }
                  .count{
                        font-size:16px;
                        color: #71797F;
                        display: block;
                  }
                  .shop{
                        position: relative;
                        top: 20px;
                       span{
                    font-size: 25px;
                    color: #9A9FA4;

                       }
                  }
                }
              }
        }
     }
     
   
     
   }
   //查看更多
   .more{
           border: 0;
           padding: 0;
           margin: 0;
           box-sizing: border-box;
           margin-top: 18px;
           a{
                display: block;
                width: 104px;
                height: 24px;
                text-align: center;
                margin: 0 auto;
                border: 1px solid gray;
                border-radius: 6px;
                text-decoration: none;
                color: gray;
           }
     }
    //  商品标题
     .product-title{
       .feige{
           background: #E9ECF0;
           width: 100%;
           height: 6px;
           margin: 15px 0;
     }
     .present{
           font-size: 17px;
           margin: 10px 0;
           text-align: center;
           font-weight: normal;
     }
     }
     //永生花
     .preserved{
  
       .preserved-item-div{
         width: 100%;
         display: flex;
         justify-content: space-around;
       a{
            text-decoration: none;
            overflow: hidden;
            box-shadow: 0 0.28571429rem 0.85714286rem 0 #e9ecf0;
            border-radius: 0.28571429rem;
            padding: 0 3px;
            flex: 1;
          img{
         width: 100%;
       }
       .logo{
          display: inline-flex;
          border-radius: 12px;
          border: 1px solid #FF734C;
          color: #FF734C;
          font-size: 12px;
          padding: 2px 8px;
       }
       .name{
              font-weight: 300;
              overflow: hidden;
              font-size: 11px;
              color: grey;
              text-overflow: ellipsis;
              height: 16px;
              margin-bottom: 5px;
         
              
           
       }
       }
     }
     .bottom{

       position: relative;
       .price{
         font-size:20px;
         color: #FF734C;
         font-weight: 500;
         
       }
       .del{
         font-size: 12px;
          color: #71797F;
          margin-left: 0.42857143rem; 

         }
         .count{
            color: #9A9FA4;
            font-size: 16px;
    
         }
         .shop{
            position: relative;
            right: 26px;
            top: 17px;
            span{
              font-size: 25px;
              color: #9A9FA4;
              position: relative;
              z-index: 10;
              left: 185px;
              top: -47px;
              
            }
         }
     }
       }

       .enterprise{
         width: 100%;
         img{
           width: 100%;
           margin-top: 16px;
         }
       }
       .brand{
            background: #fff;
            h3{
              text-align: center;
              margin: 25px 0;
              font-weight: normal;
            }
         .brand-item{
             float: left;
            width: 33.33333333%;
            text-align: center;
            padding-bottom: 16px;
            img{
                height: 80px;
            }
            span{
                  font-size: 15px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
            }
          
         
         }
       }
      //  清除浮动
       .botn{
         clear: both;
         content: "";
         display: block;
       }
       .footer{
         width: 100%;
         .footer-item{
           width: 100%;
           display: flex;
           justify-content: space-around;
           a{
              width: 25%;
              margin: 9px 3px;
              background: #E9ECF0;
              font-size: 15px;
              text-align: center;
              text-decoration: none;
              color: black;
              border-radius: 10px;
            
           }
         }
         .footer-genre{
            display: flex;
            justify-content: center;
            a{
                margin: 20px 70px;
                color: gray;
                text-decoration: none;
                display: flex;
                flex-direction: column;
                text-align: center;
              span{
                  font-size: 30px;
                  width: 50px;
                  height: 50px;
                  display: inline-block;
                  background: #E9ECF0;
                  text-align: center;
                  line-height: 50px;
                  border-radius: 50%;
              }
            }
         }
         .footer-statement{
          width: 100%;
          padding: 26px 0;
          font-size: 12px;
          color: #B4BABF;
          text-align: center;
          margin-bottom: 50px;
         }
       }
</style>