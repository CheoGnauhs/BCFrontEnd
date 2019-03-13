<template>
  <div>
    <transition name="fade">
      <div v-if="!submitted" class="payment">
        <h3>请确认订单信息</h3>

        <el-input placeholder="如：上海市杨浦区四平路同济大学" v-model="address">
          <template slot="prepend">请输入地址</template>
        </el-input>

        <el-input placeholder="收件人" v-model="receiver">
          <template slot="prepend">请输入收件人</template>
        </el-input>

        <el-input placeholder="+86" v-model="phone" type="number">
          <template slot="prepend">请输入联系方式</template>
        </el-input>

        <label for="card">Credit Card</label>

        <card
          class="stripe-card"
          id="card"
          :class="{ complete }"
          stripe="pk_test_5ThYi0UvX3xwoNdgxxxTxxrG"
          :options="stripeOptions"
          @change="complete = $event.complete"
        />
        <el-button
          type="primary"
          round
          @click="pay"
          :disabled="!complete || !address || !receiver || !phone"
        >Pay with credit card</el-button>
      </div>

      <div v-else class="statussubmit">
        <div v-if="status === 'failure'">
          <h3>Oh No!</h3>
          <p>Something went wrong!</p>
          <button @click="clearCart">Please try again</button>
        </div>

        <div v-else class="loadcontain">
          <h4>Please hold, we're filling up your cart with goodies</h4>
          <app-loader/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Card, createToken } from "vue-stripe-elements-plus";
import AppLoader from "./AppLoader.vue";
// import axios from 'axios';

export default {
  components: {
    Card,
    AppLoader
  },
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
      address: "",
      receiver: "",
      phone: "",
      stripeOptions: {
        // you can configure that cc element. I liked the default, but you can
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      stripeEmail: ""
    };
  },
  methods: {
    pay() {
      createToken().then(data => {
        this.submitted = true;
        // eslint-disable-next-line
        console.log(data.token); //this is a token we would use for the stripeToken below
        window.tar = this;
        setTimeout(() => {
          window.tar.status = "success";
          window.tar.submitted = true;
          this.status = "success";
          //this.$emit('successSubmit');
          window.makeSuccess();
          window.cartTotal = 0;
        }, 5000);
        // axios
        //   .post(
        //     'https://sdras-stripe.azurewebsites.net/api/charge?code=zWwbn6LLqMxuyvwbWpTFXdRxFd7a27KCRCEseL7zEqbM9ijAgj1c1w==',
        //     {
        //       stripeEmail: this.stripeEmail,
        //       stripeToken: 'tok_visa', //testing token
        //       stripeAmt: this.total
        //     },
        //     {
        //       headers: {
        //         'Content-Type': 'application/json'
        //       }
        //     }
        //   )
        //   .then(response => {
        //     this.status = 'success';
        //     this.$emit('successSubmit');
        //     this.$store.commit('clearCartCount');

        //     //console logs for you :)
        //     this.response = JSON.stringify(response, null, 2);
        //     // eslint-disable-next-line
        //     console.log(this.response);
        //   })
        //   .catch(error => {
        //     this.status = 'failure';

        //     //console logs for you :)
        //     this.response = 'Error: ' + JSON.stringify(error, null, 2);
        //     // eslint-disable-next-line
        //     console.log(this.response);
        //   });
      });
    },
    clearCart() {
      this.submitted = false;
      this.status = "";
      this.complete = false;
      this.response = "";
    }
  }
};
</script>

<style scoped>
.payment {
  border: 1px solid #ccc;
  color: black;
  width: 500px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  min-height: 350px;
  justify-content: space-between;
  text-align: center;
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