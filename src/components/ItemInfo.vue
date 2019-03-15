<template>
  <div class="item-part">
    <el-carousel class="item-img">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{item}}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="item-info">
      <h3 class="item-title">{{item.title}}</h3>
      <div class="item-price column">
        价格:
        <span class="price">{{item.price}}</span>二手币
      </div>
      <div class="item-description">{{item.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemInfo",
  data() {
    return {
      item: {
        title: "百事可乐碳酸汽水饮料整箱600ml*24瓶",
        price: "69.90",
        description:
          "规格： 600ml*24瓶。" +
          "新老包装替换 随机发货 以实物为准。" +
          "贮存方法：禁止加热或0摄氏度以下冷冻，避免阳光直晒及高温储存，冷饮口味更佳。" +
          "配料表：水，果葡糖浆，白砂糖，食品添加剂（二氧化碳、焦糖色、磷酸、咖啡因、食用香精）详见配料表。" +
          "保质期：365天。"
      }
    };
  }
};
</script>

<style scoped>
.item-part {
  display: flex;
  justify-items: left;
  width: 1000px;
}
h3 {
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.item-info {
  padding-left: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item-title {
  font-size: 20px;
  margin: 0;
  text-align: left;
}
.item-price {
  background: rgb(217, 236, 255);
  font-size: 16px;
  padding: 10px 0;
}
.price {
  color: #e6a23c;
}
.item-description {
  color: #909399;
  font-size: 14px;
  height: 160px;
}
.item-img {
  width: 600px;
}
h3 {
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
