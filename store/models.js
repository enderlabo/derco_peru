import { handleError } from '@/utils'

export const SET_MODELS = 'SET_MODELS'
export const SET_MODELS_BY_ORDER = 'SET_MODELS_BY_ORDER'
export const SET_MODEL_SLUG = 'SET_MODEL_SLUG'
export const SET_MODELS_CATALOG = 'SET_MODELS_CATALOG'
export const ADD_BODY_SEARCH_DATA_MODELS = 'ADD_BODY_SEARCH_DATA_MODELS'

export const state = () => ({
  items: [],
  itemsByOrder: [],
  itemBySlug: {},
  modelsCatalog: [],
  bodySearch: {
    filters: {
      brands: [],
      carClasses: [],
      models: []
    },
    order: 'asc'
  }
})

export const getters = {
  models: state => state.items,
  modelsByOrder: state => state.itemsByOrder,
  modelBySlug: state => state.itemBySlug,
  modelsCatalog: state => state.modelsCatalog
}

export const actions = {
  async search({ commit, state }, params) {
    try {
      const body = state.bodySearch
      const { data } = await this.$axios.$post('models/search', body, {
        params
      })
      commit(SET_MODELS_CATALOG, data)
    } catch (error) {
      handleError(error)
    }
  },
  async getModels({ commit }, params) {
    try {
      const res = await this.$axios.$get('models', { params })
      commit(SET_MODELS, res)
    } catch (error) {
      handleError(error)
    }
  },
  async getModelsByOrder({ commit }) {
    try {
      const res = await this.$axios.$get('models/by-order')
      commit(SET_MODELS_BY_ORDER, res)
    } catch (error) {
      handleError(error)
    }
  },
  async getModelsBySlug({ commit }, slug) {
    try {
      const res = await this.$axios.$get(`models/slug/${slug}`)
      commit(SET_MODEL_SLUG, res)
    } catch (error) {
      handleError(error)
    }
  },
  addBodySearchData({ commit }, data) {
    commit(ADD_BODY_SEARCH_DATA_MODELS, data)
  }
}

export const mutations = {
  [SET_MODEL_SLUG](state, item) {
    state.itemForSlug = item
  },
  [SET_MODELS](state, items) {
    state.items = items
  },
  [SET_MODELS_BY_ORDER](state, items) {
    state.itemsByOrder = items
  },
  [SET_MODELS_CATALOG](state, items) {
    state.modelsCatalog = items
  },
  [ADD_BODY_SEARCH_DATA_MODELS](state, data) {
    switch (data.key) {
      case 'brands':
        state.bodySearch.filters.brands = data.value
        break
      case 'carClasses':
        state.bodySearch.filters.carClasses = data.value
        break
      case 'models':
        state.bodySearch.filters.models = data.value
        break
      case 'order':
        state.bodySearch.order = data.value
        break
      default:
        break
    }
  }
}
