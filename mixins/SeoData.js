export default {
  asyncData({ store, route }) {
    const seoData = store.getters['resources/getSeoInfo'](route.path)
    return {
      seoData
    }
  },
  head() {
    return {
      title: this.seoData.title || 'Derco',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seoData.description
        }
      ]
    }
  }
}
