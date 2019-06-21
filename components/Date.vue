<template>
  <transition :name="`${$store.state.slideWay}transformY`">
    <div
      v-if="!transitionning"
      class="date font-serif text-center leading-tight relative z-10 font-bold overflow-hidden"
      :class="[
        $store.getters.isDark ? 'text-white' : 'text-black',
        { cinema: $store.state.darkTheme }
      ]"
    >
      {{ localDate || date }}
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    transitionning: false,
    localDate: null
  }),
  computed: {
    date() {
      return this.$store.getters.formattedDate
    }
  },
  watch: {
    date(newVal, oldVal) {
      this.localDate = oldVal
      this.$nextTick(() => {
        this.transitionning = true
        setTimeout(() => {
          this.transitionning = false
          this.localDate = newVal
        }, 400)
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.date {
  font-size: 100px;
  transition: color 0.4s ease-in-out;
  transform-origin: 50% 50%;
}
@media (max-width: 980px) {
  .date {
    font-size: 50px;
  }
}

.date.cinema {
  height: 0px;
}

.prevtransformY-enter-active,
.nexttransformY-enter-active,
.prevtransformY-leave-active,
.nexttransformY-leave-active {
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
}

.prevtransformY-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.prevtransformY-enter {
  transform: translateY(-20px);
  opacity: 0;
}

.nexttransformY-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.nexttransformY-enter {
  transform: translateY(20px);
  opacity: 0;
}
</style>
