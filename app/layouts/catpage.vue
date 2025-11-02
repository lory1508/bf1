<template>
  <div
    class="w-full absolute h-screen flex flex-col bg-[url('/img/wallpaper.jpg')] bg-cover bg-center"
  >
    <div
      class="w-full absolute overflow-y-scroll h-screen  text-white backdrop-blur-xl "
    >
      <!-- <LoaderComponent v-if="loading" /> -->
      <HeaderComponent class="bg-black/60" />

      <div class="flex flex-row p-4 bg-black/60">
        <slot />
      </div>
    </div>
    <Dock :items="icons" />
  </div>
</template>
<script setup>
  import HeaderComponent from "~/components/HeaderComponent.vue";
  import Dock from "~/components/DockComponent.vue";
  import { classes, delay } from "#imports";

  const loading = ref(false);
  const icons = classes;

  onMounted(async () => {
    loading.value = true;
    await delay(1500);
    loading.value = false;
  });
</script>
