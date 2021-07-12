import { handleError } from '@/utils'

export const SET_TRANSMISSIONS = 'SET_TRANSMISSIONS'
export const SET_FUELS = 'SET_FUELS'
export const SET_CARS = 'SET_CARS'
export const SET_BRANDS = 'SET_BRANDS'
export const SET_MODELS = 'SET_MODELS'
export const SET_CATEGORIES = 'SET_CATEGORIES'
export const SET_BENEFITS = 'SET_BENEFITS'
export const TOTAL_CARS = 'TOTAL_CARS'
export const SET_PAGINATION_SEARCH = 'SET_PAGINATION_SEARCH'
export const ADD_BODY_SEARCH_DATA = 'ADD_BODY_SEARCH_DATA'
export const ADD_DATA_LINK = 'ADD_DATA_LINK'

export const state = () => ({
  transmissions: [],
  fuels: [],
  items: [],
  linksItems: [],
  totalItems: 0,
  brands: [],
  models: [],
  categories: [],
  benefits: [],
  paginationSearch: {},
  bodySearch: {
    filters: {
      priceRanges: [0, 0],
      brands: [],
      carClasses: [],
      carClassesDerco: [],
      fuel: [],
      transmission: [],
      models: [],
      benefits: [],
      'benefits-campaign': []
    },
    order: 'asc'
  }
})

export const getters = {
  transmissions: state => state.transmissions,
  fuels: state => state.fuels,
  cars: state => state.items,
  totalCars: state => state.totalItems,
  paginationSearch: state => state.paginationSearch,
  brands: state => state.brands,
  models: state => state.models,
  categories: state => state.categories,
  bodySearch: state => state.bodySearch,
  bodySearchFilters: state => {
    const filtersQuery = {}
    const filters = state.bodySearch.filters
    if (filters.transmission.length >= 1)
      filtersQuery.transmission = filters.transmission.join(',')
    if (filters.brands.length >= 1)
      filtersQuery.brands = filters.brands.join(',')
    if (filters.priceRanges.length >= 1)
      filtersQuery.priceRanges = filters.priceRanges.join(',')
    if (filters.carClasses.length >= 1)
      filtersQuery.carClasses = filters.carClasses.join(',')
    if (filters.carClassesDerco.length >= 1)
      filtersQuery.carClassesDerco = filters.carClassesDerco.join(',')
    if (filters.fuel.length >= 1) filtersQuery.fuel = filters.fuel.join(',')
    if (filters.models.length >= 1)
      filtersQuery.models = filters.models.join(',')
    if (filters.benefits.length >= 1)
      filtersQuery.benefits = filters.benefits.join(',')
    if (filters['benefits-campaign'].length >= 1)
      filtersQuery['benefits-campaign'] = filters['benefits-campaign'].join(',')
    filtersQuery.order = state.bodySearch.order
    filtersQuery.page = state.paginationSearch.currentPage || 1
    return filtersQuery
  },
  linkCar: state => ({ code, year }) => {
    try {
      const data = state.linksItems.find(i => i.sap === code)
      const { link } = data.prices.find(i => i.year === String(year))
      return link || ''
    } catch (e) {
      return ''
    }
  }
}

export const actions = {
  async search({ commit, state }, { params, type }) {
    const body = state.bodySearch
    body.type = type
    try {
      const {
        data,
        total,
        per_page: perPage,
        current_page: currentPage
      } = await this.$axios.$post('cars/search', body, {
        params
      })
      commit(SET_CARS, data)
      commit(SET_MODELS, data.model)
      commit(TOTAL_CARS, total)
      commit(SET_PAGINATION_SEARCH, {
        total,
        perPage,
        currentPage
      })
    } catch (error) {
      console.log(error)
    }
  },
  async getStoreLinks({ commit, state }) {
    try {
      const arrayCars = []
      await state.items.map(item => {
        arrayCars.push({ sap: item.code, year: item.prices[0].name })
        return item
      })
      const data = await this.$axios.$post(
        process.env.apiStoreUrl.replace(/\$/, '') +
          `/api/store/cars/reservationlink`,
        arrayCars
      )
      commit(ADD_DATA_LINK, data)
    } catch (error) {
      handleError(error)
    }
  },
  async getTransmissions({ commit }) {
    try {
      const res = await this.$axios.$get('cars/transmissions')
      commit(SET_TRANSMISSIONS, res)
    } catch (error) {
      console.log(error)
    }
  },
  async getFuels({ commit }) {
    try {
      const res = await this.$axios.$get('cars/fuels')
      commit(SET_FUELS, res)
    } catch (error) {
      console.log(error)
    }
  },
  addBodySearchData({ commit }, data) {
    commit(ADD_BODY_SEARCH_DATA, data)
  }
}

export const mutations = {
  [ADD_DATA_LINK](state, data) {
    state.linksItems = data
  },
  [SET_CARS](state, items) {
    state.items = items
  },
  [TOTAL_CARS](state, value) {
    state.totalItems = value
  },
  [SET_PAGINATION_SEARCH](state, value) {
    state.paginationSearch = value
  },
  [SET_TRANSMISSIONS](state, items) {
    state.transmissions = items
  },
  [SET_TRANSMISSIONS](state, items) {
    state.fuels = items
  },
  [SET_BRANDS](state, items) {
    state.brands = items
  },
  [SET_MODELS](state, items) {
    state.models = items
  },
  [SET_CATEGORIES](state, items) {
    state.carClasses = items
  },
  [ADD_BODY_SEARCH_DATA](state, data) {
    switch (data.key) {
      case 'priceRanges':
        state.bodySearch.filters.priceRanges = data.value
        break
      case 'brands':
        state.bodySearch.filters.brands = data.value
        break
      case 'carClasses':
        state.bodySearch.filters.carClasses = data.value
        break
      case 'carClassesDerco':
        state.bodySearch.filters.carClassesDerco = data.value
        break
      case 'fuel':
        state.bodySearch.filters.fuel = data.value
        break
      case 'transmission':
        state.bodySearch.filters.transmission = data.value
        break
      case 'models':
        state.bodySearch.filters.models = data.value
        break
      case 'benefits':
        state.bodySearch.filters.benefits = data.value
        break
      case 'benefits-campaign':
        state.bodySearch.filters['benefits-campaign'] = data.value
        break
      case 'order':
        state.bodySearch.order = data.value
        break
      case 'page':
        state.paginationSearch.currentPage = data.value
        break
      default:
        break
    }
  }
}
