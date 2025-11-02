<template>
  <div
    class="w-full h-screen flex flex-col bg-[url('/img/wallpaper.jpg')] bg-cover bg-center"
  >
    <div class="w-full min-h-screen bg-black/60 text-white backdrop-blur-xl p-4">
      <!-- <LoaderComponent v-if="loading" /> -->
      <HeaderComponent />

      <slot />
    </div>
  </div>
</template>
<script setup>
  // import LoaderComponent from "~/components/LoaderComponent.vue";
  import HeaderComponent from "~/components/HeaderComponent.vue";

  import { delay } from "#imports";

  const loading = ref(false);

  onMounted(async () => {
    loading.value = true;
    await delay(1500);
    loading.value = false;
  });
</script>
