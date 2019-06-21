import dayjs from 'dayjs'
import 'dayjs/locale/en'
import { allVideos } from '@/graphql/queries'

export const state = () => ({
  headerHeight: 300,
  date: dayjs(new Date()),
  currentHover: null,
  currentTheme: null,
  videos: [],
  descriptionShown: false,
  darkTheme: false
})

export const getters = {
  formattedDate: state => dayjs(new Date()).format('MMMM DD[th] YYYY'),
  isDark: state => state.currentHover || state.currentTheme,
  currentColor: state =>
    (state.currentHover || state.currentTheme) === 'Ads'
      ? 'red'
      : (state.currentHover || state.currentTheme) === 'Animation'
      ? 'yellow'
      : (state.currentHover || state.currentTheme) === 'Music'
      ? 'green'
      : (state.currentHover || state.currentTheme) === 'Shorts'
      ? 'blue'
      : 'white',
  currentVideo: state => {
    if (!state.currentTheme || state.videos.length === 0) return false
    return state.videos.find(video => {
      if (video && video.category) {
        return (
          video.category.name === state.currentTheme &&
          dayjs(video.date).isSame(dayjs(state.date), 'day')
        )
      }
    })
  },
  videosOfTheDay: state => {
    if (state.videos.length === 0) return false
    const filtered = state.videos.filter(video => {
      return dayjs(video.date).isSame(dayjs(state.date), 'day')
    })

    filtered.sort((a, b) => {
      if (a.category.name < b.category.name) {
        return -1
      }
      if (a.category.name > b.category.name) {
        return 1
      }
      return 0
    })

    return filtered
  }
}

export const mutations = {
  setHeaderHeight(state, value) {
    state.headerHeight = value
  },
  prevDate(state) {
    state.date = dayjs(state.date).subtract(1, 'day')
  },
  nextDate(state) {
    if (dayjs(state.date).isSameOrAfter(dayjs(new Date()))) {
      return false
    }
    state.date = dayjs(state.date).add(1, 'day')
  },
  setCurrentHover(state, value) {
    state.currentHover = value
  },
  clearCurrentHover(state) {
    state.currentHover = null
  },
  currentTheme(state, value) {
    state.currentTheme = value
  },
  setAllVideos(state, value) {
    state.videos = value
  },
  toggleDescription(state, value = null) {
    state.descriptionShown = value === 'off' ? false : !state.descriptionShown
  },
  toggleDarkTheme(state, value = null) {
    state.darkTheme = value || !state.darkTheme
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const client = app.apolloProvider.defaultClient
    const { data } = await client.query({ query: allVideos })

    commit('setAllVideos', data.allVideos)
  }
}
