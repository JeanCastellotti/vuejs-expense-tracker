<template>
  <TheHeader />
  <main class="max-w-screen-lg m-auto pb-5">
    <slot />
  </main>
</template>

<script>
import TheHeader from './TheHeader.vue'

export default {
  components: {
    TheHeader,
  },
}
</script>
