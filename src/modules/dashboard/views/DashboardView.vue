<template>
  <div>desde Main View</div>
  <Button @click="logout">Logout</Button>
  <RouterLink :to="{ name: 'servicio-licitaciones-view' }">Servicios</RouterLink>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { useAuthStore } from '@/modules/auth/stores/auth.store';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout();
  router.replace({ name: 'login' });
};
</script>

<style scoped></style>
