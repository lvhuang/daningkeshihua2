import { Vue, Component } from "vue-property-decorator";
import Title from "@/components/Title/index.vue";
import Nav from "@/components/Nav/index.vue";
@Component({
  components: {
    AppTitle: Title,
    AppNav: Nav
  }
})
export default class App extends Vue {}
