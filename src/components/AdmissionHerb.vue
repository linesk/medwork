<script setup lang="ts">
  const props = defineProps(['data']);
  const emits = defineEmits(['deleteItem'])
</script>
<template>
  <div class="flex flex-row items-center gap-2 md:w-5/6">
    <icon-mdi-leaf class="flex-none text-green-600 md:w-10"/>
    <div class="flex-1">
      <input class="w-full" placeholder="Herb">
    </div>
    <icon-mdi-arrow-right-thick class="flex-none"/>
    <div class="flex-1">
      <input class="w-full" placeholder="Usage info">
    </div>
    <button @click="$emit('deleteItem')"
      class="flex-none text-red-500">
      <icon-mdi-close-circle/>
    </button>
  </div>
</template>

<style scoped>
input {
  @apply border border-black px-1
}

</style>
