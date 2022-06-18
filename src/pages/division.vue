<script setup lang="ts">
import { userid } from '@/composables/exampleData'
import { divisions } from '@/composables/exampleData'

const loading = ref(false)


</script>

<template>
  <div v-if="loading" class="flex w-full justify-center text-xl">
    Loading...
  </div>
  <div v-else class="flex flex-col w-full justify-center text-xl gap-4">
    <div class="text-center font-bold">Hello, {{ userid.name }}!</div>
    <div class="flex flex-row justify-center gap-2 font-bold">
      Current role: <div class="bg-gradient-to-r from-emerald-600 to-green-500 px-4 rounded-lg text-white">{{userid.role}}</div> <a href="#">Go</a>
    </div>
    <div>
      <div class="text-sm my-2">Choose your role:</div>
      <div class="grid grid-cols-3 gap-2">
        <div v-for="di in divisions" class="text-center">
        <div v-if="di==userid.role" class="bg-gradient-to-r from-emerald-600 to-green-500 px-4 rounded-lg text-white">
          {{di}}
        </div>
        <div v-else class="px-4 rounded-lg text-zinc-400 border-2 justify-center">
          {{di}}
        </div>
        </div>
      </div>
    </div>
  </div>
  

</template>
