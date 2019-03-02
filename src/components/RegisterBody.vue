<template>
  <div class="register-body">
    <el-form :model="registerInfo" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="telephone">
        <el-input v-model="registerInfo.telephone"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件" prop="email">
        <el-input v-model="registerInfo.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="registerInfo.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input v-model="registerInfo.checkPassword" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="register" class="wide-button" type="primary">确认注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "RegisterBody",
  data() {
    var checkTel = (rule, value, callback) => {
      if (!value) {
        callback(new Error("手机号不能为空"));
      }
      if (value.length != 11) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("密码不能为空"));
      } else {
        if (this.registerInfo.checkPassword != "") {
          this.$refs.registerInfo.validateField("checkPassword");
        }
        callback();
      }
    };
    var validateCheckPass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerInfo.password) {
        callback(new Error("前后输入的密码不一致"));
      } else {
        callback();
      }
    };
    var checkEmail = (rule, value, callback) => {
      if (value.search("@") == -1 || value.search("." == -1)) {
        callback(new Error("请输入合法的邮箱地址"));
      } else {
        callback();
      }
    };
    return {
      registerInfo: {
        username: "",
        telephone: "",
        email: "",
        password: "",
        checkPassword: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入您的用户名", trigger: blur },
          {
            min: 4,
            max: 14,
            message: "输入长度请在4到14个字符之间",
            trigger: blur
          }
        ],
        telephone: [{ validator: checkTel, trigger: blur }],
        password: [{ validator: validatePass, trigger: blur }],
        checkPassword: [{ validator: validateCheckPass, trigger: blur }],
        email: [{ validator: checkEmail, trogger: blur }]
      }
    };
  },
  methods: {
    register(registerInfo) {
      this.$refs[registerInfo].validate((valid) => {
        if (valid) {
          // eslint-disable-next-line
          console.log("submit!");
        } else {
          // eslint-disable-next-line
          console.log("something wrong!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.register-body {
  border-radius: 5px;
  border: 1px #909399 solid;
  width: 400px;
  padding: 20px;
  margin: 0 auto;
}
.wide-button {
  width: 100%;
}
</style>
