<template>
  <div class="container">
    <Date />
    <div class="image-container flex">
      <div
        v-for="category in categories"
        :key="`category-${category.name}`"
        class="-mx-2 flex-grow"
      >
        <div
          class="category h-full w-full overflow-hidden"
          :style="[
            { backgroundImage: `url(${category.url})` },
            {
              transform:
                $store.state.currentHover === category.name
                  ? 'scale(1.2)'
                  : 'none'
            },
            {
              boxShadow:
                $store.state.currentHover === category.name
                  ? '0px 0px 84px rgba(0, 0, 0, 0.57)'
                  : '0px 0px 84px rgba(0, 0, 0, 0)'
            }
          ]"
          @mouseenter="$store.commit('setCurrentHover', category.name)"
          @mouseleave="$store.commit('clearCurrentHover')"
        />
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
  })
}
</script>

<style lang="postcss" scoped>
.image-container {
  height: 500px;
}

.category {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(11% 0, 100% 0, 89% 100%, 0% 100%);
  transition: all ease-in-out 0.5s;
}
</style>
