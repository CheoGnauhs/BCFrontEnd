<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>

    <el-main class="display-area">
      <ItemInfo></ItemInfo>
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
          timestamp: "2019-03-07 11:08",
          replies: [
            {
              replyto: "吕岩松",
              avatar: require("../assets/avatar.jpg"),
              name: "吕岩松",
              content: "其实还是不行",
              timestamp: "2019-03-16 12:08",
            },
            {
              replyto: "吕岩松",
              avatar: require("../assets/avatar.jpg"),
              name: "吕岩松",
              content: "其实还是可以",
              timestamp: "2019-03-16 12:09",
            }
          ]
        },
        {
          avatar: require("../assets/avatar.jpg"),
          name: "吕岩松",
          content: "看起来不行",
          timestamp: "2019-03-07 11:08",
          replies: []
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
</style>
