import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";
import { addPointerListener, getPoint } from "./utils";
import { Route } from "./route";
import Search from "./Search";

let BMap = null;

@Component({
  components: {
    Search
  }
})
export default class Map extends Vue {
  @Prop({ default: [] })
  readonly routes!: any[];

  @Prop({ default: [] })
  readonly points!: any[];

  @Prop({ default: 1000 })
  readonly width!: number;

  @Prop({ default: 500 })
  readonly height!: number;

  @Prop({ default: [] })
  readonly searchList!: Search[];

  map: any;

  pointsLayer: any[] = [];

  routesLayer: any[] = [];

  @Watch("points")
  onPointsChange() {
    // this.addPoints();
  }

  @Watch("routes")
  onRoutesChange() {
    // this.addRoutes();
  }

  @Emit()
  search(name: string): string {
    return name;
  }

  @Emit()
  select(id: string): string {
    return id;
  }

  mounted(): void {
    const { chart } = this.$refs;
    // const parent = (chart as HTMLElement).parentNode as HTMLElement;
    // const width = parent.offsetWidth;
    // const height = parent.offsetHeight;

    BMap = window.BMap;
    this.map = new BMap.Map(chart);
    // this.map.enableScrollWheelZoom();
    this.map.centerAndZoom(
      new BMap.Point(117.12606756277646, 28.88119670463458),
      7
    );
    this.map.setMapStyleV2({
      styleId: "ce67a3c9912ed674768bfe1b2813faf6"
    });

    getPoint("上汽宁德工厂").then(point => {
      this.map.addOverlay(new BMap.Marker(point));
    });

    addPointerListener(this.map, point => {
      console.log(point);
    });
    this.addPoints();
    this.addRoutes();
  }

  getZoom(): void {
    console.log(this.map.getZoom());
  }

  addPoints(): void {
    // reset clear all point layer
    this.pointsLayer.forEach(layer => {
      this.map.removeOverlay(layer);
    });

    this.pointsLayer = [];
    this.points.forEach(point => {
      const layer = new BMap.Marker(point);
      this.pointsLayer.push(layer);
      this.map.addOverlay(layer);
    });
  }

  addRoutes(): void {
    // reset
    this.routesLayer.forEach(layer => {
      this.map.removeOverlay(layer);
    });
    this.routesLayer = [];

    this.routes.forEach(route => {
      const layer = new Route(this.map, route);
      this.routesLayer.push(layer);
      this.map.addOverlay(layer);
    });
  }
}
