export const state = () => ({})

export const getters = {}

export const actions = {
  async saveContact({ commit }, payload) {
    try {
      const data = {
        subject: payload.subject,
        commentary: payload.commentary,
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        commune: payload.commune,
        meta_info: 'https://derco.com.pe/'
      }
      const { message, object } = await this.$axios.$post(
        'http://api.cms.qa.derco.com.pe/api/v4/email/contact',
        data
      )
      console.log(message, object)
    } catch (error) {
      console.log(error)
    }
  }
}

export const mutations = {}
