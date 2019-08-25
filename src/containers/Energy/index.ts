import { Vue, Component } from "vue-property-decorator";
import { equals } from "ramda";
import ChartFrame from "@/components/Frame/index";
import Hello from "@/charts/Hello";
import BasicColumnChart from "@/charts/BasicColumn";
import LineChart from "@/charts/Line";
import LiquidChart from "@/charts/Liquid";
import MirrorChart from "@/charts/Mirror/index";
import RoseChart from "@/charts/Rosehart/index";
import { sources, source$, emitData } from "./service";

@Component({
  components: {
    ChartFrame,
    Hello,
    LiquidChart,
    LineChart,
    BasicColumnChart,
    MirrorChart,
    RoseChart
  }
})
export default class Energy extends Vue {
  data = {
    hello: 0,
    line: [],
    liquid: [],
    mirror: [],
    basiccolumn: [],
    rose: []
  };

  mounted(): void {
    source$.subscribe(({ board, chart, index, payload }) => {
      const type = { board, chart, index };
      const expectType = (t: string): boolean => {
        return equals(type, sources[t].type);
      };
      /** 调用数据源开始 */
      if (expectType("hello")) {
        // console.log(payload);
        this.data.hello = payload;
      }
      /** 调用数据源结束 */

      /** liqiud开始 */
      if (expectType("liquid")) {
        // console.log(payload);
        this.data.liquid = payload;
      }
      /** liqiud结束 */

      /** mirror开始 */
      if (expectType("mirror")) {
        // console.log(payload);
        this.data.mirror = payload;
      }
      /** mirror结束 */

      /** line开始 */
      if (expectType("line")) {
        console.log(payload);
        this.data.line = payload;
      }
      /** line结束 */

      /** basiccolumn开始 */
      if (expectType("basiccolumn")) {
        console.log(payload);
        this.data.basiccolumn = payload;
      }
      /** basiccolumn结束 */

      if (expectType("rose")) {
        console.log(payload);
        this.data.rose = payload;
      }
    });
  }

  onHelloClick(): void {
    emitData("hello", "1000000");
  }

  // toggleLineSeries(type: string) {
  //   emitData("hello", "1000000");
  // if (payload === 'week') {
  //   this.data = data2;
  // } else if (payload === 'year') {
  //   this.data = data1;
  // }
  // }
}
