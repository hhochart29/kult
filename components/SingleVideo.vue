<template>
  <div
    v-if="$store.getters.currentVideo"
    ref="videoContainer"
    class="flex py-10"
  >
    <iframe
      :src="
        `https://player.vimeo.com/video/${$store.getters.currentVideo.videoUrl
          .split('/')
          .pop()}`
      "
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-full video"
    ></iframe>
    <div class="description p-2 lg:p-5">
      Test
    </div>
  </div>
  <div v-else>No video for that day :(</div>
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
.video {
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 70%;
}
</style>
