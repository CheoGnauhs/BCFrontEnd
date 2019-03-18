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
        <a style="cursor: pointer" onclick="deleteItem">
          <i class="el-icon-delete"></i>
        </a>
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
        <div class="comment">
          <el-button type="primary">查看评价</el-button>
          <el-button type="primary">添加评价</el-button>
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
    commodityInformations: Array
  },
  data() {
    return {};
  },

  methods: {
    itemStatusText(i) {
      switch (i) {
        case "active":
          return "售卖中";
        case "sold":
          return "已卖出";
        case "closed":
          return "已关闭";
        default:
          return "未知";
      }
    },
    deleteItem(){

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