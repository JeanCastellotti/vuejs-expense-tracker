<template>
  <teleport to="body">
    <BaseModal
      v-if="isModalVisible"
      @close-modal="closeModal"
      message="Form inputs are not valid."
    />
  </teleport>
  <form @submit.prevent="addExpense" class="flex items-center space-x-4 mb-5">
    <input
      type="text"
      placeholder="Title"
      class="
        flex-1
        py-2
        px-4
        rounded
        border-2
        focus:outline-none focus:border-gray-300
      "
      v-model="title"
    />
    <input
      type="number"
      step="0.01"
      placeholder="Price"
      class="
        flex-1
        py-2
        px-4
        rounded
        border-2
        focus:outline-none focus:border-gray-300
      "
      v-model="amount"
    />
    <input
      type="date"
      placeholder="Date"
      class="
        flex-1
        py-2
        px-4
        rounded
        border-2
        focus:outline-none focus:border-gray-300
      "
      v-model="date"
    />
    <BaseButton>Add New Expense</BaseButton>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  emits: ['add-expense'],
  data() {
    return {
      title: '',
      amount: '',
      date: '',
      isModalVisible: false,
    }
  },
  methods: {
    addExpense() {
      if (!this.title || !this.amount || !this.date) {
        this.showModal()
        return
      }

      this.$emit('add-expense', {
        id: uuidv4(),
        title: this.title,
        amount: this.amount,
        date: new Date(this.date),
      })

      this.title = ''
      this.amount = ''
      this.date = ''
    },
    closeModal() {
      this.isModalVisible = false
    },
    showModal() {
      this.isModalVisible = true
    },
  },
}
</script>
