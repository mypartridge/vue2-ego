<template>
  <div class="home">
    <div class="label">
      <el-tag
        class="labels"
        style="background: linear-gradient(to bottom, #cb8e81, #855c55)"
      >
        <span>总销售额</span>
        <p style="font-size: 20px; margin-bottom: 10px">&nbsp;431305</p>
        <p style="border-top: 1px solid #fff">今日销售额：648</p>
      </el-tag>
      <el-tag
        class="labels"
        type="success"
        style="background: linear-gradient(to bottom, #3c98ff, #335269)"
        ><span>访问量</span>
        <p style="font-size: 20px; margin-bottom: 10px">&nbsp;659455</p>
        <p style="border-top: 1px solid #fff">今日销售额：648</p></el-tag
      >
      <el-tag
        class="labels"
        type="info"
        style="background: linear-gradient(to bottom, #a26399, #6f4974)"
        ><span>支付总量</span>
        <p style="font-size: 20px; margin-bottom: 10px">&nbsp;235415</p>
        <p style="border-top: 1px solid #fff">今日销售额：648</p></el-tag
      >
      <el-tag
        class="labels"
        type="warning"
        style="background: linear-gradient(to bottom, #14bfee, #406a76)"
        ><span>收藏量</span>
        <p style="font-size: 20px; margin-bottom: 10px">&nbsp;895674</p>
        <p style="border-top: 1px solid #fff">今日销售额：648</p></el-tag
      >
    </div>
    <div
      class="echarts"
      id="main"
      style="width: 600px; height: 400px; background-color: #fff"
    ></div>
    <div
      class="echarts"
      id="main1"
      style="width: 710px; height: 400px; background-color: #fff"
    ></div>
  </div>
</template>

<script>
export default {
  name: "FirstVue",
  mounted() {
    this.bar();
    this.line();
  },
  methods: {
    bar() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        tooltip: {},
        title: {
          text: "销量图表",
        },
        legend: {
          data: ["商品销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "商品销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    line() {
      var chartDom = document.getElementById("main1");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "月销售额",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["家具", "手机", "家电"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "2022-1",
              "2022-2",
              "2022-3",
              "2022-4",
              "2022-5",
              "2022-6",
              "2022-7",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "家具",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "手机",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "家电",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped lang="less">
.home {
  margin: 20px;
}
.echarts {
  float: left;
  margin: 20px 10px 0 0;
}
.label {
  .labels {
    width: 300px;
    height: 120px;
    margin-right: 40px;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 0;
    color: #fff;
  }
}
</style>