<template>
  <div class="elevated">
    <b-container>
      <Title v-model="title" />
      <b-row>
        <b-col v-if="$device.isDesktop" sm="12" md="3">
          <FilterTrucks :filters-api="filters" />
        </b-col>
        <b-col>
          <CarsComponent type="trucks" :cars="cars" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Title from '@/components/common/Title'
import FilterTrucks from '@/components/partials/catalog/trucks/FilterTrucks'
import CarsComponent from '@/components/partials/catalog/Cars'
import { queryRouteTrucks } from '@/utils'

export default {
  name: 'Index',
  components: { CarsComponent, FilterTrucks, Title },
  async asyncData({ store, route }) {
    await store.dispatch('resources/getFilters', 'trucks')
    await queryRouteTrucks(store, route.query, 1)
  },
  data() {
    return {
      title: 'cotizador de camiones y maquinarias'
    }
  },
  computed: {
    ...mapGetters({
      filters: 'resources/filters',
      cars: 'cars/cars'
    }),
    titleHead() {
      let title = 'Catalogo Camiones'
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
          title = `Camiones Nuevos ${brands}`
        }
        if (brands && models) {
          title = `Camiones nuevos ${brands} - Modelos ${models} `
        } else if (models) {
          title = `Camiones nuevos  - Modelos ${models} `
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
