<template>
  <li class="comment-item">
    <div class="user-info">
      <img class="user-avatar" :src="detail.avatar" alt="avatar">
      <div class="user-name">{{detail.name}}</div>
    </div>
    <div class="comment-right">
      <div v-if="detail.replyto==null" class="user-comment">{{detail.content}}</div>
      <div v-else class="user-comment">
        回复
        <em class="blue">@{{detail.replyto}}</em>
        :
        {{detail.content}}
      </div>
      <div class="comment-message">
        <div class="comment-time">{{detail.timestamp}}</div>
        <div class="comment-op">
          <span class="op-btn" href>
            <i class="a-thumb"></i>0
          </span>
          <!-- 回复为空时不显示，不为空时显示回复条数 -->
          <span v-if="detail.replies!=null" class="op-btn" href>
            <i class="a-comment"></i>
            {{detail.replies.length}}
          </span>
          <span v-else class="op-btn" href>
            <i class="a-comment"></i>
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "CommentItem",
  props: ["detail"]
};
</script>

<style scoped>
.blue {
  color: #409eff;
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
.a-thumb:hover,
.a-comment:hover {
  cursor: pointer;
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
