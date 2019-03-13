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
      <div class="comment-part">
        <div class="comment-header column">用户评论</div>
        <ul class="comments" v-for="comment in comments" :key="comment">
          <li class="comment-item">
            <div class="user-info">
              <img class="user-avatar" :src="comment.avatar" alt="avatar">
              <div class="user-name">{{comment.name}}</div>
            </div>
            <div class="comment-right">
              <div class="user-comment">{{comment.content}}</div>
              <div class="comment-message">
                <div class="comment-time">{{comment.timestamp}}</div>
                <div class="comment-op">
                  <a class="op-btn" href>
                    <i class="a-thumb"></i>0
                  </a>
                  <a class="op-btn" href>
                    <i class="a-comment"></i>0
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
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
import ItemInfo from "../components/ItemInfo.vue";

export default {
  name: "ItemDetail",
  components: { NavBar, FooterBar, ItemInfo },
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
  width: 1000px;
  margin: 0 auto;
}
.button-area {
  margin-top: 10px;
}
.comments {
  padding-left: 0;
}
.column {
  padding-left: 10px !important;
}
.comment-header {
  margin-top: 10px;
  padding: 10px 0;
  background: rgb(198, 226, 255);
}
.comment-item {
  min-height: 75px;
  list-style: none;
  padding-bottom: 10px;
  border-bottom: 1px solid #dcdfe6;
}
.user-name {
  font-size: 14px;
  color: #606266;
  margin-top: 3px;
}
.user-info {
  width: 100px;
  font-size: 16px;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.user-comment {
  min-height: 75px;
  color: #303133;
  font-size: 14px;
}
.comment-right {
  margin-left: 100px;
}
.comment-message {
  height: 12px;
}
.comment-time {
  font-size: 12px;
  color: #909399;
  float: left;
}
.comment-op {
  display: flex;
  justify-content: flex-end;
}
.op-btn {
  font-size: 12px;
  color: #909399;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 8px;
}
.a-thumb,
.a-comment {
  display: inline-block;
  min-width: 12px;
  height: 12px;
  margin-right: 3px;
}
.a-comment {
  background-image: url("../assets/comment.png");
}
.a-thumb {
  background-image: url("../assets/thumb.png");
}
.a-comment:hover {
  background-image: url("../assets/comment-active.png");
}
.a-thumb:hover {
  background-image: url("../assets/thumb-active.png");
}
h3 {
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
