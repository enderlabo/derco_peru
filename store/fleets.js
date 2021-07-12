export const ADD_FLEET = 'ADD_FLEET'

export const state = () => ({
  items: [],
  checkoutStatus: null
})

export const getters = {
  cartFleets: (state, getters, rootState) => {
    return state.items
  }
}

export const actions = {
  async addFleet({ commit }, payload) {}
}

export const mutations = {
  [ADD_FLEET](state, item) {
    state.items.push(item)
  }
}
