<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <el-main>
      <OrderDetailBody :order="orderInfo" />
    </el-main>  
    <el-footer>
      <FooterBar></FooterBar>
    </el-footer>
  </el-container>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import OrderDetailBody from '../components/OrderDetailBody.vue';

export default {
  name: "Register",
  components: { NavBar, FooterBar, OrderDetailBody },
  data() { return { orderInfo: {} } },
  mounted() { this.getData() },
  methods: {
    getData() {
      fetch(`/api/orders/${this.$route.params.order_id}/blockchain`, {
        headers: new Headers({
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }),
      }).then(res => res.json()).then(res => {
        this.orderInfo = res
      })
    }
  }
};
</script>

<style scoped>
</style>
