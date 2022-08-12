<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

console.log(VueFinalModal)

</script>

<template>
  <vue-final-modal
    v-slot="{ params, close }"
    v-bind="$attrs"
    classes="flex justify-center items-center"
    content-class="relative flex flex-col max-h-full mx-4 p-4 border dark:border-gray-800 rounded bg-white dark:bg-gray-900"
  >
    <span class="mr-8 text-2xl font-bold ">
      <slot name="title"></slot>
    </span>
    <div class="flex-grow overflow-y-auto">
      <slot v-bind:params="params"></slot>
    </div>
    <div class="flex-shrink-0 flex justify-center items-center pt-4">
      <button class="vfm-btn" @click="$emit('confirm', close)">confirm</button>
      <button class="vfm-btn" @click="$emit('cancel', close)">cancel</button>
    </div>
    <button class="absolute top-0 right-0 mt-2 mr-2" @click="close">
      <icon-mdi-close></icon-mdi-close>
    </button>
  </vue-final-modal>
</template>
