import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import echarts from "echarts";

@Component
export default class ScatterChart extends Vue {
  @Prop({ default: [] })
  readonly data!: any[];

  chart!: any;

  @Watch("data")
  onDataChange(data) {
    this.chart.setOption({
      series: [
        {
          symbolSize: 20,
          data,
          type: "scatter"
        }
      ]
    });
  }

  mounted() {
    this.chart = echarts.init(this.$refs.chart);

    this.chart.setOption({
      xAxis: {},
      yAxis: {},
      series: [
        {
          symbolSize: 20,
          data: this.data,
          type: "scatter"
        }
      ]
    });
  }
}
