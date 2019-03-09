<template>
  <div class="order-item">
    <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8">
      <el-card :body-style="{ padding: '10px'} " shadow="hover" class="card">
        <img v-bind:src="data.picPath" class="image">
        <div style="padding: 5px;">
          <el-row type="flex" class="row-bg" justify="space-between">
            <span class="title">{{data.title.substr(0,8)}}</span>
            <span class="price"><font style="font-size: 14px">¥</font>{{data.price}}</span>
          </el-row>
          <el-row>
            <el-col :span="24"><span class="descrip">{{data.description.substr(0, 20)}}</span></el-col>
          </el-row>
          
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "OrderItem",
  props: ['data'],
};
</script>

<style scoped>
.price {
  font-size: 18px;
  color: #fc0f3d;
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
