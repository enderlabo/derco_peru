export const state = () => ({
  list: []
})
export const getters = {}
export const actions = {
  save({ state, commit }, data) {
    return this.$axios
      .post('/quotations', data)
      .then(response => {
        return response
      })
      .catch(e => e.response)
  },
  verifyRecaptcha({ commit }, token) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/quotations/verify-grecaptcha', token)
        .then(res => {
          if (res.data.success) {
            resolve(res)
          } else {
            resolve(res)
          }
        })
        .catch(e => reject(e))
    })
  }
}
export const mutations = {}
