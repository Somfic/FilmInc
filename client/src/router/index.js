import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        name: "Voorstelling keuze",
        component: () =>
            import ("../views/TicketSelection.vue"),
    },
    {
        path: "/auth",
        name: "Auth",
        component: () =>
            import ("../views/Auth.vue"),
    },
    {
        path: "/seats",
        name: "Stoel keuze",
        component: () =>
            import ("../views/SeatSelection.vue"),
    },
    {
        path: "/project",
        name: "Projectbeschrijving",
        component: () =>
            import ("../views/ProjectInfo.vue"),
    },
    {
        path: "/watchables",
        name: "Voorstellingen",
        component: () =>
            import ("../views/admin/Watchables.vue"),
    },
    {
        path: "/scheduled",
        name: "Inplanningen",
        component: () =>
            import ("../views/admin/Scheduled.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;