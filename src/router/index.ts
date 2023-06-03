import { createRouter, createWebHistory } from 'vue-router';
import { mainLayout } from './main-layout';
import type { RouteRecordRaw } from 'vue-router';
import { ERouteName } from '@/enums/route-name';

const routesRecord: RouteRecordRaw[] = [
  {
    path: '/',
    name: ERouteName.Home,
    component: () => import('@/views/home/Home.vue'),
  },
  ...mainLayout,
];

const router = createRouter({
  history: createWebHistory(),
  routes: routesRecord,
});

export default router;
