<template>
  <div class="details">
    <b-row class="my-2">
      <b-col md="12" lg="4" class="my-2">
        <div class="mx-4">
          <div
            id="name"
            class="mx-5 d-flex justify-content-center title-card-shops"
          >
            <span class="text-uppercase">
              {{ subsidiary.name }}
            </span>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <div class="dir">
              <div class="d-flex info">
                <b-link href="#">
                  <span class="icon-info">
                    <fa :icon="faMapMarkerAlt" />
                  </span>

                  {{ subsidiary.address }}
                </b-link>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-2">
            <div class="dir pr-20">
              <div class="info">
                <b-link href="tel:(01) 713-5000">
                  <span class="icon-info">
                    <fa :icon="faPhone" />
                  </span>
                  (01) 713-5000
                </b-link>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="12" lg="4" class="my-2">
        <div class="d-flex justify-content-center dir">
          <span class="title-list">Servicios Disponibles</span>
        </div>
        <div class="d-flex justify-content-center dir">
          <ul class="text-capitalize mt-3 pr-5 content-list">
            <li v-for="(service, index) in subsidiary.services" :key="index">
              {{ service.name }}
            </li>
          </ul>
        </div>
      </b-col>
      <b-col cols="12" lg="4" class="my-2">
        <div class="brand-container">
          <span class="dir span-dir">Marcas</span>
        </div>
        <div class="mt-2 brand-container">
          <img
            v-for="(item, index) in subsidiary.brands"
            :key="index"
            height="45px"
            :src="require('@/assets/img/marcas/' + item.slug + '.jpg')"
            class="p-1"
          />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'CardShopsWorkshopsInHome',
  props: {
    subsidiary: {
      type: Object,
      default() {
        return { name: '', address: '' }
      }
    }
  },

  computed: {
    faMapMarkerAlt() {
      return faMapMarkerAlt
    },
    faPhone() {
      return faPhone
    }
  }
}
</script>

<style scoped lang="scss">
.title-card-shops {
  color: #dc241f;
  font-size: 14px;
  font-weight: bold;
}
.details {
  border-width: 3px;
  border-style: solid;
  border-color: #e6e6e6;
  border-radius: 5px;
}
#name {
  font-size: 16px;
  text-align: center;
}
.dir {
  color: #4d4d4d;
  font-weight: 600;
}
.info a {
  color: #4d4d4d;
  font-weight: bold;
}
.icon-info {
  font-size: 22px;
  color: #4d4d4d;
}
.span-dir {
  font-weight: 550;
}
.title-list {
  font-size: 14px;
  font-weight: 600;
  color: #4d4d4d;
}
.content-list {
  font-size: 14px;
}
@media (min-width: 1060px) {
  .pr-20 {
    padding-right: 25%;
  }
}
@media (max-width: 1060px) {
  .brand-container {
    display: flex;
    justify-content: center;
  }
}
</style>
