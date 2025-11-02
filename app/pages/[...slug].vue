<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-3xl font-semibold uppercase">{{ title }}</h1>
    <div v-for="ws in weaponSkins" :key="`skin_${ws.skin}`" class="border border-zinc-600 rounded-lg p-4 flex flex-col gap-2">
      {{ ws }}
    </div>
  </div>
</template>

<script setup>
import { capitalizeFirstLetter } from '#imports'
import weaponSkinsJSON from '../../public/data/weapon_skin.json'
import skinsJSON from '../../public/data/skins.json'

const route = useRoute()
const weaponSkins = ref(weaponSkinsJSON.filter(
  (skin) => skin.class.toLowerCase() === (route.params.slug?.[0] || '').toLowerCase()
))
const title = capitalizeFirstLetter(route.params.slug?.[0] || 'Category')

definePageMeta({
    layout: 'catpage',
})
useHead({
  title: title,
})

onMounted(() => {
  weaponSkins.value.forEach((skin) => {
    const skinDetails = skinsJSON.find(
      (s) => s.skin === skin.skin
    )
    if (skinDetails) {
      skin.rarity = skinDetails.rarity
      skin.description = skinDetails.description
    }
  })
})
</script>
