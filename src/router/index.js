import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Manage from '@/views/Manage.vue';

const routes = [
	{
		name: 'home',
		path: '/',
		component: Home,
	},
	{
		name: 'about',
		path: '/about',
		component: About,
	},
	{
		name: 'manage',
		path: '/manage-music',
		component: Manage,
		beforeEnter: (to, from, next) => {
			console.log('Manage Route Guard');
			next();
		},
	},
	{
		path: '/manage',
		redirect: { name: 'manage' },
	},
	{
		path: '/:catchAll(.*)*',
		redirect: { name: 'home' },
	},
];

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
	linkExactActiveClass: 'text-yellow-500',
});

router.beforeEach((to, from, next) => {

	next();
});

export default router;
