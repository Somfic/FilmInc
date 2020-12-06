import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        name: "Ticketselectie",
        component: () =>
            import ("../views/TicketSelection.vue")
    },
    {
        path: "/project",
        name: "Projectbeschrijving",
        component: () =>
            import ("../views/ProjectInfo.vue")
    },
    {
        path: "/watchables",
        name: "Watchable",
        component: () =>
            import ("../views/admin/Watchables.vue")
    },
    {
        path: "/scheduled",
        name: "Scheduled",
        component: () =>
            import ("../views/admin/Scheduled.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;