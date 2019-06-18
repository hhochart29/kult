<template>
  <div class="container">
    <div
      ref="homeContainer"
      class="image-container flex justify-center items-center relative z-0 -mt-12"
      :class="{ nextActive: isNext !== null }"
    >
      <nuxt-link
        v-for="category in categories"
        :key="`category-${category.name}`"
        :class="[
          { hovered: category.name === $store.state.currentHover },
          {
            isNext:
              isNext !== null && isNext === (category.path || category.name)
          },
          `${$store.getters.currentColor}`
        ]"
        :to="{ name: category.path || category.name }"
        tag="div"
        class="-mx-2 category h-full relative flex-shrink"
      >
        <div
          :style="[{ backgroundImage: `url(${category.url})` }]"
          class="h-full w-full"
          @mouseenter="$store.commit('setCurrentHover', category.name)"
          @mouseleave="$store.commit('clearCurrentHover')"
        />
        <div />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isNext: null,
    categories: [
      {
        name: 'Ads',
        path: 'KultAds',
        url: require('@/assets/images/kult_ads.png')
      },
      { name: 'Animation', url: require('@/assets/images/animation.jpg') },
      { name: 'Music', url: require('@/assets/images/clips.jpg') },
      { name: 'Shorts', url: require('@/assets/images/shorts.jpg') }
    ]
  }),
  computed: {
    currentHoverStore() {
      return this.$store.state.currentHover
    }
  },
  beforeRouteLeave(to, from, next) {
    this.isNext = to.name
    setTimeout(() => {
      this.$refs.homeContainer.classList.add('leaving')
      setTimeout(() => {
        next()
      }, 600)
    }, 1800)
  }
}
</script>

<style lang="postcss" scoped>
.image-container {
  height: 630px;
  transition: opacity 0.6s ease-in-out;
}

.image-container.leaving {
  opacity: 0;
}

.nextActive .category:not(.isNext) {
  flex-basis: 0px;
  opacity: 0;
  margin: 0;
}

.category {
  flex-basis: 290px;
  transition: all 1s ease-in-out;
}

.category.isNext {
  flex-basis: 100%;
  margin: 0;
}

.category.isNext > div {
  clip-path: polygon(0% 0, 100% 0, 100% 100%, 0% 100%);
}

.category > div {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(15% 0, 100% 0, 85% 100%, 0% 100%);
  transition: clip-path 0.3s ease-in-out 1s;
}

.category.hovered {
  z-index: 50;
  transition: all 0.4s ease-in-out 0.2s;
  filter: drop-shadow(0px 0px 54px rgba(0, 0, 0, 0.12));
}

.category > div::after,
.category > div::before {
  transition: transform 0.4s ease-in-out 0.4s, background 0.4s ease-in-out 0s;
  content: '';
  transform: rotateX(0deg) scaleY(1);
  transform-origin: 0 0;
  @apply absolute z-10 left-0 right-0 bg-blue;
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
  transition-delay: 0s;
  transform: rotateX(0deg) scaleY(0);
}

.category.blue > div::after,
.category.blue > div::before {
  @apply bg-blue;
}

.category.green > div::after,
.category.green > div::before {
  @apply bg-green;
}

.category.red > div::after,
.category.red > div::before {
  @apply bg-red;
}

.category.yellow > div::after,
.category.yellow > div::before {
  @apply bg-yellow;
}

.category.white > div::after,
.category.white > div::before {
  @apply bg-white;
}
</style>
