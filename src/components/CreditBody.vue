<template>
  <div class="credit-body">
    <el-button id="change-button" type="primary">修改信息</el-button>
    <div class="card-wrapper">
      <div class="card-head">
        <span>基本信息</span>
      </div>
      <div class="card-container">
        <span class="user-info">姓名：{{ userInfo.username }}</span>
        <span class="user-info">手机：{{ userInfo.telephone }}</span>
        <span class="user-info">邮箱：{{ userInfo.email }}</span>
      </div>
    </div>
    <div class="card-wrapper">
      <div class="card-head">
        <span>学校信息</span>
      </div>
      <div class="card-container">
        <span class="user-info">学校名称：{{ userInfo.school }}</span>
        <span class="user-info">所在校区：{{ userInfo.campus }}</span>
      </div>
    </div>
    <div class="card-wrapper">
      <div class="card-head">
        <span>区块信息</span>
      </div>
      <div class="card-container">
        <span class="user-info">区块信用评分：{{ userInfo.blockChainCredit }}</span>
        <span class="user-info">区块记录数目：{{ userInfo.blockChainNum }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditBody",
  data() {
    return {
      userInfo: {
        username: "岩松松松松松",
        telephone: "13112345678",
        email: "1234@tongji.edu.cn",
        zhimaCredit: 0,
        blockChainCredit: 0,
        blockChainNum: 0,
        school: "同济大学",
        campus: "四平校区",
        avatarSrc: require("../assets/avatar.jpg")
      }
    };
  }
};
</script>

<style scoped>
.credit-body {
  padding-left: 10px;
}
#change-button {
  position: absolute;
  top: 15px;
  left: 885px;
}
.user-avatar {
  height: 80px;
  width: 80px;
}
.credit-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.box-card {
  margin-top: 20px;
  margin-bottom: 20px;
}
.card-wrapper {
  margin-bottom: 15px;
}
.card-head {
  font-size: 16px;
  margin-bottom: 10px;
  color: #606266;
}
.card-container {
  font-size: 14px;
  color: #909399;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.user-info {
  margin-bottom: 5px;
}
</style>
