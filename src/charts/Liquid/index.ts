import { Vue, Component, Prop } from "vue-property-decorator";
import G2 from "@antv/g2";

@Component
export default class LiquidChart extends Vue {
  @Prop({ default: [] })
  readonly data!: any[];

  mounted() {
    const chart = new G2.Chart({
      container: this.$refs.chart as any,
      forceFit: true,
      height: window.innerHeight,
      padding: [20, 20, 95, 80]
    });
    chart.source(this.data, {
      value: {
        min: 0,
        max: 100
      }
    });
    chart.legend(false);
    chart.axis(false);
    chart
      .interval()
      .position("gender*value")
      .color("#3290f6")
      // .shape('path', path => [ 'liquid-fill-path', path ])
      .shape("liquid-fill-gauge")
      .style({
        lineWidth: 2,
        opacity: 0.8
      });
    this.data.forEach(function(row) {
      chart.guide().text({
        top: true,
        position: {
          gender: row.gender,
          value: 50
        },
        content: `${row.value}%`,
        style: {
          opacity: 0.75,
          fontSize: 40,
          textAlign: "center"
        }
      });
    });
    chart.render();
  }
}
