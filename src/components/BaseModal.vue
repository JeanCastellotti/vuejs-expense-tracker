<template>
  <div
    class="absolute inset-0 bg-gray-800 bg-opacity-50 flex"
    @click="closeModal"
  >
    <div
      class="rounded bg-white max-w-screen-sm w-full m-auto p-4 flex flex-col"
      @click.stop
    >
      <span class="text-gray-800 mb-5">{{ title }}</span>
      <span class="text-gray-500 mb-5">{{ message }}</span>
      <BaseButton class="self-start" color="danger" @click="closeModal"
        >Close</BaseButton
      >
    </div>
  </div>
</template>

<script>
export default {
  emits: ['close-modal'],
  props: {
    title: {
      type: String,
      required: false,
      default: 'An Error Occured',
    },
    message: {
      type: String,
      required: false,
      default: 'Something went wrong.',
    },
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
  },
}
</script>
