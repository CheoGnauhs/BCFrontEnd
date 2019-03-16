<template>
  <div class="credit-body">
    <el-button id="change-button" type="primary">修改信息</el-button>
    <div class="card-wrapper">
      <div class="card-head">
        <span slot="title">
          <i class="el-icon-info"></i>基本信息
        </span>
      </div>
      <div class="card-container">
        <span class="user-info">姓名：{{ info.handle }}</span>
        <span class="user-info">手机：{{ info.telephone }}</span>
        <span class="user-info">邮箱：{{ info.email }}</span>
      </div>
    </div>
    <div class="card-wrapper">
      <div class="card-head">
        <span>
          <i class="el-icon-location"></i>居住信息
        </span>
      </div>
      <div class="card-container">
        <span class="user-info">行政区划：{{ info.district }}</span>
        <span class="user-info">详细地址：{{ info.address }}</span>
      </div>
    </div>
    <div class="card-wrapper">
      <div class="card-head">
        <span>
          <i class="el-icon-share"></i>区块链信息
        </span>
      </div>
      <div class="card-container">
        <span class="user-info">信用评分：
          <el-rate
            class="user-rate"
            v-model="info.credit"
            disabled="true"
            show-score="true"
            allow-half="true"
          ></el-rate>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditBody",
  props: {
    info: Object
  },
  data() {
    return {
      // userInfo: {
      //   username: "岩松松松松松",
      //   telephone: "13112345678",
      //   email: "1234@tongji.edu.cn",
      //   blockChainCredit: 0,
      //   district: "上海市杨浦区",
      //   address: "四平路1239号同济大学",
      //   avatarSrc: require("../assets/avatar.jpg"),
      //   creditRate: "4.8"
      // }
    };
  },
  computed: {
    userInfo() {
      this.$parent.$data.userInfo
    }
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
.card-wrapper:last-child {
  margin: 0;
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
.user-rate {
  display: inline-block;
}
.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
</style>
