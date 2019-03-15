<template>
  <el-container>
    <el-header>
      <NavBar actpage="1"></NavBar>
    </el-header>
    <el-main class="main-body">
      <ItemInfo></ItemInfo>
      <AppCheckout></AppCheckout>
    </el-main>
    <el-footer>
      <FooterBar></FooterBar>
    </el-footer>
  </el-container>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import ItemInfo from "../components/ItemInfo.vue";
import AppCheckout from "../components/AppCheckout.vue";

export default {
  name: "Register",
  components: { NavBar, FooterBar, ItemInfo, AppCheckout }
};
</script>

<style scoped>
.main-body{
  display:flex;
  flex-direction:column;
  align-items: center;
}
</style>
