<template>
  <div class="backstage">
    <el-header>
      后台管理系统
      <i class="i" @click="iSon" :class="iSTrue?'el-icon-s-fold':'el-icon-s-unfold'"></i>
    </el-header>

    <el-container style="height: 600px;">
      <el-aside :width="iSTrue?'0':'200px'" style>
        <el-menu :default-openeds="[]"><!-- //默认打开标签 -->

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <a href="/home">首页</a>
            </template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>主页管理
            </template>
            <el-menu-item-group>
              <template slot="title">内容分类</template>
              <el-menu-item index="2-1">
                <a href="/banner">轮播</a>
              </el-menu-item>
              <el-menu-item index="2-2">
                <a href="/content">内容</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>分页管理
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-1">
                <a href="/hot">热门推荐</a>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-2">
                <a href="/Flower">鲜花</a>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-3">
                <a href="/Preserved"></a> 永生花
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-4">
                <a href="/Cake">蛋糕</a>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-5">
                <a href="/Disclosure"></a> 特色礼品
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-6">
                <a href="/Gift">礼篮</a>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-7">
                <a href="/Bonds">绿植花卉</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-shopping-cart-full"></i>订单详情
            </template>
            <el-menu-item-group>
              <template slot="title">订单明细</template>
              <el-menu-item index="4-1">
                <a href="/Underway">进行中</a>
              </el-menu-item>
              <el-menu-item index="4-2">
                <a href="/history">历史订单</a>
              </el-menu-item>
              <el-menu-item index="4-3">
                <a href="/Allorders">全部订单</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-custom"></i>网站信息管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">
                <a href="/users">管理员信息</a>
              </el-menu-item>
              <el-menu-item index="5-2">
                <a href="/Information"></a> 会员信息
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>设置
            </template>
            <el-menu-item index="6-1" @click="loginOut()">
              <a href="" ></a> 退出
            </el-menu-item>
          </el-submenu>
        </el-menu>
    
      </el-aside>
     <el-container>
        <el-main>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/Underway' }">进行中</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/history">历史订单</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="/Allorders">全部订单</a></el-breadcrumb-item>
           </el-breadcrumb>
          <el-table :data="tableData">
              <el-table-column prop="name" label="商品名称" width="150"></el-table-column>
              <el-table-column prop="count" label="商品数量" width="100"></el-table-column>
              <!-- <el-table-column prop="img" label="商品图片" width="150">
                  <template   slot-scope="scope">            
                       <img :src="scope.row.img"  min-width="70" height="70" />
               </template>
              </el-table-column> -->
              <el-table-column prop="price" label="商品价格" width="100"></el-table-column>
              <el-table-column prop="site" label="配送地址" width="150"></el-table-column>
              <el-table-column prop="delivery" label="配送时间" width="150"></el-table-column>
              <el-table-column prop="dynamic" label="物流动态" width="100"></el-table-column>
              <el-table-column prop="olddelivery" label="结束时间" width="150"></el-table-column>
              <el-table-column label='操作' width="250">
                 <template slot-scope="scope" >
                    <el-button type="danger"  @click="edit(scope.$index)">删除订单</el-button>
                 </template>
        </el-table-column>
          </el-table>
        </el-main>
      </el-container>
      
    </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
         tableData:[],
         iSTrue:false,

      }  
    },
    //方法
    methods: {
        iSon(){
          this.iSTrue= !this.iSTrue
        },
        getData(){
          this.$axios.get('http://localhost:3000/allorders')
          .then((res)=>{
              //  console.log(res.data)
               var shuju=res.data
              //  console.log(this.tableData)
                this.tableData=shuju
                  //控制台打印请求成功时返回的数据
               //bind(this)可以不用
          })
        }, 
            edit(index){
      console.log(this.list[index])
         },
           //退出登录
         loginOut(){
      
           this.$router.push("/")
         }
    },   
    created (){
      this.getData()
    },
  }
</script>

<style lang="less" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  background: gray;
}
a {
  text-decoration: none;
  color: #303133;
  
}
.i {
  font-size: 24px;
  margin-left: 61px;
  text-align: center;
  background: gray;
}
.el-aside{
   background: gray;
   .el-menu{
     border-right: ;
   }
}
.el-menu-item-group{
    background: gray;
}
.el-menu-item {
   background: gray;
}
.el-submenu{
  background: gray;

}
</style>
