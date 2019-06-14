<template>
  <div
    class="date font-serif text-center leading-tight relative z-50 font-bold"
    :class="
      ($store.state.currentTheme || $store.getters.currentColor) &&
        `text-${
          $store.getters.currentColor !== 'white'
            ? $store.getters.currentColor
            : 'black'
        }`
    "
  >
    {{ $store.state.date }}
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.date {
  font-size: 100px;
  transition: color 0.4s ease-in-out;
}
</style>
