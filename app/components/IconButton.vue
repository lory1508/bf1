<template>
  <div
    ref="target"
    class="flex flex-col justify-start"
    @click="goTo(destination)"
  >
    <div
      class="bg-black rounded-2xl z-20 xl:w-80 xl:h-80 w-72 h-72 flex justify-center items-center transition-all duration-300 cursor-pointer"
      :class="!isOutside ? 'border border-amber-300' : ''"
    >
      <img :src="icon" :alt="alt" :width="width" />
    </div>
    <div class="w-full z-10 bottom-0 flex justify-center items-end">
      <div
        class="bg-amber-300 text-zinc-950 -mt-16 items-end rounded-b-2xl w-full px-2 text-center text-xl font-bold h-16 overflow-hidden transition-all duration-300"
        :class="!isOutside ? 'translate-y-8 ' : ''"
      >
        <span class="bottom-0 h-full flex items-end justify-center pb-1">
          {{ alt }}
        </span>
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
