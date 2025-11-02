<template>
  <div class="absolute bottom-0 w-full pb-2 z-50">
    <div
      class="flex items-center justify-center mx-auto border-2 border-zinc-500 w-fit p-2 rounded-xl gap-6"
    >
      <div
        v-for="item in items"
        :key="item.value"
        class="border flex items-center justify-center transition-all duration-300 border-zinc-400 rounded-full p-2 h-14 w-14 hover:border-amber-300 hover:bg-amber-700 hover:cursor-pointer hover:-translate-y-2 hover:scale-110"
        @click="goTo(item.value)"
      >
        <img :src="item.icon" :alt="item.alt" :width="50" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { goTo } from "#imports";

  const props = defineProps({
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  });
</script>
