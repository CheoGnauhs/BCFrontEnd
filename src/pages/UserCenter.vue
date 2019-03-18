<template>
  <el-container>
    <el-header>
      <NavBar actpage="3"></NavBar>
    </el-header>
    <el-main>
      <div class="center-left">
        <ProfileCard :info="userInfo"></ProfileCard>
      </div>
      <div class="center-right">
        <!-- <FeedStream></FeedStream> -->
        <el-tabs class="user-panel" type="border-card" @tab-click="handleTabClick">
          <el-tab-pane label="我的信息">
            <CreditBody :info="userInfo"></CreditBody>
          </el-tab-pane>
          <el-tab-pane label="我的订单">
            <FeedStream cardtype="orders" :commodityInformations="orders"></FeedStream>
          </el-tab-pane>
          <el-tab-pane label="我的物品">
            <FeedStream cardtype="items" :commodityInformations="items"></FeedStream>
          </el-tab-pane>
          <el-tab-pane label="我的收藏">
            <FeedStream cardtype="collections" :commodityInformations="collections"></FeedStream>
          </el-tab-pane>
        </el-tabs>
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
import FeedStream from "../components/FeedStream.vue";
import ProfileCard from "../components/ProfileCard.vue";
import CreditBody from "../components/CreditBody.vue";

export default {
  name: "UserCenter",
  components: {
    NavBar,
    FeedStream,
    FooterBar,
    ProfileCard,
    CreditBody
  },
  data() {
    return {
      userInfo: {},
      collections: [],
      items: [],
      orders: []
    };
  },
  methods: {
    getData() {
      fetch("/api/profile", {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else if (res.unauthorized) {
            localStorage.removeItem("token");
            this.$router.replace("/login");
          } else {
            throw new Error();
          }
        })
        .then(res => {
          this.userInfo = res;
        });
    },

    getCollection() {
      fetch("/api/profile/collections", {
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        })
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.collections = res;
        });
    },

    getItems() {
      fetch("/api/profile/items", {
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        })
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.items = res;
        });
    },

    getOrders() {
      fetch("/api/profile/orders", {
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        })
      }).then(res => {
        return res.json();
      }).then(res => {
        this.orders = res;
      })
    },

    handleTabClick(tab) {
      if (tab.index == 1) this.getOrders();
      else if (tab.index == 2) this.getItems();
      else if (tab.index == 3) this.getCollection();
    }
  },
  mounted() {
    if (!localStorage.getItem("token")) {
      this.$router.replace("/login?redirect=/user-center");
      return;
    }
    this.getData();
  }
};
</script>

<style scoped>
.center-left {
  padding-right: 20px;
}
.center-right {
  padding-left: 10px;
}
.user-panel {
  width: 1000px;
}
.el-main {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>