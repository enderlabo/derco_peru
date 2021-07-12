<template>
  <div class="elevated">
    <b-container>
      <Title v-model="title" />
      <filters-shops-workshops class="d-none d-sm-none d-md-block" />
      <filter-shops-workshops-mobile class="d-block d-sm-block d-md-none" />
      <list-card-shops-workshops />
    </b-container>
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import FiltersShopsWorkshops from '@/components/partials/shopsWorkshops/FiltersShopsWorkshops'
import ListCardShopsWorkshops from '@/components/partials/shopsWorkshops/ListCardShopsWorkshops'
import FilterShopsWorkshopsMobile from '@/components/partials/shopsWorkshops/FilterShopsWorkshopsMobile'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    FilterShopsWorkshopsMobile,
    ListCardShopsWorkshops,
    FiltersShopsWorkshops,
    Title
  },
  data() {
    return {
      title: 'Tiendas y Talleres'
    }
  },
  computed: {
    ...mapGetters({
      regions: 'subsidiaries/filtersRegions',
      filterRegionsCommunesForRegion:
        'subsidiaries/filterRegionsCommunesForRegion',
      filterServices: 'subsidiaries/filterServices',
      filters: 'resources/filters'
    }),
    titleHead() {
      let title = this.title
      const params = this.$route.params
      if (params.province) {
        const { name: nameProvince } = this.regions.find(
          i => i.slug === params.province
        )
        title = `${this.title} en ${nameProvince}`
      }
      if (params.district) {
        const communes = this.filterRegionsCommunesForRegion({
          slug: params.province
        })
        const { name: nameDistrict } = communes.find(
          i => i.slug === params.district
        )
        title = `${title} - ${nameDistrict}`
      }
      if (params.service) {
        const { name: nameService } = this.filterServices.find(
          i => i.slug === params.service
        )
        title = `${title} - ${nameService}`
      }
      if (params.brand) {
        const { name: nameBrand } = this.filters.brands.find(
          i => i.slug === params.brand
        )
        title = `${title} - ${nameBrand}`
      }
      return title
    }
  },
  head() {
    return {
      title: this.titleHead
    }
  }
}
</script>

<style scoped></style>
