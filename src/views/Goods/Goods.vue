<template>
  <div class="goods">
    <!-- 搜索区域 -->
    <div class="header">
      <el-input
        v-model="input"
        placeholder="请输入内容"
        @change="searchInp"
      ></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary" @click="addGoods">弹窗</el-button>
    </div>
    <!-- 表格区域视图数据 -->
    <div class="wrapper">
      <el-table :data="tableData" stripe border>
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="id" label="商品id" ref="id" width="80">
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="商品地址"
          width="100"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="date" label="商品时间" width="100">
        </el-table-column>
        <el-table-column prop="paramsspec" label="规格类目"> </el-table-column>
        <el-table-column prop="selling" label="商品卖点"> </el-table-column>
        <el-table-column prop="describe" label="商品描述"> </el-table-column>
        <el-table-column label="操作" width="145">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
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
    </div>
    <!-- 分页 -->
    <MyPagination
      :total="total"
      :pageSize="pageSize"
      @changePage="changePage"
    ></MyPagination>
    <!-- 弹窗 -->
    <!-- <GoodsDialog
      :dialogVisible="dialogVisible"
      @changeDialog="changeDialog"
    ></GoodsDialog> -->
    <GoodsDialog
      ref="dialog"
      :tableData="tableData"
      :title="title"
      :rowData="rowData"
      :subscript="subscript"
    ></GoodsDialog>
  </div>
</template>

<script>
import GoodsDialog from "../../components/GoodsDialog.vue";
import MyPagination from "../../components/MyPagination.vue";
export default {
  name: "GoodsVue",
  components: {
    MyPagination,
    GoodsDialog,
  },
  data() {
    return {
      input: "",
      total: 10,
      pageSize: 1,
      subscript: 0,
      invoking: "",
      dialogVisible: false,
      title: "添加商品",
      rowData: {}, //当前行的数据对象
      tableData: [
        {
          id: 0,
          date: "2016-05-01",
          name: "智能冰箱",
          address: "上海市普陀区金沙江路 1511 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 1,
          date: "2016-05-02",
          name: "超薄电视",
          address: "上海市普陀区金沙江路 1512 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 2,
          date: "2016-05-02",
          name: "扫地机器人",
          address: "上海市普陀区金沙江路 1512 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 3,
          date: "2016-05-02",
          name: "外星人笔记本",
          address: "上海市普陀区金沙江路 1512 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "节能空调",
          address: "上海市普陀区金沙江路 1513 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 5,
          date: "2016-05-04",
          name: "iPhone13Promax",
          address: "上海市普陀区金沙江路 1514 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 6,
          date: "2016-05-05",
          name: "洗碗机",
          address: "上海市普陀区金沙江路 1515 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 7,
          date: "2016-05-05",
          name: "洗衣机",
          address: "上海市普陀区金沙江路 1515 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 8,
          date: "2016-05-06",
          name: "蓝牙耳机",
          address: "上海市普陀区金沙江路 1516 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 9,
          date: "2016-05-07",
          name: "热水器",
          address: "上海市普陀区金沙江路 1517 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 10,
          date: "2016-05-07",
          name: "华为P50",
          address: "上海市普陀区金沙江路 1517 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 11,
          date: "2017-05-08",
          name: "好想找工作",
          address: "上海市普陀区金沙江路 1518 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
      ],
      todos: [
        {
          id: 0,
          date: "2016-05-01",
          name: "智能冰箱",
          address: "上海市普陀区金沙江路 1511 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 1,
          date: "2016-05-02",
          name: "超薄电视",
          address: "上海市普陀区金沙江路 1512 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 2,
          date: "2016-05-02",
          name: "扫地机器人",
          address: "上海市普陀区金沙江路 1512 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 3,
          date: "2016-05-02",
          name: "外星人笔记本",
          address: "上海市普陀区金沙江路 1512 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "节能空调",
          address: "上海市普陀区金沙江路 1513 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 5,
          date: "2016-05-04",
          name: "iPhone13Promax",
          address: "上海市普陀区金沙江路 1514 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 6,
          date: "2016-05-05",
          name: "洗碗机",
          address: "上海市普陀区金沙江路 1515 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 7,
          date: "2016-05-05",
          name: "洗衣机",
          address: "上海市普陀区金沙江路 1515 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 8,
          date: "2016-05-06",
          name: "蓝牙耳机",
          address: "上海市普陀区金沙江路 1516 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 9,
          date: "2016-05-07",
          name: "热水器",
          address: "上海市普陀区金沙江路 1517 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 10,
          date: "2016-05-07",
          name: "华为P50",
          address: "上海市普陀区金沙江路 1517 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
        {
          id: 11,
          date: "2017-05-08",
          name: "好想找工作",
          address: "上海市普陀区金沙江路 1518 弄",
          paramsspec: "商品合格",
          selling: "上海市普陀区金沙江路 1511 弄",
          describe: "我家的东西最好了",
        },
      ],
    };
  },
  methods: {
    //弹窗
    addGoods() {
      // this.dialogVisible = true;
      this.$refs.dialog.dialogVisible = true;
    },
    changeDialog() {
      // this.dialogVisible = false;
    },
    // 分页页码
    changePage() {
      // this.http(num)
    },
    //搜索数据,获取input框内容
    addvalue(e) {
      if (!e.target.value.trim()) {
        return;
      } else {
        const val = e.target.value;
        this.searchInp(val);
      }
    },
    searchInp(val) {
      this.tableData = [];
      for (let i = 0; i < this.todos.length; i++) {
        if (val == "") {
          return (this.tableData = this.todos);
        } else if (val == this.todos[i].id || val == Number) {
          this.tableData.unshift(this.todos[i]);
        }
      }
    },
    // searchInp(val) {
    // this.$apigetSearch({
    //   search: val,
    // }).then((res) => {
    //   if (res.data.status === 200) {
    //     this.tableData = res.data.result;
    //   } else {
    //     this.tableData = [];
    //   }
    // });
    // },
    // 编辑操作
    handleEdit(index, row) {
      this.subscript += index;
      this.$refs.dialog.dialogVisible = true;
      this.title = "编辑商品";
      // this.rowData=row;
      this.$refs.dialog.ruleForm = row;
    },
    // 删除操作
    handleDelete(index) {
      this.tableData = this.tableData.filter((todo) => {
        return this.tableData.indexOf(todo) !== index;
      });
    },
    // 商品列表的获取
    //   http(page) {
    //     this.$api
    //       .getGoodsList({
    //         page,
    //       })
    //       .then((res) => {
    //         console.log(res.data);
    //         if (res.data.status === 200) {
    //           this.tableData = res.data.data; //数据列表
    //           this.total = res.data.total;
    //           this.pageSize = res.data.pageSize;
    //         }
    //       });
    //   },
    // },
    // created() {
    //  this.http(1)
    // },
  },
};
</script>

<style lang="less" scoped>
.goods {
  margin: 20px;
}
.header {
  display: flex;
  button {
    margin-left: 20px;
  }
}
.wrapper {
  margin: 20px 0;
}
</style>