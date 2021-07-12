export const NEWS = 'NEWS'
export const TOTAL_NEWS = 'TOTAL_NEWS'
export const NEW_FOR_SLUG = 'NEWS_FOR_SLUG'
const cleanTags = items => {
  return items.map(i => {
    // i.metas.content = i.metas.content.replace(/(<([^>]+)>)/gi, '')
    i.metas.extract = i.metas.extract.replace(/(<([^>]+)>)/gi, '')
    return i
  })
}
export const state = () => ({
  items: [],
  totalItems: 0,
  itemForSlug: {}
})

export const getters = {
  news: state => {
    const items = cleanTags(state.items)
    return items
  },
  totalNews: state => state.totalItems,
  new: state => slug => {
    const items = cleanTags(state.items)
    return items.find(i => i.metas.slug === slug)
  }
}

export const actions = {
  async getNews({ commit }, params) {
    try {
      const { data, total } = await this.$axios.$get('news', {
        params
      })
      commit(NEWS, data)
      commit(TOTAL_NEWS, total)
    } catch (e) {
      console.log(e)
    }
  },
  async getNew({ commit }, params) {
    try {
      const {
        data
      } = await this.$axios.$get(
        'http://api.cms.qa.derco.com.pe/api/v4/news/slug',
        { params }
      )
      commit(NEW_FOR_SLUG, data)
    } catch (e) {
      console.log(e)
    }
  }
}

export const mutations = {
  [NEW_FOR_SLUG](state, item) {
    state.itemForSlug = item
  },
  [NEWS](state, items) {
    state.items = items
  },
  [TOTAL_NEWS](state, value) {
    state.totalItems = value
  }
}
