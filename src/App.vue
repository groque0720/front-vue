<template>
  <FullScreenLoader v-if="authStore.isChecking" />
  <RouterView />
  <VueQueryDevtools />
</template>

<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { useAuthStore } from './modules/auth/stores/auth.store';
// import { AuthStatus } from './modules/auth/interfaces';
import FullScreenLoader from './modules/common/components/FullScreenLoader.vue';

const authStore = useAuthStore();

// authStore.$subscribe(
//   (_, state) => {
//     if (state.authStatus === AuthStatus.Checking) {
//       console.log('***Checking');
//       authStore.checkAuthStatus();
//       return;
//     }
//     return;
//   },
//   // {
//   //   immediate: true,
//   // },
// );
</script>
