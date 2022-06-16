<script setup>
import Logo from '@/assets/logo.png';
import dayjs from 'dayjs'
const passcode = ref()
const loginBtn = ref()
const enterPasscode = () => {
  if(passcode.value.value == 'snh123') {
    localStorage.setItem('passcode', dayjs().format())
  }
}
localStorage.clear()
</script>

<template>
  <div class="flex-1 flex justify-center items-center">
    <div class="w-full justify-center">
      <div class="flex justify-center">
        <img :src="Logo" class="h-8 inline px-2"/>
        <span class="italic text-lg font-bold px-2">Be Patient's Hope</span>
      </div>
      <div class="relative w-full my-2">
        <input type="password" id="search-dropdown"
          @keyup.enter="loginBtn.click()"
          ref="passcode"
          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Please enter the password">
        <a href="/login" 
          ref="loginBtn"
          @click="enterPasscode"
          class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
          Enter
        </a>
      </div>
      <div class="flex justify-center">
        <span class="text-xs italic">
          If you don't have the password, please kindly contact our residents.
        </span>
      </div>
    </div>
  </div>
  <div class="flex justify-center h-16 cl bg-red-300">
    Link to Department<br>
    Password = snh123
  </div>
</template>
<route lang="yaml">
meta:
  layout: blank
</route>

