<script setup lang="ts">
import dayjs from 'dayjs'
import BorderedBox from '@/components/BorderedBox.vue';
import { useTimestamp } from '@vueuse/core'
import { Divisions, FromDivisions, addConsultData } from '@/composables/useDataAPI'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const timeNow = computed(() => {
  const timestamp = useTimestamp({ offset: 0 })
  const now = dayjs(timestamp.value)
  return now.format('DD MMM YYYY HH:mm')
})

const submitLoading = ref(false);

const patientData = ref()
const admissionData = ref({
  an: 'i22-',
  cover: '',
  ward: ''
})

const consultData = ref({
  urgency: 0,
  consult_from: '',
  sub: '',
  consult_to: '',
  detail: '',
  dx: '',
  consult: '',
  consultee: '',
  tel: '',
  time: useTimestamp({ offset:0 }).value
})

const addConsult = async () => {
  if( submitLoading.value ) return;
  submitLoading.value = true;
  const res = await addConsultData(patientData.value.data, admissionData.value, consultData.value);
  submitLoading.value = false;
  if (res?.result) {
    router.push('consult-status')
  }
}
const modal = ref(true);
const modalInfo = ref({
  title: 'Confirm submit?',
  content: ''
})
const onAccept = (c:any) => {
  console.log('cf')
  c()
}

</script>

<template>
  <VModal v-model="modal"
    @confirm="onAccept">
    <template v-slot:title>{{ modalInfo.title }}</template>
    {{ modalInfo.content }}
  </VModal>
  <h1 class="text-3xl text-center font-bold">
    Consultation
  </h1>
  <br>
  <div class="flex justify-end">
    <button class="btn bg-blue-700 text-white">Find Consult</button>
  </div>
  <div class="w-full md:w-2/3 mx-auto">
    <!-- <HNBox /> -->
    <!-- === Patient === -->
    <PatientIden ref="patientData">
    </PatientIden>
    <!-- Admission -->

    <BorderedBox>
      <template #header>
        Admission Detail
      </template>
      <div class="grid grid-cols-12 gap-2 mt-2">
        <div class="col-span-2">AN</div>
        <input class="col-span-4 input-box" v-model="admissionData.an"/>

        <div class="col-span-2 md:col-start-8">Cover</div>
        <input v-model="admissionData.cover"
          class="col-span-4 md:col-span-3 input-box" />

        <div class="col-span-4 md:col-span-2">Ward</div>
        <input v-model="admissionData.ward"
          class="col-span-8 md:col-span-4 input-box" />
      </div>
    </BorderedBox>

    <!-- Consult Details -->

    <BorderedBox>
      <template #header>
        Consultation Detail
      </template>
      <div class="grid grid-cols-12 gap-2 mt-2">
        <div class="col-span-4 md:col-span-2">Urgency</div>
        <select v-model="consultData.urgency"
          class="col-span-8 md:col-span-4 rounded text-base font-normal py-1 px-3 mb-3">
          <option :value="0">Not urgent</option>
          <option :value="1">Urgent</option>
        </select>

        <div class="col-span-4 md:col-span-2 md:col-start-1">From</div>
        <select v-model="consultData.consult_from" 
          class="col-span-8 md:col-span-4 rounded text-base font-normal py-1 px-3">
          <option v-for="(div, key) in FromDivisions" :value="key" :key="key">{{ div }}</option>
        </select>

        <div class="col-span-4 md:col-span-2 md:col-start-1">Sub</div>
        <input v-model="consultData.sub"
          class="col-span-8 md:col-span-4 input-box" />

        <p class="text-center col-span-12 text-blue-700 font-bold
          md:text-xl md:p-2 md:col-start-1 md:col-span-6">
          To
        </p>
        <p class="col-span-12 md:col-span-6"></p>

        <div class="col-span-4 md:col-span-2">Med Div?</div>
        <select v-model="consultData.consult_to" 
          class="col-span-8 md:col-span-4 rounded text-base font-normal py-1 px-3">
          <option v-for="(div, key) in Divisions" :value="key" :key="key">{{ div }}</option>
        </select>

        <div class="col-span-12">Detail:</div>
        <textarea v-model="consultData.detail"
          class="col-span-12" style="height: 400px"></textarea>

        <div class="col-span-12">Provisional Diagnosis</div>
        <!-- <input class="col-span-12 input-box" /> -->
        <textarea v-model="consultData.dx"
          class="col-span-12" style=""></textarea>

        <div class="col-span-12">Consultation Point</div>
        <!-- <input class="col-span-12 input-box" /> -->
        <textarea v-model="consultData.consult"
          class="col-span-12" style=""></textarea>

        <div class="col-span-12">Consult by</div>
        <input v-model="consultData.consultee"
          class="col-span-12 input-box" />

        <div class="col-span-12">Tel</div>
        <input v-model="consultData.tel"
          class="col-span-12 input-box" />

        <div class="col-span-12">Date</div>
        <input class="col-span-12 input-box" :value="timeNow" disabled/>
      </div>
    </BorderedBox>

    <div class="flex items-stretch justify-around mt-8">
      <button class="bg-green-600 py-2 px-4 rounded-xl text-white font-bold text-md">
        SAVE DRAFT
      </button>
      <button @click="addConsult"
        class="bg-red-600 py-2 px-4 rounded-xl text-white font-bold text-md">
        <pulse-loader :loading="submitLoading" size="8px" color="#fff"></pulse-loader>
        <span v-if="!submitLoading">SUBMIT</span>
      </button>
    </div>
  </div>

</template>
<route lang="yaml">
meta:
  layout: blank
</route>

<style scoped lang="css">
.data-box {
  @apply border-2 border-blue-600 p-3 my-2 rounded-xl
}
.data-header {
  @apply absolute top-2 bg-white w-fit px-3 font-bold text-lg text-blue-800
}
.input-box {
  @apply border border-black px-2 rounded py-1
}
.btn {
  @apply border border-black rounded py-1 px-2
}
</style>
