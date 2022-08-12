<script setup lang="ts">
	import { useStore } from '@/store';
	import VitailseLogo from '@/assets/logo.png';
	useHead({
		title: 'Medwork | KKU',
	});

	const store = useStore();
  const Menu1 = [
    {
      title: 'Admission Record',
      to: 'admission',
      color: '#961ec9'
    },
    {
      title: 'Discharge Summary',
      to: 'discharge',
      color: '#a10b24'
    },
    {
      title: 'Transfer Note',
      to: 'transfer',
      color: '#513c96'
    },
    {
      title: 'Ward View',
      to: 'ward',
      color: '#2e0ba1'
    },
  ]
  const Menu2 = [
    {
      title: 'AC MED Panel',
      to: 'acmed',
      color: '#ba50a5'
    },
    {
      title: 'Division',
      to: 'division',
      color: '#04d484'
    },
    {
      title: 'Shift',
      to: 'shift',
      color: '#058525'
    },
    {
      title: 'Rotation',
      to: 'rotation',
      color: '#cfb50e'
    },
  ];
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 px-6 gap-2 md:gap-6 lg:gap-8">
      <div id="menu-set-1" class="flex flex-col items-stretch col-span-1">
        <div v-for="el in Menu1" :key="el.title"
          class="flex justify-center w-full">
          <a :href="el.to"
          class="menu-button"
          :style="{ backgroundColor: el.color }"
          >
          {{ el.title }}
        </a>
        </div>
      </div>
      <br class="md:hidden" />
      <div id="menu-set-2" class="flex flex-col items-stretch col-span-1">
        <div v-for="el in Menu2" :key="el.title"
          class="flex justify-center w-full">
          <a :href="el.to"
          class="menu-button"
          :style="{ backgroundColor: el.color }"
        >
          {{ el.title }}
        </a>
        </div>
      </div>
    </div>
  </div>
  <app-footer />
</template>

<style scoped>
.menu-button {
  @apply border-black rounded-2xl p-3 my-2 w-full;
  @apply text-lg lg:text-2xl font-bold text-white text-center;
}
</style>

<route lang="yaml">
name: home
</route>
