<script setup lang="ts">
const props = defineProps(['data'])

</script>

<template>
  <div class="flex flex-col w-full border border-blue-700 my-3">
    <div class="flex bg-blue-200 w-full px-2 py-1 text-black">
      <span class="badge text-purple-100 bg-purple-700">
        {{ data.from }}
      </span>
      <span class="text-sm self-center px-2"> to </span>
      <span class="badge text-pink-100 bg-pink-700">
        {{ data.to }}
      </span>
      <span v-if="data.urgent > 0" class="text-red-500 font-bold px-4">
        <div class="rounded-full border-2 border-red-600 px-2">
        E
        </div>
      </span>
      <div class="grow flex justify-end">
        <span class="badge text-green-100 bg-green-500">
          On
        </span>
        <span class="badge ml-2 text-blue-100 bg-blue-700">
          See note
        </span>
      </div>
    </div>
    <div class="bg-white w-full p-2
      grid grid-cols-4 gap-4 items-center">
      <div class="font-bold text-xl col-span-1">
        {{ data.HN }}
      </div>
      <div class="col-span-2">
        <p> Name </p>
        <p> Sex Age </p>
        <p> Diagnosis </p>
      </div>
      <div class="font-bold text-xl text-center col-span-1">
        {{ data.ward }}
      </div>

    </div>
  </div>

</template>

<style scoped>
.badge {
 @apply inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full;
}

</style>
