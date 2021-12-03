<template>
  <button
    class="
      rounded
      text-white
      py-2
      px-4
      focus:outline-none focus:ring focus:ring-opacity-50
      border-2
    "
    :class="style"
    type="type"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'button',
    },
    color: {
      type: String,
      required: false,
      default: 'primary',
    },
  },
  computed: {
    style() {
      switch (this.color) {
        case 'primary':
          return ['bg-blue-400', 'focus:ring-blue-400', 'border-blue-400']
        case 'danger':
          return ['bg-red-400', 'focus:ring-red-400', 'border-red-400']
      }
    },
  },
}
</script>
