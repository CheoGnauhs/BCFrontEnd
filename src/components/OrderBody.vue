<template>
  <div class="order-body">
    <el-row :gutter="10">
      <OrderItem v-for="(item, index) in this.orderData" :key="index" :data="item">
      </OrderItem>
    </el-row>
  </div>
</template>

<script>
import OrderItem from "./OrderItem.vue"

export default {
  name: "OrderBody",
  data() {
    return {
      orderData: [
        {
          picPath: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254553630,4138028601&fm=26&gp=0.jpg",
          title: "商品名商品名商品名",
          avatar: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254553630,4138028601&fm=26&gp=0.jpg",
          description: "这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述",
          price: 100.12,
          userName: "asdeasd",
        },
        {
          picPath: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254553630,4138028601&fm=26&gp=0.jpg",
          title: "商品名",
          avatar: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254553630,4138028601&fm=26&gp=0.jpg",
          description: "这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述",
          price: 100.12,
          userName: "可爱的催化",
        },
        {
          picPath: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254553630,4138028601&fm=26&gp=0.jpg",
          title: "商品名",
          avatar: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254553630,4138028601&fm=26&gp=0.jpg",
          description: "这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述",
          price: 100.12,
          userName: "可爱的催化",
        },
        {
          picPath: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254553630,4138028601&fm=26&gp=0.jpg",
          title: "商品名",
          avatar: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254553630,4138028601&fm=26&gp=0.jpg",
          description: "这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述",
          price: 100.12,
          userName: "可爱的催化",
        },
        {
          picPath: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254553630,4138028601&fm=26&gp=0.jpg",
          title: "商品名",
          avatar: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254553630,4138028601&fm=26&gp=0.jpg",
          description: "这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述",
          price: 100.12,
          userName: "可爱的催化",
        },
      ]
    };
  },
  methods: {
    register() {
      
    }
  },
  components: { 
    OrderItem
  }
};
</script>

<style scoped>
.order-body {
  padding: 0 5% 0 5% ;
}
</style>
