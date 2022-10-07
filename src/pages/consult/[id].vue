<script setup lang="ts">
import dayjs from 'dayjs'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { useRouter } from 'vue-router'
import { findConsultCode } from '@/composables/useConsult'

const route = useRoute()

const consultCode = ref('')
const isLoading = ref(true)
const result: any = ref(null)

const getConsultByParams = () => {
  if(!result.value || result.value.length == 0) return null
  console.log(route.params.id)
  return result.value.filter( (el: any) => {
    return el.id == parseInt(route.params.id.slice(7), 16)
  })
}

onMounted(async ()=>{
  console.log(route.params.id)
  result.value = await findConsultCode(route.params.id as string)
  result.value = getConsultByParams()
  console.log(result.value)
  isLoading.value = false
  getConsultByParams()
})



</script>

<template>
  <div class="mx-auto text-center w-full py-10 px-4">
    <h2 class="text-3xl font-bold text-center pt-4">Consultation Note</h2>
    <p class="text-md text-center pb-4 italic">Department of Internal Medicine</p>
    <br>
    <div v-if="isLoading">Loading...</div>
    <div v-if="result !== null" class="w-full">
      <div v-if="Object.keys(result).length == 0">
        <p>Not found consult of this ID</p>
        <br>
        <!-- <button class="border rounded py-1 px-2 bg-blue-200" @click="$router.push('/find-consult')">Back</button> -->
      </div>
      <ConsultTable v-else :data="result[0]" />
      <div class="flex justify-end">
        <button @click="$router.back()"
          class="border px-2 py-1 rounded-lg no-print">Back</button>
      </div>
    </div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: blank
</route>
<style>
.consult-box {
  @apply border rounded-lg border-black ;
}
@media print {
  @page {
    size: 330mm 427mm;
    margin: 14mm;
  };
  .no-print, .no-print * {
    display: none !important;
  }
}

</style>

