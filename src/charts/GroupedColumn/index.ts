import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";
import G2 from "@antv/g2";

@Component
export default class GroupColumn extends Vue {
  @Prop({ default: [] })
  readonly data!: any[];

  chart!: any;

  @Emit("func")
  checkWeekYear(WeekYear: string) {
    return WeekYear;
  }

  @Watch("data")
  onDataChange(data) {
    // use api => changeData not source
    this.chart.changeData(data);
  }

  mounted() {
    this.chart = new G2.Chart({
      container: this.$refs.chart as any,
      forceFit: true,
      height: window.innerHeight
    });
    this.chart.source(this.data);
    this.chart.axis("times", {
      line: {
        lineWidth: 4,
        stroke: "#21299a"
      }
    });
    this.chart.scale("月均降雨量", {
      tickInterval: 20
    });
    this.chart
      .interval()
      .position("times*月均降雨量")
      .color("name")
      .adjust([
        {
          type: "dodge",
          marginRatio: 1 / 32
        }
      ]);
    this.chart
      .line()
      .position("times*月均降雨量")
      .color("name")
      .adjust([
        {
          type: "dodge",
          marginRatio: 1 / 32
        }
      ]);
    this.chart.render();
  }
}
