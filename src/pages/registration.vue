<script setup lang="ts">

</script>

<template>
  <!-- === New Account === -->
  <div class="relative pt-3">
    <div class="static data-box flex flex-col">
      <div class="data-header self-center">
        Create New Account
      </div>
      <div class="grid grid-cols-12 gap-2 mt-6">
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
    **You have to wait confirmatiobn from admin for 2-3 days**
  </div>
  <div class="flex items-stretch justify-around mt-4">
    <button class="bg-red-600 py-2 px-4 rounded-2xl text-white font-bold text-md">
    Request an account
    </button>
  </div>
</template>

<style scoped>
.data-box {
  @apply border-2 border-blue-600 p-3 my-2 rounded-xl
}
.data-header {
  @apply absolute top-2 text-center px-3 py-1 rounded-xl bg-blue-700 w-fit;
  @apply font-bold text-xl text-white;
}
.input-box {
  @apply border border-black

}
</style>
