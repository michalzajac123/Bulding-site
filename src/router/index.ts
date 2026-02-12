import { createMemoryHistory, createRouter } from "vue-router";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const routes = [
  { path: "/", component: () => import("../views/HomeView/HomeView.vue") },
  {
    path: "/aboutus",
    component: () => import("../views/AboutUsView/AboutUsView.vue"),
  },
  {
    path: "/calculator",
    component: () => import("../views/CalculatorView/CalculatorView.vue"),
  },
  {
    path: "/contact",
    component: () => import("../views/ContactView/ContactView.vue"),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
router.afterEach((to) => {
  window.gtag("config", "G-KCR70JTF1S", {
    page_path: to.fullPath,
  });
});

export default router;
