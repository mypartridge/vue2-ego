<template>
  <div>
    <ul>
      <el-menu
        :default-active="pathword"
        @select="ispathword"
        ref="menu"
        class="el-menu-vertical-demo"
        background-color="#2f4158"
        text-color="#8a8a8a"
        active-text-color="#5bdeca"
        style="border-right: 0"
        router
        :collapse="isCollapse"
      >
        <el-menu-item style="color: #fff">
          <i
            class="iconfont"
            style="color: #fff !important;background-color=#2f4158 !important;"
            >ego</i
          >
          <span slot="title">后台管理</span>
        </el-menu-item>
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ $t("menu.home") }}</span>
        </el-menu-item>
        <el-menu-item index="/goods" select>
          <i class="el-icon-document"></i>
          <span slot="title">{{ $t("menu.goods") }}</span>
        </el-menu-item>
        <el-submenu index="/params">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">{{ $t("menu.params") }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/params/paramsspecs">
              <i class="el-icon-s-help"></i>
              <span slot="title">{{ $t("menu.paramsspec") }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/advert">
          <i class="el-icon-s-shop"></i>
          <span slot="title">{{ $t("menu.advent") }}</span>
        </el-menu-item>
        <!-- <el-submenu index="/order">
          <template slot="title">
            <i class="el-icon-s-goods"></i>
            <span>{{ $t("menu.order") }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/order/orderlist">
              <i class="el-icon-s-help"></i>
              <span slot="title">{{ $t("menu.orderlist") }}</span>
            </el-menu-item>
            <el-menu-item index="/order/orderback">
              <i class="el-icon-help"></i>
              <span slot="title">{{ $t("menu.orderback") }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu> -->
      </el-menu>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MymenUs",
  props: ["isCollapse"],
  data() {
    return {
      pathword: "/",
    };
  },
  // 页面刷新导航栏与路径不匹配
  methods: {
    ispathword() {
      sessionStorage.setItem("navkeep", this.$refs.menu.activeIndex);
      // activeIndex用于保存你所点击的el-menu-item 的index
      // sessionStorage.setItem固定写法，this.$refs.menu.activeIndex临时存储在navkeep中
    },
  },
  created() {
    if (sessionStorage.getItem("navkeep")) {
      this.pathword = sessionStorage.getItem("navkeep");
    }
  },
};
</script>

<style lang="less">
.el-menu {
  .is-active {
    background: #242e39 !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>