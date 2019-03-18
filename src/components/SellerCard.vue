<template>
  <div class="profile-card">
    <IdenIcon :size="80" :hash="profile.avatar" class="icon" />
    <div class="right">
      <div class="user-name">{{profile.handle}}</div>
      <div class="user-info addr">{{CodeToText[districtCodes[0]]}}{{CodeToText[districtCodes[1]]}}{{CodeToText[districtCodes[2]]}}</div>
      <div class="user-info email">{{profile.email}}</div>
      <div class="user-info items">共有{{profile.total_items}}个物品</div>
    </div>
  </div>
</template>

<script>
import { CodeToText } from "element-china-area-data";
import IdenIcon from './IdenIcon.vue'
export default {
  name: "SellerCard",
  props: {
    profile: Object
  },
  data() {
    return {
      CodeToText
    };
  },
  components: {
    IdenIcon
  },
  computed: {
    districtCodes() {
      return this.profile.district.split("/");
    }
  }
};
</script>

<style scoped>
.profile-card {
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
.icon {
  border-radius: 5px;
}
.tag {
  margin-right: 3px;
}
.addr:before {
  content: "地址：";
}
.email:before {
  content: "邮箱：";
}
.user-info {
  display: flex;
  align-items: center;
  font-family: monospace;
}
.user-name:before {
  content: "用户名：";
}
.user-name {
  font-family: monospace;
  padding: 0 0 10px 0;
  color: #606266;
}
.right {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
}
</style>