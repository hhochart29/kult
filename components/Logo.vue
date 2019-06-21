<template>
  <transition name="fade" mode="out-in">
    <nuxt-link
      v-if="$store.state.currentTheme"
      key="firstLogo"
      :to="{ name: 'index' }"
    >
      <transition name="fadeLogo" mode="out-in">
        <component
          :is="currentLogo.svg"
          v-if="currentLogo"
          :key="currentLogo.route"
        />
      </transition>
    </nuxt-link>
    <nuxt-link v-else key="logoCategory" :to="{ name: 'index' }">
      <main-logo />
    </nuxt-link>
  </transition>
</template>

<script>
import MainLogo from '@/components/svg/MainLogo'
import LogoMusic from '@/components/svg/LogoMusic'
import LogoShort from '@/components/svg/LogoShort'
import LogoAnimation from '@/components/svg/LogoAnimation'
import LogoAds from '@/components/svg/LogoAds'

export default {
  components: {
    MainLogo,
    LogoMusic,
    LogoShort,
    LogoAnimation,
    LogoAds
  },
  data: () => ({
    logos: [
      {
        svg: MainLogo,
        route: 'index'
      },
      {
        svg: LogoMusic,
        route: 'Music'
      },
      {
        svg: LogoShort,
        route: 'Shorts'
      },
      {
        svg: LogoAnimation,
        route: 'Animation'
      },
      {
        svg: LogoAds,
        route: 'KultAds'
      }
    ]
  }),
  computed: {
    currentLogo() {
      return this.logos.find(logo => logo.route === this.$route.name)
    }
  }
}
</script>

<style>
svg path {
  transition: all 0.4s ease-in-out;
}

.fadeLogo-enter-active {
  transition: 0.4s opacity ease-in-out;
}

.fadeLogo-enter {
  opacity: 0;
}
</style>
