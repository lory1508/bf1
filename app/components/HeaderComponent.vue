<template>
  <div class="w-full flex justify-between items-center">
    <h1
      class="text-6xl font-battlefield uppercase hover:cursor-pointer transition-all duration-300 hover:text-amber-300"
      @click="goTo('')"
    >
      {{ title }}
    </h1>

    <div class="flex flex-row items-center justify-end">
      <input
        type="text"
        placeholder="Search..."
        class="-mr-8 px-2 py-1 h-10 border border-zinc-300 z-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300"
        :class="showSearch ? 'w-full' : 'w-0'"
      />
      <IconComponent
        ref="target"
        icon="game-icons:crosshair"
        :width="48"
        :height="48"
        class="hover:cursor-pointer z-20 transition-all duration-300 hover:rotate-90 text-amber-600 bg-zinc-300 rounded-full"
        @click="showSearch = !showSearch"
      />
    </div>
  </div>
</template>

<script setup>
  import { CONSTANTS } from "#imports";
  import IconComponent from "./IconComponent.vue";

  const title = ref();
  const showSearch = ref(false);

  const goTo = (destination) => {
    return navigateTo({
      path: `/${destination}`,
    });
  };

  onMounted(() => {
    title.value = CONSTANTS.TITLE;
  });
</script>
