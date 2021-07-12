export const SET_SUBSIDIARIES = 'SET_SUBSIDIARIES'
export const SET_REGIONS = 'SET_REGIONS'
export const SET_FILTERS_SUBSIDIARIES = 'SET_FILTERS_SUBSIDIARIES'
export const SET_FILTERS_SUBSIDIARIES_REGIONS =
  'SET_FILTERS_SUBSIDIARIES_REGIONS'
export const SET_FILTERS_SUBSIDIARIES_REGIONS_COMMUNES =
  'SET_FILTERS_SUBSIDIARIES_REGIONS_COMMUNES'
export const SET_FILTERS_SUBSIDIARIES_SERVICES =
  'SET_FILTERS_SUBSIDIARIES_SERVICES'
export const SET_SELLING_REGIONS = 'SET_SELLING_REGIONS'

const formatSubsidiaries = regions => {
  const subsidiariesTotal = []
  regions.map(item => {
    if (Array.isArray(item.subsidiaries))
      item.subsidiaries.map(sub => {
        const newBrands = []
        sub.brands = sub.services.map(service => {
          if (Array.isArray(service.brands))
            service.brands.map(brand => {
              const filterBrand = newBrands.filter(i => i.slug === brand.slug)
              if (filterBrand.length === 0) {
                newBrands.push(brand)
              }
            })
        })
        sub.brands = newBrands
        subsidiariesTotal.push(sub)
      })
  })
  return subsidiariesTotal
}

export const state = () => ({
  items: [],
  regions: [],
  filters: {},
  filtersRegions: [],
  filterRegionsCommunes: [],
  filterServices: [],
  sellingRegions: []
})

export const mutations = {
  [SET_SELLING_REGIONS](state, selling) {
    state.sellingRegions = selling
  },
  [SET_FILTERS_SUBSIDIARIES_SERVICES](state, items) {
    state.filterServices = items
  },
  [SET_FILTERS_SUBSIDIARIES_REGIONS_COMMUNES](state, items) {
    state.filterRegionsCommunes = items
  },
  [SET_FILTERS_SUBSIDIARIES_REGIONS](state, items) {
    state.filtersRegions = items
  },
  [SET_FILTERS_SUBSIDIARIES](state, value) {
    state.filters = value
  },
  [SET_SUBSIDIARIES](state, items) {
    state.items = items
  },
  [SET_REGIONS](state, items) {
    state.regions = items
  }
}

export const getters = {
  filterServices: state => state.filterServices,
  subsidiariesForRegion: state => region => {
    const regions = state.regions
    const index = regions.findIndex(x => x.slug === 'lima')
    const newArray = [
      regions[index],
      ...regions.slice(0, index),
      ...regions.slice(index + 1, regions.length)
    ]
    if (region !== null) {
      const indexFilter = newArray.findIndex(s => s.slug === region)
      const filterArray = [newArray[indexFilter]]

      return filterArray
    }
    return newArray
  },
  subsidiariesZones: state => {
    const data = state.regions
    const index = data.findIndex(x => x.slug === 'lima')
    const newArray = [
      data[index],
      ...data.slice(0, index),
      ...data.slice(index + 1, data.length)
    ]
    return newArray
  },
  getSubsidiaryByCode: state => code => {
    const subsidiaries = state.regions
      .map(z => z.subsidiaries)
      .reduce((acc, val) => acc.concat(val), [])
    return subsidiaries.find(s => s.code === code)
  },
  subsidiariesTotal: state => {
    const list = formatSubsidiaries(state.regions)
    for (let i = 0; i < list.length - 1; i++) {
      const j = i + Math.floor(Math.random() * (list.length - i))
      const temp = list[j]
      list[j] = list[i]
      list[i] = temp
    }
    return list
  },
  subsidiaries: state => {
    return formatSubsidiaries(state.regions)
  },
  sellingRegions: state => state.sellingRegions,
  regions: state => {
    return state.regions
  },
  randomTen: state => {
    const list = state.items
    const select = []
    for (let i = 0; i < list.length; i++) {
      const aleatory = Math.floor(Math.random() * list.length)
      select.push(list[aleatory])
      list.splice(aleatory, 1)
    }
    return select
  },
  filtersRegions: state => state.filtersRegions,
  filterRegionsCommunes: state => state.sellingRegions,
  filterRegionsCommunesForRegion: state => ({ slug }) => {
    const array = state.filterRegionsCommunes.filter(item => item.slug === slug)
    return array.length >= 1 ? array[0].communes : []
  }
}

export const actions = {
  async getSubsidiariesForSelling({ commit }) {
    try {
      const { regions } = await this.$axios.$get('subsidiaries/selling')
      commit(SET_SELLING_REGIONS, regions)
    } catch (error) {
      console.log(error)
    }
  },
  async getSubsidiariesFilter({ commit }) {
    try {
      const { filters } = await this.$axios.$get('subsidiaries/filters')
      commit(SET_FILTERS_SUBSIDIARIES, filters)
      commit(SET_FILTERS_SUBSIDIARIES_REGIONS, filters.regions)
      commit(SET_FILTERS_SUBSIDIARIES_REGIONS_COMMUNES, filters.regionsCommunes)
      commit(SET_FILTERS_SUBSIDIARIES_SERVICES, filters.services)
    } catch (e) {
      console.log(e)
    }
  },
  async getSubsidiariesSetHeader({ commit }, headers) {
    try {
      const instance = await this.$axios.create({
        headers
      })
      const res = await instance.get('subsidiaries/selling')
      commit(SET_REGIONS, res.data.regions)
    } catch (e) {
      console.log(e)
    }
  },
  async getSubsidiaries({ commit }, params) {
    try {
      const { regions } = await this.$axios.$get('subsidiaries', { params })
      commit(SET_REGIONS, regions)
    } catch (e) {
      console.log(e)
    }
  }
}
