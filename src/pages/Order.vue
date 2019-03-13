<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <el-main>
      <CardHolder></CardHolder>
    </el-main>
    <el-footer>
      <FooterBar></FooterBar>
    </el-footer>
  </el-container>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import CardHolder from "../components/CardHolder.vue";

export default {
  name: "Register",
  components: { NavBar, FooterBar, CardHolder }
};
</script>

<style scoped>
</style>
