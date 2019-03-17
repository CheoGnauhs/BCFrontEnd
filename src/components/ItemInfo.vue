<template>
  <div class="item-part">
    <el-carousel height="450px" class="item-imgs">
      <!-- <el-carousel-item v-for="(pic,index) in item.pics" :key="index">
        <img class="item-img" :src="pic.src" alt="item_img">
      </el-carousel-item> -->
      <el-carousel-item>
        <img class="item-img" :src="item.image" alt="item_img">
      </el-carousel-item>
    </el-carousel>
    <div class="item-info">
      <div>
        <h3 class="item-title">{{item.name}}</h3>
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
          >{{CodeToText[areaCodes[0]]}}{{CodeToText[areaCodes[1]]}}{{CodeToText[areaCodes[2]]}}</span>
        </div>
        <div class="column">成色：
          <br>
          <span class="value">{{fineness}}</span>
        </div>
        <div class="column">交易方式：
          <br>
          <span class="value">{{sellType}}</span>
        </div>
        <div style="display:inline-block;height:100px" class="column">物品描述：
          <br>
          <span class="value">{{item.description}}</span>
        </div>
      </div>
      <div class="button-area">
        <el-button type="primary">确认购买</el-button>
        <el-button v-if="currentToken && !item.collected" @click="addCollection">添加收藏</el-button>
        <el-button v-if="item.collected" @click="removeCollection">取消收藏</el-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { CodeToText } from "element-china-area-data";

export default {
  name: "ItemInfo",
  props: {
    item: Object
  },
  data() {
    return {
      CodeToText,
    }
  },
  methods: {
    removeCollection() {
      fetch(`/api/items/${this.$route.params.item_id}/collection`, {
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }),
        method: 'DELETE'
      }).then(res => {
        if (res.ok) {
          this.$message({
            message: '取消收藏成功',
            type: 'success'
          })
          // TODO: Make parent component change data
          this.$router.go(0)
        } else {
          this.$message({
            message: '取消收藏失败',
            type: 'error'
          })
        }
      })
    },
    addCollection() {
      fetch(`/api/items/${this.$route.params.item_id}/collection`, {
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }),
        method: 'POST'
      }).then(res => {
        if (res.ok) {
          this.$message({
            message: '收藏成功',
            type: 'success'
          })
          this.$router.go(0)
        } else {
          this.$message({
            message: '收藏失败',
            type: 'error'
          })
        }
      })
    }
  },

  computed: {
    sellType() {
      return this.item.method == 'online' ? '线上交易' : '线下面交'
    },

    fineness() {
      switch (this.item.fineness) {
      case 100: return '全新'
      case 95:  return '九五成新'
      case 90:  return '九成新'
      case 80:  return '八成新'
      default:  return '不好评价'
      }
    },

    areaCodes() {
      return this.item.district.split('/')
    },

    currentToken() {
      return localStorage.getItem('token')
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
