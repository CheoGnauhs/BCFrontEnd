<template>
  <el-container>
    <el-header>
      <NavBar actpage="2"></NavBar>
    </el-header>
    <el-main>
      <el-form class="item-wrapper">
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
            v-model="form.area"
            :options="areaOptions"
            change-on-select
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="成色">
          <br>
          <el-select v-model="form.condition" placeholder="选择您的物品成色">
            <el-option
              v-for="(conOption,index) in conOptions"
              :key="index"
              :label="conOption.label"
              :value="conOption.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出售方式">
          <br>
          <el-select v-model="form.sellType" placeholder="选择您的交易方式">
            <el-option
              v-for="(dealOption,index) in dealOptions"
              :key="index"
              :label="dealOption.label"
              :value="dealOption.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物品类型">
          <br>
          <el-select v-model="form.type" allow-create multiple filterable placeholder="请为物品添加类型标签">
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
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt>
          </el-dialog>
        </el-form-item>
        <div>
          <el-button type="primary">提交</el-button>
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
        name: "",
        description: "",
        price: "",
        area: "",
        type: [],
        sellType: "",
        condition: ""
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
        }
      ],
      dealOptions: [
        {
          label: "线上交易",
          value: "online"
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
          value: "80"
        },
        {
          label: "8成新",
          value: "80"
        },
        {
          label: "不好评价",
          value: "unknown"
        }
      ],
      areaOptions: regionData
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
      console.log(this.form.area);
    }
  },
  mounted() {
    if (!localStorage.getItem('token')) {
      this.$router.replace('/login')
    }
  }
};
</script>

<style scope>
.item-wrapper {
  width: 500px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.el-button {
  width: 100px;
}
</style>
