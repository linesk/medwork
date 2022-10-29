<script setup lang="ts">
import { userid } from '@/composables/exampleData'
import { divisions } from '@/composables/exampleData'
import { useStore } from '@/store/index'

const store = useStore()
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
    <h2 class="text-center font-bold">AC Med</h2>
    <ACMedWard v-for="el in Object.keys(store.beds)" :ward="el" />
    <hr class="my-4"/>
    <h2 class="text-center font-bold">Reservation</h2>
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

