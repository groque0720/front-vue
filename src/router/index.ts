import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'
import { authRoutes } from '@/modules/auth/routes';
import { dashboardRoutes } from '@/modules/dashboard/routes';
import { servicioLicitacionesRoutes } from '@/modules/servicio-licitaciones/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    authRoutes,
    dashboardRoutes,
    servicioLicitacionesRoutes,
    //not found
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      // redirect: { name: 'home' }
      component: () => import('@/modules/common/views/NotFoundView.vue'),
    },
  ],
});

export default router;
