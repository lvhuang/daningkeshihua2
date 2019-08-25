import Vue from "vue";
import VueRouter from "vue-router";
import "./vue.config";
import "./index.css";

import { routes } from "./routes";
import { store } from "./store";
import "@/utils/devtool";

import App from "./containers/App/index.vue";

const router = new VueRouter({
  routes // short for `routes: routes`
});

const app = {
  init() {
    new Vue({
      router,
      store,
      components: {
        App
      },
      template: "<app></app>"
    }).$mount("#root");
  }
};
app.init();
