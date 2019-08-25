import { Vue, Component } from "vue-property-decorator";

interface Client {
  width: number;
  height: number;
}

@Component
export default class Common extends Vue {
  getClient(): Client {
    const parent = (this.$refs.chart as any).parentNode;
    const width = parent.offsetWidth;
    const height = parent.offsetHeight;
    return {
      width,
      height
    };
  }
}
