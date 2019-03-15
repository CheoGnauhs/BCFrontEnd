<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>

    <el-main class="display-area">
      <ItemInfo></ItemInfo>
      <div class="button-area">
        <el-button type="primary">确认购买</el-button>
        <el-button>添加收藏</el-button>
      </div>
      <CommentPart :comments="comments"></CommentPart>
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
import CommentPart from "../components/CommentPart.vue";

export default {
  name: "ItemDetail",
  components: { NavBar, FooterBar, ItemInfo, CommentPart },
  data() {
    return {
      comments: [
        {
          avatar: require("../assets/avatar.jpg"),
          name: "吕岩松",
          content: "看起来可以",
          timestamp: "2019-03-07 11:08"
        },
        {
          avatar: require("../assets/avatar.jpg"),
          name: "吕岩松",
          content: "看起来不行",
          timestamp: "2019-03-07 11:08"
        }
      ]
    };
  }
};
</script>

<style scoped>
.display-area {
  margin: 0 auto;
}
.button-area {
  margin-top: 10px;
}
</style>
