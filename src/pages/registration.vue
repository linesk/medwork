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
  <!-- === Patient === -->
  <div class="relative py-3">
    <div class="static data-box">
      <div class="data-header">
        Patient Identification
      </div>
      <div class="grid grid-cols-12 gap-2 mt-2">
        <div class="col-span-3">คำนำหน้า</div>
        <input class="col-span-5 input-box" />

        <div class="col-span-2">เพศ</div>
        <input class="col-span-2 input-box" />

        <div class="col-span-3">ชื่อ</div>
        <input class="col-span-5 input-box" />

        <div class="col-span-2">ชื่อเล่น</div>
        <input class="col-span-2 input-box" />

        <div class="col-span-3">นามสกุล</div>
        <input class="col-span-9 input-box" />

        <div class="col-span-3">วันเกิด</div>
        <input class="col-span-5 input-box" />

        <div class="col-span-2">อายุ</div>
        <input class="col-span-2 input-box" />

        <div class="col-span-3">เบอร์.</div>
        <input class="col-span-9 input-box" />

        <div class="col-span-3">Email</div>
        <input class="col-span-4 input-box" />
        <div class="col-span-1">@</div> 
        <input class="col-span-4 input-box" />

        <div class="col-span-3">Line ID</div>
        <input class="col-span-9 input-box" />

        <div class="col-span-3">Discord ID</div>
        <input class="col-span-9 input-box" />

        <div class="col-span-3">Role</div>
        <input class="col-span-9 input-box" />

      </div>
    </div>
  </div>
  <div class="text-xs">
      **You have to wait confirmatiobn from admin for 2-3 days**</div>

    <div class="flex items-stretch justify-around mt-4">
      <button class="bg-red-600 py-2 px-4 rounded-xl text-white font-bold text-md">
        Request an account
      </button>
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
