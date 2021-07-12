<template>
  <b-row
    v-if="$device.isDesktop"
    class="mt-3 dark-grey-text d-flex justify-content-center"
  >
    <b-col md="2" lg="2" xl="2" class="mb-2 text-capitalize">
      <b-list-group class="pb-3">
        <b-link class="dark-grey-text" to="/nosotros"> Empresa</b-link>
        <b-link class="dark-grey-text" to="/postventa"> Post Venta</b-link>
        <b-link class="dark-grey-text" to="/sucursales-y-concesionarios">
          Tiendas y talleres
        </b-link>
        <b-link
          class="dark-grey-text"
          href="https://www.amicar.pe/"
          target="_blank"
        >
          Financiamiento
        </b-link>
      </b-list-group>
      <b-list-group>
        <b-link
          class="dark-grey-text"
          href="https://dercoperu.agendapro.com/pe"
          target="_blank"
        >
          Agendar Cita en taller
        </b-link>
        <b-link class="dark-grey-text" to="/catalogo-derco">
          Cotiza tu auto
        </b-link>
      </b-list-group>
    </b-col>
    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-capitalize">
      <b-list-group class="pb-2">
        <b-link class="dark-grey-text" to="/campanadeseguridad">
          Llamados a revisión
        </b-link>
        <b-link class="dark-grey-text" to="/comunicados"> comunicados</b-link>
        <b-link class="dark-grey-text" to="/contacto"> Contacto</b-link>
      </b-list-group>
      <b-list-group>
        <b-link class="dark-grey-text" href="/terminos-y-condiciones">
          Términos y condiciones
        </b-link>
        <b-link class="dark-grey-text" to="/clausula-de-datos-personales">
          Política de privacidad
        </b-link>
        <b-link class="dark-grey-text" to="/derechos-arco">
          Derechos Arco
        </b-link>
        <div
          @mouseover="viewListLegal = true"
          @mouseleave="viewListLegal = false"
        >
          <div class="dark-grey-text">Clausulas informativas</div>
          <ul v-show="viewListLegal">
            <li>
              <b-link to="/clausula-informativa-general"
                >Cláusula general informativa
              </b-link>
            </li>
            <li>
              <b-link to="/clausula-de-datos-personales-para-usos-adicionales"
                >Cláusula de Datos Personales para Usos Adicionales
              </b-link>
            </li>
            <li>
              <b-link to="/clausula-informativa-hoja-de-reclamacion-fisica"
                >Hoja de Reclamación (Física)
              </b-link>
            </li>
            <!--            <li>-->
            <!--              <b-link to="/clausula-informativa-general"-->
            <!--                >Video vigilancia(Física)-->
            <!--              </b-link>-->
            <!--            </li>-->
          </ul>
        </div>
        <!--        <b-link class="dark-grey-text" to="/derechos-arco">-->
        <!--          Terceros y encargados-->
        <!--        </b-link>-->
      </b-list-group>
    </div>
    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
      <b-list-group class="text-white">
        <div>Casa Matriz</div>
        <div class="text-justify-center">
          Av. Manuel Olguin 325, Piso 11, Santiago de Surco
        </div>
      </b-list-group>
      <b-row>
        <b-col>
          <div class="text-white">
            <div>Central Telefónica</div>
            <b-link href="tel:713-5000">713-5000</b-link>
          </div>
        </b-col>
        <b-col>
          <div class="mx-auto pb-1">
            <div>Central de Citas</div>
            <b-link href="tel:713-5050">713-5050</b-link>
          </div>
        </b-col>
      </b-row>
      <div class="text-white">
        <div>Correo</div>
        <div><Email class="email-svg" /></div>
      </div>
    </div>
    <b-col md="3" lg="4" xl="3">
      <div class="text-white pb-3">
        <div>Atención Callcenter:</div>
        <div>L-V: 8:30am a 6:00pm</div>
        <div>S: 8:30am a 1:00pm</div>
      </div>
      <div class="mb-5">
        <div class="pb-2">Síguenos</div>
        <b-link
          href="https://www.instagram.com/derco.peru/"
          target="_blank"
          class="circle"
        >
          <fa :icon="faFacebookF" />
        </b-link>
        <b-link
          href="https://www.instagram.com/derco.peru/"
          target="_blank"
          class="circle"
        >
          <fa :icon="faInstagram" />
        </b-link>
        <b-link
          href="https://www.youtube.com/channel/UCHlQLjbcPFZk38sWRl8AFRA"
          target="_blank"
          class="circle"
        >
          <fa :icon="faYoutube" />
        </b-link>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import {
  faFacebookF,
  faYoutube,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

import Email from '~/assets/icons/email.svg?inline'
export default {
  name: 'SectionDesktop',
  components: {
    Email
  },
  data() {
    return {
      viewListLegal: false
    }
  },
  computed: {
    faFacebookF() {
      return faFacebookF
    },
    faInstagram() {
      return faInstagram
    },
    faYoutube() {
      return faYoutube
    }
  }
}
</script>

<style scoped>
.circle {
  font-size: 15px;
  background-color: white;
  border-radius: 100%;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  color: gray !important;
  display: inline-block;
  font-weight: bold;
  line-height: 2em;
  margin-left: 5px;
  text-align: center;
  width: 2em;
}
.email-svg {
  height: 13px;
}
</style>
