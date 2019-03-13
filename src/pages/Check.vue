<template>
  <el-container>
    <el-header>
      <NavBar actpage="1"></NavBar>
    </el-header>
    <el-main class="main-body">
      <ItemInfo></ItemInfo>
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
import ItemInfo from "../components/ItemInfo.vue";
import CheckBody from "../components/CheckBody.vue";

export default {
  name: "Register",
  components: { NavBar, FooterBar, ItemInfo, CheckBody }
};
</script>

<style scoped>
.el-container {
  margin-top: 30px;
}
.main-body{
  display:flex;
  flex-direction:column;
  align-items: center;
}
</style>
