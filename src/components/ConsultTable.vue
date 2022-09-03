<script setup lang="ts">
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { Divisions, FromDivisions } from '@/composables/useDataAPI'
const props = defineProps(['data'])

dayjs.extend(duration)

const headerClass = computed(()=>{
  let hc = ["flex w-full px-2 py-1 text-black"]
  if (props.data?.urgency > 0) hc.push('bg-red-300')
  else hc.push('bg-blue-200')

  return hc
})

const age = computed(()=>{
  const Age = dayjs.duration(dayjs().diff(dayjs(props.data.dob)))
  return [Age.years(), Age.months()]
})

const formatTime = computed(()=>{
  const time = dayjs(props.data.time*1000)
  return time.format('DD/MM/YYYY HH:mm')
})

const showDetail = ref(false)

</script>

<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12 md:col-span-4 table-box">
      <span v-if="data.urgency > 0" class="font-bold">Urgent consultation</span>
      <span v-else>Non-urgent consultation</span>
    </div>
    <div class="col-span-12 md:col-span-4 table-box">
      Consult From: {{ FromDivisions[data.from] }}, {{ data.sub }}
    </div>
    <div class="col-span-12 md:col-span-4 table-box font-bold text-lg">
      Consult To: {{ Divisions[data.to] }}
    </div>
    <div class="col-span-4 md:col-span-3 table-box font-bold text-sm md:text-lg">
      HN: {{ data.HN }}
    </div>
    <div class="col-span-8 md:col-span-4 table-box">
      {{ data.name }}
    </div>
    <div class="col-span-6 md:col-span-3 table-box text-sm md:text-base">
      {{ data.gender }} {{ age[0] }} yr {{ age[1] }} months
    </div>
    <div class="col-span-6 md:col-span-2 table-box font-bold">
      Ward: {{ data.ward }}
    </div>
    <div class="col-span-12 p-3 border text-left min-h-[150px] md:min-h-[300px] break-words">
      {{ data.detail }}
    </div>
    <div class="col-span-4 md:col-span-2 table-box">
      Diagnosis
    </div>
    <div class="col-span-8 md:col-span-10 table-box">
      {{ data.dx }}
    </div>
    <div class="col-span-4 md:col-span-2 table-box">
      Consult for: 
    </div>
    <div class="col-span-8 md:col-span-10 table-box">
      {{ data.consult }}
    </div>
    <div class="col-span-12 md:col-span-4 table-box">
      By {{ data.consultee }}
    </div>
    <div class="col-span-6 md:col-span-4 table-box">
      tel: {{ data.tel }}
    </div>
    <div class="col-span-6 md:col-span-4 table-box">
      {{ formatTime }}
    </div>
    <br><br>
  </div>
</template>
<style lang="postcss">
.table-box {
  @apply border px-2 py-3 break-words;
}
</style>
