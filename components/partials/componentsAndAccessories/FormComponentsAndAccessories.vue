<template>
  <div class="form-components-and-accessories">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="6">
          <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <b-form @submit.stop.prevent="handleSubmit(submitData)">
              <b-card class="z-10 position-static card-form">
                <div class="description">
                  <p class="text-center">
                    Ingresa tus datos, escoge el local más cercano y te
                    comunicaremos con uno de nuestros asesores
                  </p>
                </div>
                <b-row>
                  <b-col md="6" cols="12">
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
                          v-model="form.nameAndLastName"
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
                  <b-col md="6" cols="12">
                    <validation-provider
                      v-slot="validationContext"
                      name="DNI"
                      :rules="{
                        required: true,
                        digitsDni: '8'
                      }"
                    >
                      <b-form-group
                        id="name-group"
                        label="DNI"
                        label-for="dni-input"
                        label-class="label-form"
                      >
                        <b-form-input
                          id="dni-input"
                          v-model="form.document"
                          name="dni-input"
                          :state="getValidationState(validationContext)"
                          aria-describedby="input-dni-live-feedback"
                        ></b-form-input>

                        <b-form-invalid-feedback id="input-dni-live-feedback">
                          {{ validationContext.errors[0] }}
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="6" cols="12">
                    <validation-provider
                      v-slot="validationContext"
                      name="Teléfono"
                      :rules="{ required: true, digitsPhone: '9' }"
                    >
                      <b-form-group
                        id="phone-group"
                        label="Teléfono"
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
                  <b-col md="6" cols="12">
                    <validation-provider
                      v-slot="validationContext"
                      name="Email"
                      :rules="{ required: true, email: true }"
                    >
                      <b-form-group
                        id="name-group"
                        label="E-mail"
                        label-for="email-input"
                      >
                        <b-form-input
                          id="email-input"
                          v-model="form.email"
                          type="email"
                          name="email-input"
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
                  <b-col md="6" cols="12">
                    <validation-provider
                      v-slot="validationContext"
                      name="Distrito"
                      :rules="{
                        required: true
                      }"
                    >
                      <b-form-group
                        id="name-group"
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

                        <b-form-invalid-feedback
                          id="input-district-live-feedback"
                        >
                          {{ validationContext.errors[0] }}
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>
                  <b-col md="6" cols="12">
                    <validation-provider
                      v-slot="validationContext"
                      name="VIN"
                      :rules="{
                        required: true,
                        // lengthVin: 17,
                        alphaDash: true
                      }"
                    >
                      <b-form-group
                        id="vin-group"
                        label="Placa o VIN"
                        label-for="vin-input"
                        label-class="label-form"
                      >
                        <b-form-input
                          id="vin-input"
                          v-model="form.vin"
                          :state="getValidationState(validationContext)"
                          name="vin-input"
                          type="text"
                          aria-describedby="input-vin-live-feedback"
                          maxlength="17"
                        />
                        <b-form-invalid-feedback id="input-vin-live-feedback">
                          {{ validationContext.errors[0] }}
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="6" cols="12">
                    <validation-provider
                      v-slot="validationContext"
                      name="Categoría en consulta"
                      :rules="{
                        required: true
                      }"
                    >
                      <b-form-group
                        id="category-group"
                        label="Categoría en consulta"
                        label-for="category-input"
                        label-class="label-form"
                      >
                        <b-form-select
                          id="category-input"
                          v-model="form.category"
                          :options="categories"
                          name="category-input"
                          :state="getValidationState(validationContext)"
                          aria-describedby="input-category-live-feedback"
                          @change="changeCategory"
                        ></b-form-select>

                        <b-form-invalid-feedback
                          id="input-category-live-feedback"
                        >
                          {{ validationContext.errors[0] }}
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>
                  <b-col md="6" cols="12">
                    <validation-provider
                      v-slot="validationContext"
                      name="Tipo de repuesto"
                      :rules="{
                        required: true
                      }"
                    >
                      <b-form-group
                        id="type-group"
                        label="Tipo de repuesto"
                        label-for="type-input"
                        label-class="label-form"
                      >
                        <b-form-select
                          id="type-input"
                          v-model="form.type"
                          :disabled="!form.category"
                          :options="optionsType"
                          name="type-input"
                          :state="getValidationState(validationContext)"
                          aria-describedby="input-type-live-feedback"
                        ></b-form-select>

                        <b-form-invalid-feedback id="input-type-live-feedback">
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
                      name="Comentario"
                      :rules="{ required: false }"
                    >
                      <b-form-group
                        id="commentary-group"
                        label="Comentario"
                        label-for="commentary-input"
                        label-class="label-form"
                      >
                        <b-form-textarea
                          v-model="form.commentary"
                          rows="3"
                          name="commentary-input"
                          :state="getValidationState(validationContext)"
                          aria-describedby="input-commentary-live-feedback"
                        ></b-form-textarea>
                        <b-form-invalid-feedback
                          id="input-commentary-live-feedback"
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
                          <b-col cols="12" sm="12" md="12" lg="12">
                            <div class="terms">
                              Mis datos personales serán tratados conforme a la
                              <u>
                                <b-link
                                  target="_blank"
                                  href="/privacidad/#clausula-informativa"
                                  rel="noopener noreferrer"
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
                  </b-col>
                </b-row>
                <b-row class="justify-content-center">
                  <b-col cols="8" md="4">
                    <b-button variant="primary" type="submit" block pill>
                      Enviar
                    </b-button>
                  </b-col>
                </b-row>
              </b-card>
            </b-form>
          </validation-observer>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import validate from '@/mixins/validate'
import categories from '@/data/ComponentsAndAccesories.json'

export default {
  name: 'FormComponentsAndAccessories',
  components: { ValidationObserver, ValidationProvider },
  mixins: [validate],
  data() {
    return {
      categories,
      form: {
        nameAndLastName: null,
        document: null,
        phone: null,
        email: null,
        district: null,
        vin: null,
        category: null,
        type: null,
        commentary: null
      }
    }
  },
  computed: {
    optionsType() {
      if (this.form.category) {
        const category = this.categories.find(
          i => i.value === this.form.category
        )
        return category.items
      }
      return {}
    }
  },
  methods: {
    async submitData() {
      try {
        console.log('init send data')
        const form = {
          nombre: this.form.nameAndLastName,
          telefono: this.form.phone,
          dni: this.form.document,
          Email: this.form.email,
          distrito: this.form.district,
          vin: this.form.vin,
          categoria: this.form.category,
          repuesto: this.form.type,
          comentario: this.form.commentary
        }
        await this.$axios.post('https://cotizadorderco.com/newdercoparts', form)
        await this.$router.push({ name: 'repuestos-y-accesorios-gracias' })
      } catch (e) {
        console.log(e)
      }
    },
    changeCategory(e) {
      if (e === 'Otros') {
        this.form.type = 'Otros'
      } else {
        this.form.type = null
      }
    }
  }
}
</script>

<style lang="scss">
.form-components-and-accessories {
  padding-top: 2rem;
  padding-bottom: 2rem;

  .card-form {
    padding: 1.8rem;
    background: #fafafa;
    border: none;
  }

  p,
  .terms {
    font-size: 16px;
    color: #4d4d4d;
  }

  .label-form {
    font-size: 14px;
    font-weight: bold;
    color: #4d4d4d;
  }

  @include media-breakpoint-down(md) {
    .card-form {
      padding: 0;
    }
  }
}
</style>
