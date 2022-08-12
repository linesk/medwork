<template>
  <div class="relative py-3">
    <div class="static data-box">
      <div class="data-header">
        <slot name="header"></slot>
      </div>
      <slot></slot>
    </div>
  </div>

</template>


<style scoped>
.data-box {
  @apply border-2 border-blue-600 px-4 py-6 my-2 rounded-xl
}
.data-header {
  @apply absolute top-2 bg-white w-fit px-3 font-bold text-lg md:text-xl text-blue-800
}
</style>
