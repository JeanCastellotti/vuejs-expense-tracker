<template>
  <div
    class="
      flex flex-col
      items-center
      space-y-4
      transition
      transform
      hover:scale-105
      cursor-pointer
    "
    @click="getMonth(month)"
  >
    <div class="w-5 bg-gray-200 rounded h-36 flex flex-col justify-end">
      <div class="bg-blue-400 rounded w-5" :style="{ height: height }"></div>
    </div>
    <span class="text-gray-800">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: ['label', 'month', 'value', 'max'],
  inject: ['getMonth'],
  computed: {
    height() {
      return `${(this.value / this.max) * 100}%`
    },
  },
}
</script>
