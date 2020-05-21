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
              <a href=""></a> 退出
            </el-menu-item>
          </el-submenu>
        </el-menu>
    
      </el-aside>
     <el-container>
        <el-main>
          <!-- 搜索和添加区域 -->
          <el-row style="margin-bottom: 10px;" :gouter="20">
             <el-col :span="8">
             <el-input placeholder="请输入搜索内容" v-model="queryinfo.query" >
                 <el-button slot="append" icon="el-icon-search"></el-button>
             </el-input>
              </el-col>
               <el-col :span="4">
             <el-button type="primary" @click="dialogVisible = true"  >添加用户</el-button>
             </el-col>
          </el-row>
                         <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/users' }">网站管理员信息</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/users">管理员信息</a></el-breadcrumb-item>

           </el-breadcrumb>
          <el-table :data="tableData">
            <el-table-column prop="id" label="ID" width="100"></el-table-column>
              <el-table-column prop="username" label="用户名" width="450"></el-table-column>
              <el-table-column prop="password" label="密码" width="450"></el-table-column>
              <el-table-column label='操作' width="200">
                 <template slot-scope="scope" >
                    <el-button type="primary" @click="showDialogVisible(scope.row.id)">修改</el-button>
                    <el-button type="danger" @click="removeUserById(scope.row.id)">删除</el-button>
                 </template>
        </el-table-column>
          </el-table>
      <!-- 分页 -->
    <!-- <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryinfo.pagenum"
      :page-sizes="[2, 5, 8, 10]"
      :page-size="queryinfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination> -->

    <!-- 添加用户 -->
        <el-dialog title="添加用户" 
        :visible.sync="dialogVisible" width="50%" 
         @close="addDialogClosed">
            <!-- 主体区域 -->
     <el-form :model="addForm" :rules="addFormRules"
      ref="addFormRef" label-width="70px">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="addForm.username"></el-input>
  </el-form-item>
    <el-form-item label="密  码" prop="password">
    <el-input v-model="addForm.password"></el-input>
  </el-form-item>
    </el-form>
          <!-- 底部区域 -->
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false" type="info">取 消</el-button>
            <el-button @click="addUser" type="primary">确 定</el-button>
          </span>
        </el-dialog>

        <!-- //修改信息 -->
        <el-dialog
  title="修改用户" :visible.sync="editDialogVisible" width="50%">
  <el-form :model="editForm" :rules="editFormRules"
   ref="editFormRef" label-width="70px">
    <el-form-item label="用户名">
      <el-input v-model="editForm.username" prop="username"></el-input>
    </el-form-item>
        <el-form-item label="密 码">
      <el-input v-model="editForm.password" prop="password"></el-input>
    </el-form-item>
  </el-form> 
  <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
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
       
         
         //获取用户列表的参数对像
         queryinfo:{
           query:'',
           //当前页数
           pagenum:1,  
           //每页显示多少条数据
           pagesize:2
         },
         userlist:[],
         total:0,
         //用于添加对话框显示隐藏
         dialogVisible:false,
         //用于修改用户的对话框显示隐藏
         editDialogVisible:false,
         //查询到的用户信息对象
         editForm:{
          username:'',
          password:'',
         },
         //修改表单的验证规则
         editFormRules:{
          password:[
          {required:true,message:'请输入密码',trigger:'blur'},
          {min:4 ,max:10,message:'密码长度在4-10字符之间',trigger:'blur'}
        
        ]
         },
        //添加表单数据
        addForm:{
          username:'',
          password:'',
          
        },
        //添加表单验证规则
       addFormRules:{
         username:[
        {required:true,message:'请输入用户名',trigger:'blur'},
        {min:2,max:6,message:'用户名长度在2-6字符之间',trigger:'blur'}
        
        ],
         password:[
        {required:true,message:'请输入密码',trigger:'blur'},
        {min:4,max:10,message:'密码长度在4-10字符之间',trigger:'blur'}
        
        ]
       }
      }  
    },
    //方法
    methods: {
        iSon(){
          this.iSTrue= !this.iSTrue
        },
         //点击按钮添加新用户
    addUser(){
       this.$refs.addFormRef.validate(valid=>{
        //  console.log(valid)
        //  console.log(this.addForm)
         if (valid) {
           return this.$axios.post('http://localhost:3000/users/users',this.addForm)
           .then((data)=>{
                  //  console.log(data)
                   if (data.data=="200") {
               this.$message.success('添加用户成功')
               this.dialogVisible=false
                     this.getData();
                   }else{
                    this.$message.error('添加用户失败,用户已存在')
                   }


                  })
           }

       })
    },
        getData(){
          this.$axios.get('http://localhost:3000/users')
          .then((res)=>{
              //  console.log(res.data)
               var shuju=res.data
              //  console.log(this.tableData)
                this.tableData=shuju
                  //控制台打印请求成功时返回的数据
               //bind(this)可以不用
          })
        }, 
        //显示修改信息框
         showDialogVisible(){
           this.editDialogVisible=true
      //    this.$refs.addFormRef.validate(valid=>{
      //   //  console.log(valid)
      //    console.log(this.addForm)
      //    if (valid) {
      //      return this.$axios.post('http://localhost:3000/users/update',this.editForm)
      //      .then((data)=>{
      //             //  console.log(data)
      //              if (data.data=="200") {
      //          this.$message.success('添加用户成功')
      //           this.editDialogVisible=true
      //                this.getData();
      //              }else{
      //               this.$message.error('添加用户失败,用户已存在')
      //              }


      //             })
      //      }

      //  })
     
          
         },
                //根据ID删除对应内容
           async removeUserById(id){
              //  console.log(id)
              // 弹框询问是否删除
            const confirmResult= await this.$confirm(
              '此操作将永久删除该用户, 是否继续?',
               '提示',
               {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
          }).catch(err=> err)
          //如果用户确认删除 则返回字符串confirm
          //如果用户取消删除 则返回字符串cancel
        // console.log(confirmResult)
            if (confirmResult !=="confirm") {
                 return this.$message.info('已取消删除')
            }else{

             return this.$axios.post('http://localhost:3000/users/delete',{id:id})
           .then((data)=>{
                  //  console.log(data)
                   if (data.data=="200") {
                   this.getData()
               return this.$message.success('已删除')
                   
                    }
                  })
                  
            }

          

     
            },
    
           //退出登录
         loginOut(){
      
           this.$router.push("/")
         },  
             //监听添加用户模态框的关闭事件
            addDialogClosed(){
             this.$refs.addFormRef.resetFields()
    },
   
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
