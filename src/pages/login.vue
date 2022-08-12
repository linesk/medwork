<script setup lang="ts">
import Logo from '@/assets/Logo.png'
import { useLogin } from '@/composables/useLogin'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')
const login = async () => {
  const res = await useLogin(username.value, password.value)
  if (res) {
    router.push('/main')
  }

}

</script>

<template>
  <img :src="Logo" class="flex max-w-[25%] md:max-w-[10%]"/>
  <div class="flex-1 h-full flex flex-col 
    justify-center self-center md:w-1/2 lg:w-1/3"
  >
    <div class="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-xl p-3 my-2 ">
      <div>
        <p class="text-white text-center ">
          <strong class="font-bold">MEDWORK</strong> TEAM
        </p>
      </div>
      <div class="grid grid-cols-3 gap-2 py-4">
        <div class="text-white text-center self-center text-sm">USER</div>
        <input type="text" v-model="username"
          class="col-span-2 rounded-md"
          placeholder="" />
        <div class="text-white text-center self-center text-sm">PASSWORD</div>
        <input type="password" v-model="password" @keyup.enter="login"
          class="col-span-2 rounded-md"
          placeholder="" />
      </div>
      <div class="flex justify-center">
        <a href="#" @click="login"
          class="text-white text-sm bg-orange-600 px-6 py-1 rounded-xl">
          SIGN IN
        </a>
      </div>
      <div class="flex justify-end">
        <span class="text-gray-200 text-sm italic">
          <a href="registration">Sign up</a>
        </span>
      </div>
    </div>
    <!-- Consultation -->
    <button class="
      my-2 py-2 w-full bg-white font-bold text-blue-700 text-sm
      border-2 border-blue-600 rounded-2xl "
      @click="$router.push('/ipd-consult')"
    >
      CONSULTATION
    </button>
    <button class="
      my-2 py-2 w-full bg-white font-bold text-blue-700 text-sm
      border-2 border-blue-600 rounded-2xl
      ">
      R2/3 DIVISION ROTATION
    </button>
    <button class="
      my-2 py-2 w-full bg-white font-bold text-blue-700 text-sm
      border-2 border-blue-600 rounded-2xl
      ">
      CHIEF RESIDENT SHIFT TABLE
    </button>
    <a href="#" class="mt-3 text-sm text-blue-700">
      ภาควิชาอายุรศาสตร์

    </a>
  </div>
</template>

<route lang="yaml">
meta:
  layout: login
</route>
