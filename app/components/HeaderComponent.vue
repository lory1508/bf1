<template>
	<div class="w-full">
		<h1 class="text-5xl font-semibold tracking-wide uppercase">{{ title }}</h1>
	</div>
</template>

<script setup>
import { CONSTANTS, classes } from '#imports';

const title = ref()

onMounted(() => {
	title.value = CONSTANTS.TITLE;
});
</script>