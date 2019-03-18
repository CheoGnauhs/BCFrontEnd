<template>
  <div class="comment-part">
    <div class="comment-header column">
      <span>评论区</span>
      <a style="color:#409EFF;cursor:pointer;margin-right: 10px" v-if="currentToken" @click="dialogFormVisible = true">添加评论</a>
    </div>
    <ul class="comments" v-for="(comment,index) in comments" :key="index">
      <CommentItem :detail="comment" :item_id="item_id"></CommentItem>
      <ul class="comments-replies" v-for="(reply,index) in comment.replies" :key="index">
        <CommentItem :detail="reply" :item_id="item_id"></CommentItem>
      </ul>
    </ul>

    <el-dialog title="添加评论" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="评论内容" :label-width="formLabelWidth">
          <el-input v-model="form.content" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="sendComment">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import CommentItem from "./CommentItem.vue";
export default {
  name: "CommentPart",
  components: { CommentItem },
  props: ["comments", "item_id"],
  methods: {
    sendComment() {
      if (this.form.content.length === 0) {
        this.$message({
          message: '评论内容不能为空',
          type: 'error'
        })
        return
      }

      fetch(`/api/items/${this.item_id}/comments`, {
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }),
        method: 'POST',
        body: JSON.stringify({
          content: this.form.content
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
          this.dialogFormVisible = false
        }
      })
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        content: ''
      }
    };
  },
  computed: {
    currentToken() {
      return localStorage.getItem('token')
    }
  }
};
</script>

<style scoped>
.comments {
  padding-left: 0;
}
.column {
  padding-left: 10px !important;
}
.comment-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px 0;
  background: rgb(198, 226, 255);
}
.comments-replies{
 margin: 20px 0;
}
</style>
