<template>
  <b-col cols="12" sm="12" md="6" lg="6" class="quotation-form-car">
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <h5 class="title-form">SOLICITAR COTIZACIÓN</h5>
      <b-card class="card-form-car">
        <b-form
          novalidate
          data-analytics-link-component-name="quote_form"
          data-analytics-link-type="form_start"
          data-analytics-link-description="start"
          @submit.stop.prevent="handleSubmit(validateForm)"
        >
          <b-row>
            <b-col md="12" cols="12">
              <validation-provider
                v-slot="validationContext"
                name="Nombres y Apellidos"
                :rules="{
                  requiredNameAndLastName: true,
                  validateNameAndLastName: true
                }"
              >
                <b-form-group
                  id="name-group"
                  label="Nombres y Apellidos"
                  label-for="name-input"
                  label-class="label-form"
                >
                  <b-form-input
                    id="name-input"
                    v-model="completeName"
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
            <b-col md="12" cols="12">
              <validation-provider
                v-slot="validationContext"
                name="Tipo de Documento"
                :rules="{ requiredDocument: true }"
              >
                <b-form-group
                  id="type-document-group"
                  label="Tipo de Documento"
                  label-for="type-document-input"
                  label-class="label-form"
                >
                  <b-form-select
                    id="type-document-input"
                    v-model="document_type"
                    name="type-document-input"
                    :options="optionsTypeDocument"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-2-live-feedback"
                    @change="document_id = null"
                  ></b-form-select>

                  <b-form-invalid-feedback id="input-2-live-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col md="12" cols="12">
              <validation-provider
                v-slot="validationContext"
                name="Número de Documento"
                :rules="{
                  required: true,
                  validateRuc: document_type === 'ruc',
                  digitsDni: document_type === 'dni' ? '8' : false,
                  digitsDocument:
                    document_type === 'passport' || document_type === 'carnet'
                      ? '12'
                      : false
                }"
              >
                <b-form-group
                  id="number-document-group"
                  label="Número de Documento"
                  label-for="number-document-input"
                  label-class="label-form"
                >
                  <b-form-input
                    id="number-document-input"
                    v-model="document_id"
                    v-mask="docIdMask"
                    :disabled="!document_type"
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
          </b-row>
          <b-row>
            <b-col md="12" cols="12">
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
                    v-model="phone"
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
          </b-row>
          <b-row>
            <b-col md="12" cols="12">
              <validation-provider
                v-slot="validationContext"
                name="Email"
                :rules="{ required: true, email: true }"
              >
                <b-form-group
                  id="name-group"
                  label="Email"
                  label-for="email-input"
                >
                  <b-form-input
                    id="email-input"
                    v-model="email"
                    type="email"
                    name="email-input"
                    autocomplete="off"
                    maxlength="120"
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
            <b-col md="12" cols="12">
              <validation-provider
                v-slot="validationContext"
                name="Departamento"
                :rules="{ requiredDepartment: true }"
              >
                <b-form-group
                  id="department-group"
                  label="Departamento"
                  label-for="department-input"
                  label-class="label-form"
                >
                  <b-form-select
                    id="department-input"
                    v-model="form.department"
                    name="department-input"
                    :options="regions"
                    text-field="name"
                    value-field="slug"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-department-live-feedback"
                    @change="form.subsidiary = null"
                  >
                    <b-form-select-option :value="null" disabled>
                      Seleccionar...
                    </b-form-select-option>
                  </b-form-select>

                  <b-form-invalid-feedback
                    id="input-department-live-feedback"
                    >{{ validationContext.errors[0] }}</b-form-invalid-feedback
                  >
                </b-form-group>
              </validation-provider>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12" cols="12">
              <validation-provider
                v-slot="validationContext"
                name="Concesionario"
                :rules="{ requiredConcessionaire: true }"
              >
                <b-form-group
                  id="name-group-concessionaire"
                  label="Concesionario"
                  label-for="concessionaire-input"
                  label-class="label-form"
                >
                  <b-form-select
                    id="concessionaire-input"
                    v-model="form.subsidiary"
                    :disabled="!form.department"
                    name="concessionaire-input"
                    text-field="name"
                    value-field="slug"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-concessionaire-live-feedback"
                  >
                    <b-form-select-option :value="null" disabled>
                      Seleccionar...
                    </b-form-select-option>
                    <b-form-select-option-group
                      v-for="(item, index) in subsidiariesForRegion(
                        form.department
                      )"
                      :key="index"
                      :label="item.name"
                    >
                      <b-form-select-option
                        v-for="(subItem, index2) in item.subsidiaries"
                        :key="index2"
                        :value="subItem"
                        >{{ subItem.name }}</b-form-select-option
                      >
                    </b-form-select-option-group>
                  </b-form-select>

                  <b-form-invalid-feedback
                    id="input-concessionaire-live-feedback"
                  >
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
            <b-col cols="6">
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
  </b-col>
</template>
<script>
import { mapGetters } from 'vuex'
import formValidations from '@/mixins/formValidation'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'QuotationForm',
  components: { ValidationProvider, ValidationObserver },
  mixins: [formValidations],
  props: {
    version: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  async fetch() {
    await this.$store.dispatch('subsidiaries/getSubsidiariesSetHeader', {
      'blog-url': this.$route.params.marca || 'dercocenter'
    })
    await this.$store.dispatch('versions/getVersions')
  },
  data() {
    return {
      zone: '',
      subsidiary: '',
      document_type: null,
      completeName: '',
      first_name: '',
      last_name: '',
      document_id: '',
      document_message: '',
      terms: '',
      year: this.$route.params.year,
      legal: '',
      title: 'Tiendas y Talleres',
      selected: null,
      selected2: null,
      name: '',
      lastName: '',
      dni: '',
      phone: '',
      email: '',
      store: '',
      form: {
        department: null,
        subsidiary: null,
        selectedRadio: null,
        acceptTerms: null
      },
      optionsTypeDocument: [
        { value: null, text: 'Seleccionar...' },
        { value: 'dni', text: 'DNI' },
        { value: 'ruc', text: 'RUC' },
        { value: 'passport', text: 'Pasaporte' },
        { value: 'carnet', text: 'Carnet de Extranjería' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      subsidiaries: 'subsidiaries/subsidiariesTotal',
      filtersRegions: 'subsidiaries/filtersRegions',
      filterRegionsCommunes: 'subsidiaries/filterRegionsCommunes',
      regions: 'subsidiaries/regions',
      subsidiariesZones: 'subsidiaries/subsidiariesZones',
      subsidiariesForRegion: 'subsidiaries/subsidiariesForRegion'
    }),
    faChevronDown() {
      return faChevronDown
    },
    subsidiaryObject() {
      return this.$store.getters['subsidiaries/getSubsidiaryByCode'](
        this.form.subsidiary.code
      )
    },
    textLegal() {
      if (this.legal === 'si') {
        return 'Mis datos personales serán tratados conforme a la  Cláusula Informativa que he leído. Si autorizo a Derco.'
      } else {
        return 'Mis datos personales serán tratados conforme a la Cláusula Informativa que he leído. No autorizo, prefiero perder la oportunidad de recibir promociones y ofertas.'
      }
    },
    cars() {
      const ids = this.$route.params.id
      if (ids) {
        const ids = this.$route.params.id.toString().split(',')
        return this.$store.getters['versions/getCarsForSaveRequest'](
          ids,
          this.year
        )
      }
      return []
    },
    getVersion() {
      return this.version
    },
    docIdMask() {
      switch (this.document_type) {
        case 'ruc':
          return '###########'
        case 'dni':
          return '########'
        default:
          return 'XXXXXXXXXXXX'
      }
    },
    validations() {
      const fullName = this.completeName.split(' ').filter(Boolean)
      return fullName.length > 1
    }
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    async validateForm() {
      this.saveDataLocalStorage()
      const checkGrecaptcha = await this.checkGrecaptcha()
      if (!checkGrecaptcha) {
        return
      }
      const name = this.completeName.split(' ')
      let miName
      let miLastName = ''
      name.map((array, index) => {
        if (index === 0) {
          miName = array
        } else {
          miLastName = `${miLastName}${array} `
        }
      })
      this.last_name = miLastName.trim()
      this.first_name = miName

      // finally send quotation
      // prepare versions to insert in cars array
      const data = {
        // eslint-disable-next-line no-undef
        uuid: md5(this.version.id + new Date()),
        id_remote: Math.floor(Math.random() * 100000000),
        document_id: this.document_id,
        document_type: this.mappedDocType(this.document_type),
        name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        commune: this.subsidiaryObject.commune.name,
        province: this.subsidiaryObject.commune.name,
        origin: process.env.BASE_URL,
        utm_source_url:
          sessionStorage.getItem('querySource') || process.env.BASE_URL,
        subsidiary_code: this.subsidiaryObject.code,
        subsidiary_name: this.subsidiaryObject.name,
        subsidiary_address: this.subsidiaryObject.address,
        region_id: 1, // this.subsidiaryObject.region_id,
        subsidiary_schedule:
          '[{"days":"1,2,3,4,5","name":"Lunes a Viernes","start_hour":"09:00:00","end_hour":"20:00:00"},{"days":"6","name":"Sabado","start_hour":"10:00:00","end_hour":"14:00:00"},{"days":"7","name":"Domingo","start_hour":"","end_hour":""}]',
        subsidiary_extras: JSON.stringify({
          location: this.subsidiaryObject.location,
          services: this.subsidiaryObject.services
        }),
        legal_text: 'None',
        session_id: '123456789',
        cars: this.cars,
        legal: this.form.selectedRadio
      }

      this.$store
        .dispatch('quotations/save', data)
        .then(() => {
          this.$router.push({
            name:
              'catalogo-derco-autos-marca-modelo-version-year-id-cotizar-gracias-uuid',
            params: {
              uuid: data.uuid,
              ...this.$route.params
            }
          })
        })
        .catch(e => console.log(e))
    },
    async checkGrecaptcha() {
      let result = false
      try {
        const token = await this.$recaptcha.execute('login')
        console.log('ReCaptcha token:', token)
        // request to grecaptcha validate and wait for response
        const captchaResponse = await this.$store.dispatch(
          'quotations/verifyRecaptcha',
          {
            token
          }
        )
        // stop if grecaptcha fails
        if (!captchaResponse.data.success) {
          console.log('fail grecaptcha validation')
          console.log(captchaResponse.data)
        } else {
          console.log(captchaResponse.data)
          result = true
        }
      } catch (error) {
        console.log('Login error:', error)
      }

      return result
    },
    saveDataLocalStorage() {
      const userFormData = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        rut: this.rut,
        phone: this.phone,
        subsidiary: this.subsidiary,
        document_type: this.document_type,
        document_id: this.document_id
      }
      localStorage.setItem('quotation-form-data', JSON.stringify(userFormData))
    },
    mappedDocType(type) {
      const types = {
        ruc: 'RUC',
        dni: 'DNI',
        passport: 'Pasaporte',
        carnet: 'Carnet de Extranjería'
      }
      return types[type]
    }
  }
}
</script>

<style lang="scss">
.quotation-form-car {
  .title-form {
    font-weight: bold;
    font-size: 20px;
    color: #4d4d4d;
    padding-bottom: 1.5rem;
  }
  .card-form-car {
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
