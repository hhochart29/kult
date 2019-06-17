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
    {{ $store.getters.formattedDate }}
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
@media (max-width: 980px) {
  .date {
    font-size: 50px;
  }
}
</style>
