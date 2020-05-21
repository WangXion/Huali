<template >
    <div class="login" >
        <div class="content">
            <h1>登录</h1>
          
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名:" prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off" prefix-icon='el-icon-user' ></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
                <el-input type="text" v-model="ruleForm.password" autocomplete="off" prefix-icon='el-icon-lock'></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
            </el-form>
                  <a href="#/register">去注册</a>
   </div>
 
    </div>
</template>
<script>

  export default {
    data() {
        //登录表单的数据绑定
      return {
        ruleForm: {
          password: '',
          username:''
        },
        //验证是否合法规则
        rules: {
            //验证用户名是否符合
          username: [
            { required:true,message:'请输入登录账号',trigger:'blur' },
            {min:1,max:6,message:'长度在1-6个字符',trigger:'blur'}
          ],
           //验证密码是否符合
             password: [
            { required:true,message:'请输入登录密码',trigger:'blur' },
            {min:6,max:18,message:'长度在6-18个字符',trigger:'blur'}
          ],

        }
      };
    },
    methods: {
        
        //登录的方法
      submitForm(formName) {
              var username = this.ruleForm.username;
              var password = this.ruleForm.password;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //   console.log(this.$axios)
              this.$axios.get('http://localhost:3000/users')
              .then(
                  (data)=>{
                  //  console.log(data.data)
                let information=data.data
                let  info=information.some((item)=>{
                   return item.username==username&&item.password==password;
                })
                if (info) {
                     //设置userinfo令牌
                        window.sessionStorage.setItem('userinfo',this.ruleForm.username)
                        this.$message({message: '登录成功,请稍后...',type: 'success'});
                        this.$router.push('/home') 
                }else{

                    this.$message('登录失败请先去注册');
                    this.$router.push('/register') 
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

     }
  a{
       text-decoration: none;
       color: gray;
       position: absolute;
       right: 50px;
       bottom: 50px;
     }
     }
</style>