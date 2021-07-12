<template>
  <div class="container">
    <div class="row rowCards">
      <div class="col-12 col-md-12 col-lg-6 col-xl-6 cardVinLeft">
        <p>
          Para confirmar si su vehículo se encuentra en una campaña de llamado a
          revisión, por favor ingrese su número de VIN.
        </p>
        <p>
          <b>¿No sabes dónde está el VIN?</b>
          <span id="popover-target-1">
            <img
              src="@/assets/img/assets/campana_seguridad/iconPregunta.png"
              alt="Icon Pregunta - Derco PERÚ"
            />
          </span>
          <b-popover
            target="popover-target-1"
            triggers="hover focus"
            custom-class="popoverVIN"
            placement="top"
          >
            <img
              class="popoverIMG"
              :src="images.vimExample"
              alt="Icon Pregunta - Derco PERÚ"
            />
          </b-popover>
          <br />
          Nosotros te ayudamos
          <u @click="showModal">
            <strong>mira nuestra imagen referencial aquí.</strong>
          </u>
        </p>
        <b-modal ref="modalClausInf" hide-footer title="VIN">
          <div>
            <div class="d-block text-center">
              <img
                class="modalCampanaIMG"
                :src="images.vimExample"
                alt="Icon Pregunta - Derco PERÚ"
              />
            </div>
            <b-button
              class="mt-3"
              variant="outline-danger"
              block
              @click="hideModal"
            >
              Cerrar
            </b-button>
          </div>
        </b-modal>
        <validation-observer ref="observer" v-slot="{ handleSubmit }">
          <b-form @submit.stop.prevent="handleSubmit(consultarVIN)">
            <validation-provider
              v-slot="validationContext"
              name="VIN"
              :rules="{ required: true, lengthVin: 17, alphaDash: true }"
            >
              <b-form-group id="vin-group" label-for="vin-input">
                <b-form-input
                  id="vin-input"
                  v-model="numberVIN"
                  :state="getValidationState(validationContext)"
                  name="vin-input"
                  type="text"
                  placeholder="VIN / N° DE CHASIS"
                  aria-describedby="input-vin-live-feedback"
                  maxlength="17"
                />
                <b-form-invalid-feedback
                  id="input-vin-live-feedback"
                  class="text-white"
                >
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
            <button type="submit">CONSULTAR</button>
          </b-form>
        </validation-observer>
      </div>
      <div class="col-12 col-md-12 col-lg-6 col-xl-6 cardVinRight">
        <p>
          El llamado a revisión es de carácter gratuito y se puede efectuar en
          cualquier punto de servicio de la red de Derco.
        </p>

        <p>
          Para que sigas disfrutando de la calidad, seguridad y placer de
          conducir tu vehículo, te invitamos a verificar si tu auto está sujeto
          a controles preventivos, revisiones y posibles mejoras que nuestros
          fabricantes consideran necesarios para un óptimo desempeño.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { encrypt } from '@/plugins/crypto'

export default {
  name: 'ConsultaChasis',
  components: { ValidationProvider, ValidationObserver },
  async fetch() {
    await this.$store.dispatch('subsidiaries/getSubsidiariesFilter', {
      featured: true
    })
    await this.$store.dispatch('subsidiaries/getSubsidiariesForSelling', {
      featured: true
    })
  },
  data() {
    return {
      numberVIN: '',
      images: {
        vimExample:
          'https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-vim-ejemplo.png'
      }
    }
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    async consultarVIN() {
      try {
        const formData = {
          vin: this.numberVIN
        }
        const { data } = await this.$axios.post(
          'https://cotizadorderco.com/vins/consultVin',
          formData
        )
        console.log(data)
        if (data.status) {
          const vinEncrypt = await encrypt(this.numberVIN)
          await this.$router.push({
            name: 'campanadeseguridad-vinvalido-vin',
            params: { vin: vinEncrypt },
            query: { status: data.data[0].status }
          })
        } else {
          await this.$router.push({
            name: 'campanadeseguridad-no-registrado'
          })
        }
      } catch (e) {
        console.error('Error:', e)
      }
    },
    showModal() {
      this.$refs.modalClausInf.show()
    },
    hideModal() {
      this.$refs.modalClausInf.hide()
    }
  }
}
</script>
