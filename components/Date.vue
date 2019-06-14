<template>
  <div
    class="date font-serif text-center leading-tight"
    :class="$store.state.currentHover && `text-${$store.getters.currentColor}`"
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
