<template>
  <div>
    <div class="your-info">
      <h3 class="payment-title">请确认您的信息</h3>
      <el-form>
        <el-form-item class="confirm-input" label="收货人">
          <el-input disabled="true" v-model="receiver"></el-input>
        </el-form-item>
        <el-form-item class="confirm-input" label="地址">
          <el-input v-model="address"></el-input>
        </el-form-item>
        <el-form-item class="confirm-input" label="联系方式">
          <el-input v-model="phone"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary">确认购买</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    total: {
      type: [Number, String],
      default: "50.00"
    },
    success: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      submitted: false,
      complete: false,
      status: "",
      response: "",
      address: "上海市杨浦区四平路1239号同济大学",
      receiver: "谭爽",
      phone: "17621476826"
    };
  },
  methods: {}
};
</script>

<style scoped>
.payment{
  width: 1000px;
}
.payment-title {
  background: rgb(217, 236, 255);
  margin: 0;
  padding: 10px 0;
  margin: 10px 0;
  font-size: 18px;
  font-weight: normal;
}
.confirm-input{
  width: 600px;
}
.statussubmit {
  text-align: center;
}
.stripe-card {
  border: 1px solid #ccc;
}
p {
  margin: 0 0 10px;
}
label {
  color: black;
  margin: 15px 0 5px;
  font-family: "Playfair Display", sans-serif;
}
.loadcontain {
  text-align: center;
}
.stripe-card {
  margin-bottom: 10px;
}
.cc-number {
  color: #3964e8;
  font-weight: bold;
}

/* -- transition --*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>