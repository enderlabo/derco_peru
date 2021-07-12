<template>
  <b-card class="card-swh">
    <b-card-title class="title-card-shops">
      <span class="text-uppercase">{{ subsidiary.name }}</span>
    </b-card-title>
    <b-card-text class="info-card">
      <div class="info">
        <b-link
          target="_blank"
          :href="
            'https://www.google.com/maps/dir/Current+Location/' +
            subsidiary.location.latitude +
            ',' +
            subsidiary.location.longitude
          "
        >
          <span class="icon-info">
            <fa :icon="faMapMarkerAlt" />
          </span>
          <u>
            {{ subsidiary.address }}
          </u>
        </b-link>
      </div>
      <div class="info">
        <b-link :href="'tel:' + subsidiary.services[0].contactNumber">
          <span class="icon-info">
            <fa :icon="faPhone" />
          </span>
          <u>
            {{ subsidiary.services[0].contactNumber }}
          </u>
        </b-link>
      </div>
    </b-card-text>
    <b-card-text class="list-services">
      <span class="title-list"> Servicios disponibles </span>
      <div class="list">
        <ul>
          <li
            v-for="(service, index) in subsidiary.services"
            :key="index"
            class="title-li"
          >
            {{ service.name }}
          </li>
        </ul>
      </div>
    </b-card-text>
    <b-card-text class="brands-title"> Marcas </b-card-text>
    <b-row class="brands">
      <div
        v-for="(item, index) in subsidiary.brands"
        :key="index"
        class="col-md-15 col-sm-15"
      >
        <b-img
          height="55"
          :alt="item.slug"
          :src="require('@/assets/img/marcas/desktop/' + item.slug + '.png')"
        ></b-img>
      </div>
    </b-row>
  </b-card>
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
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: '#777',
        width: 75,
        height: 75,
        class: 'm1 mb-2'
      },
      imgBrands: [
        'https://valcorconsultores.com/wp-content/uploads/2019/10/renault-png-400.png'
      ]
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
.brands-title {
  margin-bottom: 0;
}
.brands {
  min-height: 60px;
}
.subsidiary-class {
  height: max-content;
}
.card-swh {
  position: relative;
  height: 24.1875rem;
  margin-right: 1rem;
  margin-left: 1rem;
  min-width: 353px;
}

.title-card-shops {
  font-size: 14px;
  font-weight: bold;
  color: #dc241f;
  min-height: 36px;
}
.title-li {
  font-weight: 400;
}
p.card-text {
  padding-left: 0px !important;
  font-size: 14px;
}

.info-card {
  font-size: 14px;
  min-height: 40px;
  a {
    color: #4d4d4d !important;
    vertical-align: center !important;
  }

  .icon-info {
    width: 30px;
    padding-right: 10px;
  }
}
.fa-w-12 {
  width: 1rem !important;
}
ul {
  padding-left: 1rem;
}
@media (max-width: 768px) {
  .card-swh {
    min-width: auto;
    height: 23rem;
    margin-right: 0;
    margin-left: 0;
  }
  p.card-text {
    margin-top: 10px;
  }
}
</style>
