<template>
  <el-container>
    <el-header>
      <NavBar actpage="1"></NavBar>
    </el-header>
    <el-main class="main-body">
      <ItemInfo :item="item"></ItemInfo>
      <AppCheckout :item_id="item.id"></AppCheckout>
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
import AppCheckout from "../components/AppCheckout.vue";

export default {
  name: "Register",
  components: { NavBar, FooterBar, ItemInfo, AppCheckout },
  data() {
    return {
      item: {}
    }
  },
  methods: {
    getData() {
      if (!localStorage.getItem('token')) {
        this.$message({
          message: '请先登录',
          type: 'warning'
        })
        this.$router.replace('/login?redirect=/check/' + this.$route.params.item_id)
        return
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
    }
  },
  mounted() {
    this.getData()
  }
};
</script>

<style scoped>
.main-body{
  display:flex;
  flex-direction:column;
  align-items: center;
}
</style>
