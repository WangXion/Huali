<template>
  <div class="shop">
        <!-- 头部 -->
    <div class="header">
      <span class="iconfont" @click="skip">&#xe66a;</span>
      <span class="hua">Hua.com花礼网</span>
      <span class="iconfont">&#xe50c;</span>
    </div>
        <h4>购物车</h4>
       <div class="shop-item" v-for="(item,index) in productList" :key="index">     
            <div class="shop-item-one">
                 <p class="shop-input"><input type="checkbox" v-model = "item.select" @change = 'selectBack'></p>
            </div>
             <div class="shop-item-two">     
               <p><img :src="item.img" :alt="item.img"></p>  
               <div class="shopcount">
                 <div class="name">{{item.name}}</div>
                 <div class="price"><span>￥</span>{{item.price}}</div>
                 <div class="shopcount-item">
                   <span class="sub" @click = "sub(index)">-</span>
                   <input type="text" v-model="item.num" @change = "inp(index)">
                   <span class="add"  @click = "add(index)">+</span>
                   </div>              
                 </div>   
                 <div class="del"> <span href="" @click="deleteOneProduct(index)"  >删除</span></div> 
            </div>
       </div>
       <!-- 最后一行统计 -->
       <div class="zong">
         <p>
           <input type="checkbox" v-model = "isSelectAll" @change = "selectProduct">全选
         <span href="javascript:;" class="delete-product" @click="deleteProduct">删除所选商品</span>
         </p>
         <p>合计:<span class="span">￥{{getTotal.totalPrice}}</span></p>
       <a href="" class="fr btn-buy">去结算</a>
       </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productList: [],
      isSelectAll:false,  // 全选
      // globalNav:null
  
    };
    
  },
  // 方法
  methods: {

          //回退
    skip() {
     
      // this.$router.push("/index");
      window.history.go(-1)
    },
    // 全选与取消全选
    selectProduct: function() {
      // console.log(this.isSelectAll);
      //遍历productList,全部取反
      for (var i = 0; i < this.productList.length; i++) {
        this.productList[i].select = this.isSelectAll;
      }
    },
    // 单选框取反 - 取消全选
    selectBack(){   
      this.isSelectAll =  this.productList.every(function(item) {
        return item.select;
      });            
    },
    // 数量增加
    add(index){
      var num = this.productList[index].num;
      num++;
      if (num>10) {
        this.productList[index].num = 10;
      }else{
        this.productList[index].num = num;
      }      
    
    },
    // 数量较少
    sub(index){
      var num = this.productList[index].num;
      num--;
      if (num<1) {
        this.productList[index].num = 1;
      }else{
        this.productList[index].num = num;
      }
     
    },
    //删除选中的产品
    deleteProduct: function() {
      this.productList = this.productList.filter(function(item) {
        return !item.select;
        
      this.$store.commit('num')

      });

    },
    //删除单条产品
    deleteOneProduct: function(index) {
      //根据索引删除productList的记录
       this.productList.splice(index, 1);
       //重新把数据压入localstrong
       let productArr1=JSON.parse(window.localStorage.getItem("productArr"));
        productArr1.splice(index, 1);
        window.localStorage.setItem("productArr",JSON.stringify(productArr1))
        this.$store.commit('num')
    },
    // 判断数字输入框中的值
    inp(index){
      var val = Number(event.target.value);
      if (!val) {
        this.productList[index].num = 1;
      }else{
        if (val>10) {
          this.productList[index].num = 10;
        } 
        if (val<1) {
          this.productList[index].num = 1;
        }
      }      
    },

    //渲染
   addselect(){
         for (const i in this.productList) {
           //给数据添加属性
          this.$set(this.productList[i],'select', false)
         }
        // console.log(typeof this.productList)

   }
 

  },
  // 计算属性
  computed: {
    // 获取总价和产品总数
    getTotal: function() {
      // 获取list中select为true的数据
      var _proList = this.productList.filter(function(item) {
          return item.select;
      }),
      // 总价的初始值
      totalPrice = 0;
      for (var i = 0; i < _proList.length; i++) {
        // 总价累加
        totalPrice += _proList[i].num * _proList[i].price;
      }
      // 选择产品的件数就是_proList.lenth，总价就是totalPrice
      return { totalNum: _proList.length, totalPrice: totalPrice };
    }
  },
  created() {
        let productArr= window.localStorage.getItem('productArr') || [];
        // console.log(productArr)
        this.productList=JSON.parse(productArr)
      //  console.log(this.productList)
          this.addselect()
  },
};
</script>
<style lang="less">
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
     .shop{
        max-width: 800px;
       box-sizing:border-box;
       
       position: relative;
        h4{
    text-align: center;
    font-size: 30px;
    font-family: '楷体'
        }
       .shop-item{
         height: 87px;
         width: 100%;
         margin: 22px 0;
         display: flex;
         justify-content: space-around;
         position: relative;
         border-radius: 21px;
         box-shadow: 0 0.28571429rem 0.85714286rem 0 #e9ecf0;
     .shop-item-one{
         width: 20%;
         .shop-input{
               line-height: 87px;
               input{
                 width: 20px;
                 height: 20px;
               }
         }
       }
       .shop-item-two{
         width: 80%;
         display: flex;
         img{
           width: 80px;
         }
             .shopcount{
               margin-left: 16px;
               padding: 9px 0;
               .shopcount-item{                  
               input{
              width: 20px;
              height: 8px;
              border: none;
              margin: 0 8px;
              padding: 5px 4px;
              }
               }
           
         }
         .del{
          line-height: 87px;
          position: absolute;
          left: 330px;

           span{
             color: black;

           }
         }
       }
       }
       .zong{
    width: 100%;
    background: white;
    height: 40px;
    position: fixed;
    bottom: 0;
    z-index: 10;
    box-sizing: border-box;
    height: 60px;
    display: flex;
   justify-content: space-between;
    border-top: 1px solid rgba(180, 186, 191, 0.5);
    p{
      line-height: 60px;
        input{
                 width: 20px;
                 height: 20px;
                 
               }
    }
    .span{
         font-size: 15px;
          line-height: 60px;
         color: #FF734C;
    }
    a{
    border: none;
    height: 100%;
    width: 30%;
    border-radius: 0;
    color: #fff;
    text-decoration: none;
    font-size: 22px;
    text-align: center;
    background-color: #FF734C;
     line-height: 60px;
    }
     }

      
     }
</style>