<template>
  <div class="profile-card">
    <img class="avatar" :src="info.avatar" alt="avatar">
    <div class="user-name">{{info.userName}}</div>
    <div class="user-info">
      <img class="tag" src="../assets/location.png" alt="location">
      {{CodeToText[info.district[0]]}}{{CodeToText[info.district[1]]}}{{CodeToText[info.district[2]]}}
    </div>
    <div class="user-info">
      <img class="tag" src="../assets/email.png" alt="email">
      {{info.email}}
    </div>
  </div>
</template>

<script>
import { CodeToText } from "element-china-area-data";
export default {
  name: "ProfileCard",
  data() {
    return CodeToText;
  },
  props: {
    info: Object
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
.tag {
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