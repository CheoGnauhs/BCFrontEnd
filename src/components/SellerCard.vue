<template>
  <div class="profile-card">
    <h3 class="header">卖家信息</h3>
    <div class="wrapper">
      <div class="left">
        <IdenIcon :size="80" :hash="profile.avatar" class="icon"/>
        <div class="user-name">{{profile.handle}}</div>
      </div>
      <div class="right">
        <div class="user-info credit">
          <el-rate
            class="user-rate"
            v-model="profile.credit"
            :disabled="true"
            :show-score="true"
            :allow-half="true"
          ></el-rate>
        </div>
        <div
          class="user-info addr"
        >{{CodeToText[districtCodes[0]]}}{{CodeToText[districtCodes[1]]}}{{CodeToText[districtCodes[2]]}}</div>
        <div class="user-info email">{{profile.email}}</div>
        <div class="user-info items">共有{{profile.total_items}}个物品</div>
      </div>
    </div>
  </div>
</template>

<script>
import { CodeToText } from "element-china-area-data";
import IdenIcon from "./IdenIcon.vue";
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
.header {
  margin-top: 10px;
  padding: 10px 0;
  background: rgb(198, 226, 255);
  font-size: 16px;
  font-weight: normal;
  color: black;
  padding-left: 10px;
}
.wrapper {
  display: flex;
}
.right {
  margin-left: 20px;
}
.profile-card {
  margin-top: 16px;
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
.credit:before {
  content: "评分：";
}
.user-info {
  display: flex;
  align-items: center;
  font-family: monospace;
  margin-bottom: 5px;
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