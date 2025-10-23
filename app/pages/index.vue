<template>
  <div>
    <div class="p-4">
      <HeaderComponent />

      <div class="flex flex-wrap justify-center items-center gap-12 px-80 mt-12">
        <IconButton
          v-for="(item, index) in icons"
          :key="`icon-${index}`"
          :icon="item.icon"
          :alt="item.alt"
          width="280"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
  import HeaderComponent from "~/components/HeaderComponent.vue";
  import IconButton from "~/components/IconButton.vue";

  const icons = [
    { icon: "/img/assault.svg", alt: "Assault" },
    { icon: "/img/medic.svg", alt: "Medic" },
    { icon: "/img/support.svg", alt: "Support" },
    { icon: "/img/scout.svg", alt: "Scout" },
    { icon: "/img/handgun.svg", alt: "Handgun" },
  ];
</script>
