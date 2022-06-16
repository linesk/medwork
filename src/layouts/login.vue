<script setup lang="ts">
import BgLogin from '@/assets/bg-login.jpg';
</script>
<template>
  <header></header>
	<main
		class="
			p-8
			text-gray-800
			min-h-screen
      flex flex-col
      bg-cover bg-center
		"
	>
		<router-view />
	</main>
</template>
<style scoped>
main {
  background-image: url('@/assets/bg-login.jpg');
}

</style>
