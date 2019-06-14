import dayjs from 'dayjs'
import 'dayjs/locale/en'

export const state = () => ({
  date: dayjs(new Date()).format('MMMM DD[th] YYYY'),
  currentHover: null
})

export const getters = {
  currentColor: state =>
    state.currentHover === 'Ads'
      ? 'red'
      : state.currentHover === 'Animation'
      ? 'yellow'
      : state.currentHover === 'Clips'
      ? 'green'
      : state.currentHover === 'Shorts'
      ? 'blue'
      : 'white'
}

export const mutations = {
  prevDate(state) {
    state.date = dayjs(state.date)
      .subtract(1, 'day')
      .format('DD MMM YYYY')
  },
  nextDate(state) {
    if (dayjs(state.date).isSameOrAfter(dayjs(new Date()))) {
      return false
    }
    state.date = dayjs(state.date)
      .add(1, 'day')
      .format('DD MMM YYYY')
  },
  setCurrentHover(state, value) {
    state.currentHover = value
  },
  clearCurrentHover(state) {
    state.currentHover = null
  }
}

export const actions = {}
