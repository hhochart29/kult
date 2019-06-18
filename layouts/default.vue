<template>
  <main
    class="bg-white min-h-screen"
    :class="`bg-${$store.getters.currentColor}`"
  >
    <kult-header />
    <transition name="slide" mode="out-in">
      <nuxt class="container mx-auto" />
    </transition>
  </main>
</template>

<script>
import KultHeader from '@/components/KultHeader'

export default {
  components: {
    KultHeader
  }
}
</script>

<style lang="postcss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

main {
  transition: background-color 0.4s ease-in-out;
}
</style>
