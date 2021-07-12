<template>
  <div>
    <response-message />
    <div class="row titleForm">
      <div class="accordion" role="tablist">
        <b-card
          v-for="list in resultDataPOST"
          :key="list._id"
          no-body
          class="mb-1"
        >
          <b-card-header header-tag="header" role="tab">
            <b-button v-b-toggle.accordion-1 block variant="info">
              <span>{{ list.campana_resumen }}</span>
              <span>
                Detalle
                <img
                  src="@/assets/img/assets/campana_seguridad/down_arrow.png"
                  alt="down_arrow Derco Perú"
                />
              </span>
            </b-button>
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text>{{ list.campana_descripcion }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <b-form-group id="agendaVIN">
        <template v-slot:label>
          <div class="label-class">Agenda tu cita aquí</div>
        </template>
        <b-form-select
          v-model="selectedSub"
          :options="subsidiaries"
          text-field="name"
          value-field="slug"
        >
          <template #first>
            <b-form-select-option :value="null" disabled>
              Selecciona una opción
            </b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>
      <div v-if="showTiendas" class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Taller</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tienda in tiendas" :key="tienda.id.toString()">
              <td>{{ tienda.name }}</td>
              <td>
                <b>Dirección: </b>{{ tienda.address }} <br />
                <b>Teléfono: </b> &nbsp;(01) 713-5000 <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ResponseMessage from '@/components/partials/campana-seguridad/responseMessage'
import { mapGetters } from 'vuex'

export default {
  name: 'VinResponse',
  components: { ResponseMessage },
  async fetch() {
    await this.$store.dispatch('subsidiaries/getSubsidiariesFilter', {
      featured: true
    })
    await this.$store.dispatch('subsidiaries/getSubsidiariesForSelling', {
      featured: true
    })
    await this.$store.dispatch('vin/searchVin', this.$route.params.vin)
  },

  data() {
    return {
      numberVIN: '',
      resultVIN: false,
      communesStore: [],
      selectedSub: null,
      vinValid: false,
      showTiendas: false,
      tiendas: [],
      textoVIN:
        'Para confirmar si su vehículo se encuentra en una campaña de llamado a revisión, por favor ingrese su número de VIN. ¿No sabes dónde está el VIN? Nosotros te ayudamos mira nuestra imagen referencial aquí.'
    }
  },
  computed: {
    ...mapGetters({
      subsidiaries: 'subsidiaries/filtersRegions',
      communes: 'subsidiaries/filterRegionsCommunes',
      resultDataPOST: 'vin/vin'
    })
  },
  watch: {
    // whenever question changes, this function will run
    selectedSub() {
      if (this.selectedSub === 'lima') {
        this.showTiendas = false
        window.open('https://dercoperu.agendapro.com/pe', '_blank')
      } else {
        this.showTiendas = true
      }
      this.tiendas = this.communesStore.filter(
        item => item.slug === this.selectedSub
      )
      this.tiendas = this.tiendas[0].subsidiaries
    }
  },
  mounted() {
    this.communesStore = this.communes
  }
}
</script>

<style scoped></style>
