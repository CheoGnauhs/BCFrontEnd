<template>
  <li class="comment-item">
    <div class="user-info">
      <!-- <img class="user-avatar" :src="detail.avatar" alt="avatar"> -->
      <IdenIcon :hash="detail.author.avatar" :size="50" />
      <div class="user-name">{{detail.author.handle}}</div>
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
        <div class="comment-time">{{detail.created_at}}</div>
        <div class="comment-op">
          <!-- 不为空时显示回复条数,回复为空时不显示数字 -->
          <span class="op-btn" @click="pannelDisplay = !pannelDisplay">
            <i class="a-comment"></i>
            {{ detail.replies != null ? detail.replies.length : ''}}
          </span>
        </div>
      </div>
    </div>
    <el-collapse-transition>
      <div v-show="pannelDisplay" class="reply-pannel">
        <el-input class="input-pannel" v-model="replyItem.content" placeholder="在此输入回复内容">
          <i class="el-icon-edit el-input__icon" slot="suffix"></i>
        </el-input>
        <el-button @click="reply" class="input-button" type="primary">回复</el-button>
      </div>
    </el-collapse-transition>
  </li>
</template>

<script>
import IdenIcon from './IdenIcon.vue'
export default {
  name: "CommentItem",
  props: {
    detail: Object,
    item_id: Number
  },
  components: {
    IdenIcon
  },
  data() {
    var getTime = () => {
      let date = new Date();
      return date.toLocaleString();
    };
    return {
      replyItem: {
        replyto: null,
        content: "",
        timestamp: getTime()
      },
      pannelDisplay: false
    };
  },
  methods: {
    reply: function() {
      fetch(`/api/items/${this.item_id}/comments`, {
        method: 'POST',
        headers: new Headers({
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          thread: this.detail.id,
          content: this.replyItem.content
        })
      }).then(res => {
        if (res.ok) {
          this.$message({
            message: '评论成功',
            type: 'success'
          })
          this.$router.go(0)
        } else {
          this.$message({
            message: '评论失败',
            type: 'error'
          })
        }
      })
    }
  },
  computed: {
  }
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
.reply-pannel {
  margin: 10px;
}
.input-pannel {
  width: 400px;
}
.input-button {
  width: 70px;
  margin-left: 5px;
}
</style>
