<template>
  <div class="order-body">
    <el-row :gutter="10">
      <OrderDetailItem v-for="(item, index) in this.orderDetailData" :key="index" :data="item">
      </OrderDetailItem>
    </el-row>
  </div>
</template>

<script>
import OrderDetailItem from "./OrderDetailItem.vue"

export default {
  name: "OrderDetailBody",
  data() {
    return {
      orderDetailData: [
        {
          picPath: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254553630,4138028601&fm=26&gp=0.jpg",
          title: "商品名商品名商品名",
          avatar: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254553630,4138028601&fm=26&gp=0.jpg",
          description: "这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述",
          price: 100.12,
          carryPrice: 20,
          from: "发货地发货地发货地发货地发货地发货地发货地发货地",
          to: "收获地收获地收获地收获地收获地收获地收获地",
          userName: "asdeasd",
          rate: 3.4,
          userId: "userID",
          time: "Tue Mar 12 2019",
          orderId: "21ABEA9BFC7DD1B411F63F624759EBA60B3898F757B4A343816173655E1C10B7"
        }
      ]
    };
  },
  methods: {
    register() {
      
    }
  },
  components: { 
    OrderDetailItem
  }
};
</script>

<style scoped>
.order-body {
  padding: 0 5% 0 5% ;
}
</style>
