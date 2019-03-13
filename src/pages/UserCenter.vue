<template>
  <el-container>
    <el-header>
      <NavBar actpage="3"></NavBar>
    </el-header>
    <el-main>
      <div class="center-left">
        <ProfileCard></ProfileCard>
      </div>
      <div class="center-right">
        <!-- <FeedStream></FeedStream> -->
        <el-tabs class="user-panel" type="border-card">
          <el-tab-pane label="我的订单">
            <FeedStream></FeedStream>
          </el-tab-pane>
          <el-tab-pane label="我的物品">
            <FeedStream></FeedStream>
          </el-tab-pane>
          <el-tab-pane label="我的收藏">
            <FeedStream></FeedStream>
          </el-tab-pane>
          <el-tab-pane label="我的信息">
            <CreditBody></CreditBody>
          </el-tab-pane>
        </el-tabs>
      </div>
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
import CreditBody from "../components/CreditBody.vue";

export default {
  name: "UserCenter",
  components: {
    NavBar,
    FeedStream,
    FooterBar,
    ProfileCard,
    CreditBody
  }
};
</script>

<style scoped>
.center-left {
  padding-right: 20px;
}
.center-right {
  padding-left: 10px;
}
.user-panel {
  width: 1000px;
}
.el-main {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>