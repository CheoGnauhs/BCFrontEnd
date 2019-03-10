<template>
  <el-row class="card-holder">
    <el-col v-for="(item, index) in items" :key="index" class="card-wrapper">
      <el-card :body-style="{padding:'0px'}">
        <a>
          <img v-bind:src="item.pic" alt="avatar" class="image">
        </a>
        <div class="content">
          <a class="title">{{item.title}}</a>
          <div class="price-wrapper">
            价格:
            <span class="price">
              <b class="oringe">{{item.price}}</b>二手币
            </span>
          </div>
          <div class="seller-wrapper">
            提供者:
            <a class="seller">{{item.seller}}</a>
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
          title: "黛圣婕泰国乳胶枕头一对天然橡胶枕芯记忆家用单成人护颈椎枕头男",
          price: "20",
          seller: "谭爽",
          pic:
            "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/33194644/TB2uog0gDXYBeNkHFrdXXciuVXa_!!0-saturn_solar.jpg_230x230.jpg_.webp"
        },
        {
          title: "拉芙菲尔 五星级酒店枕头成人护颈枕正品全棉家用枕芯单人一对拍2",
          price: "20",
          seller: "谭爽",
          pic:
            "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/33194644/TB2uog0gDXYBeNkHFrdXXciuVXa_!!0-saturn_solar.jpg_230x230.jpg_.webp"
        },
        {
          title: "拉芙菲尔 五星级酒店枕头成人护颈枕正品全棉家用枕芯单人一对拍2",
          price: "20",
          seller: "谭爽",
          pic:
            "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/33194644/TB2uog0gDXYBeNkHFrdXXciuVXa_!!0-saturn_solar.jpg_230x230.jpg_.webp"
        },
        {
          title: "拉芙菲尔 五星级酒店枕头成人护颈枕正品全棉家用枕芯单人一对拍2",
          price: "20",
          seller: "谭爽",
          pic:
            "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/33194644/TB2uog0gDXYBeNkHFrdXXciuVXa_!!0-saturn_solar.jpg_230x230.jpg_.webp"
        },
        {
          title: "拉芙菲尔 五星级酒店枕头成人护颈枕正品全棉家用枕芯单人一对拍2",
          price: "20",
          seller: "谭爽",
          pic:
            "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/33194644/TB2uog0gDXYBeNkHFrdXXciuVXa_!!0-saturn_solar.jpg_230x230.jpg_.webp"
        }
      ]
    };
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
  margin-right: 30px;
}
.image {
  width: 230px;
}
.content {
  padding: 8px;
}
.title {
  color: rgb(102, 177, 255);
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
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
