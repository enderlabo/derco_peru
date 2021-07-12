<template>
  <div>
    <div v-if="subsidiaries.length >= 1" class="list-card-shops-workshops">
      <template v-for="(item, index) in subsidiaries">
        <card-shops-workshops :key="index" :value="item" />
      </template>
      <div class="d-flex justify-content-center">
        <b-pagination
          id="pagination-shops-workshops"
          v-model="currentPage"
          :total-rows="totalItems"
          :per-page="perPage"
          hide-goto-end-buttons
          pills
          align="center"
        />
      </div>
    </div>
    <div v-else><no-items /></div>
  </div>
</template>

<script>
import CardShopsWorkshops from '@/components/partials/shopsWorkshops/CardShopsWorkshops'
import NoItems from '@/components/partials/catalog/NoItems'

export default {
  name: 'ListCardShopsWorkshops',
  middleware: ['global'],
  components: { NoItems, CardShopsWorkshops },
  async fetch() {
    await this.$store.dispatch('subsidiaries/getSubsidiaries')
  },
  data() {
    return {
      totalItems: 0,
      currentPage: 1,
      perPage: 6
    }
  },
  computed: {
    subsidiaries() {
      let subsidiaries = []
      let regions = this.$store.getters['subsidiaries/regions']
      if (this.$route.params.province) {
        regions = regions.filter(r => {
          return r.slug === this.$route.params.province
        })
      }
      if (this.$route.params.district) {
        subsidiaries = regions.map(region => {
          const subsidiariesMap = region.subsidiaries.filter(
            subsidiary =>
              subsidiary.commune.slug === this.$route.params.district
          )
          subsidiariesMap.map(sm => {
            const newBrands = []
            sm.services.map(service => {
              service.brands.map(brand => {
                const filterBrand = newBrands.filter(i => i.slug === brand.slug)
                if (filterBrand.length === 0) {
                  newBrands.push(brand)
                }
              })
            })
            sm.brands = newBrands
            return sm
          })
          return subsidiariesMap.flat()
        })
      } else if (Array.isArray(regions))
        subsidiaries = regions.map(region => {
          if (Array.isArray(region.subsidiaries))
            region.subsidiaries.map(rm => {
              const newBrands = []
              if (Array.isArray(rm.services))
                rm.services.map(service => {
                  if (Array.isArray(service.brands))
                    service.brands.map(brand => {
                      const filterBrand = newBrands.filter(
                        i => i.slug === brand.slug
                      )
                      if (filterBrand.length === 0) {
                        newBrands.push(brand)
                      }
                    })
                })
              rm.brands = newBrands
              return rm
            })
          return region.subsidiaries.flat()
        })
      if (this.$route.params.service) {
        const servicesub = subsidiaries.flat()
        subsidiaries = servicesub.filter(sub => {
          const filterSub = sub.services.filter(
            s => s.slug === this.$route.params.service
          )
          if (filterSub.length > 0) {
            return true
          }
          return false
        })
      }
      if (this.$route.params.brand) {
        const serviceBrand = subsidiaries.flat()
        subsidiaries = serviceBrand.filter(brandService => {
          const filterBrand = brandService.brands.filter(
            bs => bs.slug === this.$route.params.brand
          )
          if (filterBrand.length > 0) {
            return true
          }
          return false
        })
      }
      return this.paginationList(subsidiaries.flat())
    }
  },
  watch: {
    async currentPage() {
      await window.scroll(0, 0)
    }
  },
  mounted() {
    this.$fetch()
  },
  methods: {
    paginationList(items) {
      const newItems = items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
      this.totalItems = items.length
      return newItems
    }
  }
}
</script>

<style scoped lang="scss">
.list-card-shops-workshops {
}
</style>
