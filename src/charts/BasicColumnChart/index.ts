import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";
import G2 from "@antv/g2";

@Component
export default class BasicColumnChart extends Vue {
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
    this.chart.axis("time", {
      line: {
        lineWidth: 4,
        stroke: "#21299a"
      }
    });
    this.chart.scale("sales", {
      tickInterval: 20
    });
    this.chart
      .interval()
      .position("time*sales")
      .color("l(270)  0:#21699a 1:#27def7")
      .shape("borderRadius");
    this.chart.line().position("time*sales");
    this.chart.render();
  }
}
