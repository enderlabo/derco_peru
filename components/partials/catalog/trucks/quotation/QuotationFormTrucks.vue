<template>
  <div class="quotation-form-trucks">
    <div class="title-form">Solicitar Cotización</div>
    <b-card class="card-form-trucks">
      <validation-observer ref="observer" v-slot="{ handleSubmit }">
        <b-form @submit.stop.prevent="handleSubmit(validateForm)">
          <b-row>
            <b-col md="6">
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
            <b-col md="6">
              <validation-provider
                v-slot="validationContext"
                name="Apellido"
                :rules="{ requiredLastName: true }"
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
          </b-row>
          <b-row>
            <b-col md="6">
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
                    v-model="form.typeDocument"
                    name="type-document-input"
                    :options="typeDocuments"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-2-live-feedback"
                    @change="form.numberDocument = null"
                  ></b-form-select>

                  <b-form-invalid-feedback id="input-2-live-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col md="6">
              <validation-provider
                v-slot="validationContext"
                name="Número de Documento"
                :rules="{
                  required: true,
                  validateRuc: form.typeDocument === 'ruc',
                  digitsDni: form.typeDocument === 'dni' ? '8' : false,
                  digitsDocument:
                    form.typeDocument === 'passport' ||
                    form.typeDocument === 'carnet'
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
                    v-model="form.numberDocument"
                    v-mask="docIdMask"
                    :disabled="!form.typeDocument"
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
          <template v-if="form.typeDocument === 'ruc'">
            <validation-provider
              v-slot="validationContext"
              name="Razón Social"
              :rules="{ required: true }"
            >
              <b-form-group
                id="business-name-group"
                label="Razón Social"
                label-for="business-name-input"
                label-class="label-form"
              >
                <b-form-input
                  id="business-name-input"
                  v-model="form.businessName"
                  :state="getValidationState(validationContext)"
                  name="business-name-input"
                  aria-describedby="business-name-live-feedback"
                />
                <b-form-invalid-feedback id="business-name-live-feedback">
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </template>
          <validation-provider
            v-slot="validationContext"
            name="Email"
            :rules="{ required: true, email: true }"
          >
            <b-form-group
              id="email-group"
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
          <b-row>
            <b-col md="6">
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
            <b-col md="6">
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
                  ></b-form-select>

                  <b-form-invalid-feedback
                    id="input-department-live-feedback"
                    >{{ validationContext.errors[0] }}</b-form-invalid-feedback
                  >
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
      </validation-observer>
    </b-card>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapGetters } from 'vuex'
export default {
  name: 'QuotationFormTrucks',
  components: { ValidationProvider, ValidationObserver },
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
      'blog-url': 'camiones-jac'
    })
    await this.$store.dispatch('versions/getVersions')
  },
  data() {
    return {
      typeDocuments: [
        { value: null, text: 'Seleccionar...' },
        { value: 'dni', text: 'DNI' },
        { value: 'ruc', text: 'RUC' },
        { value: 'passport', text: 'Pasaporte' },
        { value: 'carnet', text: 'Carnet de Extranjería' }
      ],
      year: this.$route.params.year,
      form: {
        name: null,
        lastName: null,
        typeDocument: null,
        businessName: null,
        numberDocument: null,
        phone: null,
        email: null,
        department: null,
        subsidiary: null,
        acceptTerms: null,
        selectedRadio: null
      }
    }
  },
  computed: {
    ...mapGetters({
      regions: 'subsidiaries/regions',
      subsidiariesForRegion: 'subsidiaries/subsidiariesForRegion'
    }),
    subsidiaryObject() {
      console.log(this.regions)
      if (this.regions.length) {
        const { subsidiaries } = this.regions.find(
          i => i.slug === this.form.department
        )
        return subsidiaries.length ? subsidiaries[0] : {}
      }
      return {}
    },
    regionsName() {
      const region = this.regions.find(i => i.slug === this.form.department)
      return region || {}
    },
    codeSub() {
      const code = this.subsidiaryObject.code.includes('-')
        ? this.subsidiaryObject.code.split('-')[0]
        : this.subsidiaryObject.code
      return code || null
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
      switch (this.form.typeDocument) {
        case 'ruc':
          return '###########'
        case 'dni':
          return '########'
        default:
          return 'XXXXXXXXXXXX'
      }
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
      const codeSub = this.subsidiaryObject.code.includes('-')
        ? this.subsidiaryObject.code.split('-')[0]
        : this.subsidiaryObject.code
      const data = {
        // eslint-disable-next-line no-undef
        uuid: md5(this.version.id + new Date()),
        id_remote: Math.floor(Math.random() * 100000000),
        document_id: this.form.numberDocument,
        document_type: this.mappedDocType(this.form.typeDocument),
        name: this.form.name,
        last_name: this.form.lastName,
        email: this.form.email,
        phone: this.form.phone,
        commune: this.subsidiaryObject.commune.name,
        province: this.regionsName.name,
        origin: process.env.BASE_URL,
        utm_source_url:
          sessionStorage.getItem('querySource') || process.env.BASE_URL,
        subsidiary_code: codeSub,
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
        type_car: 'truck',
        business_name: this.form.businessName,
        cars: this.cars,
        legal: this.form.selectedRadio
      }

      this.$store
        .dispatch('quotations/save', data)
        .then(() => {
          this.$router.push({
            name:
              'catalogo-derco-camiones-y-maquinarias-marca-modelo-version-year-id-cotizar-gracias-uuid',
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
      const token = await this.$recaptcha.execute('login')
      const { data } = await this.$store.dispatch(
        'quotations/verifyRecaptcha',
        {
          token
        }
      )
      if (data.success) {
        result = true
      }
      return result
    },
    saveDataLocalStorage() {
      const userFormData = {
        first_name: this.form.name,
        last_name: this.form.lastName,
        email: this.form.email,
        phone: this.form.phone,
        subsidiary: this.form.subsidiary,
        document_type: this.form.typeDocument,
        document_id: this.form.numberDocument
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
.quotation-form-trucks {
  .title-form {
    font-weight: bold;
    font-size: 20px;
    color: #4d4d4d;
    padding-bottom: 1.5rem;
  }

  .label-form {
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

  .card-form-trucks {
    border-radius: 5px;
    border: #e5e5e5;
    background: #e5e5e5;
  }
}
</style>
