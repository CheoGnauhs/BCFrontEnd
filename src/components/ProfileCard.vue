<template>
  <div class="profile-card">
    <img class="avatar" :src="avatarSrc.src" alt="avatar">
    <span class="user-name">{{ userName }}</span>
    <span class="credit-info">芝麻信用：{{ zhimaCredit }}</span>
    <span class="credit-info">区块链信用：{{ blockChainCredit }}</span>
    <span class="shool-info">{{ school }}</span>
    <span class="shool-info">{{ campus }}</span>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  data() {
    return {
      userName: "岩松松松松松",
      zhimaCredit: 0,
      blockChainCredit: 0,
      certification: false,
      school: "同济大学",
      campus: "四平校区",
      profiles: "这个人",
      avatarSrc: { src: require("../assets/avatar.jpg") }
    };
  }
};
</script>

<style scoped>
.profile-card {
  display: flex;
  flex-direction: column;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.avatar {
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.shool-info {
  font-size: 14px;
}
.user-name {
  font-size: 21px;
}
.credit-info {
  font-size: 14px;
}
</style>