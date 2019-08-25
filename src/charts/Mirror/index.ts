import { Vue, Component, Prop } from "vue-property-decorator";
import G2 from "@antv/g2";

@Component
export default class MirrorChart extends Vue {
  @Prop({ default: [] })
  readonly data!: any[];

  chart!: any;

  mounted() {
    this.chart = new G2.Chart({
      container: this.$refs.chart as any,
      forceFit: true,
      height: window.innerHeight
    });

    this.chart.source(this.data);
    this.chart.facet("mirror", {
      fields: ["city"],
      transpose: true,
      padding: [0, 60, 0, 0],
      eachView: function eachView(view) {
        view
          .interval()
          .position("type*value")
          .color("city", ["#1890ff", "#f04864"]);
      }
    });
    this.chart.render();
  }
}
