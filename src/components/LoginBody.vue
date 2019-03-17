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
        <router-link to="/register">这里</router-link>
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
      let data = {
        handle: this.userInfo.username,
        password: this.userInfo.password
      };
      fetch('/api/sessions', {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error()
          }
        })
        .then(res => {
          localStorage.setItem('token', res.token)
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          this.loadState = false
          console.log(this.$route.query)
          this.$router.push(this.$route.query.redirect || '/')
        })
        .catch(err => {
          this.$message({
            message: '登录失败',
            type: 'error'
          })
          this.loadState = false
        })
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
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.wide-button {
  width: 100%;
}
</style>
