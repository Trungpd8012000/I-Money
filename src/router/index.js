import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home";
import About from "@/views/About";

const routes = [
  {
    path: "/",
    name: "home-route",
    component: Home,
  },
  {
    path: "/about",
    name: "about-route",
    meta: {
      layout: "auth",
    },
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
