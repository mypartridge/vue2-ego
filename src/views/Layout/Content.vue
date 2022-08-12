<template>
  <div>
    <div class="header">
      <i v-if="!isCollapse" @click="changMenu" class="el-icon-open"></i>
      <i v-else @click="changMenu" class="el-icon-turn-off"></i>
      <div class="header-right">
        <el-dropdown @command="clickLang" class="minhand">
          <!-- <el-dropdown> -->
          <span class="el-dropdown-link" style="color: #fff">
            多语言<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">简体中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="user">
          <span style="font-size: 16px; margin-right: 10px"
            >欢迎：{{ userinfo.user }}</span
          >

          <i
            title="退出登录"
            class="el-icon-switch-button"
            @click="loginout"
            style="cursor: pointer"
          ></i>
        </div>
      </div>
    </div>
    <!-- 内容区域 路由出口 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["isCollapse"],
  computed: {
    ...mapState(["userinfo"]),
  },
  name: "MyContent",
  methods: {
    ...mapMutations(["clearUser"]),
    clickLang(command) {
      this.$i18n.locale = command;
    },
    changMenu() {
      // 点击切换按钮修改父组件isCollapse
      this.$emit("changCollapse");
    },
    loginout() {
      // 退出登录
      this.clearUser();
      //清空本地存储
      sessionStorage.removeItem("user");
      //返回登录
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  color: #fff;
  height: 60px;
  background-color: #2f4158;
  line-height: 60px;
  i {
    font-size: 24px;
  }
  .header-right {
    float: right;
    padding-right: 20px;
    display: flex;
    .user {
      margin-left: 20px;
    }
  }
}
.minhand {
  cursor: pointer;
}
</style>