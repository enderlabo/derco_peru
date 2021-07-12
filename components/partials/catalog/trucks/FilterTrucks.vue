<template>
  <div class="panel-filters-to-catalog">
    <b-button
      pill
      block
      variant="light"
      class="button-return-home"
      @click="$router.push('/')"
    >
      <fa :icon="faChevronLeft" />
      &nbsp;
      <span class="text-button-return"> Volver </span>
    </b-button>
    <b-card class="card-filters-car">
      <div class="filter-title">
        <span class="text-uppercase">filtrar por </span>
      </div>
      <b-card no-body class="mb-1 card-section-filters-cars">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button
            v-b-toggle.accordion-brand
            class="w-100 button-section-filter-cars"
          >
            <span class="float-left"> MARCA </span>
            <span class="float-right when-open">
              <fa :icon="faChevronUp" />
            </span>
            <span class="float-right when-closed">
              <fa :icon="faChevronDown" />
            </span>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-brand" role="tabpanel">
          <template v-slot:default="{}">
            <b-card-body class="p-2 card-body-filters-cards">
              <b-form-group
                v-slot="{ ariaDescribedby }"
                class="content-filters-catalog"
              >
                <b-form-checkbox
                  v-for="(option, index) in filtersApi.brands"
                  :key="index"
                  v-model="selectedBrand"
                  button-variant="danger"
                  :aria-describedby="ariaDescribedby"
                  class="text-capitalize mx-1 my-1"
                  :value="option.slug"
                  size="sm"
                  @change="selectedModel = []"
                >
                  {{ option.name }}
                </b-form-checkbox>
              </b-form-group>
            </b-card-body>
          </template>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1 card-section-filters-cars">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button
            v-b-toggle.accordion-model
            class="w-100 button-section-filter-cars"
          >
            <span class="float-left"> MODELO </span>
            <span class="float-right when-open">
              <fa :icon="faChevronUp" />
            </span>
            <span class="float-right when-closed">
              <fa :icon="faChevronDown" />
            </span>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-model" role="tabpanel">
          <template v-slot:default="{}">
            <b-card-body class="p-2 card-body-filters-cards">
              <b-form-group
                v-slot="{ ariaDescribedby }"
                class="content-filters-catalog"
              >
                <b-form-checkbox
                  v-for="(option, index) in getModelForBrands(selectedBrand)"
                  :key="index"
                  v-model="selectedModel"
                  :aria-describedby="ariaDescribedby"
                  class="text-capitalize mx-1 my-1"
                  :value="option.slug"
                  size="sm"
                >
                  {{ option.name }}
                </b-form-checkbox>
              </b-form-group>
            </b-card-body>
          </template>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1 card-section-filters-cars">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button
            v-b-toggle.accordion-category
            class="w-100 button-section-filter-cars"
          >
            <span class="float-left"> CATEGORIA </span>
            <span class="float-right when-open">
              <fa :icon="faChevronUp" />
            </span>
            <span class="float-right when-closed">
              <fa :icon="faChevronDown" />
            </span>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-category" role="tabpanel">
          <template v-slot:default="{}">
            <b-card-body class="p-2 card-body-filters-cards">
              <b-form-group
                v-slot="{ ariaDescribedby }"
                class="content-filters-catalog"
              >
                <b-form-checkbox
                  v-for="(option, index) in filtersApi.carClassesDerco"
                  :key="index"
                  v-model="selectedCategory"
                  :aria-describedby="ariaDescribedby"
                  class="text-capitalize mx-1 my-1"
                  :value="option.slug"
                  size="sm"
                >
                  {{ option.name }}
                </b-form-checkbox>
              </b-form-group>
            </b-card-body>
          </template>
        </b-collapse>
      </b-card>
      <div class="mb-4">
        <div class="filter-title-filter">
          <span class="text-uppercase">Precio </span>
          <hr />
        </div>
        <vue-slider
          v-model="priceRanges"
          :min="minValuePrice"
          :max="maxValuePrice"
        >
          <template v-slot:tooltip="{ value }">
            <div
              class="vue-slider-dot-tooltip-inner vue-slider-dot-tooltip-inner-top"
            >
              <span class="vue-slider-dot-tooltip-text">{{ value | USD }}</span>
            </div>
          </template>
        </vue-slider>
        <div class="mx-auto d-flex">
          <div class="range-value">{{ minValuePrice | USD }}</div>
          <div class="range-value mr-0 ml-auto text-right">
            {{ maxValuePrice | USD }}
          </div>
        </div>
      </div>
      <b-button
        pill
        block
        class="btn-red-filter-cars"
        @click="searchAndSaveQuery"
      >
        APLICAR FILTROS
      </b-button>
    </b-card>
  </div>
</template>

<script>
import {
  faChevronLeft,
  faChevronUp,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import { mapActions, mapGetters } from 'vuex'
import { queryRouteTrucks } from '@/utils'

export default {
  name: 'FilterTrucks',
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
      selectPrice: [],
      allSelectedFuels: false,
      indeterminateFuels: false
    }
  },
  computed: {
    ...mapGetters({
      getModelForBrands: 'resources/getModelForBrands',
      bodySearchFilters: 'cars/bodySearchFilters'
    }),
    minValuePrice() {
      let minSelect = this.selectedModel.map(nM => {
        const model = this.filtersApi.models.find(m => m.slug === nM)
        return model.minPrice
      })
      let minGlobal = this.filtersApi.models.map(nM => {
        return nM.minPrice
      })
      minSelect = minSelect.length >= 1 ? Math.min(...minSelect) : 0
      minGlobal = minGlobal.length >= 1 ? Math.min(...minGlobal) : 0
      if (minSelect > 0) return minSelect
      else return minGlobal > 0 ? minGlobal : 9999
    },
    maxValuePrice() {
      let maxSelect = this.selectedModel.map(nM => {
        const model = this.filtersApi.models.find(m => m.slug === nM)
        return model.maxPrice
      })
      let maxGlobal = this.filtersApi.models.map(nM => {
        return nM.maxPrice
      })
      maxSelect = maxSelect.length >= 1 ? Math.max(...maxSelect) : 0
      maxGlobal = maxGlobal.length >= 1 ? Math.max(...maxGlobal) : 0
      if (maxSelect > 0) return maxSelect
      else return maxGlobal > 0 ? maxGlobal : 310000
    },
    benefits: {
      get() {
        return this.$store.state.cars.bodySearch.filters.benefits
      },
      set(value) {
        const data = {
          key: 'benefits',
          value
        }
        this.addBodySearchData(data)
      }
    },
    priceRanges: {
      get() {
        let range = this.$route.query.priceRanges
        if (range) range = range.includes(',') ? range.split(',') : null
        let min, max
        if (Array.isArray(range)) {
          min = range[0]
          max = range[1]
        } else {
          min = this.minValuePrice
          max = this.maxValuePrice
        }
        return (
          [min, max] || this.$store.state.cars.bodySearch.filters.priceRanges
        )
      },
      set(value) {
        const data = {
          key: 'priceRanges',
          value
        }
        this.addBodySearchData(data)
      }
    },
    selectedFuels: {
      get() {
        return this.$store.state.cars.bodySearch.filters.fuel
      },
      set(value) {
        const data = {
          key: 'fuel',
          value
        }
        this.addBodySearchData(data)
      }
    },
    selectedTransmission: {
      get() {
        return this.$store.state.cars.bodySearch.filters.transmission
      },
      set(value) {
        const data = {
          key: 'transmission',
          value
        }
        this.addBodySearchData(data)
      }
    },
    selectedBenefit: {
      get() {
        return this.$store.state.cars.bodySearch.filters.benefits
      },
      set(value) {
        const data = {
          key: 'benefits',
          value
        }
        this.addBodySearchData(data)
      }
    },
    selectedCategory: {
      get() {
        return this.$store.state.cars.bodySearch.filters.carClassesDerco
      },
      set(value) {
        const data = {
          key: 'carClassesDerco',
          value
        }
        this.addBodySearchData(data)
      }
    },
    selectedModel: {
      get() {
        return this.$store.state.cars.bodySearch.filters.models
      },
      set(value) {
        const data = {
          key: 'models',
          value
        }
        this.addBodySearchData(data)
      }
    },
    selectedBrand: {
      get() {
        return this.$store.state.cars.bodySearch.filters.brands
      },
      set(value) {
        const data = {
          key: 'brands',
          value
        }
        this.addBodySearchData(data)
      }
    },
    faChevronUp() {
      return faChevronUp
    },
    faChevronLeft() {
      return faChevronLeft
    },
    faChevronDown() {
      return faChevronDown
    }
  },
  watch: {
    selectedFuels(newValue, oldValue) {
      // Handle changes in individual flavour checkboxes
      if (newValue.length === 0) {
        this.indeterminateFuels = false
        this.allSelectedFuels = false
      } else if (newValue.length === this.selectedFuels.length) {
        this.indeterminateFuels = false
        this.allSelectedFuels = true
      } else {
        this.indeterminateFuels = true
        this.allSelectedFuels = false
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
    },
    async searchAndSaveQuery() {
      this.$emit('change')
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      await this.minifyActions('page', 1)
      const query = this.bodySearchFilters
      await this.$router.push({
        name: this.$route.name,
        query: this.bodySearchFilters
      })
      await queryRouteTrucks(this.$store, query, 1)
      window.scroll(0, 0)
      this.$nextTick(() => {
        this.$nuxt.$loading.finish()
      })
      await this.$store.dispatch('cars/getStoreLinks')
    },
    toggleAllFuels(checked) {
      const itemsFuels = this.filtersApi.fuels.map(f => {
        return f.id
      })
      this.selectedFuels = checked ? itemsFuels.slice() : []
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    }
  }
}
</script>

<style lang="scss">
.panel-filters-to-catalog {
  .collapsed > .when-open,
  .not-collapsed > .when-closed {
    display: none;
  }

  .button-return-home {
    color: #4d4d4d;
    font-size: 12px;
    align-items: center;
    border-color: #e5e5e5 !important;

    .text-button-return {
      font-size: 14px;
    }
  }

  .card-filters-car {
    margin-top: 3.125rem;

    .filter-title {
      font-weight: bold !important;
      color: #4d4d4d;
      font-size: 14px;
      padding-bottom: 1.5625rem;
    }

    .card-section-filters-cars {
      border-color: #4d4d4d;
      border-radius: 5px;
      margin-bottom: 25px !important;

      header {
        border-bottom: none;
        height: auto;
      }

      .button-section-filter-cars {
        border: none;
        background: white;
        color: #4d4d4d;
        font-weight: bold;
        font-size: 14px;
        height: 40px;
      }

      .card-body-filters-cards {
        border-top: 1px solid #4d4d4d;
        max-height: 150px;
        overflow: auto;

        .content-filters-catalog {
          margin-bottom: 0;
          font-weight: normal;
          font-size: 14px;
          color: #4d4d4d;
        }
      }
    }

    .filter-title-filter {
      font-weight: bold !important;
      color: #4d4d4d;
      font-size: 14px;
      padding-bottom: 20px;

      hr {
        border: 3px;
        margin-top: 8px;
        margin-bottom: 0;
        border-top: 3px solid #4d4d4d;
      }
    }

    .body-filter-section {
      max-height: 150px;
      overflow: auto;
    }
  }

  .btn-red-filter-cars {
    background: #dc241f;
    border: none;

    &:hover {
      background: #860617;
    }
  }

  /* The slider itself */
  .slider {
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid #4e4e4e;
    width: 100%;
    height: 10px;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 15px;
      height: 15px;
      background: #4d4d4d;
      cursor: pointer;
    }

    &::-moz-range-thumb {
      width: 15px;
      height: 15px;
      background: #4d4d4d;
      cursor: pointer;
    }
  }
}
</style>
