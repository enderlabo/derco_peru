export const SET_VERSIONS = 'SET_VERSIONS'
export const SET_VERSIONS_COMPARE = 'SET_VERSIONS_COMPARE'
export const SET_VERSIONS_BY_ID = 'SET_VERSIONS_BY_ID'

export const state = () => ({
  items: [],
  compareVersionsItems: [],
  compareVersionsTable: [],
  byId: {}
})

export const getters = {
  versions: state => state.items,
  compareVersionsItems: state => state.compareVersionsItems,
  compareVersionsTable: state => state.compareVersionsTable,
  versionById: state => state.byId,
  getCarsForSaveRequest: state => (ids, year) => {
    return state.items
      .filter(v => ids.includes(v.id.toString()))
      .map(v => {
        return {
          brand_name: v.model.brandName,
          brand_link: 'https://derco.com.pe/',
          car_link: `https://derco.com.pe/auto/${v.model.slug}`,
          car_picture: v.image.url,
          model_name: v.model.name,
          version_name: v.name,
          version_code: v.code,
          price_list: v.prices.find(p => p.name === year).value,
          price_min: v.prices.find(p => p.name === year).convertedValue,
          campaign_id: v.isSpecialSale ? '019' : '017',
          campaign_desc: 'No'
        }
      })
  }
}

export const actions = {
  async getVersionId({ commit }, id) {
    try {
      const res = await this.$axios.$get(`versions/${id}`)
      commit(SET_VERSIONS_BY_ID, res)
      return res
    } catch (e) {
      console.log(e)
    }
  },
  async getVersionsCompare({ commit }, payload) {
    try {
      const res = await this.$axios.$get('versions/compare', payload)
      commit(SET_VERSIONS_COMPARE, res)
    } catch (e) {
      console.log(e)
    }
  },
  async getVersions({ commit }) {
    try {
      const res = await this.$axios.$get('versions')
      commit(SET_VERSIONS, res)
    } catch (e) {
      console.log(e)
    }
  }
}

export const mutations = {
  [SET_VERSIONS_BY_ID](state, item) {
    state.byId = item
  },
  [SET_VERSIONS_COMPARE](state, data) {
    state.compareVersionsItems = data.versions
    state.compareVersionsTable = data.table
  },
  [SET_VERSIONS](state, items) {
    state.items = items
  }
}
