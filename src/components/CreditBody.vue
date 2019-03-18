<template>
  <div class="credit-body">
    <el-button id="change-button" type="primary" @click="redirectPage">修改信息</el-button>
    <div class="card-wrapper">
      <div class="card-head">
        <span slot="title">
          <i class="el-icon-info"></i>基本信息
        </span>
      </div>
      <div class="card-container">
        <span class="user-info">用户名：{{ info.handle }}</span>
        <span class="user-info">姓名：{{ info.name }}</span>
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
        <span
          class="user-info"
        >行政区划：{{ CodeToText[districtCodes[0]]}}{{CodeToText[districtCodes[1]]}}{{CodeToText[districtCodes[2]]}}</span>
        <span class="user-info">详细地址：{{ info.address }}</span>
      </div>
    </div>
    <div class="card-wrapper">
      <div class="card-head">
        <span>
          <i class="el-icon-share"></i>区块链信息
        </span>
        <el-tooltip placement="right">
          <div slot="content">本评分根据区块链上的交易信息自动算出</div>
          <i class="el-icon-more"></i>
        </el-tooltip>
      </div>
      <div class="card-container">
        <span class="user-info">信用评分：
          <el-rate
            class="user-rate"
            v-model="info.credit"
            :disabled="true"
            :show-score="true"
            :allow-half="true"
          ></el-rate>
        </span>
      </div>
    </div>
    <div class="card-wrapper">
      <div class="card-head">
        <span>
          <i class="el-icon-goods"></i>积分信息
        </span>
      </div>
      <div class="card-container">
        <span class="user-info">二手币余额：{{info.balance}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { CodeToText } from "element-china-area-data";
export default {
  name: "CreditBody",
  props: {
    info: Object
  },
  data() {
    return {
      CodeToText
    };
  },
  methods: {
    redirectPage() {
      this.$router.push("/detail-info");
    }
  },
  computed: {
    districtCodes() {
      // eslint-disable-next-line
      return this.info.district.split("/");
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
  margin-right: 5px;
}
.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
</style>
