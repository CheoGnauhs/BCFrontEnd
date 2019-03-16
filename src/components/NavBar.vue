<template>
  <el-row class="nav-bar" type="flex" justify="space-between">
    <el-col class="left-area">
      <el-col class="logo-area">
        <img class="logo" src="../assets/logo.png" alt="logo">
        <span class="logo-text">浣熊</span>
      </el-col>
      <el-col>
        <el-menu :default-active="actpage" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">
            <router-link to="/">首页</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/new-item">物品发布</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/user-center">个人中心</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col class="search-wrapper">
        <el-input
          class="search-input"
          placeholder="请输入您要搜索的物品"
          prefix-icon="el-icon-search"
          v-model="searchInput"
        ></el-input>
        <el-button icon="el-icon-search" type="primary">搜索</el-button>
      </el-col>
    </el-col>
    <el-col class="link-wrapper" :span="2">
      <span class="link-area" v-if="hasToken">
        <a @click="signout">退出登录</a>
      </span>
      <span class="link-area" v-else>
        <router-link to="/login">登陆</router-link>
        /
        <router-link to="/register">注册</router-link>
      </span>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "NavBar",
  props: ["actpage"],
  data() {
    return {
      searchInput: ""
    };
  },
  methods: {
    signout() {
      localStorage.removeItem('token')
      this.$router.go('/')
    }
  },
  computed: {
    hasToken() {
      return localStorage.getItem('token')
    }
  }
};
</script>

<style scoped>
.logo-area {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo-text {
  color: #409eff;
  font-size: 20px;
  margin-left: 5px;
}
.el-menu {
  border: none !important;
}
.el-menu-item > a {
  text-decoration: none;
}
.nav-bar {
  min-width: 1150px;
  border-bottom: solid 1px #e6e6e6;
}
.search-input {
  display: inline-block;
  width: 195px;
  margin-right: 5px;
}
.nav-bar > div {
  display: flex;
  align-items: center;
}
.link-area {
  color: #909399;
}
.link-area > a {
  text-decoration: none;
  color: #409eff;
}
.logo {
  height: 40px;
}
.left-area {
  display: flex;
  justify-content: left;
}
.left-area > div {
  width: fit-content;
  margin-right: 15px;
}
</style>
