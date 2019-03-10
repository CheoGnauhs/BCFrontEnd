<template>
  <div class="creadit-body">
    <span class="user-name">{{userName}}</span>

    <el-card class="box-card">
      <div slot="header" class="card-head">
        <span>学校信息</span>
      </div>
      <div class="card-container">
        <span class="shool-info">学校名称：{{ school }}</span>
        <span class="shool-info">所在校区：{{ campus }}</span>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="card-head">
        <span>信用信息</span>
      </div>
      <div class="card-container">
        <span class="credit-info">芝麻信用：{{ zhimaCredit }}</span>
        <span class="credit-info">区块链信用：{{ blockChainCredit }}</span>
      </div>
    </el-card>
  </div>

  <!-- 头像背景
学校、校区
实名认证
芝麻信用
区块链信用
信息正在被写入区块链
点状图 闪闪闪 
你的信息被记录在xxx个节点上，占多少百分比
  有多少节点正在保存你的信息-->
</template>

<script>
export default {
  name: "CreditBody",
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
.creadit-body {
  /* height: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.box-card {
  margin-top: 20px;
  margin-bottom: 20px;
}
.card-head {
  width: 588px;
  height: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
}
.card-container {
  height: 100px;

  display: flex;
  flex-direction: column;

  justify-content: space-around;
}
.user-name {
  font-size: 21px;
}
</style>
