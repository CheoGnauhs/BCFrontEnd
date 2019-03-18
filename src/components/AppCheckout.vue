<template>
  <div>
    <div class="your-info">
      <h3 class="payment-title">请确认您的信息</h3>
      <el-form class="center">
        <el-form-item class="confirm-input" label="收货人">
          <el-input :disabled="true" v-model="receiver"></el-input>
        </el-form-item>
        <el-form-item class="confirm-input" label="地址">
          <el-input v-model="address"></el-input>
        </el-form-item>
        <el-form-item class="confirm-input" label="联系方式">
          <el-input v-model="phone"></el-input>
        </el-form-item>
        <el-button type="primary" @click="goBuy">确认购买</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    item_id: Number,
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
      address: "",
      receiver: "",
      phone: ""
    };
  },
  methods: {
    goBuy() {
      if (this.address.length == 0 || this.phone.length != 11) {
        this.$message({
          message: "请填写正确信息",
          type: "error"
        });
        return;
      }

      fetch(`/api/orders`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        }),
        body: JSON.stringify({
          name: this.receiver,
          telephone: this.phone,
          address: this.address,
          item_id: this.item_id
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.error == "BALANCE_NOT_ENOUGH") {
            this.$message({
              message: "余额不足",
              type: "error"
            });
          } else if (res.error == "NOT_AVAILABLE") {
            this.$message({
              message: "商品已不可购买",
              type: "error"
            });
          } else {
            this.$message({
              message: "交易成功",
              type: "success"
            });
            this.$router.push("/user-center");
          }
        });
    },
    getData() {
      fetch("/api/profile", {
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        })
      })
        .then(res => res.json())
        .then(res => {
          this.receiver = res.name || res.handle;
          this.phone = res.telephone;
          this.address = res.address;
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped>
.your-info {
  width: 1000px;
}
.payment {
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
.confirm-input {
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
</style>