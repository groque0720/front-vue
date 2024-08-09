import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { AuthStatus, type User } from '../interfaces';

import { checkauthAction, loginAction } from '../actions';
import { useLocalStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  const authStatus = ref<AuthStatus>(AuthStatus.Checking);
  const user = ref<User | undefined>();
  const token = ref(useLocalStorage('token', ''));

  console.log(authStatus.value);

  const login = async (email: string, password: string) => {
    authStatus.value = AuthStatus.Checking;
    try {
      const loginResp = await loginAction(email, password);

      console.log(loginResp);
      if (!loginResp.ok) {
        logout();
        return false;
      }

      user.value = loginResp.user;
      token.value = loginResp.token;
      authStatus.value = AuthStatus.Authenticated;
      return true;
    } catch (error) {
      console.log(error);
      logout();
    }
  };

  const checkAuthStatus = async (): Promise<boolean> => {
    try {
      const statusResp = await checkauthAction();
      if (!statusResp.ok) {
        logout();
        return false;
      }

      user.value = statusResp.user;
      token.value = statusResp.token;
      authStatus.value = AuthStatus.Authenticated;

      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    authStatus.value = AuthStatus.Unauthenticated;
    user.value = undefined;
    token.value = '';
    return false;
  };

  return {
    user,
    token,
    authStatus,

    // Getters
    isChecking: computed(() => authStatus.value === AuthStatus.Checking),
    isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),

    // TODO: getters para saber si es un usuario admin
    // TODO: getters para saber si es un usuario del staff

    // userFullName: computed(() => user.value?.fullName),

    // Actions
    login,
    checkAuthStatus,
    logout,
  };
});
