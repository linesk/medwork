<script setup lang="ts">
import { useRoute } from 'vue-router'
const isConsultStatus = computed(() => {
  const route = useRoute()
  console.log(route)
  return route.name == 'consult-status'
})

</script>

<template>
  <div class="flex flex-col items-center border-2 border-black p-2">
    <p>Search Patient</p>
    <div class="flex">
      <span class="font-bold text-lg self-center">HN</span>
      <input type="text"
        class="border mx-3 grow">
      <button class="bg-green-400 text-white rounded-full p-2">
        Find
      </button>
    </div>
    <span> Create new patient </span>

    <!-- Consultation status -->
    <button @click="$router.push('/consult-status')"
      v-if="!isConsultStatus"
      class="cursor-pointer mt-2 self-start py-1 px-3 bg-orange-500 text-white text-sm rounded-xl font-bold">
      CONSULTATION STATUS
    </button>
    <span class="ml-3 self-start text-xs italic"
      v-if="!isConsultStatus"> please fill in correctly </span>

    <!-- Consultation form -->
    <button @click="$router.push('/ipd-consult')"
    v-if="isConsultStatus"
    class="cursor-pointer mt-2 self-start py-1 px-3 bg-orange-500 text-white text-sm rounded-xl font-bold">
    IPD CONSULTATION
    </button>
  </div>

</template>
