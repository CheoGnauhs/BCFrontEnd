<template>
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
              <router-link class="op-btn" href>
                <i class="a-thumb"></i>0
              </router-link>
              <router-link class="op-btn" href>
                <i class="a-comment"></i>0
              </router-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CommentPart",
  props: ["comments"],
  data() {
    return {};
  }
};
</script>

<style>
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
</style>
