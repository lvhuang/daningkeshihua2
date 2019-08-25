import { Vue, Component, Prop } from "vue-property-decorator";
import { getRootFontSize } from "@/utils/dom";
@Component({
  components: {}
})
export default class Frame extends Vue {
  mounted() {
    console.log("frame");
    const size = getRootFontSize("--font-size-1");
    console.log(size);
  }
}
