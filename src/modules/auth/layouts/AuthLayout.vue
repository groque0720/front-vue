<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden">
    <div class="hidden md:block relative">
      <div class="absolute bg-white bg-opacity-10 w-full h-screen"></div>

      <img
        class="object-cover h-screen"
        src="https://media.toyota.com.ar/6f2e2391-e0a7-4884-8e42-0f38e035bbea.jpeg"
        alt=""
      />
    </div>
    <div class="flex justify-center items-center">
      <RouterView />
    </div>
  </div>
</template>
