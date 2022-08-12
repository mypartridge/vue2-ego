<template>
  <div>
    <div class="login-box">
      <h3 class="title">登录界面</h3>
      <div style="color: red; font-size: 20px">{{ info }}</div>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="60px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model="loginForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
            @change="anenter()"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import jwt from "jwt-decode";
// import { mapMutations } from "vuex";
export default {
  name: "MyLogin",
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      info: "账号admin,密码123456",
      loginForm: {
        username: "",
        password: "",
      },
      userinfoh: {
        user: "admin",
        password: "123456",
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    anenter() {
      this.submitForm("ruleForm");
    },
    // ...mapMutations("loginModule", ["setUser"]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let parallelUser = this.loginForm.username == this.userinfoh.user;
          let parallelPass = this.loginForm.password == this.userinfoh.password;
          if (parallelUser && parallelPass) {
            this.$message({
              duration: 1500,
              message: "nice,登录成功啦",
              type: "success",
            });
            let obj = {
              user: this.loginForm.username,
              token: this.loginForm.username,
            };
            this.$store.commit("setUser", obj);
            sessionStorage.setItem("user", JSON.stringify(obj));
            this.$router.push("/");
          } else {
            //账号或密码错误
            this.info = "账号或密码错误";
            this.$message({
              message: "错了哦，这是一条错误消息",
              type: "error",
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  // ...mapMutations("loginModule", ["setUser"]),
  // submitForm(formName) {
  //   this.$refs[formName].validate((valid) => {
  //     if (valid) {
  //       let { username, password } = this.loginForm;
  //       this.$api
  //         .getLogin({
  //           username,
  //           password,
  //         })
  //         .then((res) => {
  //           console.log(res.data);
  //           if (res.data.status === 200) {
  //             console.log(jwt(res.data.data));
  //             let obj = {
  //               user: jwt(res.data.data).username,
  //               token: res.data.data,
  //             };
  //             this.setUser(obj);
  //             // this.info = "";
  //             // 存储本地
  //             localStorage.setItem("user", JOSN.stringify(obj));
  //             // 页面跳转
  //             this.$router.push("/");
  //           } else {
  //             //账号或密码错误
  //             // this.info = "账号或密码错误";
  //             this.$message.error("错了哦，这是一条错误消息");
  //           }
  //         });
  //     } else {
  //       console.log("error submit!!");
  //       return false;
  //     }
  //   });
  // },
  // resetForm(formName) {
  //   this.$refs[formName].resetFields();
  // },
};
</script>

<style lang="less" scoped>
.login-box {
  width: 400px;
  height: 300px;
  padding: 20px;
  margin: 100px auto;
  border-radius: 10px;
  border: 1px solid #eee;
  background: #fff;
}
.title {
  margin-bottom: 30px;
  text-align: center;
  color: #666;
}
</style>