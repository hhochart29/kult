<template>
  <div ref="videoContainer" class="flex py-10">
    <video src="http://www.youtube.com/watch?v=3eLittIRa8A" />
    <div class="description">
      Test
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoID: {
      type: Number,
      default: 1
    }
  },
  mounted() {
    console.log(document.querySelector('header').clientHeight)
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
