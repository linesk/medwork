<script setup lang="ts">
import { useStore } from '../store/index'
const store = useStore()
const props = defineProps<{
  ward: string
}>()

const beds = store.beds[props.ward]

</script>

<template>
  <div class="w-full px-2 border flex items-center">
    <h3 class="p-2 text-sm text-right font-bold basis-1/4">{{ ward }} |</h3>
    <div class="flex">
      <div v-for="b in (beds.free + beds.dc)"
        class="px-1 text-sm">
        <span v-if="b <= beds.admit.length">⚫</span>
        <span v-else>⚪</span>
      </div>
    </div>
  </div>
</template>
