<template>
  <div class="mb-5 pb-5 border-b flex justify-between">
    <BarChartItem
      v-for="(month, index) in months"
      v-bind="month"
      :month="index"
      :key="month"
      :max="max"
    />
  </div>
</template>

<script>
import BarChartItem from './BarChartItem.vue'

export default {
  components: {
    BarChartItem,
  },
  props: ['expenses'],
  computed: {
    months() {
      const months = [
        { label: 'Jan.', value: 0 },
        { label: 'Feb.', value: 0 },
        { label: 'Mar.', value: 0 },
        { label: 'Apr.', value: 0 },
        { label: 'May', value: 0 },
        { label: 'June', value: 0 },
        { label: 'Jul.', value: 0 },
        { label: 'Aug.', value: 0 },
        { label: 'Sep.', value: 0 },
        { label: 'Oct.', value: 0 },
        { label: 'Nov.', value: 0 },
        { label: 'Dec.', value: 0 },
      ]

      for (const expense of this.expenses) {
        months[expense.date.getMonth()].value += expense.amount
      }

      return months
    },
    max() {
      return Math.max(...this.months.map((month) => month.value))
    },
  },
}
</script>
