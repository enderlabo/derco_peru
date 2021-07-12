import { dencrypt } from '@/plugins/crypto'
import { handleError } from '@/utils'

export const SET_VIN = 'SET_VIN'

export const state = () => ({
  vin: '',
  status: false
})

export const getters = {
  vin: state => state.vin,
  status: state => state.status
}

export const actions = {
  async searchVin({ commit }, payload) {
    try {
      const vinDencrypt = await dencrypt(payload)
      const { data } = await this.$axios.post(
        'https://cotizadorderco.com/vins/consultVin',
        {
          vin: vinDencrypt
        }
      )
      commit(SET_VIN, data)
    } catch (e) {
      handleError(e)
    }
  }
}
export const mutations = {
  [SET_VIN](state, data) {
    state.vin = data.data
    state.status = data.status
  }
}
