<template>
  <div class="item-part">
    <el-carousel height="450px" class="item-imgs">
      <el-carousel-item v-for="(pic,index) in item.pics" :key="index">
        <img class="item-img" :src="pic.src" alt="item_img">
      </el-carousel-item>
    </el-carousel>
    <div class="item-info">
      <div>
        <h3 class="item-title">{{item.title}}</h3>
        <div class="item-price">
          价格：
          <span class="price">{{item.price}}</span>二手币
        </div>
      </div>
      <div>
        <div class="column">所在地：
          <br>
          <span
            class="value"
          >{{CodeToText[item.areaCode[0]]}}{{CodeToText[item.areaCode[1]]}}{{CodeToText[item.areaCode[2]]}}</span>
        </div>
        <div class="column">成色：
          <br>
          <span class="value">{{handleCondition()}}</span>
        </div>
        <div class="column">交易方式：
          <br>
          <span class="value">{{handleSellType()}}</span>
        </div>
        <div class="column">物品描述：
          <br>
          <span class="value">{{item.description}}</span>
        </div>
      </div>
      <div class="button-area">
        <el-button type="primary">确认购买</el-button>
        <el-button>添加收藏</el-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { CodeToText } from "element-china-area-data";

export default {
  name: "ItemInfo",
  data() {
    return {
      CodeToText,
      item: {
        title: "百事可乐碳酸汽水饮料整箱600ml*24瓶",
        price: "69",
        description:
          "这一箱可乐是我一年前买给女朋友的礼物。但是她不喜欢喝可乐，觉得喝太多可乐会长胖，所以让我拿出来卖掉。一箱有24瓶，适合想要长胖的朋友们疯狂饮用。餐前一瓶，餐后一瓶，一个月180不是梦。",
        areaCode: ["120000", "120100", "120101"],
        condition: "90",
        sellType: "online",
        pics: [
          { src: require("../assets/hat.jpg") },
          { src: require("../assets/mouse.jpg") },
          { src: require("../assets/laptop_stand.jpg") }
        ]
      }
    };
  },
  methods: {
    handleCondition() {
      if (this.item.condition == "100") {
        return "全新";
      }
      if (this.item.condition == "90") {
        return "九成新";
      }
      if (this.item.condition == "85") {
        return "八五新";
      }
      if (this.item.condition == "80") {
        return "八成新";
      }
      return "不好评价";
    },
    handleSellType() {
      if (this.item.sellType == "online") {
        return "线上交易";
      } else {
        return "线下面交";
      }
    }
  }
};
</script>

<style scoped>
.item-part {
  display: flex;
  justify-items: left;
  width: 1000px;
}
.item-imgs {
  width: 600px;
}
.item-img {
  height: 450px;
}
.el-carousel__item {
  background-color: #99a9bf;
  text-align: center;
}
.item-info {
  padding-left: 10px;
  width: 400px;
  height: 450px;
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
  margin: 20px 0 10px 0;
}
.price {
  color: #e6a23c;
  margin-right: 10px;
}
.column {
  color: rgb(102, 177, 255);
  font-size: 16px;
  margin-bottom: 10px;
}
.value {
  color: #909399;
  font-size: 14px;
  padding-top: 5px;
}
h3 {
  text-align: center;
}
.el-carousel__item {
  background-color: #d3dce6;
}
</style>
