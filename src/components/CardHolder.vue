<template>
  <el-row class="card-holder">
    <el-col v-for="(item, index) in items" :key="index" class="card-wrapper">
      <el-card shadow="hover" :body-style="{padding:'0px'}">
        <router-link :to="`/item-detail/${item.id}`">
          <div class="img-wrapper" :style="{'background-image':'url('+item.image+')'}"></div>
        </router-link>
        <div class="content">
          <router-link :to="`/item-detail/${item.id}`" class="title">{{item.name}}</router-link>
          <div class="price-wrapper">
            价格:
            <span class="price">
              <b class="oringe">{{item.price}}</b>二手币
            </span>
          </div>
          <div class="seller-wrapper">提供者:
            <router-link to="/" class="seller">{{item.seller.handle}}</router-link>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "CardHolder",
  props: {
    items: Array
  },
  data() {
    return {
      // items: []
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
      })
    }
  },
  mounted() {
    // this.getData()
  }
};
</script>

<style scoped>
.card-holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card-wrapper {
  width: 230px;
  margin-top: 30px;
}
.img-wrapper {
  width: 230px;
  height: 250px;
  background: no-repeat center;
  background-size: 230px;
  border-bottom: 1px solid #f2f6fc;
}
.image {
  width: 230px;
  height: auto;
}
.content {
  padding: 8px;
}
.title {
  color: rgb(102, 177, 255);
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
  height: 44px;
}
.content > div {
  margin-bottom: 2px;
}
.price,
.seller {
  color: #909399;
  float: right;
}
.oringe {
  color: #e6a23c;
  margin-right: 5px;
}
.price-wrapper,
.seller-wrapper {
  font-size: 14px;
}
</style>
