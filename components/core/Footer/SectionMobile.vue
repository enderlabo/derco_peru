<template>
  <b-row v-if="$device.isMobile">
    <b-col cols="6" class="text-separation">
      <b-list-group class="pb-3">
        <b-link class="dark-grey-text" to="/tiendas-y-talleres">
          Tiendas y Talleres
        </b-link>
        <b-link class="dark-grey-text" to="/terminos-y-condiciones">
          Términos y Condiciones
        </b-link>
        <b-link class="dark-grey-text" href="#!">
          Política de Privacidad
        </b-link>
        <b-link class="dark-grey-text" href="#!"> Derechos ARCO </b-link>
        <b-link class="dark-grey-text" to="/comunicados"> Comunicados </b-link>
      </b-list-group>
    </b-col>
    <b-col cols="6">
      <b-list-group class="pb-3">
        <div class="pb-2">
          <div>Casa Matriz</div>
          <div class="text-justify-center">
            Av. Manuel Olguin 327, Piso 11, Santiago de Surco
          </div>
        </div>
        <div class="pb-2">
          <div class="text-white">
            <div>Central Telefónica</div>
            <b-link href="tel:713-5000">
              <u> 713-5000 </u>
            </b-link>
          </div>
        </div>
        <div class="pb-2">
          <div class="text-white">
            <div>Horario:</div>
            <div>L-V: 8:30am a 6:00pm</div>
            <div>S: 8:30am a 1:00pm</div>
          </div>
        </div>
      </b-list-group>
    </b-col>
    <b-col cols="12">
      <div class="mb-4">
        <div class="pb-2">Síguenos</div>
        <b-link
          href="https://www.instagram.com/derco.peru/"
          target="_blank"
          class="circle"
        >
          <fa :icon="faFacebookF" />
        </b-link>
        <b-link
          href="https://www.youtube.com/channel/UCHlQLjbcPFZk38sWRl8AFRA"
          target="_blank"
          class="circle"
        >
          <fa :icon="faYoutube" />
        </b-link>
        <b-link
          href="https://www.instagram.com/derco.peru/"
          target="_blank"
          class="circle"
        >
          <fa :icon="faInstagram" />
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
export default {
  name: 'SectionMobile',
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

<style scoped></style>
