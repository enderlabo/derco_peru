<template>
  <div class="pt-2 pb-md-0t">
    <SelectCatalog />
    <b-row v-if="cars.length >= 1">
      <b-col
        v-for="(item, index) in cars"
        :key="index"
        cols="12"
        md="4"
        class="col-unit"
      >
        <CardCars v-if="type === 'cars'" :item="item" />
        <CardTruck v-if="type === 'trucks'" :item="item" />
      </b-col>
    </b-row>
    <b-row v-else>
      <no-items />
    </b-row>
    <div class="Cars__pagination mt-3">
      <b-pagination
        v-if="paginationSearch.total / paginationSearch.perPage > 1"
        v-model="currentPage"
        :total-rows="paginationSearch.total"
        align="center"
        :per-page="paginationSearch.perPage"
        hide-goto-end-buttons
        :prefetch="true"
        class="paginationStyle2"
        pills
      >
        <template v-slot:last-text>
          <fa :icon="faChevronLeft" />
        </template>
      </b-pagination>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { queryRouteCars, queryRouteTrucks } from '@/utils'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import CardTruck from '@/components/partials/catalog/trucks/CardTruck'
import SelectCatalog from '@/components/partials/catalog/SelectCatalog'
import CardCars from '@/components/partials/catalog/Cars/CardCars'
import NoItems from '@/components/partials/catalog/NoItems'

export default {
  name: 'CarsComponent',
  components: {
    NoItems,
    CardCars,
    SelectCatalog,
    CardTruck
  },
  props: {
    cars: {
      type: Array,
      default() {
        return []
      }
    },
    type: {
      type: String,
      default() {
        return 'cars'
      }
    }
  },
  data() {
    return {
      carsNew: []
    }
  },
  computed: {
    ...mapGetters({
      paginationSearch: 'cars/paginationSearch',
      bodySearchFilters: 'cars/bodySearchFilters'
    }),
    faChevronLeft() {
      return faChevronLeft
    },
    currentPage: {
      get() {
        return this.paginationSearch.currentPage
      },
      async set(value) {
        this.$nextTick(() => {
          this.$nuxt.$loading.start()
        })
        await this.minifyActions('page', value)
        const query = this.bodySearchFilters
        await this.$router.push({
          name: this.$route.name,
          query: this.bodySearchFilters
        })
        if (this.type === 'cars') {
          await queryRouteCars(this.$store, query, value)
        }
        if (this.type === 'trucks') {
          await queryRouteTrucks(this.$store, query, value)
        }
        window.scroll(0, 0)
        this.$nextTick(() => {
          this.$nuxt.$loading.finish()
        })
        await this.$store.dispatch('cars/getStoreLinks')
      }
    }
  },

  methods: {
    ...mapActions({
      addBodySearchData: 'cars/addBodySearchData',
      search: 'cars/search'
    }),
    minifyActions(key, value) {
      const data = {
        key,
        value
      }
      this.addBodySearchData(data)
    }
  }
}
</script>
<style lang="scss" scoped>
.col-unit {
  margin-bottom: 3.5rem !important;
}

.custom-select {
  border: none !important;
  font-size: 14px;
  width: 14.0625rem;
  height: 2.5rem;
  border-radius: 0.3125rem;
  background: #fff
    url("data:image/svg+xml,%3Csvg aria-hidden='true' color='gray' focusable='false' data-prefix='fas' data-icon='angle-down' class='svg-inline--fa fa-angle-down fa-w-10' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='currentColor' d='M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z'/%3E%3C/svg%3E")
    no-repeat right 0.75rem center/8px 14px;
}

.car-img img {
  width: 180px;
}

.car-dcto span {
  background-color: red;
  color: white;
}

.w-30 {
  width: 30%;
}

.Cars__pagination {
  color: red !important;
}
</style>
