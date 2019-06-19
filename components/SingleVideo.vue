<template>
  <div
    v-if="video"
    ref="videoContainer"
    class="videoContainer flex py-10 pb-16"
  >
    <div class="video relative w-full flex-grow pr-2 lg:mr-5 pl-0 lg:ml-20">
      <transition name="fade">
        <div
          v-show="coverShown"
          class="cover h-full w-full absolute left-0 top-0"
          :style="{ backgroundImage: `url(${video.coverImage.url})` }"
          @click="coverShown = false"
        >
          <span class="play absolute flex items-center">
            <svg width="29" height="34" view-box="0 0 29 34" fill="none">
              <path
                d="M1 28.4775C1 31.1346 3.83108 32.8324 6.17284 31.5796L26.142 20.897C28.5361 19.6162 28.6376 16.2189 26.3243 14.7973L6.35514 2.52569C4.01283 1.08628 1 2.77269 1 5.5232L1 28.4775Z"
                fill="white"
                stroke="white"
                stroke-width="2"
              />
            </svg>
            <span class="text-white font-sans font-bold text-xl relative pl-6">
              Play
            </span>
          </span>
        </div>
      </transition>
      <iframe
        :src="video.videoUrl"
        class="w-full h-full"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
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
        <div v-for="{ tag } in video.tags" :key="`tag-${tag}`">#{{ tag }}</div>
      </div>
    </div>

    <button
      class="text-white underline p-2 self-center"
      @click="$store.commit('toggleDescription')"
    >
      {{ $store.state.descriptionShown ? 'close' : 'See more' }}
    </button>
  </div>
  <div v-else>No video for that day :(</div>
</template>

<script>
export default {
  data: () => ({
    coverShown: true
  }),
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

.cover {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.play {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.play .text-white {
  top: 2px;
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
</style>
