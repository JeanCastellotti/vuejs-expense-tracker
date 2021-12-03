<template>
  <div class="rounded bg-white p-4 shadow-sm flex items-center">
    <div class="rounded bg-blue-400 mr-5 px-4 py-1 flex flex-col items-center">
      <span class="text-lg font-bold text-blue-50">{{ date.getDate() }}</span>
      <span class="text-sm text-blue-200">{{ month }}</span>
      <span class="font-thin text-blue-100 text-lg">{{
        date.getFullYear()
      }}</span>
    </div>
    <span class="text-gray-500 text-2xl font-thin mr-10">{{ amount }}€</span>
    <span class="text-gray-800">{{ title }}</span>
    <BaseButton
      color="danger"
      class="ml-auto text-white cursor-pointer text-sm font-bold uppercase"
      @click="deleteExpense(id)"
    >
      Delete
    </BaseButton>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    amount: Number,
    date: Date,
  },
  inject: ['deleteExpense'],
  computed: {
    month() {
      return this.date.toLocaleDateString('fr-FR', {
        month: 'short',
      })
    },
  },
}
</script>
