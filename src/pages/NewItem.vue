<template>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <el-main>
      <el-form class="item-wrapper">
        <el-form-item label="物品名称">
          <el-input v-model="form.name" placeholder="品类、品牌、型号等关键信息可在此输入"></el-input>
        </el-form-item>
        <el-form-item label="物品描述">
          <el-input type="textarea" v-model="form.description" placeholder="闲置原因、购买渠道、使用感受等可在此输入"></el-input>
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
        <el-form-item label="出售价格">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="出售方式">
          <el-input v-model="form.sellType"></el-input>
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
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";

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
        type: [],
        sellType: ""
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
      ]
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
.el-button{
  width: 100px;
}
</style>
