import { Vue, Component, Prop, Emit, Model } from "vue-property-decorator";

interface SearchType {
  id: string;
  name: string;
}
@Component
export default class Search extends Vue {
  @Prop({ default: [] })
  readonly searchList!: SearchType[];

  value = "";

  @Emit()
  search(e): string {
    return e.target.value;
  }

  @Emit()
  select(id: string): string {
    this.value = "";
    return id;
  }

  // mounted(): void {}
}
