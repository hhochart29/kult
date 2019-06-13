<template>
  <div class="container mx-auto py-12 flex justify-between items-center">
    <logo />
    <div class="flex items-center justify-center">
      <div v-for="link in menu" :key="`menu-${link.name}`" class="px-5">
        {{ link.name }}
      </div>
    </div>
    <div class="flex item-center justify-center">
      <nuxt-link :to="{ name: 'premium' }" class="px-5">Premium</nuxt-link>
      <Burger />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import Burger from '@/components/Burger'

export default {
  components: {
    Logo,
    Burger
  },
  data: () => ({
    menu: [
      { name: 'Ads', color: 'red' },
      { name: 'Animation', color: 'yellow' },
      { name: 'Clips', color: 'green' },
      { name: 'Shorts', color: 'blue' }
    ]
  })
}
</script>
