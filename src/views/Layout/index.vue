<template>
  <div class="layout">
    <Yumenu class="menu" :isCollapse="isCollapse"></Yumenu>
    <Content
      class="content"
      @changCollapse="changCollapse"
      :isCollapse="isCollapse"
      :class="{ isActive: isCollapse }"
    ></Content>
  </div>
</template>

<script>
import Yumenu from "./Yumenu.vue";
import Content from "./Content.vue";
export default {
  name: "IndeXe",
  components: {
    Yumenu,
    Content,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    changCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang="less" scoped>
.layout {
  .menu {
    position: fixed; /*固定定位*/
    top: 0;
    bottom: 0;
    background-color: #2f4158;
  }
  .content {
    margin-left: 200px;
    transition: 0.3s linear;
  }
  .isActive {
    margin-left: 64px;
    transition: 0.3s linear;
  }
}
</style>