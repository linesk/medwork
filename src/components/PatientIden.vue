<script setup lang="ts">
import { Patient } from '@/composables/exampleData'
import dayjs from 'dayjs'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps(['patient']);
const data = ref(props.patient ?? Patient);

if (data.value.dob) data.value.birthday = dayjs(data.value.dob).add(543, 'y').format('DD MMM YYYY')

const datepickerData = ref(new Date(data.value.dob))
const formatDate = (date: Date) => {
  const day = ('0'+date.getDate()).slice(-2)
  const month = ('0'+(date.getMonth() + 1)).slice(-2)
  const year = date.getFullYear() + 543

  return `${day}/${month}/${year}`
}
watchEffect(()=>{
  data.value.dob = datepickerData.value.valueOf()
  if (data.value.dob) data.value.age = dayjs().diff(dayjs(data.value.dob), 'y') + ' ปี'
})

defineExpose({
  data
})
</script>

<template>
  <BorderedBox>
    <template #header>
      Patient Identification
    </template>
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-2">HN</div>
      <input class="col-span-4 input-box" v-model="data.hn"/>

      <div class="col-span-3 md:col-start-8 md:col-span-2">Prefix</div>
      <input v-model="data.prefix"
        class="col-span-3 input-box" />

      <div class="col-span-2">Name</div>
      <input v-model="data.name"
        class="col-span-6 md:col-span-4 input-box" />

      <div class="col-span-2 md:col-start-8">Sex</div>
      <!-- <input v-model="data.sex" -->
      <!--   class="col-span-2 md:col-span-3 input-box" /> -->
      <select v-model="data.gender"
        class="col-span-2 md:col-span-3 input-box">
        <option :value="'male'">Male</option>
        <option :value="'female'">Female</option>
      </select>

      <div class="col-span-3 md:col-span-2">Surname</div>
      <input v-model="data.surname"
        class="col-span-9 md:col-span-4 input-box" />

      <div class="col-span-2 md:col-start-1">Birthday</div>
      <!-- <input v-model="data.birthday" -->
      <!--   class="col-span-5 md:col-span-4 input-box" /> -->
      <Datepicker v-model="datepickerData"
        :enableTimePicker="false" :clearable="false"
        autoApply :closeOnAutoApply="false"
        :format="formatDate"
        class="col-span-5 md:col-span-4"/>

      <div class="col-span-2 md:col-start-8">Age</div>
      <input v-model="data.age"
        class="col-span-3 input-box cursor-not-allowed" disabled />

    </div>
  </BorderedBox>
</template>

<style scoped>
.input-box {
  @apply border border-black rounded px-2 py-1;

}
</style>
