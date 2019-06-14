export default function({ store, route }) {
  store.commit('clearCurrentHover')
  const name =
    route.name === 'index'
      ? null
      : route.name === 'KultAds'
      ? 'Ads'
      : route.name
  store.commit('currentTheme', name)
}
