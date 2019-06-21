<template>
  <transition :name="`${$store.state.slideWay}transformY`">
    <div
      v-if="!transitionning"
      v-video-player:myVideoPlayer="playerOptions"
      class="video-player-box w-full h-full"
      :playsinline="playsinline"
    ></div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    transitionning: false,
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
  },
  watch: {
    currentVideo() {
      this.$nextTick(() => {
        this.transitionning = true
        setTimeout(() => {
          this.transitionning = false
        }, 400)
      })
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

.prevtransformY-enter-active,
.nexttransformY-enter-active,
.prevtransformY-leave-active,
.nexttransformY-leave-active {
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
}

.prevtransformY-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.prevtransformY-enter {
  transform: translateY(-20px);
  opacity: 0;
}

.nexttransformY-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.nexttransformY-enter {
  transform: translateY(20px);
  opacity: 0;
}
</style>
