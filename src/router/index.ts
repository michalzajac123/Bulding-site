import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/HomeView/HomeView.vue") },
  {path: "/aboutus", component: () => import("../views/AboutUsView/AboutUsView.vue")},
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
