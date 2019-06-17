import dayjs from 'dayjs'
import 'dayjs/locale/en'
import { allVideos } from '@/graphql/queries'

export const state = () => ({
  date: dayjs(new Date()),
  currentHover: null,
  currentTheme: null,
  videos: []
})

export const getters = {
  formattedDate: state => dayjs(new Date()).format('MMMM DD[th] YYYY'),
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
  // dayjs(video._publishedAt).isSame(dayjs(state.date), 'day') &&
  currentVideo: state => {
    if (!state.currentTheme || state.videos.length === 0) return false
    return state.videos.filter(video => {
      if (video && video.category) {
        return video.category.name === state.currentTheme
      }
    })
  }
}

export const mutations = {
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
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const client = app.apolloProvider.defaultClient
    const { data } = await client.query({ query: allVideos })

    commit('setAllVideos', data.allVideos)
  }
}
