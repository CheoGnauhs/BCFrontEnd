<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <el-main>
      <el-form class="item-wrapper">
        <h3 class="header">在下方填入您物品的详细信息</h3>
        <div class="card-head">
          <span slot="title">
            <i class="el-icon-info"></i>基本信息
          </span>
        </div>
        <div class="card-container">
          <el-form-item label="用户名">
            <el-input v-model="userInfo.handle" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="userInfo.userName" :disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model="userInfo.telephone"></el-input>
          </el-form-item>
          <el-form-item label="电子邮件">
            <el-input v-model="userInfo.email"></el-input>
          </el-form-item>
        </div>
        <div class="card-head">
          <span slot="title">
            <i class="el-icon-location"></i>居住信息
          </span>
        </div>
        <div class="card-container">
          <el-form-item label="行政区划">
            <br>
            <el-cascader :options="options" v-model="userInfo.district"></el-cascader>
          </el-form-item>
          <el-form-item label="详细地址">
            <br>
            <el-input v-model="userInfo.address"></el-input>
          </el-form-item>
          <el-button type="primary" @click="updateData">确认更改</el-button>
        </div>
      </el-form>
    </el-main>
    <el-footer>
      <FooterBar></FooterBar>
    </el-footer>
  </el-container>
</template>

<script>
/* eslint-disable */
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import { regionData } from "element-china-area-data";

export default {
  name: "DetailInfo",
  components: { NavBar, FooterBar },
  data() {
    return {
      options: regionData,
      userInfo: {},
      disabled: false
    };
  },
  methods: {
    getData() {
      fetch("/api/profile", {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application-json",
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
    updateData() {
      fetch("/api/profile", {
        method: "PATCH",
        Headers: new Headers({
          "Content-Type": "application-json",
          Authorization: localStorage.getItem("token")
        }),
        body: JSON.stringify(this.userInfo)
      }).then(res => {
        if (res.ok) {
          this.$message({
            message: "信息更改成功",
            type: "success"
          });
        } else {
          this.$message({
            message: "信息更改失败",
            type: "error"
          });
        }
      });
    }
  },
  mounted() {
    if (!localStorage.getItem("token")) {
      this.$router.replace("/login?redirect=/detail-info");
    }
    this.getData();
    if (this.userInfo.userName != "" || this.userInfo.userName != null) {
      this.disable = true;
    }
  },
  computed: {
    currentToken() {
      return localStorage.getItem("token");
    }
  }
};
</script>

<style scoped>
.header {
  font-size: 20px;
  color: #303233;
  margin: 10px 0;
}
.card-head {
  color: #606266;
  font-size: 16px;
  margin: 10px 0;
}
.item-wrapper {
  width: 500px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.el-button {
  width: 100px;
}
</style>
