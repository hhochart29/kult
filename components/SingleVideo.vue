<template>
  <div ref="videoContainer" class="flex py-10">
    <video class="bg-red">
      <source type="video/youtube" src="https://vimeo.com/340009944" />
    </video>
    <div class="description p-2 lg:p-5">
      Test
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.videoContainer.style.height = `calc(100vh - ${
      document.querySelector('header').clientHeight
    }px)`
  }
}
</script>

<style lang="postcss" scoped>
video {
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 70%;
}
</style>
