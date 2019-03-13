<template>
  <div>
    <el-card v-for="(item,index) in commodityInformations" :key="index" shadow="never" class="box-card">
      <div slot="header" class="card-head">
        <span class="commodity-name">{{item.commodityName}}</span>
        <i class="el-icon-delete"></i>
      </div>
      <div class="card-container">
        <img class="commodity-pic" alt="commodity-pic" :src="item.commodityPic">

        <div class="commodity-info">
          <span class="commodity-details">订单编号：{{item.commodityId}}</span>
          <span class="commodity-details">价格：{{item.commodityPrice}}</span>
          <span class="commodity-details">完成情况：{{item.commodityState}}</span>
        </div>
        <div class="comment">
          <el-button type="primary">查看评价</el-button>
          <el-button type="primary">添加评价</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "FeedSteam",
  data() {
    return {
      commodityInformations: [
        {
          commodityId: 123456789012345678,
          commodityName: "货物1",
          commodityPic: require("../assets/commodityPic.jpg"),
          commodityPrice: 100,
          commodityState: "未完成"
        },
        {
          commodityId: 123456789012345679,
          commodityName: "货物2",
          commodityPic: require("../assets/commodityPic.jpg"),
          commodityPrice: 200,
          commodityState: "已完成"
        },
        {
          commodityId: 123456789012345680,
          commodityName: "货物3",
          commodityPic: require("../assets/commodityPic.jpg"),
          commodityPrice: 200,
          commodityState: "已完成"
        }
      ]
    };
  }
};
</script>

<style scoped>
.box-card {
  width: 870px;
  margin:5px auto;
  border: solid 1px rgb(140, 197, 255);
  margin-bottom: 20px;
}
.card-head {
  display: flex;
  justify-content: space-between;
}
.card-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.commodity-name{
  font-size: 16px;
  color: #606266;
}
.commodity-details {
  color: #909399;
  margin-right: 40px;
}
.commodity-info {
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
}
</style>