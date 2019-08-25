type IModel = { [index: string]: string | unknown } | string;

export default class Store {
  private data: IModel;
  constructor(private name: string) {
    let store;
    try {
      store = JSON.parse(localStorage.getItem(this.name) as string);
    } catch (error) {
      store = localStorage.getItem(this.name);
    }
    this.data = store;
  }

  // Save the current state of the **Store** to *localStorage*.
  public save() {
    localStorage.setItem(this.name, JSON.stringify(this.data));
  }

  public update(model: IModel) {
    this.data = model;
    this.save();
    return this;
  }
  public getItem() {
    return this.data;
  }

  public destroy() {
    localStorage.removeItem(this.name);
  }

  // deprecate
  public create(key: string, model: IModel) {
    this.data = model;
    this.save();
    return this;
  }

  // deprecate
  public find(key?: string) {
    if (key) {
      return this.data;
    }
    return this.data;
  }
}
