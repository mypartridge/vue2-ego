<template>
  <div class="params">
    <!-- 目录位置 -->
    <div class="nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/params' }"
          >规格参数</el-breadcrumb-item
        >
        <el-breadcrumb-item>规格包装</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 搜索框 -->
    <div class="header">
      <el-input
        v-model="input"
        placeholder="请输入内容"
        @change="searchInp"
      ></el-input>
      <el-button type="primary">查看</el-button>
      <el-button type="primary" @click="addGoods">弹窗</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="tabletos" class="my-table">
      <el-table-column prop="id" label="类目ID" width="120"> </el-table-column>
      <el-table-column prop="itemCatId" label="规格参数ID" width="120">
      </el-table-column>
      <el-table-column prop="specsName" label="规格名称" width="120">
      </el-table-column>
      <el-table-column prop="paramDatas" label="规格参数"> </el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >查看</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <MyPagination
      :total="total"
      :pageSize="pageSize"
      @changePage="changePage"
    ></MyPagination>
    <!-- 弹框 -->
    <ParamsDialog
      ref="dialog"
      :tabletos="tabletos"
      :title="title"
      :rowData="rowData"
      :subscript="subscript"
    ></ParamsDialog>
  </div>
</template>

<script>
import MyPagination from "../../../components/MyPagination.vue";
import ParamsDialog from "../../../components/ParamsDialog.vue";
export default {
  components: {
    MyPagination,
    ParamsDialog,
  },
  data() {
    return {
      input: "", //搜索内容
      dialogVisible: false, //弹窗隐藏
      total: 3, //页数
      pageSize: 1, //显示第一页
      subscript: 0, //当前行的索引
      rowData: {},
      title: "添加商品",
      tabletos: [
        {
          id: 0,
          itemCatId: "10000",
          specsName: "智能冰箱",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 1,
          itemCatId: "10001",
          specsName: "超薄电视",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 2,
          itemCatId: "10002",
          specsName: "扫地机器人",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 3,
          itemCatId: "10003",
          specsName: "外星人笔记本",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 4,
          itemCatId: "10004",
          specsName: "节能空调",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 5,
          itemCatId: "10005",
          specsName: "iPhone13Promax",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 6,
          itemCatId: "10006",
          specsName: "洗碗机",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 7,
          itemCatId: "10007",
          specsName: "洗衣机",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 8,
          itemCatId: "10008",
          specsName: "蓝牙耳机",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 9,
          itemCatId: "10009",
          specsName: "热水器",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 10,
          itemCatId: "10010",
          specsName: "华为P50",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 11,
          itemCatId: "10011",
          specsName: "好想找工作",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
      ],
      todotab: [
        {
          id: 0,
          itemCatId: "10000",
          specsName: "智能冰箱",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 1,
          itemCatId: "10001",
          specsName: "超薄电视",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 2,
          itemCatId: "10002",
          specsName: "扫地机器人",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 3,
          itemCatId: "10003",
          specsName: "外星人笔记本",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 4,
          itemCatId: "10004",
          specsName: "节能空调",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 5,
          itemCatId: "10005",
          specsName: "iPhone13Promax",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 6,
          itemCatId: "10006",
          specsName: "洗碗机",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 7,
          itemCatId: "10007",
          specsName: "洗衣机",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 8,
          itemCatId: "10008",
          specsName: "蓝牙耳机",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 9,
          itemCatId: "10009",
          specsName: "热水器",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 10,
          itemCatId: "10010",
          specsName: "华为P50",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
        {
          id: 11,
          itemCatId: "10011",
          specsName: "好想找工作",
          paramDatas: "主体、版本、颜色、规格、品牌、重量、尺寸",
        },
      ],
    };
  },
  methods: {
    // http(page) {
    //   this.$api.getParams({ page }).then((res) => {
    //     if (res.data.status === 200) {
    //       this.tabletos = res.data.data;
    //       this.total = res.data.total;
    //       this.pageSize = res.data.pageSize;
    //     }
    //   });
    // },
    changeDialog() {
      // 不会
    },
    // 分页页码
    changePage() {
      // 不会
    },
    addGoods() {
      this.$refs.dialog.dialogVisible = true;
      this.$refs.dialog.Category = false;
    },
    addvalue(e) {
      if (!e.target.value.trim()) {
        return;
      } else {
        const val = e.target.value;
        this.searchInp(val);
      }
    },
    searchInp(val) {
      this.tabletos = [];
      for (let i = 0; i < this.todotab.length; i++) {
        if (val == "") {
          return (this.tabletos = this.todotab);
        } else if (val == this.todotab[i].id || val == Number) {
          this.tabletos.unshift(this.todotab[i]);
        }
      }
    },
    handleEdit(index, row) {
      this.subscript += index;
      this.$refs.dialog.dialogVisible = true;
      this.title = "编辑商品";
      this.$refs.dialog.ruleForm = row;
    },
    // 删除操作
    handleDelete(index) {
      this.tabletos = this.tabletos.filter((todo) => {
        return this.tabletos.indexOf(todo) !== index;
      });
    },
  },
};
</script>
<style lang="less" scoped>
.params {
  margin: 10px;
}
.nav {
  padding: 10px;
}
.header {
  display: flex;
  background: #fff;
  padding: 10px;
  border: 1px solid #eee;
  button {
    margin-left: 20px;
  }
}
.my-table {
  margin: 10px auto;
}
</style>