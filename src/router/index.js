import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import Rapports from "@/views/rapports.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rapports",
    name: "Rapports",
    component: Rapports,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;