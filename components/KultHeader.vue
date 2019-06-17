<template>
  <header>
    <div
      class="container mx-auto py-5 lg:py-12 flex justify-between items-center font-sans"
    >
      <logo class="relative logo" />
      <div class="menu-container flex items-center justify-center absolute">
        <div
          v-for="link in menu"
          :key="`menu-${link.name}`"
          :class="
            link.name ===
              ($store.state.currentTheme || $store.state.currentHover) &&
              `font-bold text-${link.color}`
          "
          @mouseenter="
            !$store.state.currentTheme &&
              $store.commit('setCurrentHover', link.name)
          "
          @mouseleave="
            !$store.state.currentHover === null &&
              $store.commit('clearCurrentHover')
          "
        >
          <nuxt-link
            :to="{ name: link.path || link.name }"
            class="menu-link p-5"
          >
            {{ link.name }}
          </nuxt-link>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <nuxt-link
          :to="{ name: 'premium' }"
          class="premium relative border border-black px-6 pt-2 pb-1 mr-10 hover:text-white overflow-hidden"
          ><span class="relative">Premium</span></nuxt-link
        >
        <Burger />
      </div>
    </div>
    <Date />
  </header>
</template>

<script>
import Logo from '@/components/Logo'
import Burger from '@/components/Burger'
import Date from '@/components/Date'

export default {
  components: {
    Logo,
    Burger,
    Date
  },
  data: () => ({
    menu: [
      { name: 'Ads', path: 'KultAds', color: 'red' },
      { name: 'Animation', color: 'yellow' },
      { name: 'Clips', color: 'green' },
      { name: 'Shorts', color: 'blue' }
    ]
  })
}
</script>

<style lang="postcss" scoped>
.logo {
  top: -15px;
}

.menu-container {
  left: 50%;
  transform: translateX(-50%);
}

.premium::after {
  content: '';
  z-index: 0;
  @apply bg-black absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: transform 0.6s ease-in-out;
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
}

.premium:hover::after {
  transform: scaleX(1.5);
}

.premium {
  transition: color 0.6s ease-in-out;
}

.premium > span {
  z-index: 1;
}
</style>
