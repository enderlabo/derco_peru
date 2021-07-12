export const SET_GLOBALS = 'SET_GLOBALS'
export const SET_HOME = 'SET_HOME'
export const SET_LEGALS = 'SET_LEGALS'
export const SET_FILTERS = 'SET_FILTERS'

export const state = () => ({
  globals: {
    seo: {}
  },
  home: {
    services: [],
    slider: {},
    homeContent: {},
    featuredModels: []
  },
  legals: {},
  filters: {
    brands: [],
    carClasses: [],
    carClassesDerco: [],
    transmissions: [],
    fuels: [],
    models: [],
    versions: [],
    benefits: []
  }
})

export const getters = {
  globals: state => state.globals,
  home: state => state.home,
  legals: state => state.legals,
  filters: state => {
    return state.filters
  },
  getModelForBrands: state => brands => {
    const newModels = []
    brands.map(brand => {
      const models = state.filters.models.filter(item => {
        return item.brand_slug === brand
      })
      newModels.push(models)
    })
    return newModels.flat().length >= 1
      ? newModels.flat()
      : state.filters.models
  },
  getSeoInfo: state => path => {
    if (state.globals.seo && state.globals.seo.length) {
      const seoData = state.globals.seo.find(seoData => {
        return (
          seoData.url.includes(path) ||
          seoData.url.includes(path.substring(0, path.length - 1))
        )
      })
      if (seoData) {
        return seoData
      } else {
        return {
          title: 'Derco',
          description: ''
        }
      }
    } else {
      return {
        title: 'Derco',
        description: ''
      }
    }
  }
}

export const actions = {
  async getFilters({ commit }, type) {
    try {
      const res = await this.$axios.$get('resources/filters')
      const { brands, carClassesDerco, models } = res
      if (type === 'cars') {
        res.brands = brands.filter(b => b.type === type)
        res.models = models.filter(m => m.type === type)
        res.carClassesDerco = carClassesDerco.filter(cCD => {
          return !cCD.name.includes('Camiones')
        })
      }
      if (type === 'trucks') {
        res.brands = brands.filter(b => b.type === type)
        res.models = models.filter(m => m.type === type)
        res.carClassesDerco = carClassesDerco.filter(cCD => {
          return cCD.name.includes('Camiones')
        })
      }
      const brandsFormat = []
      res.models.map(item => {
        const filterBrand = brandsFormat.filter(b => b.slug === item.brand_slug)
        if (filterBrand.length === 0) {
          const itemBrand = res.brands.find(b => b.slug === item.brand_slug)
          brandsFormat.push(itemBrand)
        }
      })
      res.brands = brandsFormat
      commit(SET_FILTERS, res)
    } catch (error) {
      console.log(error)
    }
  },
  async getGlobals({ commit }) {
    try {
      const res = await this.$axios.$get('resources/globals')
      commit(SET_GLOBALS, res)
    } catch (e) {
      console.log(e)
    }
  },
  async getHome({ commit }) {
    try {
      const res = await this.$axios.$get('resources/home')
      commit(SET_HOME, res)
    } catch (error) {
      console.log(error)
    }
  },
  async getLegals({ commit }) {
    try {
      const res = await this.$axios('resources/legals')
      commit(SET_LEGALS, res)
    } catch (error) {
      console.log(error)
    }
  }
}

export const mutations = {
  [SET_FILTERS](state, filters) {
    state.filters = {
      brands: filters.brands,
      carClasses: filters.carClasses,
      carClassesDerco: filters.carClassesDerco,
      transmissions: filters.transmissions,
      fuels: filters.fuels,
      models: filters.models,
      versions: filters.versions,
      benefits: filters.benefits
    }
  },
  [SET_LEGALS](state, legals) {
    state.legals = legals
  },
  [SET_GLOBALS](state, globals) {
    state.globals = globals
  },
  [SET_HOME](state, home) {
    state.home = home
  }
}
