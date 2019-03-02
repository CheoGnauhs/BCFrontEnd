<template>
  <el-container>
    <el-header>
      <LogoBar></LogoBar>
    </el-header>
    <el-main></el-main>
    <el-footer>
      <FooterBar></FooterBar>
    </el-footer>
  </el-container>
</template>

<script>
import LogoBar from "../components/LogoBar.vue";
import FooterBar from "../components/FooterBar.vue";

export default {
  name: "Register",
  components: { LogoBar, FooterBar }
};
</script>

<style scoped>
.el-container{
  margin-top: 30px;
}
</style>
