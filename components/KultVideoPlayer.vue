<template>
  <div
    v-video-player:myVideoPlayer="playerOptions"
    class="video-player-box w-full h-full"
    :playsinline="playsinline"
    @ready="playerReadied = true"
  ></div>
</template>

<script>
export default {
  data: () => ({
    playsinline: true,
    playerOptionsDefault: {
      muted: false,
      language: 'en',
      playbackRates: [0.7, 1.0, 1.5, 2.0]
    },
    playerReadied: false
  }),
  computed: {
    playerOptions() {
      return {
        ...this.playerOptionsDefault,
        poster: this.$store.getters.currentVideo.coverImage.url,
        techOrder: ['youtube'],
        sources: {
          src: this.$store.getters.currentVideo.videoUrl,
          type: 'video/youtube'
        }
      }
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
