import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Ticketselectie",
		component: import("../views/TicketSelection.vue")
	},
	{
		path: "/project",
		name: "Projectbeschrijving",
		component: () => import("../views/ProjectInfo.vue")
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
