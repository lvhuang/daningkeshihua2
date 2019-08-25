import { Vue, Component } from "vue-property-decorator";
import Common from "../Common";

@Component
export default class Hello extends Common {
  mounted(): void {
    const res = this.getClient();
    console.log(res);
  }
}
