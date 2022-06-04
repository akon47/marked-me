import { createWebHashHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/server-info",
      name: "ServerInfo",
      component: () => import("../views/ServerInfoView.vue"),
    },
    {
      path: "/not-found",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "not-found",
    },
  ],
});

export default router;
