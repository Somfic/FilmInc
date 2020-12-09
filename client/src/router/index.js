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
        path: "/finish",
        name: "Voltooid",
        component: () =>
            import ("../views/Finish.vue"),
    },
    {
        path: "/users",
        name: "Gebruikers",
        component: () =>
            import ("../views/Users.vue"),
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
            import ("../views/Watchables.vue"),
    },
    {
        path: "/scheduled",
        name: "Inplanningen",
        component: () =>
            import ("../views/Scheduled.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;