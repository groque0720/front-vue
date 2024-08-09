import isAuthencatedGuards from '@/modules/auth/guards/is-authenticated.guard';
import type { RouteRecordRaw } from 'vue-router';

export const servicioLicitacionesRoutes: RouteRecordRaw = {
  path: '/servicio-licitaciones',
  name: 'servicio-licitaciones',
  beforeEnter: [isAuthencatedGuards],
  redirect: { name: 'servicio-licitaciones-view' },
  component: () => import('@/modules/common/layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      name: 'servicio-licitaciones-view',
      component: () => import('@/modules/servicio-licitaciones/views/ServicioLicitacionesView.vue'),
    },
  ],
};
