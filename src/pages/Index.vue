<template>
  <el-container>
    <el-header>
      <NavBar actpage="1"></NavBar>
    </el-header>

    <el-main>
      <ItemCarosel v-if="isIndexPage" />
      <div>
        <CardHolder :items="items" />
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
import ItemCarosel from "../components/ItemCarosel.vue";
import CardHolder from "../components/CardHolder.vue";
export default {
  name: "Index",
  components: {
    NavBar,
    FooterBar,
    ItemCarosel,
    CardHolder,
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    getData() {
      let url = '/api/items'
      if (this.$route.path == '/search') {
        url = '/api/items/search?q=' + this.$route.query['q']
      }
      fetch(url, {
        headers: new Headers({
          'Authorization': localStorage.getItem('token')
        })
      }).then(res => {
        return res.json();
      }).then(res => {
        this.items = res
      });
    }
  },
  computed: {
    isIndexPage() {
      return this.$route.path == '/'
    }
  },
  mounted() {
    this.getData()
  },
  watch: {
    '$route' (to, from) {
      this.getData()
    }
  }
};
</script>

<style>
.el-main {
  display: flex;
  justify-content: center;
}
</style>
