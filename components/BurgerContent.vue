<template>
  <div
    :class="{ active: $store.state.burgerShown }"
    class="bg-black fixed top-0 left-0 w-screen h-screen z-50 burger"
  >
    <div class="w-full h-full relative px-20 py-10">
      <div class="flex justify-between items-center">
        <nuxt-link
          tag="svg"
          width="62"
          height="62"
          view-box="0 0 62 62"
          :to="{ name: 'index' }"
        >
          <rect width="62" height="62" fill="white" />
          <path
            d="M40.5481 17.038C39.5794 17.038 38.9605 18.0707 39.4172 18.925L43.3117 26.2097C43.7786 27.0831 45.0172 27.1201 45.5354 26.2762L50.0093 18.9915C50.534 18.137 49.9192 17.038 48.9165 17.038H40.5481Z"
            stroke="black"
          />
          <path
            d="M19.2533 8.28242C19.2533 7.57416 19.8275 7 20.5357 7H26.6275C27.3357 7 27.9099 7.57416 27.9099 8.28242V54.4339C27.9099 55.1422 27.3357 55.7163 26.6275 55.7163H20.5357C19.8275 55.7163 19.2533 55.1422 19.2533 54.4339V8.28242Z"
            fill="black"
          />
          <path
            d="M41.1978 54.9514L33.1107 37.3068C32.8642 36.7689 32.1298 36.6956 31.7818 37.1741C31.3411 37.78 30.3824 37.4683 30.3824 36.719V25.5903C30.3824 25.3473 30.4515 25.1094 30.5815 24.9041L34.3054 19.0242C34.8464 18.1699 36.1171 18.2486 36.5486 19.1631L52.9243 53.8698C53.3257 54.7205 52.7051 55.6995 51.7645 55.6995H42.3636C41.8622 55.6995 41.4068 55.4072 41.1978 54.9514Z"
            fill="black"
          />
          <path
            d="M10.6867 50.059V48.8695L16 48.8695V50.1962H13.3434L16 51.523L16 52.3465L13.3434 53.6732L16 53.6732V55H10.6867L10.6867 53.8105L14.4398 51.9347L10.6867 50.059Z"
            fill="black"
          />
          <path
            d="M10.6867 46.8561L10.6867 42.7386H11.8675L11.8675 45.5293H12.7108V42.9673H13.8916V45.5293L14.8193 45.5293V42.647H16V46.8561H10.6867ZM9 44.6967L9 43.4614L10.0964 44.3307V45.2914L9 44.6967Z"
            fill="black"
          />
          <path
            d="M14.8193 38.8537C14.8193 38.6341 14.7827 38.4297 14.7096 38.2406C14.6309 38.0515 14.5269 37.8868 14.3976 37.7465C14.2683 37.6062 14.1137 37.4964 13.9337 37.4171C13.7538 37.3378 13.557 37.2982 13.3434 37.2982C13.1353 37.2982 12.9414 37.3378 12.7614 37.4171C12.5759 37.4964 12.4185 37.6062 12.2892 37.7465C12.1598 37.8868 12.0586 38.0515 11.9855 38.2406C11.9068 38.4297 11.8675 38.6341 11.8675 38.8537V39.4942H14.8193V38.8537ZM10.6867 40.821V38.8537C10.6867 38.4511 10.757 38.0759 10.8976 37.7282C11.0325 37.3805 11.2209 37.0755 11.4627 36.8132C11.7044 36.5509 11.9855 36.3466 12.306 36.2002C12.6265 36.0477 12.9723 35.9714 13.3434 35.9714C13.7145 35.9714 14.0602 36.0477 14.3807 36.2002C14.7012 36.3466 14.9823 36.5509 15.2241 36.8132C15.4659 37.0755 15.657 37.3805 15.7976 37.7282C15.9325 38.0759 16 38.4511 16 38.8537V40.821L10.6867 40.821Z"
            fill="black"
          />
          <path d="M16 32.9051V34.2318H10.6867V32.9051H16Z" fill="black" />
          <path
            d="M13.9337 28.1045L12.1627 28.745L13.9337 29.3855V28.1045ZM14.988 29.7515L16 30.1175V31.49L10.6867 29.4313V28.0588L16 26V27.3725L14.988 27.7385V29.7515Z"
            fill="black"
          />
        </nuxt-link>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          class="fill-current"
          @click="$store.commit('toggleBurger')"
        >
          <path d="M2 16L16 2" stroke="#FFFDF3" stroke-width="3" />
          <path d="M2 16L16 2" stroke="#FFFDF3" stroke-width="3" />
          <path d="M2 2L16 16" stroke="#FFFDF3" stroke-width="3" />
          <path d="M2 2L16 16" stroke="#FFFDF3" stroke-width="3" />
        </svg>
      </div>
      <div class="text-white font-sans py-10 container m-auto">
        <nav class="font-serif leading-relaxed">
          <div
            v-for="link in links"
            :key="`link-${link.name}`"
            class="relative"
          >
            <svg
              width="17"
              height="18"
              view-box="0 0 17 18"
              fill="none"
              class="inline-block mr-6"
            >
              <path
                d="M1 15.1213C1 16.5384 2.57282 17.4439 3.8738 16.7758L14.9678 11.0784C16.2978 10.3953 16.3542 8.58342 15.069 7.82523L3.97508 1.28037C2.67379 0.51268 0.999999 1.4121 0.999999 2.87904L1 15.1213Z"
                stroke="white"
              />
            </svg>

            <span>
              {{ link.name }}
            </span>
          </div>
        </nav>
        <div class="py-12 info relative">
          <div class="flex items-center">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 24"
              fill="none"
              class="inline-block mr-5"
            >
              <path
                d="M4 19L1 3.5L9 9L13.5 1L18 9L26 3.5L23 19H4Z"
                fill="white"
              />
              <path
                d="M1 3.5L1.28326 3.08798C1.11601 2.97299 0.895843 2.97052 0.726052 3.08173C0.556262 3.19293 0.470542 3.39574 0.50911 3.59501L1 3.5ZM4 19L3.50911 19.095C3.55462 19.3302 3.76049 19.5 4 19.5V19ZM9 9L8.71674 9.41202C8.83244 9.49157 8.97627 9.5188 9.11304 9.48705C9.24982 9.45531 9.36695 9.36751 9.43579 9.24513L9 9ZM13.5 1L13.9358 0.754869C13.8472 0.597431 13.6806 0.5 13.5 0.5C13.3194 0.5 13.1528 0.597431 13.0642 0.754869L13.5 1ZM18 9L17.5642 9.24513C17.6331 9.36751 17.7502 9.45531 17.887 9.48705C18.0237 9.5188 18.1676 9.49157 18.2833 9.41202L18 9ZM26 3.5L26.4909 3.59501C26.5295 3.39574 26.4437 3.19293 26.2739 3.08173C26.1042 2.97052 25.884 2.97299 25.7167 3.08798L26 3.5ZM23 19V19.5C23.2395 19.5 23.4454 19.3302 23.4909 19.095L23 19ZM0.50911 3.59501L3.50911 19.095L4.49089 18.905L1.49089 3.40499L0.50911 3.59501ZM0.716736 3.91202L8.71674 9.41202L9.28326 8.58798L1.28326 3.08798L0.716736 3.91202ZM9.43579 9.24513L13.9358 1.24513L13.0642 0.754869L8.56421 8.75487L9.43579 9.24513ZM13.0642 1.24513L17.5642 9.24513L18.4358 8.75487L13.9358 0.754869L13.0642 1.24513ZM18.2833 9.41202L26.2833 3.91202L25.7167 3.08798L17.7167 8.58798L18.2833 9.41202ZM25.5091 3.40499L22.5091 18.905L23.4909 19.095L26.4909 3.59501L25.5091 3.40499ZM3.5 24H23.5V23H3.5V24ZM4 19.5H23V18.5H4V19.5Z"
                fill="white"
              />
            </svg>
            <span class="text-3xl">Discover Kult Premium</span>
          </div>
          <div class="max-w-2xl pt-3 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            egestas fermentum nibh, ac lacinia libero consectetur sed. Nullam
            eget nibh commodo
          </div>
          <div class="mt-5 mr-5 block">
            <span class="text-xl">
              See our different offers
            </span>
            <svg
              width="17"
              height="18"
              view-box="0 0 17 18"
              fill="white"
              class="inline-block ml-4"
            >
              <path
                d="M1 15.1213C1 16.5384 2.57282 17.4439 3.8738 16.7758L14.9678 11.0784C16.2978 10.3953 16.3542 8.58342 15.069 7.82523L3.97508 1.28037C2.67379 0.51268 0.999999 1.4121 0.999999 2.87904L1 15.1213Z"
                stroke="white"
              />
            </svg>
          </div>
        </div>
        <img :src="cheat" alt="rs" />
      </div>
    </div>
  </div>
</template>

<script>
import cheat from '@/assets/images/cheat.png'
export default {
  data: () => ({
    cheat,
    links: [
      { name: 'My account' },
      { name: 'About kult' },
      { name: 'Submit a video' },
      { name: 'Contact a pro' },
      { name: 'Contact Kult' }
    ]
  })
}
</script>

<style lang="postcss" scoped>
.burger {
  clip-path: polygon(100% 0, 100% 20%, 90% 100%, 0 100%, 0 0);
  cursor: url('../assets/images/ellipse-white.png'), none;
}

.info::after,
.info::before {
  content: '';
  @apply absolute bg-white w-full left-0 max-w-2xl;
  height: 1px;
}

.info::after {
  top: 20px;
}

.info::before {
  bottom: 20px;
}

nav {
  font-size: 43px;
}

nav > div {
  transition: transform 0.4s ease-in-out;
}

nav > div > svg {
  transition: path 0.4s ease-in-out;
}

nav > div:hover > svg {
  fill: theme('colors.white');
}

nav > div:hover {
  transform: translateX(40px);
}
</style>
