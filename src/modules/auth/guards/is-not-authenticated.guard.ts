import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';
// import { AuthStatus } from '../interfaces';

const isNotAuthencatedGuards = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStore();

  await authStore.checkAuthStatus();

  const lastPast = localStorage.getItem('lastPath') || '/';

  authStore.authStatus === 'Unauthenticated' ? next() : next({ name: lastPast });
};

export default isNotAuthencatedGuards;
