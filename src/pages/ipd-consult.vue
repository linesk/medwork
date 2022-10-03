<script setup lang="ts">
import dayjs from 'dayjs'
import BorderedBox from '@/components/BorderedBox.vue';
import { useTimestamp } from '@vueuse/core'
import { Divisions, FromDivisions } from '@/composables/useDataAPI'
import { findPatient } from '@/composables/usePatient'
import { addConsultData, checkConsultData } from '@/composables/useConsult'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const timeNow = computed(() => {
  const timestamp = useTimestamp({ offset: 0 })
  const now = dayjs(timestamp.value)
  return now.format('DD MMM YYYY HH:mm')
})

// --- Find Patient from HN ---
const patientData: any = ref({})
const patientSearch = ref(false)
const patientHN = ref('')
const loadingHN = ref(false)

const findHN = async () => {
  loadingHN.value = true
  patientData.value = await findPatient(patientHN.value)
  console.log(patientData.value.data)
  loadingHN.value = false
  patientSearch.value = true
}

// --- Add consult ---
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

const submitLoading = ref(false);
const addConsult = async () => {
  if( submitLoading.value ) return;
  submitLoading.value = true;
  const checkValues: Array<boolean | string> = checkConsultData(patientData.value, admissionData, consultData)
  console.log(checkValues)
  if (checkValues[0] == false) {
    alert('Missing value for '+checkValues[1])
    submitLoading.value = false;
    return
  }
  const res = await addConsultData(unref(patientData.value), admissionData.value, consultData.value);
  submitLoading.value = false;
  if (res?.result) {
    router.push('consult-status')
  }
}

// --- Modal ---
const modal = ref(false);
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
  <h1 class="text-3xl text-center font-bold py-6">
    Consultation
  </h1>
  <div class="w-full md:w-2/3 mx-auto">
    <!-- --- Find consult --- -->
    <div class="flex justify-end">
      <button @click="$router.push('/find-consult')" 
        class="btn bg-blue-700 text-white">Find Consult</button>
      <button @click="$router.push('/consult-status')" 
        class="btn bg-red-700 text-white">Consult status (for R.med)</button>
    </div>
    <!-- <HNBox /> -->
    <!-- === Patient === -->
    <div v-if="!patientSearch">
      <span class="px-2">HN:</span> 
      <input type="text" class="mx-2 input-box" v-model="patientHN">

      <button v-if="!loadingHN" @click="findHN"
        class="mx-2 btn border-blue-700 text-blue-700 !border-black">Add consult</button>
      <button v-else class="mx-2 btn"><pulse-loader size="6px" color="#1D4ED8"></pulse-loader></button>
    </div>
    <PatientIden v-if="patientSearch" :patient="patientData.data"></PatientIden>
    <!-- Admission -->

    <BorderedBox v-if="patientSearch">
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

    <BorderedBox v-if="patientSearch">
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

    <div v-if="patientSearch" class="flex items-stretch justify-around my-4">
      <!-- <button class="bg-green-600 py-2 px-4 rounded-xl text-white font-bold text-md"> -->
      <!--   SAVE DRAFT -->
      <!-- </button> -->
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
  @apply border border-white rounded py-1 px-2 mx-1
}
</style>
