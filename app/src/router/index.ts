import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

import ComingSoon from '../components/ComingSoon/ComingSoon.vue';
import UserHome from '../components/UserHome/UserHome.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: UserHome },
  { path: '/account', component: ComingSoon },
  { path: '/document-list', component: ComingSoon },
  { path: '/insights', component: ComingSoon },
  { path: '/verify', component: ComingSoon },
  { path: '/settings', component: ComingSoon }
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
