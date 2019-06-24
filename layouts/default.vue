<template>
  <main class="min-h-screen" :class="`bg-${$store.getters.currentColor}`">
    <transition name="fade">
      <div
        v-if="loading"
        class="z-50 fixed w-screen h-screen top-0 left-0 bg-black flex items-center justify-center"
      >
        <main-logo class="logo-loading text-white" :loader="true" />
      </div>
    </transition>
    <kult-header />
    <transition name="slide" mode="out-in">
      <nuxt class="container mx-auto overflow-hidden" />
    </transition>
  </main>
</template>

<script>
import KultHeader from '@/components/KultHeader'
import MainLogo from '@/components/svg/MainLogo'

export default {
  components: {
    KultHeader,
    MainLogo
  },
  data: () => ({
    loading: true
  }),
  computed: {
    storeCurrentColor() {
      return this.$store.getters.currentColor
    }
  },
  watch: {
    storeCurrentColor: {
      handler: function(newVal, oldVal) {
        if (this.$nuxt.$isServer) return false
        this.$nextTick(() => {
          if (!document) return false
          const html = document.querySelector('html')
          html.classList.add(`bg-${newVal}`)
          html.classList.remove(`bg-${oldVal}`)
        })
      },
      immediate: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 4000)
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

.logo-loading {
  animation: 2.4s ease-in-out pulse infinite;
}
</style>
