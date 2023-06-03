import type { RouteRecordRaw } from 'vue-router';

export const mainLayout: RouteRecordRaw[] = [
  {
    path: '/st',
    component: () => import('@/layout/main/index.vue'),
    redirect: '/child1',
    children: [
      {
        path: '/child1',
        name: 'stchild1',
        component: () => import('@/views/main/view1/index.vue'),
      },
    ],
  },
];
