<script setup lang="ts">
  import LogoMedwork from '@/assets/logo.png';
  import { currentRouteInfo } from '@/composables/routeInfo'
  import { useRouter } from 'vue-router'

  const title = computed(() => {
    return currentRouteInfo()?.header ?? 'No route found'
  })
  const router = useRouter()

  const logout = () => {
    localStorage.removeItem('medwork-auth')
    router.push('/login')
  }

</script>

<template>
	<header>
		<nav
			class="
        fixed
				w-full
				bg-white
				text-gray-800
				py-2
				px-3
				shadow-md
        z-30
				flex
				items-center
				border-b border-gray-400/50
			"
		>
			<router-link :to="{ name: 'home' }" class="flex">
        <img :src="LogoMedwork"
          class="max-h-20 lg:max-h-20 inline mr-2"/>
			</router-link>
      <div class="self-stretch flex flex-col md:flex-row justify-center md:items-center">
        <span class="block md:mx-2 self-start md:self-center font-extrabold lg:text-3xl text-2xl">MEDWORK</span>
        <span class="hidden md:block mx-1 md:mx-2 lg:text-2xl md:text-xl text-lg"> | </span>
        <span class="lg:text-2xl text-lg">{{ title }}</span>
      </div>
			<div class="ml-auto flex items-center h-full">
        <a href="#" @click="logout"
          class="text-xs md:text-base px-4 py-2 rounded-lg bg-blue-700 font-bold text-white">
          Logout
        </a>
			</div>
		</nav>
	</header>
</template>

<style scoped></style>
