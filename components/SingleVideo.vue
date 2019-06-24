<template>
  <div
    v-if="video"
    ref="videoContainer"
    class="videoContainer relative flex flex-col py-10"
    :style="videoContainerStyle"
  >
    <transition :name="`${$store.state.slideWay}transformY`">
      <div v-if="!transitionning" class="flex h-full pb-20">
        <div
          class="video relative w-full flex-grow mr-4 lg:mr-10 lg:ml-20"
          :class="{ cinema: $store.state.darkTheme }"
        >
          <kult-video-player class="z-40 relative" />
          <transition name="fade">
            <div
              v-show="$store.state.darkTheme"
              class="h-screen w-screen z-20 fixed top-0 left-0 cinema"
              @click.self="modeCinema"
            ></div>
          </transition>
          <div
            class="social flex w-full items-center justify-between mt-5 relative z-50"
          >
            <div class="flex">
              <div class="px-2"><clap /></div>
              <div class="px-2"><bookmark /></div>
            </div>
            <div class="flex">
              <div class="px-2" @click="modeCinema">
                <cinema />
              </div>
              <div class="px-2"><share /></div>
            </div>
          </div>
        </div>
        <div
          :class="{ kulthidden: !$store.state.descriptionShown }"
          class="description text-white pr-2 lg:pr-5 flex flex-col justify-between overflow-hidden"
        >
          <div class="text-3xl font-bold font-sans tracking-wide uppercase">
            {{ video.title }}
          </div>

          <div class="producer relative font-sans text-xl mt-4 mb-10 font-thin">
            by
            <span class="uppercase font-normal">{{
              video.producer.nameFirstname
            }}</span>
          </div>

          <div>
            {{ video.description }}
          </div>

          <div class="flex">
            <div
              v-for="{ tag } in video.tags"
              :key="`tag-${tag}`"
              class="mr-2 px-1"
            >
              #{{ tag }}
            </div>
          </div>
        </div>
        <button
          :class="{ kulthidden: $store.state.darkTheme }"
          class="text-white underline p-2 self-center overflow-hidden"
          @click="$store.commit('toggleDescription')"
        >
          {{ $store.state.descriptionShown ? 'close' : 'See more' }}
        </button>
        <transition name="fadeMouse">
          <div
            v-if="mouseShown"
            class="absolute mouse text-white font-sans flex justify-center flex-wrap"
          >
            <span
              class="block w-6 h-10 border-2 border-white rounded-full relative"
            ></span>
            <span class="block w-full text-center pt-2">
              scroll to go back in time
            </span>
          </div>
        </transition>
      </div>
    </transition>
  </div>
  <div
    v-else-if="!transitionning"
    class="text-white text-4xl font-sans text-center mt-20"
  >
    No video for that day :( Keep scrolling
  </div>
</template>

<script>
import KultVideoPlayer from '@/components/KultVideoPlayer'
import Clap from '@/components/svg/Clap'
import Share from '@/components/svg/Share'
import Bookmark from '@/components/svg/Bookmark'
import Cinema from '@/components/svg/Cinema'
import dayjs from 'dayjs'

export default {
  components: {
    KultVideoPlayer,
    Clap,
    Share,
    Bookmark,
    Cinema
  },
  data: () => ({
    throttle: false,
    transitionning: false,
    mouseShown: true,
    localVideo: null
  }),
  computed: {
    video() {
      return this.localVideo || this.storeVideo
    },
    storeVideo() {
      return this.$store.getters.currentVideo
    },
    videoContainerStyle() {
      return {
        height: `calc(100vh - ${this.$store.state.headerHeight}px)`
      }
    }
  },
  watch: {
    storeVideo(newVal, oldVal) {
      this.mouseShown = false
      this.localVideo = oldVal
      this.$nextTick(() => {
        this.transitionning = true
        setTimeout(() => {
          this.localVideo = newVal
          this.transitionning = false
          setTimeout(() => {
            this.mouseShown = true
          }, 600)
        }, 400)
      })
    }
  },
  mounted() {
    window.addEventListener('wheel', this.wheelHandler)
  },
  destroyed() {
    window.removeEventListener('wheel', this.wheelHandler)
  },
  methods: {
    wheelHandler({ deltaY }) {
      if (
        deltaY > 0 &&
        dayjs(this.$store.state.date).isSameOrAfter(dayjs(new Date()), 'day')
      ) {
        return false
      }
      this.$store.commit('toggleDarkTheme', 'off')
      if (Math.abs(deltaY) < 30) return false
      if (!this.throttle) {
        this.throttle = true
        deltaY < 50
          ? this.$store.commit('prevDate')
          : this.$store.commit('nextDate')
        setTimeout(() => {
          this.throttle = false
        }, 1000)
      }
    },
    modeCinema() {
      this.$store.commit('toggleDescription', 'off')
      this.$store.commit('toggleDarkTheme')
    }
  }
}
</script>

<style lang="postcss" scoped>
.cinema {
  background-color: rgba(0, 0, 0, 0.7);
}

.videoContainer {
  max-height: 800px;
}

.video {
  flex-basis: 70%;
}

.video.cinema {
  @apply ml-10;
}

.social > div > div:hover {
  animation: 0.4s ease-in-out pulse;
}

.description {
  flex-basis: 30%;
  transition: transform 0.4s ease-in-out 0.4s, flex-basis 0.4s ease-in-out 0s;
}

button {
  flex-grow: 0;
  flex-shrink: 0;
}

.kulthidden {
  transition: transform 0.4s ease-in-out 0s, flex-basis 0.4s ease-in-out 0.4s;
  flex-basis: 0;
  padding: 0;
  transform: scaleX(0);
}

.producer::after {
  content: '';
  @apply absolute w-20 left-0;
  height: 2px;
  bottom: -15px;
  background-color: rgba(255, 255, 255, 0.5);
}

button:focus {
  box-shadow: none;
  border: none;
  outline: none;
}

.mouse {
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.mouse > span:first-child:after {
  content: '';
  width: 5px;
  height: 5px;
  left: 50%;
  @apply bg-white absolute rounded-full my-2;
  animation: 1.5s wheelScroll ease-in-out infinite;
}

@keyframes wheelScroll {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(0%);
  }

  55% {
    opacity: 1;
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(300%);
  }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.25, 1.25, 1.25);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
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

.fadeMouse-enter-active {
  transition: opacity 0.4s ease-in-out;
}

.fadeMouse-enter {
  opacity: 0;
}
</style>
