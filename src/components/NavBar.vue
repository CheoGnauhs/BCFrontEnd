<template>
  <el-row class="nav-bar" type="flex" justify="space-between">
    <el-col class="left-area">
      <el-col>
        <img class="logo" src="../assets/logo.png" alt="logo">
      </el-col>
      <el-col>
        <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">物品发布</el-menu-item>
          <el-submenu index="3">
            <template slot="title">个人信息</template>
            <el-menu-item index="3-1">我的订单</el-menu-item>
            <el-menu-item index="3-2">我的物品</el-menu-item>
            <el-menu-item index="3-3">我的收藏</el-menu-item>
            <el-menu-item index="3-4">我的信用</el-menu-item>
          </el-submenu>
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
      <span class="link-area">
        <a href="/login">登陆</a>
        /
        <a href="/register">注册</a>
      </span>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "NavBar",
  props: [],
  data() {
    return {
      searchInput: ""
    };
  }
};
</script>

<style scoped>
.el-menu {
  border: none !important;
}
.nav-bar {
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
.left-area{
  display:flex;
  justify-content: left;
}
.left-area>div{
  width: fit-content;
  margin-right: 15px;
}
</style>
