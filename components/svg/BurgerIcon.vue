<template>
  <svg
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
    class="fill-current"
  >
    <line
      x1="20"
      y1="1.5"
      x2="0"
      y2="1.5"
      :stroke="$store.getters.isDark ? 'white' : 'black'"
      stroke-width="3"
      stroke-linejoin="round"
    />
    <line
      x1="20"
      y1="9.5"
      x2="0"
      y2="9.5"
      :stroke="$store.getters.isDark ? 'white' : 'black'"
      stroke-width="3"
      stroke-linejoin="round"
    />
    <line
      x1="12"
      y1="17.5"
      x2="0"
      y2="17.5"
      :stroke="$store.getters.isDark ? 'white' : 'black'"
      stroke-width="3"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style lang="postcss" scoped>
svg line {
  transition: all 0.4s ease-in-out;
}
</style>
