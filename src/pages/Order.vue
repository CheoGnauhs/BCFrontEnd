<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <el-main>
      <OrderBody></OrderBody>
    </el-main>
    <el-footer>
      <FooterBar></FooterBar>
    </el-footer>
  </el-container>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import OrderBody from "../components/OrderBody.vue";

export default {
  name: "Register",
  components: { NavBar, FooterBar, OrderBody }
};
</script>

<style scoped>
.el-container{
  margin-top: 30px;
}
</style>
