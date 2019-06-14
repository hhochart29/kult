<template>
  <div class="container">
    <div class="-mb-12 z-10 relative">
      <Date />
    </div>
    <div class="image-container flex justify-center items-center relative z-0">
      <div
        v-for="category in categories"
        :key="`category-${category.name}`"
        class="-mx-2 category h-full w-full relative"
        :class="{ hovered: category.name === $store.state.currentHover }"
        @mouseenter="$store.commit('setCurrentHover', category.name)"
        @mouseleave="$store.commit('clearCurrentHover')"
      >
        <div
          :style="[{ backgroundImage: `url(${category.url})` }]"
          class="h-full w-full"
        />
        <div />
      </div>
    </div>
  </div>
</template>

<script>
import Date from '@/components/Date'

export default {
  components: {
    Date
  },
  data: () => ({
    categories: [
      { name: 'Ads', url: require('@/assets/images/kult_ads.png') },
      { name: 'Animation', url: require('@/assets/images/animation.jpg') },
      { name: 'Clips', url: require('@/assets/images/clips.jpg') },
      { name: 'Shorts', url: require('@/assets/images/shorts.jpg') }
    ]
  }),
  computed: {
    currentHoverStore() {
      return this.$store.state.currentHover
    }
  },
  watch: {
    currentHoverStore(newVal) {
      console.log(newVal)
    }
  }
}
</script>

<style lang="postcss" scoped>
.image-container {
  height: 650px;
}

.category {
  flex-basis: 300px;
  transition: filter 0.4s ease-in-out;
}

.category > div {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(11% 0, 100% 0, 89% 100%, 0% 100%);
}

.category.hovered {
  filter: drop-shadow(0px 1px 15px rgba(0, 0, 0, 0.15));
}

.category > div::after,
.category > div::before {
  transition: transform 0.4s ease-in-out;
  content: '';
  transform: rotateX(0deg) scaleY(1);
  transform-origin: 0 0;
  @apply absolute bg-white z-10 left-0 right-0;
  height: 75px;
}

.category > div::after {
  transform-origin: 100% 100%;
  bottom: 0;
}

.category > div::before {
  transform-origin: 0 0;
  top: 0;
}

.category.hovered > div::before,
.category.hovered > div::after {
  transform: rotateX(0deg) scaleY(0);
}
</style>
