<template>
  <el-row class="card-holder">
    <el-col v-for="(item, index) in items" :key="index" class="card-wrapper">
      <el-card shadow="hover" :body-style="{padding:'0px'}">
        <router-link to="/">
          <div class="img-wrapper" :style="{'background-image':'url('+item.image+')'}"></div>
        </router-link>
        <div class="content">
          <router-link to="/" class="title">{{item.name}}</router-link>
          <div class="price-wrapper">
            价格:
            <span class="price">
              <b class="oringe">{{item.price}}</b>二手币
            </span>
          </div>
          <div class="seller-wrapper">提供者:
            <router-link to="/" class="seller">{{item.seller.name}}</router-link>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "CardHolder",
  data() {
    return {
      items: [
        {
          name: "iPhone6 64G 深空灰 2014年购入 换新机后闲置",
          price: "1200",
          seller: {
            name: "谭爽"
          },
          image: require("../assets/ip6.jpg")
        },
        {
          name: "自用化妆镜 美妆必备 开心的一天 雪梨表面图案",
          price: "20",
          seller: {
            name: "谭爽"
          },
          image: require("../assets/mirror.jpg")
        },
        {
          name: "不知名品牌 韩版男式帅气渔夫帽 黑色",
          price: "50",
          seller: {
            name: "谭爽"
          },
          image: require("../assets/hat.jpg")
        },
        {
          name: "罗技M580蓝牙鼠标 支持Win/Mac系统",
          price: "200",
          seller: {
            name: "邱超凡"
          },
          image: require("../assets/mouse.jpg")
        },
        {
          name: "不知名品牌MacBook电脑支架 高价购于亚马逊",
          price: "500",
          seller: {
            name: "邱超凡"
          },
          image: require("../assets/laptop_stand.jpg")
        }
      ]
    };
  },
  methods: {
    getData() {
      fetch("/api/items")
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.items = this.items.concat(res)
        });
    }
  },
  mounted() {
    this.getData();
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
