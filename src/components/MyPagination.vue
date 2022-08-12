<template>
  <div style="text-align: center; margin: 20px">
    <el-pagination
      background
      layout="prev, pager, next,total,jumper"
      :total="total"
      :page-size="pageSize"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 100,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    //会用的时候配置@current-change="changePage"在上面
    // changePage() {
    //   this.$emit("changePage");
    // },
  },
};
</script>

<style>
</style>