<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>

    <el-main>
      <ItemCarosel></ItemCarosel>
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
import ItemCarosel from "../components/ItemCarosel.vue";
import CardHolder from "../components/CardHolder.vue";
export default {
  name: "Index",
  components: {
    NavBar,
    FooterBar,
    ItemCarosel,
    CardHolder
  }
};
</script>

<style>
.el-main {
  display: flex;
  justify-content: center;
}
</style>
