<script setup lang="ts">
import type { Ref } from 'vue'

const allergy: Ref<any[]> = ref([])
const herbs: Ref<any[]> = ref([])

const FamHxText = ref('')

const addFamHx = (type: string | null) => {
  let txt = '';
  if (type == 'cancer') {
    txt = '- No one in family has cancer'
  }
  if (type == 'blood') {
    txt = '- No one in family has blood disease'
  }
  if (!FamHxText.value.endsWith('\n') && FamHxText.value != '') txt = '\n' + txt
  FamHxText.value += txt
}

</script>

<template>
  <div class="relative md:w-2/3 mx-auto grid grid-cols-8">
    <PatientIden class="col-span-6"></PatientIden>

    <!-- Admission Detail Part -->
    <BorderedBox class="col-span-6">
      <template #header>
        Admission Detail
      </template>
      <div class="grid grid-cols-12 gap-2">
        <span class="col-span-4 md:col-span-2"> AN </span>
        <input class="col-span-8 md:col-span-4">

        <span class="col-span-4 md:col-span-2 md:col-start-8 text-sm">Healthcare</span>
        <input class="col-span-8 md:col-span-3">

        <span class="col-span-6 md:col-span-3 text-sm md:text-base">Admission Date</span>
        <input class="col-span-6 md:col-span-3">

        <span class="col-span-4 md:col-span-2 md:col-start-8">Ward</span>
        <input class="col-span-8 md:col-span-3">
      </div>
    </BorderedBox>

    <!-- History Part -->
    <BorderedBox class="col-span-6">
      <template #header>
        History
      </template>
      <div class="flex flex-col gap-2">
        <span class="text-header !pt-0">Chief complaint</span>
        <input type="text" class=""/>

        <span class="text-header">Known case</span>
        <textarea class="h-36 min-h-[60px]"></textarea>

        <span class="text-header">Present illness</span>
        <textarea class="h-48 min-h-[100px]"></textarea>

        <span class="text-header">Past history</span>
        <li>U/D as mentioned</li>
        
        <div class="flex">
          <li class="hidden md:list-item">Drug/Food allergy</li>
          <li class="list-item md:hidden">Allergy</li>
          <span v-if="allergy.length == 0">: none</span>
          <span class="grow"></span>
          <button @click="allergy.push({})"
            class="px-2 font-bold text-sm rounded-xl bg-pink-200">
            Add
          </button>
        </div>
        <div v-for="(el, i) in allergy" :key="i">
          <AdmissionDrugAllergy :data="el"
            @delete-item="allergy.splice(i, 1)"
            />
        </div>

        <div class="flex">
          <li>Herb use</li>
          <span v-if="herbs.length == 0">: none</span>
          <span class="grow"></span>
          <button @click="herbs.push({})"
            class="px-2 font-bold text-sm rounded-xl bg-pink-200">
            Add
          </button>
        </div>
        <div v-for="(el, i) in herbs" :key="i">
          <AdmissionHerb :data="el"
            @delete-item="herbs.splice(i, 1)"
            />
        </div>

        <div class="flex">
          <li>Others</li>
          <span class="grow"></span>
          <button
            class="px-2 font-bold text-sm rounded-xl bg-white border border-orange-600">
            <icon-mdi-traffic-cone class="inline text-orange-600" />
            To be added
          </button>
        </div>

        <!-- Social History -->
        <span class="text-header">Social history</span>
        <textarea class="h-20 min-h-[60px]"></textarea>

        <!-- Family History -->
        <span class="text-header">Family History</span>
        <div class="flex">
          <textarea class="w-full h-20 min-h-[60px]" v-model="FamHxText"></textarea>
          <div class="side-tool flex flex-col items-start gap-1">
            <button @click="addFamHx('cancer')">
              <icon-healthicons-loudly-crying class="text-xl inline text-blue-600"/> Cancer
            </button>
            <button @click="addFamHx('blood')">
              <icon-healthicons-blood-drop class="inline text-xl text-red-600"/> Blood
            </button>
          </div>
        </div>

      </div>
    </BorderedBox>
  </div>
</template>

<style lang="postcss" scoped>
input {
  @apply border border-black pl-1;
}
.text-header {
  @apply font-bold text-lg pt-2;
}
.side-tool {
  @apply absolute -right-[420px] border border-gray-400 rounded-xl w-1/2 p-2;
}
</style>
