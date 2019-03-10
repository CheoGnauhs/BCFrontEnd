<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <el-main>
      <CreaditBody></CreaditBody>
    </el-main>
    <el-footer>
      <FooterBar></FooterBar>
    </el-footer>
  </el-container>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import CreaditBody from "../components/CreaditBody.vue";

export default {
  name: "Credit",
  components: {
    NavBar,
    FooterBar,
    CreaditBody
  }
};
</script>

<style scoped>
.el-main {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>