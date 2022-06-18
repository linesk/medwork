<script setup lang="ts">
import dayjs from 'dayjs'
import { MockConsultList } from '@/composables/exampleData'

const loading = ref(false)
const today = dayjs().format('DD MMM YYYY')

</script>

<template>
  <div v-if="loading" class="flex w-full justify-center text-xl">
    Loading...
  </div>
  <div v-else
    class="flex flex-col">
    <HNBox />
    <p class="h-6"></p>
    <p class="text-3xl font-extrabold">Today consultation</p>
    <p class="text-xl text-gray-500 self-end px-4">{{ today }}</p>
    <div class="w-full">
      <ConsultBox v-for="item in MockConsultList" :key="item.id" :data="item" />
    </div>
    <div class="mt-4 self-end">
      <button class="px-3 py-2 bg-blue-700 text-white font-bold"
        @click="$router.back()">
        Back
      </button>
    </div>

  </div>

</template>
