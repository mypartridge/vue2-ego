<template>
  <div>
    <!-- 弹窗 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="70%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品id" prop="id">
          <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
        <el-form-item label="商品时间" prop="date">
          <el-input
            placeholder="选择日期"
            v-model="ruleForm.date"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="商品图片">
          <el-button type="primary">上传图片</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="unshiftData">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="70%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品id" prop="id">
          <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
        <el-form-item label="商品时间" prop="date">
          <el-input
            placeholder="选择日期"
            v-model="ruleForm.date"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="商品图片">
          <el-button type="primary">上传图片</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="unshiftData">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    goodsRemove: {
      type: Boolean,
    },
    subscript: {
      type: Number,
    },
    tableData: {
      type: Array,
    },
    title: {
      type: String,
      default: "编辑商品",
    },
    rowData: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      dialogVisible: false,
      tableDatas: this.tableData,
      remove: this.goodsRemove,
      ruleForm: {
        //表单容器
        name: "",
        id: "",
        address: "",
        date: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        address: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date: [
          {
            required: true,
            message: "请输入日期",
            trigger: "change",
          },
        ],
        id: [{ required: true, message: "请输入id", trigger: "change" }],
      },
    };
  },
  methods: {
    unshiftData() {
      this.dialogVisible = false;
      this.tableDatas = this.tableDatas.filter((todo) => {
        if (todo.id == this.tableDatas[this.subscript].id) {
          return (this.tableDatas[this.subscript] = this.ruleForm);
        }
      });
    },
    close() {
      this.$emit("changeDialog", false);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
</style>