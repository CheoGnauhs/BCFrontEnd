<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <el-main>
      <CheckBody></CheckBody>
    </el-main>
    <el-footer>
      <FooterBar></FooterBar>
    </el-footer>
  </el-container>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import CheckBody from "../components/CheckBody.vue";

export default {
  name: "Register",
  components: { NavBar, FooterBar, CheckBody }
};
</script>

<style scoped>
.el-container{
  margin-top: 30px;
}
</style>
