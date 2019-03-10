<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <el-main>
      <ProfileCard></ProfileCard>
      <FeedStream></FeedStream>
    </el-main>
    <el-footer>
      <FooterBar></FooterBar>
    </el-footer>
  </el-container>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import FeedStream from "../components/FeedStream.vue";
import ProfileCard from "../components/ProfileCard.vue";

export default {
  name: "Profile",
  components: {
    NavBar,
    FeedStream,
    FooterBar,
    ProfileCard
  }
};
</script>

<style scoped>
.el-main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #e5ecf0;
}
</style>