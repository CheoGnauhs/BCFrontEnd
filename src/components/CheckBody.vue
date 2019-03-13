<template>
  <div class="cart">

    <div v-if="cartTotal > 0">
      <app-checkout :total="total" @successSubmit="success = true"></app-checkout>
    </div>

    <div v-else-if="cartTotal === 0 && success === false" class="empty">
      <h1>Cart</h1>
      <h3>Your cart is empty.</h3>
      <nuxt-link exact to="/"><button>Fill er up!</button></nuxt-link>
    </div>

    <div v-else>
      <app-success @restartCart="success = false"/>
      <h2>Success!</h2>
      <p>Your order has been processed, it will be delivered shortly.</p>
    </div>

  </div>
</template>

<script>
import AppCheckout from './../components/AppCheckout.vue';
import AppSuccess from './../components/AppSuccess.vue';

export default {
  data() {
    return {
      success: false,
      item: {
        picPath: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254553630,4138028601&fm=26&gp=0.jpg",
        title: "商品名商品名商品名",
        avatar: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254553630,4138028601&fm=26&gp=0.jpg",
        description: "这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述这是一段商品描述",
        price: 100.12,
        userName: "asdeasd",
        userId: "userID"
      },
      
    };
  },
  components: {
    AppCheckout,
    AppSuccess
  },
  computed: {
    cart() {
      return 0;
    },
    cartTotal() {
      window.cartTotal = 3;
      window.checkoutBody = this
      window.makeSuccess = function (){
        window.checkoutBody.success = !window.checkoutBody.success;
      };
      return window.checkoutBody.success? 0: window.cartTotal;
    },
    total() {
      return Object.values(this.cart)
        .reduce((acc, el) => acc + (el.count * el.price), 0)
        .toFixed(2);
    }
  },
  filters: {
    usdollar: function(value) {
      return `¥ ${value}`;
    }
  }
};
</script>

<style scoped>
.cart > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: white;
  border-radius: 3px;
  margin-top: 10px;
  padding-bottom: 80px;
}

.cart.empty h1,
.cart.empty h3 {
  margin-bottom: 15px;
}

.cartitems {
  padding: 30px;
  border-bottom: 1px solid #ccc;
  width: 500px;
}

.carttext {
  width: 250px;
  float: left;
}

.carttext p,
.carttext h4 {
  padding: 5px;
}

.cartimg {
  width: 100px;
  border: 1px solid #ccc;
  float: right;
}

.total {
  margin: 20px 0;
}
</style>
