<template>
  <div class="w-full min-h-screen flex flex-col bg-[url('/img/wallpaper.jpg')] bg-cover bg-center">
	<div class="w-full min-h-screen bg-black/60 text-white backdrop-blur-2xl">
		<AppHeader />
    <slot />
    <AppFooter />
	</div>
  </div>
</template>
<script setup>

</script>
