<script setup lang="ts">
import { userid } from '@/composables/exampleData'
import { divisions } from '@/composables/exampleData'

const loading = ref(false)
const selectedRole = ref(userid.role)

const divClass = (div: string)=>({
  'div-choice': true,
  'selected': (div == selectedRole.value)
})

</script>

<template>
  <div v-if="loading" class="flex w-full justify-center text-xl">
    Loading...
  </div>
  <div v-else class="flex flex-col justify-center text-xl gap-4">
    <div class="text-center font-bold">Hello, {{ userid.name }}!</div>
    <div class="flex flex-row justify-center items-center gap-2 font-bold">
      <span>Current role: </span>
      <div class="div-choice selected w-24">{{ selectedRole }}</div>
      <a href="#" class="p-1 bg-red-500 text-white rounded-full">Go</a>
    </div>
    <div>
      <div class="text-md font-bold my-2">Choose your role:</div>
      <div class="grid grid-cols-3 gap-2 gap-x-3 px-3">
        <div v-for="div in divisions">
          <div :class="divClass(div)"
            @click="selectedRole = div">
            {{ div }}
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.div-choice {
  @apply py-1 rounded-lg text-zinc-300 font-bold border-2 text-center;
}
.selected {
  @apply bg-gradient-to-r from-lime-700 to-lime-500 text-white border-0 !important;
}

</style>
