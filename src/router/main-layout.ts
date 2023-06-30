import type { RouteRecordRaw } from 'vue-router';

export const mainLayout: RouteRecordRaw[] = [
  {
    path: '/pattern',
    component: () => import('@/layout/main/index.vue'),
    redirect: { name: 'strategy' },
    children: [
      {
        path: 'strategy-pattern',
        name: 'strategy',
        component: () => import('@/views/main/strategy-design/index.vue'),
      },
    ],
  },
  {
    path: '/state',
    component: () => import('@/views/state/index.vue'),
  },
  {
    path: '/reactive',
    component: () => import('@/views/reactive/index.vue'),
  },
];
