import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";
import G2 from "@antv/g2";

@Component
export default class LineChart extends Vue {
  @Prop({ default: 1000 })
  readonly width!: number;

  @Prop({ default: 500 })
  readonly height!: number;

  chart!: any;

  @Emit("func1")
  checkWeekYear(WeekYear: string) {
    return WeekYear;
  }

  @Prop({ default: [] })
  readonly data!: any[];

  @Watch("data")
  onDataChange(data) {
    // use api => changeData not source
    this.chart.changeData(data);
  }

  mounted(): void {
    this.chart = new G2.Chart({
      container: this.$refs.chart as any,
      forceFit: true,
      height: window.innerHeight
    });

    this.chart.source(this.data, {
      time: {
        range: [0, 1]
      }
    });
    this.chart.tooltip({
      crosshairs: {
        type: "line"
      }
    });
    this.chart.axis("temperature", {
      label: {
        formatter(val) {
          return `${val}°C`;
        }
      }
    });
    this.chart.legend({
      marker: "square",
      position: "top-center"
    });
    this.chart
      .areaStack()
      .position("time*temperature")
      .shape("smooth")
      .style({
        opacity: 0.1
      })
      .color("city");
    this.chart
      .lineStack()
      .position("time*temperature")
      .shape("smooth")
      .color("city")
      .size(2);
    this.chart.render();
  }
}
