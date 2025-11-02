<template>
  <div>
    <div class="xl:p-4 pb-8">
      <div
        class="flex flex-wrap w-full justify-center items-center gap-12 xl:px-80 mt-12"
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
      (item) => item.value != ""
    );
  });

  useHead({
    title: "Battlefield 1 - Home",
  });
</script>
