<template>
  <div class="panel-filters-to-catalog">
    <b-button
      pill
      block
      variant="light"
      class="button-return-home"
      @click="returnPage"
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
                v-for="(mB, index) in modelsForBrands"
                v-slot="{ ariaDescribedby }"
                :key="index"
                class="content-filters-catalog"
              >
                <span class="text-uppercase text-primary font-weight-bold">
                  {{ index }} :
                </span>
                <b-form-checkbox
                  v-for="(option, indexMB) in mB"
                  :key="indexMB"
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
      <b-card
        v-if="categoriesForModels.length > 1"
        no-body
        class="mb-1 card-section-filters-cars"
      >
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
                  v-for="(option, index) in categoriesForModels"
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
      <div>
        <div class="filter-title-filter">
          <span class="text-uppercase">Transmisión </span>
          <hr />
        </div>

        <b-form-group v-slot="{ ariaDescribedby }" class="body-filter-section">
          <b-form-checkbox
            v-for="(option, index) in transmissionsForModels"
            :key="index"
            v-model="selectedTransmission"
            :aria-describedby="ariaDescribedby"
            :value="option.value"
            class="text-capitalize mx-1 my-1"
            size="sm"
          >
            {{ option.value }}
          </b-form-checkbox>
        </b-form-group>
      </div>
      <div>
        <div class="filter-title-filter">
          <span class="text-uppercase">Combustible </span>
          <hr />
        </div>
        <b-form-group class="body-filter-section">
          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox
              v-for="(option, index) in fuelsForModels"
              :key="index"
              v-model="selectedFuels"
              :aria-describedby="ariaDescribedby"
              :value="option.value"
              class="text-capitalize mx-1 my-1"
              size="sm"
            >
              {{ option.value }}
            </b-form-checkbox>
          </template>
        </b-form-group>
      </div>
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
      <b-card no-body class="mb-1 card-section-filters-cars">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button
            v-b-toggle.accordion-benefits
            class="w-100 button-section-filter-cars"
          >
            <span class="float-left"> BENEFICIO </span>
            <span class="float-right when-open">
              <fa :icon="faChevronUp" />
            </span>
            <span class="float-right when-closed">
              <fa :icon="faChevronDown" />
            </span>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-benefits" role="tabpanel">
          <template v-slot:default="{}">
            <b-card-body class="p-2 card-body-filters-cards">
              <b-form-group
                v-slot="{ ariaDescribedby }"
                class="content-filters-catalog"
              >
                <b-form-checkbox
                  v-for="(option, index) in filtersApi.benefits"
                  :key="index"
                  v-model="selectedBenefit"
                  button-variant="danger"
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
      <div class="btn-container">
        <b-button
          pill
          block
          class="btn-red-filter-cars"
          @click="searchAndSaveQuery"
        >
          APLICAR FILTROS
        </b-button>
      </div>
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
import { queryRouteCars } from '@/utils'

export default {
  name: 'FilterComponent',
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
      bodySearch: 'cars/bodySearch',
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
    fuelsForModels() {
      const newFuels = []
      this.selectedModel.map(nM => {
        const model = this.filtersApi.models.find(m => m.slug === nM)
        this.filtersApi.fuels
          .filter(fF => {
            const ffF = model.combustible.find(c => c === fF.value)
            return !!ffF
          })
          .map(fF => {
            const f = newFuels.find(nF => fF.value === nF.value)
            if (!f) {
              newFuels.push(fF)
            }
          })
      })
      return newFuels.length >= 1 ? newFuels : this.filtersApi.fuels
    },
    transmissionsForModels() {
      const newTransmissions = []
      this.selectedModel.map(nM => {
        const model = this.filtersApi.models.find(m => m.slug === nM)
        this.filtersApi.transmissions
          .filter(ct => {
            const fTT = model.tipo_transmision.find(tT => {
              return tT.toLowerCase() === ct.value.toLowerCase()
            })
            return !!fTT
          })
          .map(ttF => {
            const tF = newTransmissions.find(tC => {
              return tC.value === ttF.value
            })
            if (!tF) {
              newTransmissions.push(ttF)
            }
          })
      })
      return newTransmissions.length >= 1
        ? newTransmissions
        : this.filtersApi.transmissions
    },
    categoriesForModels() {
      const newCategorias = []
      this.selectedModel.map(nM => {
        const model = this.filtersApi.models.find(m => m.slug === nM)
        this.filtersApi.carClassesDerco
          .filter(ct => {
            return ct.name === model.carClassDerco
          })
          .map(cTF => {
            const cF = newCategorias.find(nC => nC.slug === cTF.slug)
            if (!cF) {
              newCategorias.push(cTF)
            }
            return cTF
          })
      })
      return newCategorias.length >= 1
        ? newCategorias
        : this.filtersApi.carClassesDerco
    },
    modelsForBrands() {
      let result = []
      const brandsQuery = this.selectedBrand
      const brands = this.getModelForBrands(
        Array.isArray(brandsQuery) ? brandsQuery : [brandsQuery]
      )
      result = brands.reduce(function (r, a) {
        r[a.brand_slug] = r[a.brand_slug] || []
        r[a.brand_slug].push(a)
        return r
      }, Object.create(null))
      return result
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
        this.minifyActions('priceRanges', value)
      }
    },
    selectedFuels: {
      get() {
        return this.$store.state.cars.bodySearch.filters.fuel
      },
      set(value) {
        this.minifyActions('fuel', value)
      }
    },
    selectedTransmission: {
      get() {
        return this.$store.state.cars.bodySearch.filters.transmission
      },
      set(value) {
        this.minifyActions('transmission', value)
      }
    },
    selectedBenefit: {
      get() {
        return this.$store.state.cars.bodySearch.filters.benefits
      },
      set(value) {
        this.minifyActions('benefits', value)
      }
    },
    selectedCategory: {
      get() {
        return this.$store.state.cars.bodySearch.filters.carClassesDerco
      },
      set(value) {
        this.minifyActions('carClassesDerco', value)
      }
    },
    selectedModel: {
      get() {
        return this.$store.state.cars.bodySearch.filters.models
      },
      set(value) {
        this.minifyActions('models', value)
      }
    },
    selectedBrand: {
      get() {
        return this.$store.state.cars.bodySearch.filters.brands
      },
      set(value) {
        this.minifyActions('brands', value)
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
    toggleAllFuels(checked) {
      const itemsFuels = this.filtersApi.fuels.map(f => {
        return f.id
      })
      this.selectedFuels = checked ? itemsFuels.slice() : []
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
      await queryRouteCars(this.$store, query, 1)
      this.$nextTick(() => {
        this.$nuxt.$loading.finish()
      })
      window.scroll(0, 0)
      await this.$store.dispatch('cars/getStoreLinks')
    },
    async returnPage() {
      await this.$router.go(-1)
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      await this.minifyActions('page', 1)
      await queryRouteCars(this.$store, this.$route.query, 1)
      await this.$store.dispatch('cars/getStoreLinks')
      this.$nextTick(() => {
        this.$nuxt.$loading.finish()
      })
      window.scroll(0, 0)
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
  .range-value {
    font-size: 12px !important;
    color: #4d4d4d;
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

  .btn-container {
    padding-top: 1rem;
    padding-bottom: 1rem;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: #ffffff;
    z-index: 50;

    .btn-red-filter-cars {
      background: #dc241f;
      border: none;

      &:hover {
        background: #860617;
      }
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
