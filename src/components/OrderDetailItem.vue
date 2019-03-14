<template>
  <div class="order-detail-item">
    <el-row :gutter="10" style="padding: 20px 0 20px 0">
      <el-container class="single-item">
        <el-header style="display: flex; align-items: center; padding: 0px">
          <el-row type="flex" class="row-bg" justify="space-between" style="width: 100%">
            <el-col :span="12" style="margin: 0 5px 0 0;">
              <el-row type="flex" class="row-bg">
                <el-col>
                  <el-tag size="small">时间: {{data.time}}</el-tag>
                </el-col>
                <el-col>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    v-bind:content="data.orderId"
                    placement="bottom-start"
                  >
                    <el-tag type="success " size="small">订单区块号: {{data.orderId.substr(0, 8)+'...'}}</el-tag>
                  </el-tooltip>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12" style="margin: 0 5px 0 0">
              <el-badge type="primary" value="卖家" class="item">{{data.userName}}</el-badge>
            </el-col>
            <el-col :span="12">
              <div class="grid-content"></div>
            </el-col>
          </el-row>
        </el-header>
        <el-container>
          <div class="aside">
            <img v-bind:src="data.picPath" class="image">
            <div class="item-info">
              <div class="item-title">{{data.title}}</div>
              <div class="item-description">{{data.description}}</div>
            </div>
          </div>
          <el-main style="padding: 10px 100px 20px 20px">
            <el-collapse accordion>
              <el-collapse-item>
                <template slot="title">
                  订单价格
                  <i style="padding: 0 0 0 5px" class="header-icon el-icon-goods"></i>
                </template>
                <div>商品：¥ {{data.price}}</div>
              </el-collapse-item>
              <el-collapse-item>
                <template slot="title">
                  发货地
                  <i style="padding: 0 0 0 5px" class="header-icon el-icon-location-outline"></i>
                </template>
                <div>{{data.from}}</div>
              </el-collapse-item>
              <el-collapse-item>
                <template slot="title">
                  收货地
                  <i style="padding: 0 0 0 5px" class="header-icon el-icon-location-outline"></i>
                </template>
                <div>{{data.to}}</div>
              </el-collapse-item>
            </el-collapse>
          </el-main>
        </el-container>
      </el-container>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "OrderDetailItem",
  props: ["data"],
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
  padding: 0 5% 0 5%;
}
.single-item {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 20px 20px 20px;
  border-radius: 5px;
}
.image {
  width: 100px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.aside {
  width: 300px;
  display: flex;
  flex-direction: column;
}
.item-info {
  width: 100%;
  height: 100%;
}
.item-title {
  font-size: 18px;
  color: #606266;
  margin-bottom: 5px;
}
.item-description {
  font-size: 14px;
  color: #909399;
}
</style>
