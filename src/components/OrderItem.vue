<template>
  <div class="order-item">
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <el-card :body-style="{ padding: '10px'} " shadow="hover" class="card">
        <img v-bind:src="data.picPath" class="image">
        <div style="padding: 14px;">
          <span>{{data.title}}</span>
          <span>{{data.title}}</span>
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
