<template>
    <div>  
         <div class="header">
               <a href="">
                 <span class="iconfont">&#xe674;</span>
                 <input type="text"  placeholder="            搜索鲜花,蛋糕,礼品">
               </a>
         </div>
            <div class="content">
                <!-- 热门推荐 -->
            <div class="left">
                <div class="left-item" v-for="(item,index) in lift"  :key="index" >
                  <a :href="item.hr" @click="dianji(index)">{{item.text}}</a>   
                </div>
  
            </div> 
            <div class="right">

            <!-- 热门推荐 -->
            <div class="recommend" v-if="num==0" >
              <a href="" name="recommend">
                <div class="recommendImg">
                   <p class="recommendtitle"><a href=""><img src="images/recommend.jpg" alt=""></a></p>
                </div>
                <div class="obj">
                    <div class="obj-item" v-for="(item,index) in recommend" :key="index">
                     <a href="" >
                    <img :src="item.img" :alt="item.img">
                     <p><span>{{item.text}}</span></p>
                        </a>
                    </div>

                </div>
                </a>
            </div>
            <!-- 鲜花 -->
            <div class="flower" v-if="num==1">
              <a href="" name="flower">
            <div class="right-item">
                    <p class="aestheticism"><a href=""><img src="images/aestheticism.png" alt=""></a></p>
                </div>
                <div class="catebox">
                  <div class="catebox-logo">
                        <div>对象</div>
                        <div><a href="">鲜花排行榜</a></div>
                  </div>
                  <div class="gift">
                       <div class="gift-item" v-for="(item,index) in gift" :key="index">
                          <a href="" >
                            <img :src="item.img" :alt="item.img">
                           <p><span>{{item.text}}</span></p>
                          </a>
                              </div>                                      
                  </div>


                    <div class="gift" style="height: 354px">
                        <h4>场合</h4>
                       <div class="gift-item" v-for="(item,index) in occasion" :key="index">
                          <a href="">
                            <img :src="item.img" :alt="item.img">
                           <p><span>{{item.text}}</span></p>
                          </a>
                              </div>                                      
                  </div>
              
                       <div class="gift">
                        <h4>玫瑰颜色</h4>
                       <div class="gift-item" v-for="(item,index) in colour" :key="index">
                          <a href="">
                            <img :src="item.img" :alt="item.img">
                           <p><span>{{item.text}}</span></p>
                          </a>
                              </div>                                      
                  </div>

                        <div class="gift">
                        <h4>类别</h4>
                       <div class="gift-item" v-for="(item,index) in category" :key="index">
                          <a href="">
                            <img :src="item.img" :alt="item.img">
                           <p><span>{{item.text}}</span></p>
                          </a>
                              </div>                                      
                  </div>

                   <div class="tariff">
                        <h4>价格</h4>
                       <div class="tariff-item" v-for="(item,index) in tariff" :key="index">
                          <a href="">
                           <p><span>{{item.text}}</span></p>
                          </a>
                              </div>                                      
                  </div>     
                                     <div class="tariff">
                        <h4>枝数</h4>
                       <div class="tariff-item" v-for="(item,index) in branch" :key="index">
                          <a href="">
                           <p><span>{{item.text}}</span></p>
                          </a>
                              </div>                                      
                  </div>             
                </div>
                </a>
            </div>

            <!-- 永生花 -->
            <div class="preserved " v-if="num==2">
              <a href="" name="preserved">
                <div class="recommendImg">
                   <p class="recommendtitle"><a href=""><img src="images/recommend.jpg" alt=""></a></p>
                </div>
                  <div class="catebox-logo">
                        <div>对象</div>
                        <div><a href="">永生花排行榜</a></div>
                  </div>
                    <div class="gift">
                       <div class="gift-item" v-for="(item,index) in preserved" :key="index">
                          <a href="" >
                            <img :src="item.img" :alt="item.img">
                           <p><span>{{item.text}}</span></p>
                          </a>
                              </div>                                      
                  </div>
                   <div class="gift" style="height: 354px">
                        <h4>分类</h4>
                       <div class="gift-item" v-for="(item,index) in fresh" :key="index">
                          <a href="">
                            <img :src="item.img" :alt="item.img">
                           <p><span>{{item.text}}</span></p>
                          </a>
                              </div>                                      
                  </div>
                  </a>
            </div>
              <!-- 蛋糕 -->
            <div class="Cake" v-if="num==3">
              <a href="" name="Cake">
                <div class="recommendImg">
                   <p class="recommendtitle"><a href=""><img src="images/cooperation.png" alt=""></a></p>
                </div>
                   <div class="gift" style="height: 446px;">
                        <h4>品牌</h4>
                       <div class="gift-item" v-for="(item,index) in cooperation" :key="index">
                          <a href="" >
                            <img :src="item.img" :alt="item.img">
                           <p><span>{{item.text}}</span></p>
                          </a>
                              </div>                                      
                  </div>
                  </a>
            </div>
            <!-- 特色礼品 -->
            <div class="present" v-if="num==4">
              <a href=""  name="present">
                                <div class="recommendImg">
                   <p class="recommendtitle"><a href=""><img src="images/present.png" alt=""></a></p>
                </div>
                   <div class="gift" style="height: 240px;">
                        <h4>品牌</h4>
                       <div class="gift-item" v-for="(item,index) in present" :key="index">
                          <a href="">
                            <img :src="item.img" :alt="item.img">
                           <p><span>{{item.text}}</span></p>
                          </a>
                              </div>                                      
                  </div>
                      <div class="gift" style="height: 350px;">
                        <h4>对象</h4>
                       <div class="gift-item" v-for="(item,index) in give" :key="index">
                          <a href="">
                            <img :src="item.img" :alt="item.img">
                           <p><span>{{item.text}}</span></p>
                          </a>
                              </div>                                      
                  </div>
                    <div class="gift" style="height: 350px;">
                        <h4>分类</h4>
                       <div class="gift-item" v-for="(item,index) in classification" :key="index">
                          <a href="">
                            <img :src="item.img" :alt="item.img">
                           <p><span>{{item.text}}</span></p>
                          </a>
                              </div>                                      
                  </div>
                  </a>
            </div>
            <!-- 礼篮 -->
            <div class="basket" v-if="num==5">
              <a href="" name="basket">
                <div class="recommendImg">
                   <p class="recommendtitle"><a href=""><img src="images/basket.png" alt=""></a></p>
                </div>
                    <div class="gift" style="height: 350px;">
                        <h4>分类</h4>
                       <div class="gift-item" v-for="(item,index) in basket" :key="index">
                          <a href="" >
                            <img :src="item.img" :alt="item.img">
                           <p><span>{{item.text}}</span></p>
                          </a>
                              </div>                                      
                  </div>
                  </a>
            </div>
            <!-- 绿植花卉 -->
              <div class="botany">
                <a href="" name='botany'>
                      <div class="recommendImg">
                   <p class="recommendtitle"><a href=""><img src="images/basket.png" alt=""></a></p>
                </div>
                    <div class="gift" style="height: 251px;">
                        <h4>绿植花卉</h4>
                       <div class="gift-item" v-for="(item,index) in botany" :key="index">
                          <a href="" >
                            <img :src="item.img" :alt="item.img">
                           <p><span>{{item.text}}</span></p>
                          </a>
                              </div>                                      
                  </div>
                  </a>
              </div>
            </div>      
         </div>
    </div>
</template>  
<script>
// import jquery from 'js/jquery-3.4.1.js';
export default {
    name:'Classify',
    data() {
        return {
                   lift:[
                         {hr:'#recommend',text:'热门推荐'},
                         {hr:'#flower',text:'鲜花'},
                         {hr:'#preserved',text:'永生花'},
                         {hr:'#Cake',text:'蛋糕'},
                         {hr:'#present',text:'特色礼品'},
                         {hr:'#basket',text:'礼篮'},
                         {hr:'#botany',text:'绿植花卉'},
                   ],  
            gift:[
                {img:'images/gift1.png',text:'全部'},
                {img:'images/gift2.png',text:'送女友鲜花'},
                {img:'images/gift3.png',text:'送男性鲜花'},
                {img:'images/gift4.png',text:'送长辈鲜花'},
                {img:'images/gift5.png',text:'送朋友鲜花'},
            ],
            occasion:[
            {img:'images/occasion1.png',text:'爱情鲜花'},
            {img:'images/occasion2.png',text:'生日鲜花'},
            {img:'images/occasion3.png',text:'探望慰问'},
            {img:'images/occasion4.png',text:'商务鲜花'},
            {img:'images/occasion5.png',text:'祝福庆贺'},
            {img:'images/occasion6.png',text:'婚庆鲜花'},
            {img:'images/occasion4.png',text:'道歉鲜花'},
            {img:'images/occasion8.png',text:'哀思鲜花'},
            {img:'images/occasion9.png',text:'港澳台鲜花'},
            ],
            roseleaf:[
             {img:'images/roseleaf1.png',text:'玫瑰'},
             {img:'images/roseleaf2.png',text:'康乃馨'},
             {img:'images/roseleaf3.png',text:'向日葵'},
             {img:'images/roseleaf4.png',text:'百合'},
             {img:'images/roseleaf5.png',text:'绣球'},
             {img:'images/roseleaf6.png',text:'郁金香'},
             {img:'images/roseleaf7.png',text:'扶郎/太阳花'},
             {img:'images/roseleaf8.png',text:'马蹄莲'},
            ],
            colour:[
               {img:'images/colour1.png',text:'红玫瑰'},
               {img:'images/colour2.png',text:'粉玫瑰'},
               {img:'images/colour3.png',text:'百玫瑰'},
               {img:'images/colour4.png',text:'紫玫瑰'},
               {img:'images/colour5.png',text:'黄玫瑰'},
               {img:'images/colour6.png',text:'香槟色'},
            ],
            category:[
                 {img:'images/category1.png',text:'花束'},
                 {img:'images/category2.png',text:'花盒'},
                 {img:'images/category3.png',text:'桌面花篮'},
                 {img:'images/category4.png',text:'瓶插花'},
                 {img:'images/category5.png',text:'果篮'},
                 {img:'images/category6.png',text:'开业花篮'},
            ],
            tariff:[
                {text:'特价鲜花'},
                {text:'150元以下'},
                {text:'150-200元'},
                {text:'250-350元'},
                {text:'350-550元'},
                {text:'550-800元'},
                {text:'800元以上'},
            ],
            branch:[
                {text:'9枝'},
                {text:'11枝'},
                {text:'19枝'},
                {text:'22枝'},
                {text:'29枝'},
                {text:'33枝'},
                {text:'50枝'},
                {text:'66枝'},
                {text:'99枝'},
            ],
            recommend:[
                 {img:'images/recommend1.png',text:'送恋人鲜花'},
                 {img:'images/recommend2.png',text:'送长辈鲜花'},
                 {img:'images/recommend3.png',text:'生日鲜花'},
                 {img:'images/recommend4.png',text:'礼盒鲜花'},
                 {img:'images/recommend5.png',text:'永生花'},
                 {img:'images/recommend6.png',text:'蛋糕'},
                 {img:'images/recommend7.png',text:'元祖蛋糕'},
                 {img:'images/recommend8.png',text:'金箔花'},
                 {img:'images/recommend9.png',text:'首饰'},
                 {img:'images/recommend10.png',text:'巧罗巧克力'},
                 {img:'images/recommend11.png',text:'创意礼品'},
                 {img:'images/recommend12.png',text:'企业团购'},
            ],
             preserved:[
                 {img:'images/preserved1.png',text:'全部'},
                 {img:'images/preserved2.png',text:'送女友'},
                 {img:'images/preserved3.png',text:'送男性'},
                 {img:'images/preserved4.png',text:'送长辈'},
                 {img:'images/preserved5.png',text:'送朋友'},
        
             ],
             fresh:[
                 {img:'images/fresh1.png',text:'永生瓶花'},
                 {img:'images/fresh2.png',text:'经典花盒'},
                 {img:'images/fresh3.png',text:'特色永生花'},
                 {img:'images/fresh4.png',text:'巨型玫瑰'},
             ],
             cooperation:[
                 {img:'images/cooperation1.png'},
                 {img:'images/cooperation2.png'},
                 {img:'images/cooperation3.png'},
                 {img:'images/cooperation4.png'},
                 {img:'images/cooperation5.png'},
                 {img:'images/cooperation6.png'},
                 {img:'images/cooperation7.png'},
                 {img:'images/cooperation8.png'},
                 {img:'images/cooperation9.png'},
                 {img:'images/cooperation10.png'},
                 {img:'images/cooperation11.png'},
                 {img:'images/cooperation12.png'},
                 {img:'images/cooperation13.png'},
                 {img:'images/cooperation14.png'},
             ],
             present:[
                 {img:'images/present1.png'},
                 {img:'images/present2.png'},
                 {img:'images/present3.png'},
                 {img:'images/present4.png'},
                 {img:'images/present5.png'},
                 {img:'images/present6.png'},
             ],
             give:[
                   {img:'images/give1.png',text:'送女友'},
                   {img:'images/give2.png',text:'送男性'},
                   {img:'images/give3.png',text:'送长辈'},
                   {img:'images/give4.png',text:'送朋友'},
                   {img:'images/give5.png',text:'送客户'},
                   {img:'images/give6.png',text:'送老师'},
                   {img:'images/give7.png',text:'送小孩'},
                   {img:'images/give8.png',text:'送领导'},
             ],
             classification:[
                {img:'images/classification1.png',text:'音乐盒'},
                {img:'images/classification2.png',text:'金箔花'},
                {img:'images/classification3.png',text:'3D水晶内雕'},
                {img:'images/classification4.png',text:'首饰/美妆'},
                {img:'images/classification5.png',text:'巧克力'},
                {img:'images/classification6.png',text:'公仔/睡枕'},
                {img:'images/classification7.png',text:'家居生活'},
                {img:'images/classification8.png',text:'摆件/其他'},
             ],
             basket:[
                 {img:'images/basket1.png',text:'礼篮'},
             ],
             botany:[
                  {img:'images/botany1.png',text:'全部'},
                  {img:'images/botany2.png',text:'绿色植物'},
                  {img:'images/botany3.png',text:'盆栽花卉'},
                  {img:'images/botany4.png',text:'多肉盆栽'},
             ],
           num:0
        }
    },
  methods: {
     dianji(index){
        this.num=index;
     }
  },
}
</script>
<style lang="less" scoped>
a{
  text-decoration: none;
  color: gray;
}
   .header{
     width: 100%;
    display: flex;
    z-index: 9;
    height: 30px;
    background: #fff;
    padding: 19px 0;

         a{
           width: 100%;
             text-decoration: none;
             border: 0;
        
         span{
    position: relative;
    left: 36px;
    z-index: 10;
    top: 5px;
    font-size: 23px;
    color: gray;
    
         }
  input{

    width: 93%;
    height: 36px;
    border-radius: 20px;
    border: 1px solid gray;
     outline: none;//除去焦点
     
  }
   }

}
.content{
    width: 100%;
    display: flex;
    margin-top: 42px;

    margin-bottom: 70px;
    .left{
        width: 20%;
        text-align: center;
        margin-top: 13px;
        overflow:scroll; 
        margin-top: -15px;
        .left-item{
            margin: 30px 0;

            a{ display: block;
                color: #373A3C;
                text-decoration: none;
                text-align: center;
            }
        }
    }
    .right{
        width: 80%;
        margin: 0 20px;
         //热门推荐
           .recommend{
             width: 100%;

             .recommendtitle{
                 img{
              width: 100%;
              margin: 0 auto;
              }
             }
             .obj{
                    width: 100%;
                    height: 439px;
                    border-radius: 11px;
                    box-shadow: 0px 2px 6px 0px #e9ecf0;
                    margin-bottom: 13px;
                 .obj-item{
                 float: left;
                 width: 33.33333333%;
                 text-align: center;
                 margin-bottom: 23px;
                a{           
                color: grey;
                text-decoration: none;

                 img{
                 width: 55px;
                 height: 55px;   
                 }
                 p{
                   margin-top: 5px;
                 }
                }
                 }
             }
        }

        // <!-- 鲜花 -->
        .flower{
         

        .right-item{
            width: 100%;
            img{
              width: 100%;
              margin: 0 auto;
            }
        } 
    .catebox{
        width: 100%;
       .catebox-logo{
        display: flex;
        justify-content: space-between; 
        div{
            color: #7D7F80;
            font-size: 14px;
            a{
                color: #7D7F80;
                text-decoration: none;
            }
        }
       }
     .gift{
            width: 100%;
            height: 253px;
            border-radius: 11px;
            box-shadow: 0px 2px 6px 0px #e9ecf0;
            margin-bottom: 13px;
         h4{
                    font-weight: normal;
                    margin: 5px 0 19px 10px;
         }
         .gift-item{
                 float: left;
                 width: 33.33333333%;
                 text-align: center;
                 margin-bottom: 23px;
           a{
               text-decoration: none;
               color: grey;
                 img{
                 width: 55px;
                 height: 55px;
             }
               p{
                   margin-top: 5px;
               }
           }
         }
     }
     .tariff{
            width: 100%;
            height: 253px;
            border-radius: 11px;
            box-shadow: 0px 2px 6px 0px #e9ecf0;
            margin-bottom: 13px;
             h4{
                    font-weight: normal;
                    margin: 5px 0 19px 10px;
         }
         .tariff-item{
                 float: left;
                 width: 33.33333333%;
                 text-align: center;
                 margin-bottom: 23px;
            a{
               text-decoration: none;
               color: grey;
               background: #F7F9FA;
               display: inline-block;
                width: 90px;
                height: 40px;
                line-height: 40px;
               
              
             }
         }
         }
     }
 }
 //永生花
   .preserved{
       width: 100%;

        .recommendtitle{
                 img{
              width: 100%;
              margin: 0 auto;
              }
             }
           .catebox-logo{
        display: flex;
        justify-content: space-between; 
        div{
            color: #7D7F80;
            font-size: 14px;
            a{
                color: #7D7F80;
                text-decoration: none;
            }
        }
       }
             
            .gift{
            width: 100%;
            margin-top: 14px;
            height: 253px;
            border-radius: 11px;
            box-shadow: 0px 2px 6px 0px #e9ecf0;
            margin-bottom: 13px;
         h4{
                    font-weight: normal;
                    margin: 5px 0 19px 10px;
         }
         .gift-item{
                 float: left;
                 width: 33.33333333%;
                 text-align: center;
                 margin-bottom: 23px;
           a{
               text-decoration: none;
               color: grey;
                 img{
                 width: 55px;
                 height: 55px;
             }
               p{
                   margin-top: 5px;
               }
           }
         }
     }
   }
   //蛋糕
   .Cake{

        width: 100%;
        .recommendtitle{
                 img{
              width: 100%;
              margin: 0 auto;
              }
             }
           .catebox-logo{
        display: flex;
        justify-content: space-between; 
        div{
            color: #7D7F80;
            font-size: 14px;
            a{
                color: #7D7F80;
                text-decoration: none;
            }
        }
       }
             
            .gift{
            width: 100%;
            margin-top: 14px;
            height: 253px;
            border-radius: 11px;
            box-shadow: 0px 2px 6px 0px #e9ecf0;
            margin-bottom: 13px;
         h4{
                    font-weight: normal;
                    margin: 5px 0 19px 10px;
         }
         .gift-item{
                 float: left;
                 width: 33.33333333%;
                 text-align: center;
                 margin-bottom: 23px;
           a{
               text-decoration: none;
               color: grey;
                 img{
                 width: 55px;
                 height: 55px;
             }

           }
         }
     }
   }
   //特色礼品
    .present{
                width: 100%;

        .recommendtitle{
                 img{
              width: 100%;
              margin: 0 auto;
              }
             }
           .catebox-logo{
        display: flex;
        justify-content: space-between; 
        div{
            color: #7D7F80;
            font-size: 14px;
            a{
                color: #7D7F80;
                text-decoration: none;
            }
        }
       }
             
            .gift{
            width: 100%;
            margin-top: 14px;
            height: 253px;
            border-radius: 11px;
            box-shadow: 0px 2px 6px 0px #e9ecf0;
            margin-bottom: 13px;
         h4{
                    font-weight: normal;
                    margin: 5px 0 19px 10px;
         }
         .gift-item{
                 float: left;
                 width: 33.33333333%;
                 text-align: center;
                 margin-bottom: 23px;
           a{
               text-decoration: none;
               color: grey;
                 img{
                 width: 55px;
                 height: 55px;
                   p{
                   margin-top: 5px;
               }
             }

           }
         }
     }
    } 
    // 礼篮
    .basket{
           width: 100%;

        .recommendtitle{
             img{
              width: 100%;
              margin: 0 auto;
              }
             }
           .gift{
            width: 100%;
            margin-top: 14px;
            height: 253px;
            border-radius: 11px;
            box-shadow: 0px 2px 6px 0px #e9ecf0;
            margin-bottom: 13px;
         h4{
                    font-weight: normal;
                    margin: 5px 0 19px 10px;
         }
         .gift-item{
                 float: left;
                 width: 33.33333333%;
                 text-align: center;
                 margin-bottom: 23px;
           a{
               text-decoration: none;
               color: grey;
                 img{
                 width: 55px;
                 height: 55px;
                   p{
                   margin-top: 5px;
               }
             }

           }
         }
     }
    }
    //绿植花卉
    .botany{
          width: 100%;
        .recommendtitle{
             img{
              width: 100%;
              margin: 0 auto;
              }
             }
           .gift{
            width: 100%;
            margin-top: 14px;
            height: 253px;
            border-radius: 11px;
            box-shadow: 0px 2px 6px 0px #e9ecf0;
            margin-bottom: 13px;
         h4{
                    font-weight: normal;
                    margin: 5px 0 19px 10px;
         }
         .gift-item{
                 float: left;
                 width: 33.33333333%;
                 text-align: center;
                 margin-bottom: 23px;
           a{
               text-decoration: none;
               color: grey;
                 img{
                 width: 55px;
                 height: 55px;
                   p{
                   margin-top: 5px;
               }
             }

           }
         }
     }
    }
   
   }
}
</style>