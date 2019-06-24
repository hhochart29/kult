<template>
  <div class="flex items-center px-2">
    <div @click="$store.commit('toggleBurger')">
      <burger-icon />
    </div>
    <transition name="clipAnimation">
      <burger-content v-show="$store.state.burgerShown" />
    </transition>
  </div>
</template>

<script>
import BurgerIcon from '@/components/svg/BurgerIcon'
import BurgerContent from '@/components/BurgerContent'
export default {
  components: {
    BurgerIcon,
    BurgerContent
  }
}
</script>

<style lang="postcss">
div:hover > svg > line:last-child {
  transform: translateX(8px);
}

.clipAnimation-enter-active,
.clipAnimation-leave-active {
  transition: all 0.4s ease-in-out;
}

.burger.clipAnimation-enter,
.burger.clipAnimation-leave-to {
  opacity: 0;
  clip-path: polygon(100% 0, 100% 20%, 99.9% 0, 0 0, 0 0);
}

.burger.clipAnimation-enter-to,
.burger.clipAnimation-leave {
  clip-path: polygon(100% 0, 100% 20%, 90% 100%, 0 100%, 0 0);
}
</style>
