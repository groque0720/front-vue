<template>
  <div class="border-b sticky top-0 bg-white">
    <div class="h-16 flex justify-between items-center space-x-4">
      <MainNav class="mx-6" />
      <div class="pr-4">
        <UserNav />
      </div>
    </div>
  </div>
  <div>
    <RouterView />
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quas similique aspernatur porro
      atque itaque obcaecati aperiam hic laborum ad! Deserunt consequatur aspernatur sapiente esse
      voluptatum consectetur quo molestiae suscipit.
    </div>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quas similique aspernatur porro
      atque itaque obcaecati aperiam hic laborum ad! Deserunt consequatur aspernatur sapiente esse
      voluptatum consectetur quo molestiae suscipit.
    </div>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quas similique aspernatur porro
      atque itaque obcaecati aperiam hic laborum ad! Deserunt consequatur aspernatur sapiente esse
      voluptatum consectetur quo molestiae suscipit.
    </div>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quas similique aspernatur porro
      atque itaque obcaecati aperiam hic laborum ad! Deserunt consequatur aspernatur sapiente esse
      voluptatum consectetur quo molestiae suscipit.
    </div>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quas similique aspernatur porro
      atque itaque obcaecati aperiam hic laborum ad! Deserunt consequatur aspernatur sapiente esse
      voluptatum consectetur quo molestiae suscipit.
    </div>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quas similique aspernatur porro
      atque itaque obcaecati aperiam hic laborum ad! Deserunt consequatur aspernatur sapiente esse
      voluptatum consectetur quo molestiae suscipit.
    </div>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quas similique aspernatur porro
      atque itaque obcaecati aperiam hic laborum ad! Deserunt consequatur aspernatur sapiente esse
      voluptatum consectetur quo molestiae suscipit.
    </div>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quas similique aspernatur porro
      atque itaque obcaecati aperiam hic laborum ad! Deserunt consequatur aspernatur sapiente esse
      voluptatum consectetur quo molestiae suscipit.
    </div>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quas similique aspernatur porro
      atque itaque obcaecati aperiam hic laborum ad! Deserunt consequatur aspernatur sapiente esse
      voluptatum consectetur quo molestiae suscipit.
    </div>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quas similique aspernatur porro
      atque itaque obcaecati aperiam hic laborum ad! Deserunt consequatur aspernatur sapiente esse
      voluptatum consectetur quo molestiae suscipit.
    </div>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quas similique aspernatur porro
      atque itaque obcaecati aperiam hic laborum ad! Deserunt consequatur aspernatur sapiente esse
      voluptatum consectetur quo molestiae suscipit.
    </div>
  </div>
</template>

<script setup lang="ts">
import { AuthStatus } from '@/modules/auth/interfaces';
import { useAuthStore } from '@/modules/auth/stores/auth.store';
import { useRouter } from 'vue-router';
import MainNav from './components/MainNav.vue';
import UserNav from './components/UserNav.vue';

// me permite manejar la navegación e historial de la aplicación
const router = useRouter();
const authStore = useAuthStore();

authStore.$subscribe((_, state) => {
  if (state.authStatus === AuthStatus.Unauthenticated) {
    router.replace({ name: 'login' });
    return;
  }
  return;
});
</script>

<style scoped></style>
