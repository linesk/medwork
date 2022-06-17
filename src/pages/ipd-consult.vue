<script setup lang="ts">
import dayjs from 'dayjs'
const mockData = {
  HN: 'MD1234',
  prefix: 'Mr',
  name: 'สมพร',
  surname: 'แข็งแรง',
  sex: 'male',
  dob: (new Date()).toISOString()
}

const timeNow = computed(() => {
  const now = dayjs()
  return now.format('DD MMM YYYY HH:mm')
})

</script>

<template>
  <!-- {{ mockData.name }} {{ mockData.surname }} -->
  <HNBox />
  <!-- === Patient === -->
  <div class="relative py-3">
    <div class="static data-box">
      <div class="data-header">
        Patient Identification
      </div>
      <div class="grid grid-cols-12 gap-2 mt-2">
        <div class="col-span-2">HN</div>
        <input class="col-span-4 input-box" />

        <div class="col-span-3">Prefix</div>
        <input class="col-span-3 input-box" />

        <div class="col-span-2">Name</div>
        <input class="col-span-6 input-box" />

        <div class="col-span-2">Sex</div>
        <input class="col-span-2 input-box" />

        <div class="col-span-3">Surname</div>
        <input class="col-span-9 input-box" />

        <div class="col-span-2">DOB</div>
        <input class="col-span-5 input-box" />

        <div class="col-span-2">Age</div>
        <input class="col-span-3 input-box" />

      </div>
    </div>
  </div>

  <!-- Admission -->
  
  <div class="relative py-3">
    <div class="static data-box">
      <div class="data-header">
        Admission Detail
      </div>
      <div class="grid grid-cols-12 gap-2 mt-2">
        <div class="col-span-2">AN</div>
        <input class="col-span-4 input-box" />

        <div class="col-span-2">Cover</div>
        <input class="col-span-4 input-box" />

        <div class="col-span-4">Ward</div>
        <input class="col-span-8 input-box" />
      </div>
    </div>
  </div>


  <!-- Consult Details -->
  
  <div class="relative py-3">
    <div class="static data-box">
      <div class="data-header">
        Consultation Detail
      </div>
      <div class="grid grid-cols-12 gap-2 mt-2">
        <div class="col-span-4">From</div>
        <input class="col-span-8 input-box" />

        <div class="col-span-4">Sub</div>
        <input class="col-span-8 input-box" />

        <p class="text-center col-span-12 text-blue-700 font-bold">To</p>

        <div class="col-span-4">Med Div?</div>
        <input class="col-span-8 input-box" />

        <div class="col-span-12">Detail:</div>
        <textarea class="col-span-12" style="height: 400px"></textarea>

        <div class="col-span-12">Provisional Diagnosis</div>
        <input class="col-span-12 input-box" />

        <div class="col-span-12">Consultation Point</div>
        <input class="col-span-12 input-box" />

        <div class="col-span-12">Consult by</div>
        <input class="col-span-12 input-box" />

        <div class="col-span-12">Date</div>
        <input class="col-span-12 input-box" :value="timeNow" disabled/>
        
      </div>
    </div>


    <div class="flex items-stretch justify-around mt-8">
      <button class="bg-green-600 py-2 px-4 rounded-xl text-white font-bold text-md">
        SAVE DRAFT
      </button>
      <button class="bg-red-600 py-2 px-4 rounded-xl text-white font-bold text-md">
        SUBMIT
      </button>
    </div>
  </div>

</template>

<style scoped>
.data-box {
  @apply border-2 border-blue-600 p-3 my-2 rounded-xl
}
.data-header {
  @apply absolute top-2 bg-white w-fit px-3 font-bold text-lg text-blue-800
}
.input-box {
  @apply border border-black

}
</style>
