<template>
  <div
    class="date font-serif text-center leading-tight relative z-10 font-bold overflow-hidden"
    :class="[
      $store.getters.isDark ? 'text-white' : 'text-black',
      { cinema: $store.state.darkTheme }
    ]"
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

.date.cinema {
  height: 0px;
}
</style>
