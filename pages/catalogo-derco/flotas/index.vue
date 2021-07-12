<template>
  <div class="elevated">
    <b-container>
      <Title v-model="title" />
      <b-row>
        <b-col v-if="$device.isDesktop" sm="12" md="3">
          <filter-fleets :filters-api="filters" />
        </b-col>
        <b-col>
          <Fleets :models="modelsCatalog" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import FilterFleets from '@/components/partials/catalog/fleets/FilterFleets'
import { mapGetters } from 'vuex'
import Fleets from '@/components/partials/catalog/fleets/Fleets'

export default {
  name: 'Index',
  components: { Fleets, FilterFleets, Title },
  async asyncData({ store }) {
    await store.dispatch('resources/getFilters')
    await store.dispatch('models/search', {})
  },
  data() {
    return {
      title: 'Cotizador de Flotas'
    }
  },
  computed: {
    ...mapGetters({
      filters: 'resources/filters',
      modelsCatalog: 'models/modelsCatalog'
    }),
    titleHead() {
      let title = 'Catalogo Flotas'
      let path = this.$route.path
      const query = this.$route.query
      let models, brands
      if (query.brands) {
        brands = Array.isArray(query.brands.length)
          ? query.brands.toString()
          : query.brands
        path = `${path}?brands=${brands}`
      }
      if (query.models) {
        models = Array.isArray(query.models)
          ? query.models.toString()
          : query.models
        path = `${path}&models=${models}`
      }
      const seoData = this.$store.getters['resources/getSeoInfo'](path)
      if (seoData.title !== 'Derco') {
        title = seoData.title
      } else {
        console.log('/* Dynamic Seo */')
        if (brands) {
          title = `Flotas Nuevas ${brands}`
        }
        if (brands && models) {
          title = `Flotas nuevas ${brands} - Modelos ${models} `
        } else if (models) {
          title = `Flotas nuevas  - Modelos ${models} `
        }
      }
      return title
    },
    descriptionHead() {
      let path = this.$route.path
      const query = this.$route.query
      let models, brands
      if (query.brands) {
        brands = Array.isArray(query.brands.length)
          ? query.brands.toString()
          : query.brands
        path = `${path}?brands=${brands}`
      }
      if (query.models) {
        models = Array.isArray(query.models)
          ? query.models.toString()
          : query.models
        path = `${path}&models=${models}`
      }
      const seoData = this.$store.getters['resources/getSeoInfo'](path)
      return seoData.description
    }
  },
  head() {
    return {
      title: this.titleHead,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.descriptionHead
        }
      ]
    }
  }
}
</script>

<style scoped></style>
