<template>
  <div ref="target" class="flex flex-col justify-start" @click="goTo(destination)">
    <div
      class="bg-black rounded-2xl z-20 w-80 h-80 flex justify-center items-center transition-all duration-300 cursor-pointer"
      :class="!isOutside ? 'ring-2 ring-amber-300' : ''"
    >
      <img :src="icon" :alt="alt" :width="width" />
    </div>
    <div class="w-full z-10 bottom-0 flex px-4 justify-center">
      <div
        class="bg-amber-300 text-zinc-950 -mt-8 rounded-b-lg w-full px-2 text-center text-xl font-bold h-8 overflow-hidden transition-all duration-300"
        :class="!isOutside ? 'translate-y-8 ' : ''"
      >
        {{ alt }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useMouseInElement } from "@vueuse/core";
  import { useTemplateRef } from "vue";

  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "Icon",
    },
    destination: {
      type: String,
      default: "/",
    },
    width: {
      type: [String, Number],
      default: 120,
    },
  });

  const target = useTemplateRef("target");
  const { isOutside } = useMouseInElement(target);

  const goTo = (destination) => {
    return navigateTo({
      path: `/${destination}`,
    });
  };
</script>
