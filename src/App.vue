<template>
  <TheLayout>
    <NewExpenseForm @add-expense="addExpense" />
    <BarChart :expenses="filteredExpensesByYear" />
    <ExpensesList
      :expenses="filteredExpensesByYearAndMonth"
      :year="year"
      :month="month"
      @change-year="getYear"
    />
  </TheLayout>
</template>

<script>
import TheLayout from './components/TheLayout.vue'
import NewExpenseForm from './components/NewExpenseForm.vue'
import ExpensesList from './components/ExpensesList.vue'
import BarChart from './components/BarChart.vue'

export default {
  components: {
    TheLayout,
    BarChart,
    NewExpenseForm,
    ExpensesList,
  },
  data() {
    return {
      expenses: [],
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
    }
  },
  methods: {
    addExpense(expense) {
      this.expenses.unshift(expense)
    },
    deleteExpense(id) {
      this.expenses = this.expenses.filter((expense) => expense.id !== id)
    },
    getMonth(month) {
      this.month = month
    },
    getYear(year) {
      this.year = year
      this.month = new Date().getMonth()
    },
  },
  computed: {
    filteredExpensesByYear() {
      const filteredExpenses = [
        ...this.expenses.filter(
          (expense) => expense.date.getFullYear() === this.year
        ),
      ]
      filteredExpenses.sort((a, b) => b.date.getMonth() - a.date.getMonth())
      return filteredExpenses
    },
    filteredExpensesByYearAndMonth() {
      const filteredExpenses = [
        ...this.expenses
          .filter((expense) => expense.date.getFullYear() === this.year)
          .filter((expense) => expense.date.getMonth() === this.month),
      ]
      filteredExpenses.sort((a, b) => b.date.getMonth() - a.date.getMonth())
      return filteredExpenses
    },
  },
  provide() {
    return {
      deleteExpense: this.deleteExpense,
      getMonth: this.getMonth,
    }
  },
}
</script>
