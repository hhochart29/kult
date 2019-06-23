<template>
  <transition :name="`${$store.state.slideWay}transformY`">
    <div
      v-video-player:myVideoPlayer="playerOptions"
      class="video-player-box w-full h-full"
      :playsinline="playsinline"
    ></div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    playsinline: true,
    playerOptionsDefault: {
      muted: false,
      language: 'en',
      playbackRates: [0.7, 1.0, 1.5, 2.0],
      localCurrentVideo: null
    }
  }),
  computed: {
    playerOptions() {
      return {
        ...this.playerOptionsDefault,
        poster: this.currentVideo.coverImage.url,
        techOrder: ['youtube'],
        sources: {
          src: this.currentVideo.videoUrl,
          type: 'video/youtube'
        }
      }
    },
    currentVideo() {
      return this.$store.getters.currentVideo
    }
  }
}
</script>

<style lang="postcss">
.video-js {
  @apply w-full h-full;
}

.video-js .vjs-big-play-button {
  border: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
}

.video-js .vjs-big-play-button span::before {
  font-size: 80px;
}

.video-js:hover .vjs-big-play-button {
  background: transparent;
}

.vjs-poster {
  transition: opacity 1s ease-in-out;
}

.vjs-has-started .vjs-poster {
  @apply block;
  opacity: 0;
}
</style>
