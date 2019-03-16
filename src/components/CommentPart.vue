<template>
  <div class="comment-part">
    <div class="comment-header column">用户评论</div>
    <ul class="comments" v-for="(comment,index) in comments" :key="index">
      <CommentItem :detail="comment"></CommentItem>
      <ul class="commets-replies" v-for="(reply,index) in comment.replies" :key="index">
        <CommentItem :detail="reply"></CommentItem>
      </ul>
    </ul>
  </div>
</template>

<script>
import CommentItem from "./CommentItem.vue";
export default {
  name: "CommentPart",
  components: { CommentItem },
  props: ["comments"],
  data() {
    return {};
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
  margin-top: 10px;
  padding: 10px 0;
  background: rgb(198, 226, 255);
}
.comments-replies{
 margin: 20px 0;
}
</style>
