<template>
  <div
    class="w-full min-h-screen flex flex-col bg-[url('/img/wallpaper.jpg')] bg-cover bg-center"
  >
    <div
      class="w-full min-h-screen bg-black/60 text-white backdrop-blur-xl p-4"
    >
      <!-- <LoaderComponent v-if="loading" /> -->
      <HeaderComponent />

      <div class="flex flex-row mt-6">
        <div class="w-fit mr-8 flex flex-col gap-2">
          <div
            v-for="i in icons"
            :key="i.value"
            class="flex flex-row gap-2 hover:text-amber-300 hover:cursor-pointer transition-all duration-300"
            @click="goTo(i.value)"
          >
            <img :src="i.icon" :alt="i.alt" :width="20" />
            {{ i.alt }}
          </div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
  import HeaderComponent from "~/components/HeaderComponent.vue";
  import { classes, delay } from "#imports";

  const loading = ref(false);
  const icons = classes;

  const goTo = (destination) => {
    return navigateTo({
      path: `/${destination}`,
    });
  };

  onMounted(async () => {
    loading.value = true;
    await delay(1500);
    loading.value = false;
  });
</script>
