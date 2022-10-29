<script setup lang="ts">
const exampleData = {
    hn: "EW1234",
    name: "สายัน สวัสดี",
    gender: "female",
    age: "34 ปี 3 เดือน",
    DOB :"15/10/35",
    ward: "2ฉ",
    from: "Rehab",
    to: "Nephro",
    sub: "Stroke Rehab",
    detail: "คนไข้มีคิวฟอกไตตามรอบ ตอนนี้ admit for ambulation training",
    dx: "ESRD with old CVA",
    consult: "HD ตามรอบ",
    tel: "08129288483",
    consultee: "นพ.เอก",
    urgency: "1",
    time: "15/6/65"
}

</script>

<template>
<div class="container mx-auto">

<!-- Header -->
  <div class="flex justify-center items-center">

    <div class="text-center">
      <div class="text-blue-700 font-bold">{{ exampleData.from }}</div>

      <div class="text-blue-700 font-bold text-xs">{{ exampleData.sub }}</div>
    </div>
    <div class="text-blue-700 font-bold mx-4"> ----------------> </div>
    <div class="text-blue-700 font-bold">{{ exampleData.to }}</div>
  </div>
    


  <div class="flex flex-row-reverse">
      <div v-if="exampleData.urgency == '1'" class="bg-red-600 py-2 px-4 rounded-full text-white font-bold text-md">Urgency</div>
      <div v-else class="bg-blue-600 py-2 px-4 rounded-full text-white font-bold text-md">Non-Urgency</div>
  </div>

  <!-- Consult Details -->
  <div class="">
    <div class="relative py-3">
      <div class="static data-box">
        <div class="data-header">
          Detail
        </div>
        <div class="grid grid-cols-12 gap-2 mt-2">
          <div class="col-span-12">{{ exampleData.detail }}</div>
        </div>
      </div>
      
    </div>

    <div class="relative py-3">
      <div class="static data-box">
        <div class="data-header">
          Provisional Diagnosis
        </div>
          <div class="col-span-2">{{ exampleData.dx }}</div>
      </div>
    </div>

    <div class="relative py-3">
        <div class="static data-box">
          <div class="data-header">
            Reason for Consultation
          </div>
            <div class="col-span-2">{{ exampleData.consult }}</div>
        </div>
    </div>

    <div class="relative py-3">
        <div class="static data-box">
          <div class="data-header">
            Resisent and staff name
          </div>
            <div class="col-span-2">{{ exampleData.consultee }}</div>
            <div class="col-span-2">Tel: {{ exampleData.tel }}</div>
        </div>
    </div>
  </div>
  

  <hr class="rounded">
  <!-- === Patient identification === -->
  <div class="flex flex-row justify-between items-end mt-5">
    <div class="basis-1/2">
      <div class="relative pt-3 pb-0 text-sm">
        <div class="static data-box">
          <div class="data-header">
              Patient Identification
          </div>
          <div class="grid md:grid-cols-6 grid-cols-3 gap-2 sm:mt-2 mt-12">
            <div class="col-span-1">HN</div>
            <div class="col-span-2">{{ exampleData.hn }}</div>

            <div class="col-span-1">Name</div>
            <div class="col-span-2">{{ exampleData.name}}</div>

            <div class="col-span-1">Sex</div> 
            <div class="col-span-2">{{ exampleData.gender }}</div>

            <div class="col-span-1">DOB</div> 
            <div class="col-span-2">{{ exampleData.DOB }}</div>

            <div class="col-span-1">Age</div> 
            <div class="col-span-2">{{ exampleData.age }}</div>

            <div class="col-span-1">Ward</div> 
            <div class="col-span-2">{{ exampleData.ward }}</div>

            <div class="col-span-1">consult date</div> 
            <div class="col-span-2">{{ exampleData.time }}</div>

          </div>
        </div>
      </div>
    </div>
    <div class="basis-1/6">

    </div>
    <div class="mb-2">
        <div class="bg-black py-2 px-4 rounded-full text-white font-bold text-md">
            {{ exampleData.to}}
        </div>
    </div>
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

<script>


</script>