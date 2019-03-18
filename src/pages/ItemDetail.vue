<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>

    <el-main class="display-area">
      <ItemInfo :item="item"></ItemInfo>
      <SellerCard :profile="item.seller" />
      <CommentPart :comments="comments" :item_id="item.id"></CommentPart>
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
import SellerCard from "../components/SellerCard.vue"

export default {
  name: "ItemDetail",
  components: { NavBar, FooterBar, ItemInfo, CommentPart, SellerCard },
  data() {
    return {
      comments: [],
      item: {
        id: '',
        name: "",
        description: "",
        price: "",
        district: "",
        field: '',
        method: "",
        fineness: '',
        seller: {}
      }
    };
  },
  methods: {
    getData() {
      let headers = {
        'Content-Type': 'application/json'
      }
      if (localStorage.getItem('token')) {
        headers['Authorization'] = localStorage.getItem('token')
      }

      fetch(`/api/items/${this.$route.params.item_id}`, {
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        })
      }).then(res => {
        return res.json()
      }).then(res => {
        this.item = res
      })

      fetch(`/api/items/${this.$route.params.item_id}/comments`, {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json()).then(res => {
        this.comments = res
      })
    }
  },
  mounted() {
    this.getData()
  }
};
</script>

<style scoped>
.display-area {
  margin: 0 auto;
}
</style>
