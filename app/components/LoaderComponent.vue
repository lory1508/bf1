<template>
  <div
    class="w-screen h-screen absolute bg-black/10 z-50 justify-center items-center flex backdrop-blur-2xl"
  >
    <div class="flex flex-col gap-2 justify-center items-center">
      <IconComponent
        icon="svg-spinners:ring-resize"
        width="48"
        height="48"
        class="text-zinc-200"
      />
      <span class="text-white">Loading content</span>
    </div>
  </div>
</template>

<script setup>
  import IconComponent from "./IconComponent.vue";
</script>
