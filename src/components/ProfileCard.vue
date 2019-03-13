<template>
  <div class="profile-card">
    <img class="avatar" :src="userInfo.avatarSrc" alt="avatar">
    <div class="user-name">{{userInfo.userName}}</div>
    <div class="user-info">
      <img class="tag" src="../assets/location.png" alt="location">
      {{userInfo.location}}
    </div>
    <div class="user-info">
      <img class="tag" src="../assets/email.png" alt="email">
      {{userInfo.email}}
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  data() {
    return {
      userInfo: {
        userName: "谭爽爽爽爽",
        location: "同济大学",
        email: "tshuang96@gmail.com",
        avatarSrc: require("../assets/avatar.jpg")
      }
    };
  }
};
</script>

<style scoped>
.profile-card {
  display: flex;
  flex-direction: column;
}
.avatar {
  width: 175px;
  height: 175px;
  border-radius: 5px;
}
.tag{
  margin-right: 3px;
}
.user-info {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #909399;
  margin-top: 5px;
}
.user-name {
  font-size: 16px;
  padding: 15px 0 10px 0;
  border-bottom: solid 1px #dcdfe6;
  color: #606266;
}
.credit-info {
  font-size: 14px;
}
</style>