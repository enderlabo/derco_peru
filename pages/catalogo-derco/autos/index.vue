<template>
  <div class="elevated">
    <b-container>
      <Title v-model="titleC" />
      <b-row>
        <b-col v-if="$device.isDesktop" sm="12" md="3">
          <FilterComponent :filters-api="filters" />
        </b-col>
        <b-col v-if="$device.isMobile" sm="12" md="3">
          <FilterMobile :filters-api="filters" />
        </b-col>
        <b-col>
          <CarsComponent type="cars" :cars="cars" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import FilterComponent from '@/components/partials/catalog/Filter'
import FilterMobile from '@/components/partials/catalog/FilterMobile'
import CarsComponent from '@/components/partials/catalog/Cars'
import { queryRouteCars } from '@/utils'
import { mapGetters } from 'vuex'

export default {
  components: {
    Title,
    FilterComponent,
    FilterMobile,
    CarsComponent
  },
  async asyncData({ store, route }) {
    await store.dispatch('resources/getFilters', 'cars')
    await queryRouteCars(store, route.query, 1)
  },
  data() {
    return {
      titleC: 'encuentra tu auto nuevo'
    }
  },
  computed: {
    ...mapGetters({
      filters: 'resources/filters',
      cars: 'cars/cars'
    }),
    titleHead() {
      let title = 'Cotiza tu auto'
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
        console.log('Dynamic Seo')
        if (brands) {
          title = `Autos Nuevos ${brands}`
        }
        if (brands && models) {
          title = `Autos nuevos ${brands} - Modelos ${models} `
        } else if (models) {
          title = `Autos nuevos  - Modelos ${models} `
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
      console.log(seoData.description)
      return seoData.description
    }
  },
  async mounted() {
    await this.$store.dispatch('cars/getStoreLinks')
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
