<template>
  <!--   Navbar   -->
  <b-navbar
    id="header"
    toggleable="lg"
    type="light"
    variant="light"
    class="nav-header navbar-fixed-top"
  >
    <b-container>
      <b-navbar-brand to="/">
        <div>
          <logo-derco class="d-inline-block align-top logo" />
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
          <fa v-if="expanded" :icon="faTimes" />
          <fa v-else :icon="faBars" />
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            to="/catalogo-derco"
            class="font-weight-bold d-block d-sm-block d-md-none text-primary"
            link-classes="text-nav-red"
          >
            COTIZA TU AUTO
          </b-nav-item>
          <b-nav-item
            href="https://dercoperu.agendapro.com/pe"
            class="d-block d-sm-block d-md-none"
          >
            AGENDA CITA EN TALLER
          </b-nav-item>
          <b-nav-item to="/nosotros"> Empresa</b-nav-item>
          <b-nav-item-dropdown id="dropdown-brands" ref="dropdownBrands">
            <template slot="button-content">
              Marcas
              <span style="font-size: 12px; padding-left: 2px">
                <fa :icon="faChevronDown" />
              </span>
            </template>
            <b-dropdown-item
              class="navbar__subMenu text-capitalize"
              :to="{
                name: 'catalogo-derco-autos',
                query: {
                  brands: 'suzuki'
                }
              }"
            >
              Suzuki
            </b-dropdown-item>
            <b-dropdown-item
              class="navbar__subMenu text-capitalize"
              :to="{
                name: 'catalogo-derco-autos',
                query: {
                  brands: 'mazda'
                }
              }"
            >
              Mazda
            </b-dropdown-item>
            <b-dropdown-item
              class="navbar__subMenu text-capitalize"
              :to="{
                name: 'catalogo-derco-autos',
                query: {
                  brands: 'renault'
                }
              }"
            >
              Renault
            </b-dropdown-item>
            <b-dropdown-item
              class="navbar__subMenu text-capitalize"
              :to="{
                name: 'catalogo-derco-autos',
                query: {
                  brands: 'great-wall'
                }
              }"
            >
              Great Wall
            </b-dropdown-item>
            <b-dropdown-item
              class="navbar__subMenu text-capitalize"
              :to="{
                name: 'catalogo-derco-autos',
                query: {
                  brands: 'changan'
                }
              }"
            >
              Changan
            </b-dropdown-item>
            <b-dropdown-item
              class="navbar__subMenu text-capitalize"
              :to="{
                name: 'catalogo-derco-autos',
                query: {
                  brands: 'jac'
                }
              }"
            >
              JAC
            </b-dropdown-item>
            <b-dropdown-item
              class="navbar__subMenu text-capitalize"
              :to="{
                name: 'catalogo-derco-autos',
                query: {
                  brands: 'haval'
                }
              }"
            >
              Haval
            </b-dropdown-item>
            <b-dropdown-item
              class="navbar__subMenu text-capitalize"
              :to="{
                name: 'catalogo-derco-camiones-y-maquinarias',
                query: {
                  brands: 'camiones-jac'
                }
              }"
            >
              Camiones JAC
            </b-dropdown-item>
            <b-dropdown-item
              class="navbar__subMenu text-capitalize"
              href="https://www.autopia.pe/"
              target="_blank"
            >
              Autopia
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown>
            <template slot="button-content">
              Post Venta
              <span style="font-size: 12px">
                <fa :icon="faChevronDown" />
              </span>
            </template>
            <b-dropdown-item
              class="navbar__subMenu text-capitalize"
              to="/postventa"
            >
              Mantenimiento
            </b-dropdown-item>
            <b-dropdown-item
              class="navbar__subMenu text-capitalize"
              to="/repuestos-y-accesorios"
            >
              Repuestos y accesorios
            </b-dropdown-item>
            <b-dropdown-item
              class="navbar__subMenu text-capitalize"
              to="/garantias"
            >
              Garantia
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/tiendas-y-talleres"> Tiendas y talleres</b-nav-item>
          <b-nav-item href="https://www.amicar.pe/" target="_blank">
            Financiamiento
          </b-nav-item>
          <b-nav-item to="/contacto" class="d-block d-sm-block d-md-none">
            Contacto
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button
              pill
              class="mr-1 button-gray d-none d-sm-none d-md-block"
              href="https://dercoperu.agendapro.com/pe"
              target="_blank"
            >
              <span class="text-button-nav">Agendar cita en taller</span>
            </b-button>
            <b-button
              to="/catalogo-derco"
              pill
              class="button-red ml-4 d-none d-sm-none d-md-block"
            >
              <span class="text-button-nav">Cotiza tu auto</span>
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import {
  faBars,
  faChevronDown,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import LogoDerco from '@/components/svg/logos/LogoDerco'

export default {
  name: 'NavBar',
  components: { LogoDerco },
  data() {
    return {
      showBrands: false
    }
  },
  computed: {
    faBars() {
      return faBars
    },
    faTimes() {
      return faTimes
    },
    faChevronDown() {
      return faChevronDown
    }
  },
  mounted() {
    window.onscroll = () => this.sticky()
  },
  methods: {
    onClick() {
      this.$refs.dropdownBrands.show(true)
    },
    onOver() {
      this.$refs.dropdownone.visible = true
    },
    onLeave() {
      this.$refs.dropdownone.visible = false
    },
    sticky() {
      const header = document.getElementById('header')
      const sticky = header.offsetTop
      if (window.pageYOffset > sticky) {
        header.classList.add('fixed-top')
      } else {
        header.classList.remove('fixed-top')
      }
    }
  }
}
</script>
<style lang="scss">
.dropdown-submenu {
  position: relative;
}

.dropdown-submenu a::after {
  transform: rotate(-90deg);
  position: absolute;
  right: 2px;
  display: none;
}

.dropdown-submenu .dropdown-menu {
  top: 0;
  left: 100%;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}

.btn:focus {
  outline: none !important;
}

.fixed-top {
  -webkit-transition: all 0.6s ease-out;
  -moz-transition: all 0.6s ease-out;
  -o-transition: all 0.6s ease-out;
  -ms-transition: all 0.6s ease-out;
  transition: all 0.6s ease-out;
}

.dropdown-toggle::after {
  content: none !important;
}

.text-nav-red {
  color: #dc241f !important;
  font-weight: 900;
}
</style>
