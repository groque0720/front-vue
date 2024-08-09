import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';
// import { AuthStatus } from '../interfaces';

const isAuthencatedGuards = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStore();

  await authStore.checkAuthStatus();

  localStorage.setItem('lastPath', to.name as string);

  authStore.isAuthenticated ? next() : next({ name: 'login' });
};

export default isAuthencatedGuards;
