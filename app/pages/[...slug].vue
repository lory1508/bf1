<template>
  <div>
    <pre>{{ $route.params.slug }}</pre>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'catpage',
})
</script>
