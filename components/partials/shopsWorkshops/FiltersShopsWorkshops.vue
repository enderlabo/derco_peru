<template>
  <div class="filters">
    <template>
      <b-row class="my-4">
        <div class="col-lg-15">
          <b-form-group id="provinces">
            <template v-slot:label>
              <div class="label-class">Provincia</div>
            </template>
            <form-select
              v-model="province"
              :options="filtersRegions"
              text-field="name"
              value-field="slug"
              placeholder="Selecciona una opción"
            />
          </b-form-group>
        </div>

        <div class="col-lg-15">
          <b-form-group id="districts">
            <template v-slot:label>
              <div class="label-class">Distrito</div>
            </template>
            <form-select
              v-model="district"
              :options="filterRegionsCommunesForRegion({ slug: province })"
              text-field="name"
              value-field="slug"
              placeholder="Selecciona una opción"
            />
          </b-form-group>
        </div>
        <div class="col-lg-15">
          <b-form-group id="services">
            <template v-slot:label>
              <div class="label-class">Servicios disponibles</div>
            </template>
            <form-select
              v-model="service"
              :options="filterServices"
              text-field="name"
              value-field="slug"
              placeholder="Selecciona una opción"
            />
          </b-form-group>
        </div>
        <div class="col-lg-15">
          <b-form-group id="brands">
            <template v-slot:label>
              <div class="label-class">Marcas</div>
            </template>
            <form-select
              v-model="brand"
              :options="filters.brands"
              text-field="name"
              value-field="slug"
              placeholder="Selecciona una opción"
            />
          </b-form-group>
        </div>
        <div class="col-lg-15">
          <b-button block class="btn-search" @click="goRouterSubsidiaries"
            >BUSCAR TIENDA
          </b-button>
        </div>
      </b-row>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { faChevronLeft, faFilter } from '@fortawesome/free-solid-svg-icons'
import FormSelect from '@/components/common/AdvancedSelect/FormSelect'

export default {
  name: 'FiltersShopsWorkshops',
  components: { FormSelect },
  async fetch() {
    this.district = this.$route.params.district
      ? this.$route.params.district
      : null
    this.province = this.$route.params.province || null
    this.brand = this.$route.params.brand || null
    this.service = this.$route.params.service || null
    await this.$store.dispatch('resources/getFilters')
    await this.$store.dispatch('subsidiaries/getSubsidiariesFilter')
  },
  data() {
    return {
      district: null,
      province: null,
      brand: null,
      service: null
    }
  },
  computed: {
    ...mapGetters({
      filtersRegions: 'subsidiaries/filtersRegions',
      filterRegionsCommunesForRegion:
        'subsidiaries/filterRegionsCommunesForRegion',
      filterRegionsForRegion: 'subsidiaries/filterRegionsCommunesForRegion',
      subsidiaries: 'subsidiaries/subsidiaries',
      filterServices: 'subsidiaries/filterServices',
      filters: 'resources/filters'
    }),
    faFilter() {
      return faFilter
    },
    faChevronLeft() {
      return faChevronLeft
    },
    itemsForList() {
      const newSubsidiaries = this.subsidiaries.filter(s => {
        return s.commune.slug === this.district
      })
      return newSubsidiaries.length >= 1
        ? this.paginationList(newSubsidiaries)
        : this.paginationList(this.subsidiaries)
    }
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    goRouterSubsidiaries() {
      const params = {
        province: this.province || null,
        district: this.district || null,
        service: this.service || null,
        brand: this.brand || null
      }
      this.$router.push({
        name: 'tiendas-y-talleres-province-district-service-brand',
        params
      })
    }
  }
}
</script>

<style scoped>
.description {
  font-size: 14px;
  color: #4d4d4d;
  font-weight: bold;
}
.label-class {
  color: #4d4d4d !important;
  margin-left: 1.3125rem;
  font-size: 14px;
  font-weight: bold;
}

.btn-search {
  margin-top: 28px;
  background: #dc241f;
  border: none;
  font-weight: bold;
  font-size: 14px;
  border-radius: 20px;
  height: 40px;
}
@media (max-width: 768px) {
  .col-lg-15 {
    width: 100%;
    float: left;
  }
  .custom-select {
    width: 100% !important;
  }
}
</style>
