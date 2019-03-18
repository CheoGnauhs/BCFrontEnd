<template>
  <el-container>
    <el-header>
      <NavBar actpage="2"></NavBar>
    </el-header>
    <el-main>
      <el-form class="item-wrapper">
        <h3 class="header">在下方填入您物品的详细信息</h3>
        <el-form-item label="物品名称">
          <el-input v-model="form.name" placeholder="品类、品牌、型号等关键信息可在此输入"></el-input>
        </el-form-item>
        <el-form-item label="物品描述">
          <el-input type="textarea" v-model="form.description" placeholder="闲置原因、购买渠道、使用感受等可在此输入"></el-input>
        </el-form-item>
        <el-form-item label="出售价格">
          <el-input v-model="form.price" placeholder="为您的物品拟定合适的价格">
            <template slot="append">二手币</template>
          </el-input>
        </el-form-item>
        <el-form-item label="所在地">
          <br>
          <el-cascader
            v-model="form.districtCodes"
            :options="areaOptions"
            change-on-select
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="成色">
          <br>
          <el-select v-model="form.fineness" placeholder="选择您的物品成色">
            <el-option
              v-for="(conOption,index) in conOptions"
              :key="index"
              :label="conOption.label"
              :value="conOption.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="交易方式">
          <br>
          <el-select v-model="form.method" placeholder="选择您的交易方式">
            <el-option
              v-for="(dealOption,index) in dealOptions"
              :key="index"
              :label="dealOption.label"
              :value="dealOption.value"
              :disabled="dealOption.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物品类型">
          <br>
          <el-select v-model="form.field" multiple allow-create filterable placeholder="请为物品添加类型标签">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="图片上传">
          <br>
          <el-upload
            :action="`/api/items/upload`"
            list-type="picture-card"
            ref="uploader"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :multiple="false"
            :headers="{'Authorization':currentToken}"
            :on-progress="handleUploadStart"
            :on-success="handleUploadSuccess"
            :on-error="handleUploadError"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt>
          </el-dialog>
        </el-form-item>
        <div>
          <el-button type="primary" @click="submitForm" :disable="!uploadInProgress">提交</el-button>
          <el-button>重置</el-button>
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
  name: "NewItem",
  components: { NavBar, FooterBar },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      form: {
        // FIXME: Using id to POST directly is dangerous.
        id: "",
        name: "",
        description: "",
        price: "",
        districtCodes: [],
        field: [],
        method: "",
        fineness: ""
      },
      options: [
        {
          label: "书本",
          value: "book"
        },
        {
          label: "文具",
          value: "stationary"
        },
        {
          label: "生活用品",
          value: "supplies"
        },
        {
          label: "手机",
          value: "phone"
        },
        {
          label: "衣物",
          value: "garment"
        }
      ],
      dealOptions: [
        {
          label: "线上交易",
          value: "online",
          disabled: true
        },
        {
          label: "线下面交",
          value: "offline"
        }
      ],
      conOptions: [
        {
          label: "全新",
          value: "100"
        },
        {
          label: "95新",
          value: "95"
        },
        {
          label: "9成新",
          value: "90"
        },
        {
          label: "8成新",
          value: "80"
        },
        {
          label: "不好评价",
          value: "0"
        }
      ],
      areaOptions: regionData,
      uploadInProgress: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      // eslint-disable-next-line
      console.log(file, fileList);
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    handleChange() {
      console.log(this.form.districtCodes);
    },

    submitForm() {
      this.form.district = this.form.districtCodes.join("/");
      fetch("/api/items", {
        method: "POST",
        body: JSON.stringify(this.form),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error();
          }
        })
        .then(res => {
          this.$message({
            message: "创建成功",
            type: "success"
          });
          this.$router.push(`/item-detail/${res.id}`);
        })
        .catch(err => {
          this.$message({
            message: "创建失败",
            type: "error"
          });
          this.loadState = false;
        });
    },

    handleUploadStart() {
      this.uploadInProgress = true;
    },

    handleUploadSuccess(response) {
      this.form.id = response.id;
      this.uploadInProgress = false;
    },

    handleUploadError() {
      this.uploadInProgress = false;
    }
  },
  mounted() {
    if (!localStorage.getItem("token")) {
      this.$router.replace("/login?redirect=/new-item");
    }
  },
  computed: {
    currentToken() {
      return localStorage.getItem("token");
    }
  }
};
</script>

<style scope>
.header{
  font-size: 20px;
  color: #303233;
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
