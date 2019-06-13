import dayjs from 'dayjs'
import 'dayjs/locale/en'

export const state = () => ({
  date: dayjs(new Date()).format('DD MMM YYYY')
})

export const getters = {}

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
  }
}

export const actions = {}
