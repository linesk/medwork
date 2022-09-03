<script setup lang="ts">
const props = defineProps(['data'])

const headerClass = computed(()=>{
  let hc = ["flex w-full px-2 py-1 text-black"]
  if (props.data?.urgency > 0) hc.push('bg-red-300')
  else hc.push('bg-blue-200')

  return hc
})

const showDetail = ref(false)

</script>

<template>
  <div class="flex flex-col w-full border border-blue-700 my-3">
    <div :class="headerClass">
      <span class="badge text-purple-100 bg-purple-700">
        {{ data.from }}
      </span>
      <span class="text-sm self-center px-2"> to </span>
      <span class="badge text-pink-100 bg-pink-700">
        {{ data.to }}
      </span>
      <span v-if="data.urgency > 0" class="text-sm text-red-700 font-bold px-4">
        <div class="rounded-full border-2 border-red-700 px-2">
        E
        </div>
      </span>
      <div class="grow flex justify-end">
        <!-- <span class="badge text-green-100 bg-green-500"> -->
        <!--   On -->
        <!-- </span> -->
        <button @click="$router.push(`/consult/${data.HN}C${Math.abs(data.id).toString(16)}`)"
          class="badge ml-2 text-white bg-blue-700">
          <!-- {{ (showDetail ? 'Hide' : 'See') }} note -->
          See note
        </button>
      </div>
    </div>
    <div class="bg-white w-full p-2
      grid grid-cols-4 gap-4 items-center">
      <div class="font-bold text-xl col-span-1">
        {{ data.HN }}
      </div>
      <div class="col-span-2">
        <p> {{ data.name }} </p>
        <p> Sex Age </p>
        <p> Dx: {{ data.dx }} </p>
      </div>
      <div class="font-bold text-xl text-center col-span-1">
        {{ data.ward }}
      </div>
    </div>
    <div v-if="showDetail">
      <div class="relative flex p-1 items-center bg-blue-100">
        <div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink mx-4 text-black">Detail</span>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
      <div class="py-2">
        Detail ...<br>
        <p class="text-left break-words">{{ data.detail }}</p>
        <hr>
        <p class="text-left break-words">Consult for: {{ data.consult }}</p>
        <hr>
        <p class="text-left gap-x-4">
        <span class="text-left break-words pr-6">From: {{ data.consultee }}</span>
        <span class="text-left break-words">Tel: {{ data.tel }}</span>
        </p>
        <hr>
        <p class="text-left break-words">Time: {{ data.time }}</p>
      </div>
    </div>
  </div>

</template>

<style scoped>
.badge {
 @apply inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full;
}

</style>
