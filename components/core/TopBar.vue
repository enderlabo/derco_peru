<template>
  <!-- TopBar -->
  <transition name="slide-fade">
    <div class="topbar">
      <div class="container">
        <div class="row align-items-center justify-content-end">
          <div class="col-sm-12 col-md-8 col-lg-8 justify-content-end">
            <div class="info text-right">
              <b-link
                pill
                size="sm"
                class="text-uppercase text-center button-nav"
                to="/campanadeseguridad"
              >
                Llamados a revisión
              </b-link>
              <div class="d-none d-sm-none d-md-none d-lg-inline">
                <nuxt-link to="/comunicados" class="link info-item number">
                  Comunicados
                </nuxt-link>
                <nuxt-link to="/contacto" class="link info-item number">
                  Contacto
                </nuxt-link>
                <fa :icon="faPhone" />
                <b-link href="tel:713-5000" class="link info-item number">
                  713-5000
                </b-link>
              </div>
              <div class="d-inline icons">
                <b-link
                  href="https://www.facebook.com/DercoPeru/"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {
  faFacebookF,
  faYoutube,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'TopBar',
  computed: {
    faFacebookF() {
      return faFacebookF
    },
    faInstagram() {
      return faInstagram
    },
    faYoutube() {
      return faYoutube
    },
    faPhone() {
      return faPhoneAlt
    }
  }
}
</script>

<style scoped></style>
