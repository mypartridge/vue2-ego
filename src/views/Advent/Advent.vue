<template>
  <div class="inAdvent">
    <div class="adventfont">广告分类情况</div>
    <div
      class="echarts"
      id="main"
      style="width: 100%; height: 700px; background-color: #fff"
    ></div>
  </div>
</template>

<script>
export default {
  name: "AdventVue",
  mounted() {
    this.advent();
  },
  methods: {
    advent() {
      var chartDom = document.getElementById("main");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          data: [
            "智能冰箱",
            "超薄电视",
            "扫地机器人",
            "外星人笔记本",
            "节能空调",
            "iPhone13",
            "洗碗机",
            "洗衣机",
          ],
        },
        series: [
          {
            name: "Advents",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],
            label: {
              position: "inner",
              fontSize: 14,
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1548, name: "家具" },
              { value: 775, name: "家电" },
              { value: 432, name: "手机", selected: true },
            ],
          },
          {
            name: "Access From",
            type: "pie",
            radius: ["45%", "60%"],
            labelLine: {
              length: 30,
            },
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#F6F8FC",
              borderColor: "#8C8D8E",
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: "#6E7079",
                  lineHeight: 22,
                  align: "center",
                },
                hr: {
                  borderColor: "#8C8D8E",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: 33,
                },
                per: {
                  color: "#fff",
                  backgroundColor: "#4C5058",
                  padding: [3, 4],
                  borderRadius: 4,
                },
              },
            },
            data: [
              { value: 1048, name: "智能冰箱" },
              { value: 335, name: "超薄电视" },
              { value: 310, name: "扫地机器人" },
              { value: 251, name: "外星人笔记本" },
              { value: 234, name: "节能空调" },
              { value: 147, name: "iPhone13" },
              { value: 135, name: "洗碗机" },
              { value: 102, name: "洗衣机" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" spoced>
.adventfont {
  width: 150px;
  height: 50px;
  background: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  line-height: 50px;
  margin: 20px;
  border-radius: 15px;
}
</style>