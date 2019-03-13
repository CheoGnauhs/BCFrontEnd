<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>

    <el-main class="display-area">
      <div class="item-part">
        <el-carousel class="item-img">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{item}}</h3>
          </el-carousel-item>
        </el-carousel>
        <div class="item-info">
          <h3 class="item-title">百事可乐碳酸汽水饮料整箱600ml*24瓶</h3>
          <div class="item-price column">
            价格:
            <span class="price">69.90</span>二手币
          </div>
          <div class="item-description">规格： 600ml*24瓶
            <br>新老包装替换 随机发货 以实物为准
            <br>贮存方法：禁止加热或0摄氏度以下冷冻，避免阳光直晒及高温储存，冷饮口味更佳
            <br>配料表：水，果葡糖浆，白砂糖，食品添加剂（二氧化碳、焦糖色、磷酸、咖啡因、食用香精）详见配料表
            <br>保质期：365天
          </div>
          <div class="button-area">
            <el-button type="primary">确认购买</el-button>
            <el-button>添加收藏</el-button>
          </div>
        </div>
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

export default {
  name: "ItemDetail",
  components: { NavBar, FooterBar },
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
.item-part {
  display: flex;
  justify-items: left;
}
.item-info {
  padding-left: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item-title {
  font-size: 20px;
  margin: 0;
  text-align: left;
}
.item-price {
  background: rgb(217, 236, 255);
  font-size: 16px;
  padding: 10px 0;
}
.price {
  color: #e6a23c;
}
.item-description {
  color: #909399;
  font-size: 14px;
  height: 160px;
}
.item-img {
  width: 600px;
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
