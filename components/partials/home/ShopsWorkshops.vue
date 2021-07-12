<template>
  <div class="elevated">
    <Title v-model="title" />
    <div v-if="$device.isDesktop" class="search-section-desktop">
      <div class="d-flex justify-content-center filters-subsidiaries">
        <div class="container-filter">
          <b-row class="align-items-end">
            <b-col cols="12" sm="12" md="4">
              <b-form-group id="province">
                <template v-slot:label>
                  <div class="label-class">Provincia</div>
                </template>
                <FormSelect
                  v-model="province"
                  :options="filtersRegions"
                  placeholder="Selecciona una opción"
                  text-field="name"
                  value-field="slug"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" sm="12" md="4">
              <b-form-group id="district" label="Distrito">
                <template v-slot:label>
                  <div class="label-class">Distrito</div>
                </template>
                <FormSelect
                  v-model="district"
                  :options="filterRegionsCommunesForRegion({ slug: province })"
                  placeholder="Selecciona una opción"
                  text-field="name"
                  value-field="slug"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" sm="12" md="4">
              <b-button
                class="btn-custom-select text-center text-uppercase"
                block
                @click="goRouterSubsidiaries"
              >
                Buscar Tienda
              </b-button>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <b-div v-if="$device.isMobile" class="d-flex justify-content-center">
      <b-button
        class="button-red-section text-uppercase"
        @click="
          $router.push({
            name: 'tiendas-y-talleres-province-district-service-brand'
          })
        "
      >
        Ver todas las tiendas y talleres
      </b-button>
    </b-div>
    <client-only>
      <shops-workshops-cards class="content-card" />
    </client-only>
    <div v-if="$device.isDesktop" class="d-flex justify-content-center">
      <b-button
        class="button-red-section text-uppercase"
        @click="
          $router.push({
            name: 'tiendas-y-talleres-province-district-service-brand'
          })
        "
      >
        Ver todas las tiendas y talleres
      </b-button>
    </div>
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import { mapGetters } from 'vuex'
import ShopsWorkshopsCards from '@/components/partials/home/ShopsWorkshopsCards'
import FormSelect from '@/components/common/AdvancedSelect/FormSelect'

export default {
  name: 'ShopsWorkshops',
  components: { FormSelect, ShopsWorkshopsCards, Title },
  async fetch() {
    await this.$store.dispatch('subsidiaries/getSubsidiariesFilter')
    await this.$store.dispatch('subsidiaries/getSubsidiaries', {
      featured: true
    })
  },
  data() {
    return {
      title: 'Tiendas y Talleres',
      province: null,
      district: null
    }
  },
  computed: {
    ...mapGetters({
      filtersRegions: 'subsidiaries/filtersRegions',
      filterRegionsCommunes: 'subsidiaries/filterRegionsCommunes',
      filterRegionsCommunesForRegion:
        'subsidiaries/filterRegionsCommunesForRegion'
    }),
    districts() {
      return []
    }
  },
  methods: {
    goRouterSubsidiaries() {
      const params = {
        province: this.province,
        district: this.district
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
.info-text {
  font-weight: bold;
}

.container-filter {
  border: none;
  width: 49.125rem;
}

.label-class {
  color: #4d4d4d !important;
  font-size: 14px;
  font-weight: bold;
}

.select-class {
  left: 2.5rem;
}

option:checked,
option:hover {
  background-color: #4d4d4d !important;
  color: white;
}

select option[selected] {
  color: green;
}

.btn-custom-select {
  background: #dc241f;
  border: none;
  font-size: 14px;
  font-weight: bold;
  height: 2.5rem;
  border-radius: 20px;
}

:hover.btn-custom-select {
  background: #860617;
}

.form-group {
  margin-bottom: 0;
}

.filters-subsidiaries {
  margin-bottom: 2.96875rem;
}

@media (max-width: 768px) {
  .content-card {
    padding-bottom: 5.75rem;
  }
}
</style>
