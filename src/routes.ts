const NotFound = (): any => import("@/components/NotFound/index.vue");
const Energy = (): any => import("@/containers/Energy/index.vue");
const Facility = (): any => import("@/containers/Facility/index.vue");
const Quality = (): any => import("@/containers/Quality/index.vue");

export const routes = [
  { path: "/", redirect: { name: "energy" } },
  { path: "/energy", name: "energy", component: Energy },
  { path: "/facility", name: "facility", component: Facility },
  { path: "/quality", name: "quality", component: Quality },
  { path: "*", component: NotFound }
];
