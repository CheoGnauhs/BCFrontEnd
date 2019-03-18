<template>
  <div class="order-detail-item">
    <h3 class="title">区块信息</h3>
    <el-container>
      <div class="aside">
        <!-- <img :src="order.image" class="image"> -->
        <div class="image" :style="{'background-image':'url('+order.image}"></div>
        <div class="item-info">
          <div class="item-title">{{order.title}}</div>
        </div>
      </div>
      <el-main style="padding: 10px 100px 20px 20px">
        <div class="right">
          <el-tag size="medium">交易创建时间:{{order.created_at}}</el-tag>
          <el-tag type="success" size="medium">上个区块号:{{order.previous_chain_id}}</el-tag>
          <el-tag type="success " size="medium">订单区块号:{{order.chain_id}}</el-tag>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "OrderDetailItem",
  props: {
    order: Object
  },
  data() {
    return {};
  },
  methods: {
    register() {}
  }
};
</script>

<style scoped>
.order-detail-item {
  width: fit-content;
  border: 1px solid #dcdfe6;
  padding: 15px;
  border-radius: 5px;
  margin: 0 auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.title {
  margin: 10px 0;
  color: #409eff;
}
.image {
  width: 160px;
  height: 120px;
  background: no-repeat center;
  background-size: auto 160px;
  border: 1px solid #dcdfe6;
}
.aside {
  width: 160px;
  display: flex;
  flex-direction: column;
}
.item-title {
  font-size: 14px;
  color: #909399;
  margin-top: 5px;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.right > span {
  margin-bottom: 10px;
  font-family: monospace;
}
</style>
