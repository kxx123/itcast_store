<template>
   <div  class="login">
      <el-form class="login-form" ref="form" :model="form" label-width="80px" label-position='top'>
            <h2>用户登录</h2>
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" placeholder="输入密码">
                </el-input>
            </el-form-item>
            <el-form-item> 
                <el-button type="primary" @click="onSubmit" class="login-btn">登录</el-button>
            </el-form-item>
      </el-form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
};
</script>
<style>
.login{
   background-color: #324152;
   height:100%;
   display:flex;
   justify-content: center;
   align-items: center;
}
.login .login-form{
    background-color:#fff;
    width: 400px;
    padding:30px;
    border-radius: 5px;
}
.login .login-btn{
    width:100%;
}
</style>
