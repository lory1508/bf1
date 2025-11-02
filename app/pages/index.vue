<template>
  <div>
    <div class="p-4">
      <div
        class="flex flex-wrap justify-center items-center gap-12 px-80 mt-12"
      >
        <IconButton
          v-for="(item, index) in icons"
          :key="`icon-${index}`"
          :icon="item.icon"
          :alt="item.alt"
          :destination="item.value"
          width="280"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
  import IconButton from "~/components/IconButton.vue";
  import { classes } from "#imports";

  const icons = ref(classes);

  onMounted(() => {
    icons.value = icons.value.filter(
      (item) => item.value != "home"
    );
  });

  useHead({
    title: "Battlefield 1 - Home",
  });
</script>
