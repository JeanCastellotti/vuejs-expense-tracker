<template>
  <div>
    <select
      @change="setYear"
      class="rounded bg-white p-2 mb-5 focus:outline-none"
    >
      <option :value="currentYear">{{ currentYear }}</option>
      <option :value="previousYear">{{ previousYear }}</option>
    </select>
  </div>
  <div v-if="!!expenses.length" class="space-y-4">
    <ExpenseItem
      v-for="expense in expenses"
      v-bind="expense"
      :key="expense.id"
    />
  </div>
  <div v-else class="text-center text-3xl font-thin">
    No expense in {{ formatDate }}.
  </div>
</template>

<script>
import ExpenseItem from './ExpenseItem.vue'

export default {
  components: {
    ExpenseItem,
  },
  props: {
    expenses: Array,
    year: Number,
    month: Number,
  },
  emits: ['change-year'],
  computed: {
    formatDate() {
      return new Date(this.year, this.month).toLocaleDateString('en-EN', {
        month: 'long',
        year: 'numeric',
      })
    },
    currentYear() {
      return new Date().getFullYear()
    },
    previousYear() {
      return new Date().getFullYear() - 1
    },
  },
  methods: {
    setYear(event) {
      this.$emit('change-year', +event.target.value)
    },
  },
}
</script>
