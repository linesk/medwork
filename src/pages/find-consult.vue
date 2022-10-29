<script setup lang="ts">
import dayjs from 'dayjs'
import BorderedBox from '@/components/BorderedBox.vue';
import { useTimestamp } from '@vueuse/core'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { useRouter } from 'vue-router'
import { findConsultCode } from '@/composables/useConsult'

const router = useRouter()

const patientData = ref()

const consultCode = ref('')
const isLoading = ref(false)
const result: any = ref(null)
const findConsult = async ()=>{
  isLoading.value = true
  const res = await findConsultCode(consultCode.value)
  result.value = res
  isLoading.value = false
}

</script>

<template>
  <div class="mx-auto text-center w-full">
    <h2 class="text-xl font-bold text-center">Find Consult</h2>
    <br>
    <input type="text" class="p-2 rounded" v-model="consultCode" @keyup.enter="findConsult">
    <br>
    <button @click="findConsult"
      class="my-2 border-0 bg-blue-700 text-white px-3 py-2 rounded-lg">
      <span v-if="!isLoading">Find</span>
      <pulse-loader :loading="isLoading" size="8px" color="#fff"></pulse-loader>
    </button>
    <br>
    <div v-if="result !== null" class="w-full md:w-1/2 md:mx-auto">
      <div v-for="(data, val) in result"
        class="">
        <ConsultBox :data="data" />
      </div>
      <div v-if="Object.keys(result).length == 0">Not found</div>
    </div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: blank
</route>
<style scoped>
.consult-box {
  @apply border rounded-lg border-black ;
}

</style>
