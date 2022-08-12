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
        <el-form-item label="类目ID" prop="id">
          <el-input v-model="ruleForm.id" :disabled="Category"></el-input>
        </el-form-item>
        <el-form-item label="规格参数ID" prop="itemCatId">
          <el-input v-model="ruleForm.itemCatId"></el-input>
        </el-form-item>
        <el-form-item label="规格名称" prop="specsName">
          <el-input v-model="ruleForm.specsName"></el-input>
        </el-form-item>
        <el-form-item label="规格参数" prop="paramDatas">
          <el-input v-model="ruleForm.paramDatas"></el-input>
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
  // props: ["dialogVisible"],
  props: {
    subscript: {
      type: Number,
    },
    tabletos: {
      type: Array,
    },
    title: {
      type: String,
      default: "添加商品",
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
      Category: true,
      tableDatas: this.tabletos,
      ruleForm: {
        //表单容器
        itemCatId: "",
        id: "",
        specsName: "",
        paramDatas: "",
      },
      rules: {
        id: [{ required: true, message: "请输入id", trigger: "change" }],
        itemCatId: [
          { required: true, message: "请输入规格参数ID", trigger: "change" },
        ],
        specsName: [
          { required: true, message: "请输入规格名称", trigger: "blur" },
          {
            min: 1,
            max: 15,
            message: "长度在 1 到 15 个字符",
            trigger: "blur",
          },
        ],
        paramDatas: [
          { required: true, message: "请配置规格参数", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    unshiftData() {
      this.dialogVisible = false;
      this.Category = true;
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