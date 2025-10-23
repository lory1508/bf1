<template>
  <div
    class="w-full min-h-screen flex flex-col bg-[url('/img/wallpaper.jpg')] bg-cover bg-center"
  >
    <div class="w-full min-h-screen bg-black/60 text-white backdrop-blur-xl">
      <!-- <LoaderComponent v-if="loading" /> -->
      <slot />
    </div>
  </div>
</template>
<script setup>
  import LoaderComponent from "~/components/LoaderComponent.vue";
  import { delay } from "#imports";

  const loading = ref(false);

  onMounted(async () => {
    loading.value = true;
    await delay(1500);
    loading.value = false;
  });
</script>
