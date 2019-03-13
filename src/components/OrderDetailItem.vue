<template>
  <div class="order-detail-item">
    <el-row :gutter="10" style="padding: 20px 0 20px 0">
      <el-container class="singleitem" >
        <el-header style="display: flex; align-items: center; padding: 0px">
          <el-row type="flex" class="row-bg" justify="space-between" style="width: 100%">
            <el-col :span="12" style="margin: 0 5px 0 0;">
              <el-row type="flex" class="row-bg">
                <el-col>
                  <el-tag size="small">时间: {{data.time}}</el-tag>
                </el-col>
                <el-col>
                  <el-tooltip class="item" effect="dark" v-bind:content="data.orderId" placement="bottom-start">
                    <el-tag type="success " size="small">订单区块号: {{data.orderId.substr(0, 5)+'...'}}</el-tag>
                  </el-tooltip>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12" style="margin: 0 5px 0 0">
              <el-badge type="primary" value="卖家" class="item">{{data.userName}} </el-badge>
            </el-col>
            <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
        </el-header>
        <el-container>
          <el-aside class="aside">
            <div style="width:100%; height:100%">
              <img v-bind:src="data.picPath" class="image">
            </div>
            
            <div class="item-name">
              <div><span class="item-title">{{data.title.length > 4? data.title.substr(0, 8)+'...': data.title}}</span></div>
              <div><span class="item-description">{{data.description.length > 20? data.description.substr(0, 20)+'...': data.description  }}</span></div>
            </div>
          </el-aside>
          <el-main style="padding: 10px 100px 20px 20px">
            <el-collapse accordion>
              <el-collapse-item >
                <template slot="title">
                  订单价格<i style="padding: 0 0 0 5px" class="header-icon el-icon-goods"></i>
                </template>
                <div>商品：¥ {{data.price}}</div>
                <div>运费：¥ {{data.carryPrice}}</div>
                <div>合计：¥ {{data.price + data.carryPrice}}</div>
              </el-collapse-item>
              <el-collapse-item>
                <template slot="title">
                  发货地<i style="padding: 0 0 0 5px" class="header-icon el-icon-location-outline"></i>
                </template>
                <div>{{data.from}}</div>
              </el-collapse-item>
              <el-collapse-item >
                <template slot="title">
                  收货地<i style="padding: 0 0 0 5px" class="header-icon el-icon-location-outline"></i>
                </template>
                <div>{{data.to}}</div>
              </el-collapse-item>              
              <el-collapse-item >
                <template slot="title">
                  评分<i style="padding: 0 0 0 5px" class="header-icon el-icon-star-off"></i>
                </template>
                <el-rate
                  v-model="data.rate"
                  disabled
                  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                </el-rate>
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
  props: ['data'],
  data() {
    return {

    };
  },
  methods: {
    register() {
      
    }
  }
};
</script>

<style scoped>
.order-detail-item {
  padding: 0 5% 0 5% ;
}
.singleitem {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 5px 20px 5px 20px
}
.image {
  width: 140px;
  padding: 5% 5% 5% 0;
}
.aside {
  width: 40%;
  display: flex;
  align-items: center;     /* 垂直居中 */ 
}
.item-name {
  width: 100%; height: 100%;
  padding: 20px 0 0 0
}
.item-title {
  font-size: 18px
}
.item-desciption {
  font-size: 14px
}
</style>
