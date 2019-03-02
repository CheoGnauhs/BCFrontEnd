<template>
  <div class="login-body">
    <el-form :model="userInfo">
      <h3>登录您的账号</h3>
      <el-form-item label="用户名">
        <el-input v-model="userInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userInfo.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="wide-button" type="primary" @click="onLogin">登陆</el-button>
      </el-form-item>
      <p>新用户？点击
        <a href="/#/register">这里</a>
        注册
      </p>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "LoginBody",
  data() {
    return {
      userInfo: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onLogin: function() {
      let data = {
        username: this.userInfo.username,
        password: this.userInfo.password
      };
      // eslint-disable-next-line
      console.log(data);
    }
  }
};
</script>

<style scoped>
p{
  font-size: 14px;
}
.login-body {
  border-radius: 5px;
  border: 1px #909399 solid;
  width: 300px;
  padding: 20px;
  margin: 0 auto;
}
.wide-button {
  width: 100%;
}
</style>
