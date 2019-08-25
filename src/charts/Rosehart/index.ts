import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import G2 from "@antv/g2";

@Component
export default class RoseChart extends Vue {
  @Prop({ default: [] })
  readonly data!: any[];

  chart!: any;

  @Watch("data")
  onDataChange(data) {
    // use api => changeData not source
    this.chart.changeData(data);
  }

  mounted() {
    this.chart = new G2.Chart({
      container: this.$refs.chart as any,
      forceFit: true,
      height: window.innerHeight,
      padding: 0
    });
    this.chart.source(this.data);
    this.chart.coord("polar", {
      innerRadius: 0.2
    });
    this.chart.legend({
      marker: "square",
      position: "right"
    });
    this.chart.axis(false);
    this.chart
      .interval()
      .position("year*population")
      .color("year");
    this.chart.guide().html({
      position: ["50%", "50%"],
      html:
        '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">燃气总量<br><span style="color:#8c8c8c;font-size:20px">12365</span>台</div>',
      alignX: "middle",
      alignY: "middle"
    });
    this.chart.render();
  }
}
