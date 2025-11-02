<template>
  <div
    class="w-full h-screen flex flex-col bg-[url('/img/wallpaper.jpg')] bg-cover bg-center"
  >
    <div class="bg-black/60 flex flex-col">
      <div
        class="w-full min-h-screen text-white overflow-y-scroll backdrop-blur-xl"
      >
        <HeaderComponent />
        <!-- <LoaderComponent v-if="loading" /> -->
        <div class="xl:p-4">
          <slot />
        </div>
      </div>
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
