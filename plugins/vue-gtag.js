import Vue from 'vue'
import VueGtag from 'vue-gtag'

const vueGtag = ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: 'AW-923613239' }
    },
    app.router
  )
}

export default vueGtag
