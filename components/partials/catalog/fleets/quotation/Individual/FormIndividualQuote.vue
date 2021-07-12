<template>
  <div class="form-individual-quote">
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <div>
        <span class="title-form">Solicitar Cotización</span>
      </div>
      <b-card class="card-form-container">
        <b-form @submit.stop.prevent="handleSubmit(sendQuotation)">
          <b-row>
            <b-col md="4">
              <validation-provider
                v-slot="validationContext"
                name="Nombre"
                :rules="{ requiredName: true }"
              >
                <b-form-group
                  id="name-group"
                  label="Nombres"
                  label-for="name-input"
                  label-class="label-form"
                >
                  <b-form-input
                    id="name-input"
                    v-model="form.name"
                    name="name-input"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-name-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-name-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col md="4">
              <validation-provider
                v-slot="validationContext"
                name="Apellido"
                :rules="{ requiredLastName: true }"
                label-class="label-form"
              >
                <b-form-group
                  id="last-name-group"
                  label="Apellidos"
                  label-for="last-name-input"
                  label-class="label-form"
                >
                  <b-form-input
                    id="last-name-input"
                    v-model="form.lastName"
                    name="last-name-input"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-last-name-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-last-name-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col md="4">
              <validation-provider
                v-slot="validationContext"
                name="Denominación"
                :rules="{ required: true }"
              >
                <b-form-group
                  id="denomination-group"
                  label="Denominación"
                  label-for="denomination-input"
                  label-class="label-form"
                >
                  <b-form-select
                    id="denomination-input"
                    v-model="form.denomination"
                    :options="optionsDenomination"
                    name="denomination-input"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-denomination-live-feedback"
                  ></b-form-select>

                  <b-form-invalid-feedback
                    id="input-denomination-live-feedback"
                  >
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
              <validation-provider
                v-slot="validationContext"
                name="Número de Documento"
                :rules="{
                  required: true,
                  validateRuc: true
                }"
              >
                <b-form-group
                  id="number-document-group"
                  label="RUC"
                  label-for="number-document-input"
                  label-class="label-form"
                >
                  <b-form-input
                    id="number-document-input"
                    v-model="form.numberDocument"
                    v-mask="'###########'"
                    name="number-document-input"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-number-document-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback
                    id="input-number-document-live-feedback"
                  >
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col md="4">
              <validation-provider
                v-slot="validationContext"
                name="Celular"
                :rules="{ required: true, digitsPhone: '9' }"
              >
                <b-form-group
                  id="phone-group"
                  label="Celular"
                  label-for="phone-input"
                  label-class="label-form"
                >
                  <b-form-input
                    id="phone-input"
                    v-model="form.phone"
                    v-mask="'9########'"
                    type="tel"
                    name="phone-input"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-phone-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-phone-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col md="4">
              <validation-provider
                v-slot="validationContext"
                name="Email"
                :rules="{ required: true, email: true }"
              >
                <b-form-group
                  id="name-group"
                  label="Email"
                  label-for="email-input"
                  label-class="label-form"
                >
                  <b-form-input
                    id="email-input"
                    v-model="form.email"
                    name="email-input"
                    :state="getValidationState(validationContext)"
                    aria-describedby="email-name-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-email-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
              <validation-provider
                v-slot="validationContext"
                name="Distrito"
                :rules="{
                  required: true
                }"
              >
                <b-form-group
                  id="district-group"
                  label="Distrito"
                  label-for="district-input"
                  label-class="label-form"
                >
                  <b-form-input
                    id="district-input"
                    v-model="form.district"
                    name="district-input"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-district-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-district-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col md="4">
              <validation-provider
                v-slot="validationContext"
                name="Tipo de Vehículo"
                :rules="{ required: true }"
              >
                <b-form-group
                  id="vehicle-type-group"
                  label="Tipo de Vehículo"
                  label-for="phone-input"
                  label-class="label-form"
                >
                  <b-form-input
                    id="vehicle-type-input"
                    v-model="form.vehicleType"
                    name="vehicle-type-input"
                    disabled
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-vehicle-type-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback
                    id="input-vehicle-type-live-feedback"
                  >
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col md="4">
              <validation-provider
                v-slot="validationContext"
                name="Marca"
                :rules="{ required: true }"
              >
                <b-form-group
                  id="brand-group"
                  label="Marca"
                  label-for="brand-input"
                  label-class="label-form"
                >
                  <b-form-input
                    id="brand-input"
                    v-model="form.brand"
                    disabled
                    name="brand-input"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-brand-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-brand-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
              <validation-provider
                v-slot="validationContext"
                name="Modelo"
                :rules="{
                  required: true
                }"
              >
                <b-form-group
                  id="model-group"
                  label="Modelo"
                  label-for="model-input"
                  label-class="label-form"
                >
                  <b-form-input
                    id="model-input"
                    v-model="form.model"
                    name="model-input"
                    disabled
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-model-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-model-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col md="4">
              <validation-provider
                v-slot="validationContext"
                name="Tipo de Vehículo"
                :rules="{ required: true }"
              >
                <b-form-group
                  id="unid-group"
                  label="Unidades"
                  label-for="unid-input"
                  label-class="label-form"
                >
                  <b-form-input
                    id="unid-input"
                    v-model="form.unid"
                    type="number"
                    name="unid-input"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-unid-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-unid-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <validation-provider
                v-slot="validationContext"
                name="Comentario"
                :rules="{ required: false }"
              >
                <b-form-group
                  id="commentary-group"
                  label="Comentario"
                  label-for="unid-input"
                  label-class="label-form"
                >
                  <b-form-textarea
                    id="commentary-input"
                    v-model="form.commentary"
                    rows="3"
                    name="commentary-input"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-commentary-live-feedback"
                  ></b-form-textarea>

                  <b-form-invalid-feedback id="input-commentary-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
          </b-row>
          <validation-provider
            ref="checkbox-1"
            v-slot="validationContext"
            :rules="{ requiredTerms1: true, validateTerms1: true }"
          >
            <b-form-group>
              <b-form-checkbox
                v-model="form.acceptTerms"
                name="checkbox-1"
                :value="true"
                :unchecked-value="false"
                aria-describedby="input-department-live-feedback"
              >
                <b-col
                  class="cotiza__inputCheck"
                  cols="12"
                  sm="12"
                  md="12"
                  lg="12"
                >
                  <div class="terms">
                    Mis datos personales serán tratados conforme a la
                    <u>
                      <b-link
                        target="_blank"
                        href="/privacidad/#clausula-informativa"
                        >Cláusula Informativa</b-link
                      >
                    </u>
                    que he leído.
                  </div>
                </b-col>
              </b-form-checkbox>
              <div
                v-if="validationContext.errors[0]"
                class="invalid-feedback"
                style="display: inline !important"
              >
                {{ validationContext.errors[0] }}
              </div>
            </b-form-group>
          </validation-provider>
          <b-row>
            <b-col cols="12" sm="12" md="12" lg="12">
              <div class="mr-0 pr-0 text-term2">
                Derco podrá enviarme información sobre promociones y ofertas
                comerciales de sus productos y servicios, conforme a la
                <u>
                  <b-link target="_blank" href="/privacidad/#datos-personales"
                    >Cláusula de Datos Personales</b-link
                  >
                </u>
                :
              </div>
            </b-col>
          </b-row>
          <validation-provider
            v-slot="validationContext"
            name="TermsPerson"
            :rules="{ requiredDercoTerm: true }"
          >
            <b-form-group class="pt-3 terms">
              <b-form-radio
                v-model="form.selectedRadio"
                name="some-radios"
                value="Mis datos personales serán tratados conforme a la  Cláusula Informativa que he leído. Si autorizo a Derco."
              >
                <b-col cols="12" sm="12" md="12" lg="12">
                  <span>Si, autorizo a Derco.</span>
                </b-col>
              </b-form-radio>
              <b-form-radio
                v-model="form.selectedRadio"
                name="some-radios"
                value="Mis datos personales serán tratados conforme a la Cláusula Informativa que he leído. No autorizo, prefiero perder la oportunidad de recibir promociones y ofertas."
              >
                <b-col cols="12" sm="12" md="12" lg="12">
                  <span>
                    No autorizo, prefiero perder la oportunidad de recibir
                    promociones y ofertas.
                  </span>
                </b-col>
              </b-form-radio>
              <div
                v-if="validationContext.errors[0]"
                class="invalid-feedback"
                style="display: inline !important"
              >
                {{ validationContext.errors[0] }}
              </div>
            </b-form-group>
          </validation-provider>

          <b-row class="justify-content-md-center">
            <b-col cols="6" md="3">
              <b-button
                variant="primary"
                type="submit"
                class="text-uppercase"
                block
                pill
                >COTIZAR</b-button
              >
            </b-col>
          </b-row>
          <b-row class="pt-4">
            <b-col cols="12" sm="12" md="12" lg="12">
              <div class="mr-0 pr-0 text-term2">
                La presente cotización se realiza en función a los
                <u>
                  <b-link target="_blank" to="/terminos-y-condiciones"
                    >términos y condiciones.</b-link
                  >
                </u>
              </div>
            </b-col>
          </b-row>
        </b-form>
      </b-card>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
export default {
  name: 'FormIndividualQuote',
  components: { ValidationProvider, ValidationObserver },
  props: {
    value: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      form: {
        name: '',
        lastName: '',
        numberDocument: '',
        denomination: 'legal-person',
        vehicleType: '',
        brand: '',
        district: '',
        model: '',
        unid: 2,
        selectedRadio: null,
        acceptTerms: false,
        commentary: null
      },
      optionsDenomination: [{ text: 'Persona Juridica', value: 'legal-person' }]
    }
  },
  mounted() {
    console.log(this.value)
    if (this.value.brand) {
      this.form.brand = this.value.brand.name
      this.form.model = this.value.name
      this.form.vehicleType = this.value.carClass[0]
    }
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    async sendQuotation() {
      const {
        name,
        lastName,
        numberDocument,
        phone,
        email,
        district,
        selectedRadio,
        commentary
      } = this.form
      const body = {
        names: `${name} ${lastName}`,
        tipo_documento: 'RUC',
        n_document: numberDocument,
        telefono: phone,
        email,
        provincia: district,
        concesionario: 'prueba',
        terminos: selectedRadio,
        autos: [
          {
            marca: this.form.brand,
            modelo: this.form.model,
            tipo_vehiculo: this.form.vehicleType,
            flota_solicitar: this.form.unid,
            flota_actual: 0
          }
        ],
        comentario: commentary
      }
      const res = await this.$axios.post(
        'https://cotizadorderco.com/clientFlotas',
        body
      )
      const data = res.data
      console.log(data)
      await this.$router.push({
        name: 'catalogo-derco-flotas-marca-slug-gracias-id',
        params: {
          id: data.data._id,
          ...this.$route.params
        }
      })
    }
  }
}
</script>

<style lang="scss">
.form-individual-quote {
  .title-form {
    font-weight: bold;
    font-size: 20px;
    color: #4d4d4d;
    padding-bottom: 1.5rem;
  }
  .card-form-container {
    border-radius: 5px;
    border: #e5e5e5;
    background: #e5e5e5;
  }
  label.label-form {
    font-weight: bold !important;
    font-size: 14px !important;
    color: #4d4d4d !important;
  }
  .terms {
    font-size: 14px;
    font-weight: normal;
    color: #4d4d4d;
    a {
      color: #4d4d4d;
    }
  }
  .text-term2 {
    font-size: 12px;
    font-weight: normal;
    color: #4d4d4d;
    line-height: 12px;
    a {
      color: #4d4d4d;
    }
  }
}
</style>
