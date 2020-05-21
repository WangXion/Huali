<template >
    <div class="login" >
        <div class="content">
            <h1>注册</h1>
           <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item  prop="username" >
                <el-input v-model.number="ruleForm.username" placeholder="请输入要注册的账号" type="text" prefix-icon='el-icon-user-solid' ></el-input>
            </el-form-item>
            <el-form-item  prop="password">
                <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"
                prefix-icon='el-icon-lock'></el-input>
            </el-form-item>
            <el-form-item>
                <el-button  type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
               
               
            </el-form-item>
            </el-form>  
              <a href="#/">去登录</a>
   </div>

    </div>
</template>
<script>
 export default {
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
         username:[
            {required:true,message:"请输入账号",trigger:'blur'},
            {min:2,max:6,message:"长度在2到6之间",trigger:"blur"}
         ],
         password:[
            {required:true,message:"请输入密码",trigger:'blur'},
            {min:4,max:16,message:"长度在4到16之间",trigger:"blur"},
         ]
        },
        db:[]
      };
    },
    methods: {
      submitForm(formName) {
              var username = this.ruleForm.username;
              var password = this.ruleForm.password;
        this.$refs[formName].validate((valid) => {
          if (valid) {
              // console.log(this.$axios)
              this.$axios.post('http://localhost:3000/users/Register',{username:username,password:password})
              .then((data)=>{
                  //  console.log(data)
                   if (data.data=="200") {
                     this.$router.push("/")
                   }else{
                      this.$router.push("/register")
                   }


                  }
              )                               
          } else {
            console.log('error submit!!');
            //阻止表单默认跳转
            return false;
          }
        });
      },
      //重置方法
      resetForm(formName) {
        //   console.log(this)
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="less" scoped>

    .login{
      width: 100vw;
      height: 100vh;
      background-image: url('https://ae01.alicdn.com/kf/Haf317c01ed6049bc8fcfcb120beb802cP.jpg');
      background-size:100% ;
     .content{
         width: 60%;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%,-50%);
         border-radius: 5px;
         border: 1px solid #e8e8e8;
         padding: 20px;
         background: white;
  
          h1{
              text-align: center;
              margin-bottom: 20px;
          }
    a{
       text-decoration: none;
       color: gray;
       position: absolute;
       right: 45px;
       bottom: 45px;
     }
     }
     }
</style>
        


