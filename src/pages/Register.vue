<template>
  <el-container>
    <el-header>
      <LogoBar></LogoBar>
    </el-header>
    <el-main>
      <RegisterBody></RegisterBody>
    </el-main>
    <el-footer>
      <FooterBar></FooterBar>
    </el-footer>
  </el-container>
</template>

<script>
import LogoBar from "../components/LogoBar.vue";
import FooterBar from "../components/FooterBar.vue";
import RegisterBody from "../components/RegisterBody.vue";

export default {
  name: "Register",
  components: { LogoBar, FooterBar, RegisterBody }
};
</script>

<style scoped>
.el-container{
  margin-top: 30px;
}
</style>
