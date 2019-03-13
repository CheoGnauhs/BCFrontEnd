<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <el-main>
      <OrderDetailBody>order detail</OrderDetailBody>
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
  components: { NavBar, FooterBar, OrderDetailBody }
};
</script>

<style scoped>
</style>
