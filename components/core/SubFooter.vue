<template>
  <div class="footer--copy">
    <b-container>
      <div class="row" style="margin-bottom: 0">
        <!-- Logo footer tablet y desktop-->
        <div
          class="col-sm-12 col-md-7 left-align hide-on-small-only"
          style="padding: 0"
        >
          <div
            class="footer--copy--s--center footer--copy__center--text"
            style="height: 70px"
          >
            <p
              class="footer--copy--legal text-white"
              style="
                padding-top: 30px;
                font-size: 12px;
                padding-left: 25px;
                padding-bottom: 0;
                font-family: Arial, serif;
                font-weight: normal;
                letter-spacing: 0.7px;
                word-spacing: 0;
              "
            >
              © {{ getYear }}. Todos los derechos reservados Derco Perú S.A.
            </p>
          </div>
        </div>
        <div class="col-md-5 right-align hide-on-small-only" style="padding: 0">
          <div class="footer--copy--s--center footer--copy__center--img">
            <a href="/" class="footer--copy--logotipo">
              <logo-horizontal-derco class="logo-derco-horizontal" />
            </a>
          </div>
        </div>
      </div>
    </b-container>

    <!-- Logo footer mobile-->
    <div class="col-sm-12 right-align hide-on-med-and-up mobilefooter">
      <div
        class="footer--copy--s--center footer--copy__center--img"
        style="text-align: right"
      >
        <b-row>
          <b-col cols="12">
            <div class="footer--copy--logotipo">
              <logo-horizontal-derco class="logo-derco-horizontal" />
            </div>
          </b-col>
          <b-col cols="12">
            <p class="footer--copy--legal text-white">
              © {{ getYear }}. Todos los derechos reservados Derco Perú S.A.
            </p>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import LogoHorizontalDerco from '@/components/svg/logos/LogoHorizontalDerco'

export default {
  name: 'SubFooter',
  components: { LogoHorizontalDerco },
  computed: {
    getYear() {
      const date = new Date()
      const year = date.getFullYear()
      return year
    }
  },
  mounted() {
    this.$lozad.observe()
  }
}
</script>

<style lang="scss" scoped>
.logo-derco-horizontal {
  float: right;
  height: 39px;
  margin-top: 12px;
  font-family: Lato;
}

.footer--copy--legal {
  margin-left: -25px;
}

.footer--copy {
  background-color: #dc241f;
  color: #fff;
  margin: 0;
  letter-spacing: 0.7px;
  font-size: 11px;
}

.row {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

@media only screen and (min-width: 601px) {
  .row .col-md-7 {
    width: 58.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
}

.left-align {
  text-align: left;
}

@media only screen and (min-width: 601px) {
  .row .col-md-5 {
    width: 41.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
}

.right-align {
  text-align: right;
}

a {
  text-decoration: none;
  display: inline-block;
}

.footer--copy--logotipo img {
  margin-right: 25px;
}

.mobilefooter {
  padding: 0;
}

@media only screen and (min-width: 601px) {
  .hide-on-med-and-up {
    display: none !important;
  }
}

@media only screen and (max-width: 600px) {
  .footer--copy--legal {
    padding-top: 8px !important;
    font-family: Lato;
    font-size: 12px;
    font-weight: normal;
    margin-bottom: 0;
  }
  .hide-on-small-only,
  .hide-on-small-and-down {
    display: none !important;
  }
  .footer--copy__center--img {
    height: 90px;
  }
  .footer--copy--logotipo img {
    width: 120px;
    padding-top: 0;
    margin-right: 20px;
  }
}
</style>
