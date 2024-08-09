import type { RouteRecordRaw } from 'vue-router';
import isNotAuthencatedGuards from '../guards/is-not-authenticated.guard';

export const authRoutes: RouteRecordRaw = {
  path: '',
  name: 'auth',
  beforeEnter: [isNotAuthencatedGuards],
  redirect: { name: 'login' },
  component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/modules/auth/views/LoginView.vue'),
    },
  ],
};
