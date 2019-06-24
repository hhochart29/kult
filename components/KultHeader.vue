<template>
  <header ref="kultHeader">
    <div
      class="container mx-auto py-5 lg:py-12 flex justify-between items-center font-sans"
    >
      <logo class="relative logo" />
      <nav class="menu-container flex items-center justify-center absolute">
        <div
          v-for="link in menu"
          :key="`menu-${link.name}`"
          :class="{
            'font-bold arrow':
              link.name ===
              ($store.state.currentTheme || $store.state.currentHover),
            'text-white': $store.getters.isDark
          }"
          class="relative"
          @mouseenter="
            !$store.state.currentTheme &&
              $store.commit('setCurrentHover', link.name)
          "
          @mouseleave="
            ;(!$store.state.currentHover === null || $route.path !== 'index') &&
              $store.commit('clearCurrentHover')
          "
        >
          <nuxt-link
            :to="{ name: link.path || link.name }"
            class="menu-link p-5 relative block"
          >
            {{ link.name }}
          </nuxt-link>
        </div>
      </nav>
      <div class="flex items-center justify-center">
        <nuxt-link
          v-if="$route.name !== 'index'"
          :to="{ name: 'index' }"
          :class="[
            { dark: $store.getters.isDark },
            $store.getters.currentColor
          ]"
          class="mosaique mr-5 lg:mr-10"
        >
          <span class=""></span>
          <span class=""></span>
          <span class=""></span>
          <span class=""></span>
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'index' }"
          :class="[
            { dark: $store.getters.isDark },
            $store.getters.currentColor
          ]"
          class="premium relative border px-6 pt-2 pb-1 mr-10 overflow-hidden"
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
      { name: 'Music', color: 'green' },
      { name: 'Shorts', color: 'blue' }
    ]
  }),
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme
    }
  },
  watch: {
    darkTheme(oldVal, newVal) {
      this.$nextTick(() => {
        this.$store.commit(
          'setHeaderHeight',
          this.$refs.kultHeader && this.$refs.kultHeader.clientHeight
        )
      })
    }
  },
  mounted() {
    this.$store.commit('setHeaderHeight', this.$refs.kultHeader.clientHeight)
  }
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

.premium:hover::after {
  transform: scaleX(1.5);
}

.premium {
  transition: color 0.4s ease-in-out, border-color 0.4s ease-in-out;
}

.premium:not(.dark) {
  @apply text-black border-black;
}

.premium:not(.dark):hover {
  @apply text-white;
}

.premium.dark {
  @apply text-white border-white;
}

.dark.blue:hover {
  @apply text-blue;
}
.dark.green:hover {
  @apply text-green;
}
.dark.red:hover {
  @apply text-red;
}
.dark.yellow:hover {
  @apply text-yellow;
}

.mosaique {
  width: 25px;
  height: 25px;
  @apply flex flex-wrap justify-center items-center;
}

.mosaique > span {
  margin: 2px;
  flex-basis: calc(50% - 4px);
  height: calc(50% - 4px);
  @apply bg-white;
}

.premium.dark::after {
  @apply bg-white;
}

.premium > span {
  z-index: 1;
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

nav > div::after {
  content: '';
  @apply w-2 h-2 absolute;
  bottom: 10px;
  left: 50%;
  background-color: currentColor;
  transform: translateX(-50%);
  clip-path: polygon(50% 20%, 0% 100%, 100% 100%);
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}

.arrow::after,
.nuxt-link-exact-active::after {
  opacity: 1;
}

nav > div {
  transition: color 0.4s ease-in-out;
}
</style>
