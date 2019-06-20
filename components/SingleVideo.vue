<template>
  <div
    v-if="video"
    ref="videoContainer"
    class="videoContainer flex flex-col py-10"
  >
    <div class="flex h-full pb-20">
      <div class="video relative w-full flex-grow mr-4 lg:mr-10 pl-0 lg:ml-20">
        <kult-video-player />

        <div class="social flex w-full items-center justify-end mt-5">
          <div class="px-2"><share /></div>
          <div class="px-2"><bookmark /></div>
          <div class="px-2"><clap /></div>
        </div>
      </div>
      <div
        v-show="$store.state.descriptionShown"
        class="description text-white pr-2 lg:pr-5 flex flex-col justify-between"
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
        class="text-white underline p-2 self-center"
        @click="$store.commit('toggleDescription')"
      >
        {{ $store.state.descriptionShown ? 'close' : 'See more' }}
      </button>
    </div>
  </div>
  <div v-else>No video for that day :(</div>
</template>

<script>
import KultVideoPlayer from '@/components/KultVideoPlayer'
import Clap from '@/components/svg/Clap'
import Share from '@/components/svg/Share'
import Bookmark from '@/components/svg/Bookmark'
export default {
  components: {
    KultVideoPlayer,
    Clap,
    Share,
    Bookmark
  },
  computed: {
    video() {
      return this.$store.getters.currentVideo
    }
  },
  mounted() {
    this.$refs.videoContainer.style.height = `calc(100vh - ${
      document.querySelector('header').clientHeight
    }px)`
  }
}
</script>

<style lang="postcss" scoped>
.videoContainer {
  max-height: 700px;
}

.video {
  flex-basis: 70%;
  transition: all 0.4s ease-in-out;
}

.social > div:hover {
  animation: 0.4s ease-in-out pulse;
}

.description {
  flex-basis: 30%;
}

button {
  flex-grow: 0;
  flex-shrink: 0;
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
</style>
