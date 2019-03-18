<template>
  <div v-if="commodityInformations.length > 0">
    <el-card
      v-for="(item,index) in commodityInformations"
      :key="index"
      shadow="never"
      class="box-card"
    >
      <div slot="header" class="card-head">
        <span class="commodity-name">
          <router-link :to="'/item-detail/'+item.id">{{item.name}}</router-link>
        </span>
      </div>
      <div class="card-container">
        <div class="pic-wrapper">
          <div
            class="commodity-pic"
            alt="commodity-pic"
            :style="{'background-image':'url('+item.image+')'}"
          ></div>
        </div>
        <div class="commodity-info">
          <span class="commodity-details">订单编号：{{item.id}}</span>
          <span class="commodity-details">价格：{{item.price}}</span>
          <span class="commodity-details">完成情况：{{itemStatusText(item.status)}}</span>
        </div>
        <div class="comment" v-if="cardtype == 'orders'">
          <el-button type="primary" v-if="item.status == 'progress'" @click="ensureOrder(item.order_id)">确认收货</el-button>
          <el-button type="danger" v-if="item.status == 'progress'" @click="cancelOrder(item.order_id)">取消订单</el-button>
          <el-button type="success" v-if="item.status != 'progress'" @click="checkBlockchain(item.order_id)">查看链信息</el-button>
        </div>
        <div class="comment" v-else-if="cardtype == 'collections'">
          <el-button type="danger" @click="cancelCollection(item.id)">取消收藏</el-button>
        </div>
        <div class="comment" v-else-if="cardtype == 'items'">
          <el-button type="danger" @click="closeItem(item.id)" :disabled="!(item.status == 'active')">下架商品</el-button>
        </div>
      </div>
    </el-card>
  </div>
  <div v-else style="width:100%;text-align:center">暂无内容</div>
</template>

<script>
export default {
  name: "FeedSteam",
  props: {
    commodityInformations: Array,
    cardtype: String
  },
  data() {
    return {};
  },

  methods: {
    itemStatusText(i) {
      switch (i) {
        case "progress":
          return "进行中";
        case "active":
          return "售卖中";
        case "sold":
          return "已卖出";
        case "closed":
          return "已下架";
        case "finished":
          return "已完成";
        case "cancelled":
          return "已取消";
        default:
          return "未知";
      }
    },
    ensureOrder(order_id) {
      fetch(`/api/orders/${order_id}/ensure`, {
        headers: new Headers({
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }),
        method: 'POST'
      }).then(res => {
        if (res.ok) {
          this.$message({
            message: '确认成功',
            type: 'success'
          })
        }
        this.$router.go(0)
      })
    },
    cancelOrder(order_id) {
      fetch(`/api/orders/${order_id}/cancel`, {
        headers: new Headers({
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }),
        method: 'POST'
      }).then(res => {
        if (res.ok) {
          this.$message({
            message: '取消成功',
            type: 'success'
          })
        }
        this.$router.go(0)
      })
    },
    checkBlockchain(order_id) {

    },
    cancelCollection(item_id) {
      fetch(`/api/items/${item_id}/collection`, {
        headers: new Headers({
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }),
        method: 'DELETE'
      }).then(res => {
        if (res.ok) {
          this.$message({
            message: '取消成功',
            type: 'success'
          })
        }
        this.$router.go(0)
      })
    },
    closeItem(item_id) {
      fetch(`/api/items/${item_id}/close`, {
        headers: new Headers({
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }),
        method: 'POST'
      }).then(res => {
        if (res.ok) {
          this.$message({
            message: '取消成功',
            type: 'success'
          })
        }
        this.$router.go(0)
      })
    },
    checkBlockchain(order_id) {
      this.$router.push(`/order-detail/${order_id}`)
    }
  },

  mounted() {}
};
</script>

<style scoped>
.box-card {
  width: 870px;
  margin: 5px auto;
  border: solid 1px rgb(140, 197, 255);
  margin-bottom: 20px;
}
.card-head {
  display: flex;
  justify-content: space-between;
}
.card-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.commodity-name {
  font-size: 16px;
  color: #606266;
}
.commodity-name > a {
  text-decoration: none;
}
.commodity-name>a:hover{
  fill: #409EFF;
}
.commodity-details {
  color: #909399;
  margin: 0 20px;
}
.commodity-info {
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
}
.commodity-pic {
  width: 160px;
  height: 120px;
  background: no-repeat center;
  background-size: auto 160px;
}
.pic-wrapper {
  width: 160px;
  height: 120px;
  background: #d3dce6;
}
</style>