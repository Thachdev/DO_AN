import { createWebHistory, createRouter } from "vue-router";
import RhoLibrary from "@/views/RhoLibrary.vue";


const routes = [
	{
		path: "/",
		name: "rholibrary",
		component: RhoLibrary,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notfound",
		component: () => import("@/views/NotFound.vue"),
	},
	{
		path: "/libraries/:id",
		name: "library.text",
		component: () => import("@/views/LibraryText.vue"),
		props: true // Truyền các biến trong $route.params vào làm props
		},
	{
		path: "/libraries/",
		name: "library.add",
		component: () => import("@/views/LibraryAdd.vue"),
		props: true // Truyền các biến trong $route.params vào làm props
	},
	{
		path: "/users/",
		name: "user.add",
		component: () => import("@/views/UserAdd.vue"),
		props: true // Truyền các biến trong $route.params vào làm props
	},
];
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});
export default router;