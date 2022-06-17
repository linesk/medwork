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
  ];
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 px-6 gap-2 md:gap-6 lg:gap-8">
      <div id="menu-set-1" class="flex flex-col items-stretch col-span-1">
        <div v-for="el in Menu1" :key="el.title"
          class="flex justify-center w-full">
          <a href="#"
          class="border-black rounded-full p-3 my-2 w-full
          text-lg lg:text-2xl font-bold text-white text-center"
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
          <a href="#"
          class="border-black rounded-full p-3 my-2 w-full
          text-lg lg:text-2xl font-bold text-white text-center"
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

<route lang="yaml">
name: home
</route>
