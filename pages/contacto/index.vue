<template>
  <div class="contacto-component elevated">
    <b-container>
      <!-- <Title v-model="title" /> -->
      <div class="fakeSpace"></div>
      <div class="search-section">
        <div>
          <div class="title">CONTACTO</div>
          <b-row>
            <b-col class="cotiza__dataSheet" cols="12" sm="12" md="6" lg="6">
              <div class="cotiza__img container">
                <b-col style="padding: 0px">
                  <img
                    class="cotiza__img"
                    alt="LOGO-AUTO"
                    height="305"
                    src="https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-27-imagen_contacto.png"
                  />
                </b-col>
                <b-col class="cotiza__displayPrice">
                  <div id="horario">
                    <label>HORARIO DE ATENCIÓN</label>
                    <p>LUNES A VIERNES</p>
                    <p>8:30am - 6:00pm</p>
                    <div class="fakeSpace2"></div>
                    <p>CASA MATRIZ</p>
                    <p>Av. Nicolas Ayllón #2648 - Ate</p>
                  </div>
                </b-col>
                <b-row cols="2" class="iconsContacto">
                  <b-col>
                    <img
                      src="~/assets/img/assets/contacto/icon-telefono.png"
                      alt="Icon Teléfono Contacto - Derco Perú"
                    />
                    <p class="iconsContacto__title">CENTRAL TELEFÓNICA</p>
                    <p class="iconsContacto__numero">713-5000</p>
                  </b-col>
                  <b-col>
                    <img
                      src="~/assets/img/assets/contacto/icon-reloj.png"
                      alt="Icon Reloj Contacto - Derco Perú"
                    />
                    <p class="iconsContacto__title">CENTRAL DE CITAS</p>
                    <p class="iconsContacto__numero">713-5050</p>
                  </b-col>
                  <b-col>
                    <img
                      src="~/assets/img/assets/contacto/icon-auto.png"
                      alt="Icon Auto Contacto - Derco Perú"
                    />
                    <p class="iconsContacto__title">ENTREGA DE VEHÍCULOS</p>
                    <p class="iconsContacto__numero">713-5035</p>
                  </b-col>
                  <b-col>
                    <img
                      src="~/assets/img/assets/contacto/icon-notas.png"
                      alt="Icon Notas Contacto - Derco Perú"
                    />
                    <p class="iconsContacto__title">RECLAMOS</p>
                    <p class="iconsContacto__numero">713-5024</p>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col id="form" cols="12" sm="12" md="6" lg="6">
              <h5>ESCRÍBENOS</h5>
              <validation-observer ref="observer" v-slot="{ handleSubmit }">
                <b-form
                  class="contacto_formContainer"
                  @submit.stop.prevent="handleSubmit(sendForm)"
                >
                  <validation-provider
                    v-slot="validationContext"
                    name="Asunto"
                    :rules="{ required: true }"
                  >
                    <b-form-group label="Asunto" label-for="select-asunto">
                      <b-form-select
                        id="select-asunto"
                        v-model="selected"
                        :options="options"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-valid-selected"
                      ></b-form-select>
                      <b-form-invalid-feedback id="input-valid-selected">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <validation-provider
                    v-slot="validationContext"
                    name="Nombres y Apellidos"
                    :rules="{ required: true }"
                  >
                    <b-form-group
                      label="Nombres y Apellidos"
                      label-for="input-name-and-lastname"
                    >
                      <b-form-input
                        id="feedback-name"
                        v-model="name"
                        placeholder="Escriba sus nombres y apellidos"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-valid-name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="input-valid-name">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <validation-provider
                    v-slot="validationContext"
                    name="Email"
                    :rules="{ required: true, email: true }"
                  >
                    <b-form-group label="Email" label-for="input-email">
                      <b-form-input
                        id="feedback-mail"
                        v-model="mail"
                        placeholder="Escriba su correo electrónico"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-valid-mail"
                      ></b-form-input>
                      <b-form-invalid-feedback id="input-valid-mail">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <validation-provider
                    v-slot="validationContext"
                    name="Teléfono"
                    :rules="{ required: true }"
                  >
                    <b-form-group label="Teléfono" label-for="input-form">
                      <b-form-input
                        id="feedback-phone"
                        v-model="phone"
                        placeholder="Ingrese su número de teléfono"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-valid-phone"
                      ></b-form-input>
                      <b-form-invalid-feedback id="input-valid-phone">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <validation-provider
                    v-slot="validationContext"
                    name="Celular"
                    :rules="{ required: true }"
                  >
                    <b-form-group label="Celular" label-for="input-phone">
                      <b-form-input
                        id="feedback-mobilephone1"
                        v-model="mobilephone1"
                        v-mask="'9########'"
                        :masked="true"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-valid-mobilephone1"
                        placeholder="Ingrese su número de celular"
                      ></b-form-input>
                      <b-form-invalid-feedback id="input-valid-mobilephone1">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <validation-provider
                    v-slot="validationContext"
                    name="Mensaje"
                    :rules="{ required: true }"
                  >
                    <b-form-group label="Mensaje" label-for="input-message">
                      <b-form-input
                        id="message-contact"
                        v-model="message"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-valid-message"
                      ></b-form-input>
                      <b-form-invalid-feedback id="input-valid-message">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <b-col>
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="status"
                      name="checkbox-1"
                      value="accepted"
                      unchecked-value="not_accepted"
                    >
                      <b-col
                        class="cotiza__inputCheck"
                        cols="12"
                        sm="12"
                        md="12"
                        lg="12"
                      >
                        <span style="font-size: 12px; line-height: 16px"
                          >Mis datos personales serán tratados conforme a la
                          <b-link
                            target="_blank"
                            :to="{ name: 'clausula-informativa-general' }"
                            >Cláusula Informativa</b-link
                          >
                          que he leído.</span
                        >
                      </b-col>
                    </b-form-checkbox>
                    <b-col
                      class="cotiza__inputCheck2"
                      cols="12"
                      sm="12"
                      md="12"
                      lg="12"
                    >
                      <p id="cotiza__p1" style="margin-top: 10px">
                        Derco podrá enviarme información sobre promociones y
                        ofertas comerciales de sus productos y servicios,
                        conforme a la
                        <b-link
                          target="_blank"
                          :to="{ name: 'clausula-de-datos-personales' }"
                          >Cláusula de Datos Personales
                        </b-link>
                        :
                      </p>
                    </b-col>
                    <b-form-group style="margin-bottom: 0px">
                      <b-form-radio
                        v-model="selectedRadio"
                        name="some-radios"
                        value="Si"
                      >
                        <b-col cols="12" sm="12" md="12" lg="12">
                          <p>Si, autorizo a Derco.</p>
                        </b-col>
                      </b-form-radio>
                      <b-form-radio
                        v-model="selectedRadio"
                        name="some-radios"
                        value="No"
                      >
                        <b-col cols="12" sm="12" md="12" lg="12">
                          <p style="line-height: 16px">
                            No autorizo, prefiero perder la oportunidad de
                            recibir promociones y ofertas.
                          </p>
                        </b-col>
                      </b-form-radio>
                    </b-form-group>
                    <b-col
                      class="cotiza__inputCheck"
                      cols="12"
                      sm="12"
                      md="12"
                      lg="12"
                    >
                      <p style="margin-top: 0px; margin-bottom: 0px">
                        Los datos que nos facilite nos permitirán gestionar su
                        solicitud. Adicionalmente usted autoriza que Derco Perú
                        S.A trate sus datos personales para el envío por medios
                        postales, telefónicos y electrónicos, información sobre
                        desarrollo de productos, servicios, ofertas,
                        comunicaciones comerciales y promociones especiales que
                        puedan ser de beneficio para usted, salvo que marque la
                        casilla incluida más abajo, que usted no acepta recibir
                        esta información.
                      </p>
                    </b-col>
                    <b-col
                      class="cotiza__inputCheck"
                      cols="12"
                      sm="12"
                      md="12"
                      lg="12"
                    >
                      <p>
                        Nota: El envío de esta información implica que usted
                        está aceptando los aspectos legales y políticas de
                        privacidad de este sitio web.
                      </p>
                    </b-col>
                    <b-col
                      class="cotizar__button"
                      cols="12"
                      sm="12"
                      md="12"
                      lg="12"
                    >
                      <b-button type="submit"> ENVIAR</b-button>
                    </b-col>
                  </b-col>
                </b-form>
              </validation-observer>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
    <b-col class="cotizar__footer">
      <b-container>
        <label
          >(*)Precios expresados en dólares americanos, los precios en soles son
          referenciales u calculados en función al Tipo de Cambio vigente,
          imágenes y especificaciones son referenciales y varian según versión
          disponible del producto. Para más información revisa los
          <a href="#">Términos y Condiciones</a> contacta con tu tienda Derco de
          tu preferencia. <a href="#">Ver red Derco</a>
        </label>
      </b-container>
    </b-col>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { faDownload, faGasPump } from '@fortawesome/free-solid-svg-icons'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import SeoData from '@/mixins/SeoData'
/* eslint-disable no-control-regex */
export default {
  name: 'ShopsWorkshops',
  components: { ValidationProvider, ValidationObserver },
  mixins: [SeoData],
  data() {
    return {
      title: 'Contacto',
      selected: null,
      selectedRadio: null,
      status: null,
      name: '',
      lastName: '',
      mail: '',
      mobilephone1: '',
      mobilephone2: '',
      phone: '',
      message: '',
      meta_info: 'https://derco.com.pe/',
      imgCar:
        'https://suzukiautos.com.co/wp-content/uploads/2016/03/Suzuki-Alto-K10-Home-1.png',
      imgColor:
        'https://minthaestudio.com/lavieenmint/wp-content/archivos/2018/02/paleta-de-colores-primavera.png',
      options: [
        { value: null, text: 'Seleccione una opción' },
        { value: 'Agendamiento de Citas', text: 'Agendamiento de Citas' },
        { value: 'Cotización de Unidades', text: 'Cotización de Unidades' },
        {
          value: 'Cotización de Repuestos y Accesorios',
          text: 'Cotización de Repuestos y Accesorios'
        },
        { value: 'Consultas/Sugerencias', text: 'Consultas/Sugerencias' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      filtersRegions: 'subsidiaries/filtersRegions',
      filterServices: 'subsidiaries/filterServices',
      filterRegionsCommunes: 'subsidiaries/filterRegionsCommunes',
      regions: 'subsidiaries/regions'
    }),
    validation() {
      // missing switch case for validated input
      if (this.name.length === 0) {
        return null
      } else {
        return this.name.length > 4
      }
    },
    validationSelectAsunto() {
      if (this.selected === 0) {
        return null
      } else return true
    },
    validationPhone() {
      if (this.mobilephone1 > 0) {
        return this.mobilephone1.match(/\d/g).length === 9
      }
      return null
    },
    validationHomePhone() {
      if (this.phone > 0) {
        return this.phone.match(/\d/g).length === 9
      }
      return null
    },
    validationEmail() {
      // eslint-disable-next-line no-useless-escape
      const regexEmail = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0B\x0C\x0E-\x1F\x7F\x21\x23-\x5B\x5D-\x7E\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0B\x0C\x0D-\x7F\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
      if (this.mail.length > 0) {
        return regexEmail.test(this.mail)
      }
      return null
    },
    faDownload() {
      return faDownload
    },
    faGasPump() {
      return faGasPump
    }
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    redirect() {
      this.$router.push('/contacto/gracias')
    },
    showModal(tipo) {
      switch (tipo) {
        case 'informativa':
          this.$refs.modalClausInf.show()
          break
        case 'datos':
          this.$refs.modalClausDatos.show()
          break
      }
    },
    hideModal(tipo) {
      switch (tipo) {
        case 'informativa':
          this.$refs.modalClausInf.hide()
          break
        case 'datos':
          this.$refs.modalClausDatos.hide()
          break
      }
    },
    async sendForm() {
      const formData = {
        subject: this.selected,
        name: this.name,
        email: this.mail,
        phone: this.phone,
        commentary: this.message,
        commune: '21801',
        meta_info: this.meta_info,
        terms: true,
        license_plate: 'nolose'
      }
      try {
        const message = await this.$axios.$post('/email/contact', formData)
        console.log(message)
        this.redirect()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
