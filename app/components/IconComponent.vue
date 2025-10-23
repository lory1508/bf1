<template>
  <Icon
    :icon="icon"
    :width="width"
    :height="height"
    :horizontal-flip="horizontalFlip"
    :vertical-flip="verticalFlip"
  />
</template>

<script setup>
  import { Icon } from "@iconify/vue";

  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: 24,
    },
    height: {
      type: [String, Number],
      default: 24,
    },
    horizontalFlip: {
      type: Boolean,
      default: false,
    },
    verticalFlip: {
      type: Boolean,
      default: false,
    },
  });
</script>
