<template>
  <div class="item-carosel">
    <el-carousel type="card" height="400px" arrow="never">
      <el-carousel-item>
        <img class="items" src="../assets/pic3.jpg" alt="pic3">
      </el-carousel-item>
      <el-carousel-item>
        <img class="items" src="../assets/pic1.jpg" alt="pic1">
      </el-carousel-item>
      <el-carousel-item>
        <img class="items" src="../assets/pic2.png" alt="pic2">
      </el-carousel-item>
      <el-carousel-item>
        <img class="items" src="../assets/pic4.jpg" alt="pic4">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "ItemCarosel"
};
</script>

<style scoped>
.item-carosel {
  width: 100%;
}
.el-carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border: solid 1px #F2F6FC;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
h3 {
  text-align: center;
}
</style>
