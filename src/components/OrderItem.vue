<template>
  <div class="order-item">
    <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8">
      <el-card :body-style="{ padding: '10px'} " shadow="hover" class="card">
        <img v-bind:src="data.picPath" class="image">
        <div style="padding: 5px;">
          <el-row type="flex" class="row-bg" justify="space-between">
            <span class="title">{{data.title.length > 8? data.title.substr(0, 8)+'...': data.title}}</span>
            <span class="price"><font style="font-size: 14px">¥</font>{{data.price}}</span>
          </el-row>
          <el-row>
            <el-col :span="24"><span class="descrip">{{ data.description.length > 20? data.description.substr(0, 20)+'...': data.description }}</span></el-col>
          </el-row>
          <div class="divide-line"></div>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="4">
              <div>
                <img v-bind:src="data.avatar" class="avatar">
                <span class="user-name">{{data.userName.length > 4? data.userName.substr(0, 3)+'...': data.userName}}</span>
              </div>
            </el-col>
            <el-col :span="8" style="display: flex; align-items: center;">
              <el-button type="danger" round size="medium" icon="el-icon-service">想要</el-button>
            </el-col>
            <el-col :span="8" style="display: flex; align-items: center;">
              <el-button type="primary" round size="medium" icon="el-icon-goods">购买</el-button>
            </el-col>
          </el-row>
          <el-row>
          </el-row>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import '../assets/icon/iconheart.css'

export default {
  name: "OrderItem",
  props: ['data'],
};
</script>

<style scoped>
.user-name {
  font-size: 12px
}
.icon {
  padding: 0 5px 0 0;
}
.avatar {
  border-radius: 10px;
  width: 100%;
}
.divide-line {
    height: 1px;
    border-top: 1px solid #ddd;
    text-align: center;
    margin: 8px 8px 8px 8px
}
.price {
  font-size: 18px;
  color: #F56C6C;
  text-align: right;
}
.descrip {
  font-size: 14px
}
.title {
  font-size: 18px
}
.card {
  margin: 10px
}
.image {
  width: 100%;
  display: block;
}
.order-item{
  display: block;
  margin: 0 auto;
}
</style>
