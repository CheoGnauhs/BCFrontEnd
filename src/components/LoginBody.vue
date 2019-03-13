<template>
  <div class="login-body">
    <el-form :model="userInfo">
      <h3>登录您的账号</h3>
      <el-form-item label="用户名">
        <el-input v-model="userInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="userInfo.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loadState" class="wide-button" type="primary" @click="onLogin">登陆</el-button>
      </el-form-item>
      <p>
        新用户？点击
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
      loadState: false,
      userInfo: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onLogin: function() {
      this.loadState = true;
      let url = "http://5c888fbf41fb3f001434bc34.mockapi.io/api/v1/login";
      let data = {
        username: this.userInfo.username,
        password: this.userInfo.password
      };
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          if (res.result === "success") {
            alert("done");
          }
          this.loadState = false;
        });
    }
  }
};
</script>

<style scoped>
p {
  font-size: 14px;
}
.login-body {
  border-radius: 5px;
  border: 1px #dcdfe6 solid;
  width: 300px;
  padding: 20px;
  margin: 0 auto;
}
.wide-button {
  width: 100%;
}
</style>
