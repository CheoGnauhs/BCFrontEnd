<template>
  <div class="register-body">
    <h3>注册您的账号</h3>
    <el-form :model="registerInfo" :rules="rules" ref="registerInfo">
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
        <el-button @click="register('registerInfo')" class="wide-button" type="primary">确认注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "RegisterBody",
  data() {
    var validateUsername = (rule, value, callback) => {
      let reg = /^\w+$/;
      if (value.search(reg) === -1) {
        callback(new Error("用户名需由数字、字母、下划线构成"));
      } else {
        callback();
      }
    };
    var checkTel = (rule, value, callback) => {
      let reg = /^((0\d{2,3}-\d{7,8})|(1[356784]\d{9}))$/;
      if (value.search(reg) === -1) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      let reg = /(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{8,16}/i;
      if (!value) {
        callback(new Error("密码不能为空"));
      } else if (value.search(reg) === -1) {
        callback(new Error("密码中必须包含字母、数字、特殊符号"));
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
      let reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
      if (value.search(reg) === -1) {
        callback(new Error("请输入正确的邮箱地址"));
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
        username: [
          { required: true, message: "请输入您的用户名", trigger: "blur" },
          {
            min: 4,
            max: 14,
            message: "输入长度请在4到14个字符之间",
            trigger: "blur"
          },
          { validator: validateUsername, trigger: "blur" }
        ],
        telephone: [
          { required: true, message: "请输入您的手机号", trigger: "blur" },
          { validator: checkTel, trigger: "blur" }
        ],
        password: [
          {
            min: 8,
            max: 16,
            message: "密码的长度请在8到16个字符之间",
            trigger: "blur"
          },
          { required: true, message: "请输入您的密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        checkPassword: [
          { required: true, message: "请再次输入您的密码", trigger: "blur" },
          { validator: validateCheckPass, trigger: "blur" }
        ],
        email: [
          {
            required: true,
            message: "请输入您的电子邮件地址",
            trigger: "blur"
          },
          { validator: checkEmail, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    register(registerInfo) {
      this.$refs[registerInfo].validate(valid => {
        if (valid) {
          alert("表单验证成功!");
        } else {
          // eslint-disable-next-line
          console.log("表单验证失败!");
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
  border: 1px #DCDFE6 solid;
  width: 350px;
  padding: 20px;
  margin: 0 auto;
}
.wide-button {
  width: 100%;
}
</style>
