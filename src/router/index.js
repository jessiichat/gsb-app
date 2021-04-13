import { createWebHistory, createRouter } from "vue-router";
import Rapports from "@/views/rapports.vue";
import Login from "@/views/login.vue";

const routes = [
    {
        path: "/",
        name: "Rapports",
        component: Rapports,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;