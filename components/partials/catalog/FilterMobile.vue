<template>
  <div
    class="filterMobile__btnContain elevated"
    :class="{ 'fixed-mobile': scrolled }"
  >
    <div class="py-auto">
      <b-row class="row-filter-button">
        <b-col cols="6">
          <b-dropdown
            toggle-class="text-decoration-none text-uppercase button-filter"
            no-caret
            block
          >
            <template #button-content>
              <fa :icon="faSort" />
              &nbsp; ORDENAR
            </template>
            <b-dropdown-item
              :active="order === 'asc'"
              @click="changeOrder('asc')"
              >Precio de menor a mayor
            </b-dropdown-item>
            <b-dropdown-item
              :active="order === 'desc'"
              @click="changeOrder('desc')"
            >
              Precio de mayor a menor
            </b-dropdown-item>
          </b-dropdown>
        </b-col>
        <b-col cols="6">
          <b-button
            class="text-uppercase button-filter"
            block
            @click="showModal"
          >
            <fa :icon="faFilter" />
            &nbsp; FILTRAR
          </b-button>
        </b-col>
      </b-row>
    </div>

    <b-modal id="modal-body" ref="my-modal" hide-footer>
      <filter-component :filters-api="filtersApi" @change="hideModal()" />
    </b-modal>
  </div>
</template>

<script>
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons'
import FilterComponent from '@/components/partials/catalog/Filter'
import { mapActions, mapGetters } from 'vuex'
import { queryRouteCars } from '@/utils'

export default {
  name: 'FilterMobile',
  components: { FilterComponent },
  props: {
    filtersApi: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      asc: true,
      limitPosition: 100,
      scrolled: false,
      lastPosition: 0
    }
  },
  computed: {
    ...mapGetters({
      bodySearchFilters: 'cars/bodySearchFilters'
    }),
    faFilter() {
      return faFilter
    },
    faSort() {
      return faSort
    },
    order: {
      get() {
        return this.$store.state.cars.bodySearch.order
      },
      async set(value) {
        this.$nextTick(() => {
          this.$nuxt.$loading.start()
        })
        await this.minifyActions('page', 1)
        await this.minifyActions('order', value)
        const query = this.bodySearchFilters
        await this.$router.push({
          name: this.$route.name,
          query
        })
        await queryRouteCars(this.$store, query, 1)
        this.$nextTick(() => {
          this.$nuxt.$loading.finish()
        })
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions({
      addBodySearchData: 'cars/addBodySearchData',
      search: 'cars/search'
    }),
    handleScroll() {
      if (
        this.lastPosition < window.scrollY &&
        this.limitPosition < window.scrollY
      ) {
        this.scrolled = true
      }
      if (this.lastPosition <= this.limitPosition) {
        this.scrolled = false
      }
      this.lastPosition = window.scrollY
    },

    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    changeOrder(value) {
      this.order = value
    },
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
<style lang="scss">
.filterMobile__btnContain {
  &.fixed-mobile {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 99999;
    -webkit-transition: all 225ms ease-out;
    transition: all 225ms ease-out;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .button-filter,
  .dropdown-toggle {
    background: #e5e5e5 !important;
    border: none;
    outline: none;
    color: #4d4d4d !important;
    font-size: 14px;
    font-weight: normal;
    height: 40px;
    border-radius: 5px;
  }

  .dropdown-item.active,
  .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #dc241f !important;
  }
}
</style>
