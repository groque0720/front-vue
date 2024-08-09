import isAuthencatedGuards from '@/modules/auth/guards/is-authenticated.guard';
import type { RouteRecordRaw } from 'vue-router';

export const dashboardRoutes: RouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  redirect: { name: 'dashboard-view' },
  beforeEnter: [isAuthencatedGuards],
  component: () => import('@/modules/common/layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      name: 'dashboard-view',
      component: () => import('@/modules/dashboard/views/DashboardView.vue'),
    },
  ],
};
