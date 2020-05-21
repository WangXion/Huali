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
                           <!-- 搜索和添加区域 -->
          <el-row style="margin-bottom: 10px;" :gouter="20">
              <h3>添加主体内容</h3>
          </el-row>
                    <!-- <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"> -->
                    <el-form label-width="100px">
                    <el-form-item label="商品名字" prop="name">
                        <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="描述" prop="Science">
                        <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="全部描述" prop="ScienceAll">
                        <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="花语" prop="flowerLanguage">
                        <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="宣传语" prop="promo">
                        <el-input ></el-input>
                    </el-form-item>
                   <el-form-item label="new商品价格" prop="newPrice">
                        <el-input ></el-input>
                    </el-form-item>    
                   <el-form-item label="old商品价格" prop="oldPrice">
                        <el-input ></el-input>
                    </el-form-item>  
                   <el-form-item label="总售出" prop="num">
                        <el-input ></el-input>
                    </el-form-item>  
                   <el-form-item label="商品数量" prop="thisNum">
                        <el-input ></el-input>
                    </el-form-item>    
                  <el-form-item label="图片" prop="img">
                       <el-upload class="upload-demo"
                        action="上传的地址"
                        list-type="picture-card"
                        :limit='5' 
                        :auto-upload="false"    
                        ref="upload">
                          <i class="el-icon-plus"></i>
                    </el-upload>
                                           <!-- action="上传的地址"
        list-type="picture-card"
        :limit='5'  // 上传图片的个数
        :auto-upload="false"
        :on-exceed='uploadOverrun'  // 判断上传的个数
        :on-preview="handleContImgPreview"   // 点击文件列表中已上传的文件时的钩子
        :on-remove='handleRmove' // 文件列表移除文件时的钩子
        :http-request='submitUpload' // 上传时的请求的接口
        :file-list="fileList"
        ref="upload" -->
                    </el-form-item> 
                    <el-form-item label="详情轮播图片" prop="bannerimg">
                       <el-upload class="upload-demo"
                        action="上传的地址"
                        list-type="picture-card"
                        :limit='5' 
                        :auto-upload="false"
                        ref="upload">
                          <i class="el-icon-plus"></i>
                    </el-upload>
                    </el-form-item>     
                   <el-form-item label="详情介绍图片" prop="detailimg">
                       <el-upload class="upload-demo"
                        action="上传的地址"
                        list-type="picture-card"
                        :limit='5' 
                        :auto-upload="false"
                        ref="upload">
                          <i class="el-icon-plus"></i>
                    </el-upload>
                    </el-form-item>   
                    <el-form-item>
                <!-- <el-dialog :visible.sync="dialogVisible" :append-to-body="true" :close-on-click-modal="false">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog> -->
                <el-button @click='submitAssess'  type="primary">确认添加</el-button>
                    </el-form-item>     
                    </el-form>
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
          this.$axios.get('http://localhost:3000/banner')
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
         },

         submitAssess(){
            this.dialogImageUrl = []; // 存放图片路径的数组
            this.fileName = '';
            this.a.img.forEach((item) => { // this.a是后台编辑时返回给你的数据
                this.dialogImageUrl.push('地址' + item);//item.'后台返回的地址'
                this.fileName += item + ','; // item.'后台返回的地址'   由于返回的是多个图片，所以要拼接起来
            })
            var imgList = [];
            for (var i = 0; i < this.dialogImageUrl.length; i++) {
                imgList.push(this.dialogImageUrl[i]);
            }
            this.fileList = imgList.map((ele) => { // 最后将数据给fileLis
                let item = {};
                item.url = ele;
                return item;
            })
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
