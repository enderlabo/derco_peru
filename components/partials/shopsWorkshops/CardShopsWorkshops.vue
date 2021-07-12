<template>
  <b-card class="card-shops-workshops">
    <b-row>
      <b-col md="3" class="one-col">
        <div class="text-uppercase title-direction">
          {{ value.name }}
        </div>
        <div class="details">
          <u>
            <b-link
              target="_blank"
              :href="
                'https://www.google.com/maps/dir/Current+Location/' +
                value.location.latitude +
                ',' +
                value.location.longitude
              "
            >
              <span>
                <span class="icon">
                  <fa :icon="faMapMarkedAlt" class="icon" />
                </span>
                {{ value.address }}
              </span>
            </b-link>
          </u>
          <br />
        </div>
      </b-col>
      <b-col md="5" class="two-col pt-md-1 pt-2">
        <template v-for="(item, index) in value.services">
          <b-card :key="index" no-body class="mb-2 card-section-details">
            <b-card-title header-tag="header" class="p-0 m-0" role="tab">
              <b-button
                v-b-toggle="`${value.code}-${item.slug}-${index}`"
                block
                variant="outline-none"
                class="button-section-details"
              >
                <span class="float-left"> {{ item.name }} </span>
                <span class="text-primary float-right when-open">
                  <fa :icon="faMinus" />
                </span>
                <span class="text-primary float-right when-closed">
                  <fa :icon="faPlus" />
                </span>
              </b-button>
            </b-card-title>
            <b-collapse
              :id="`${value.code}-${item.slug}-${index}`"
              accordion="hour-accordion"
              role="tabpanel"
              class="card-body-details"
            >
              <b-row>
                <b-col v-if="item.openingHours.length >= 1" md="4">
                  <b-media class="items-details">
                    <template #aside class="pt-1">
                      <fa :icon="faClock" />
                    </template>
                    <div
                      v-for="(oh, indexOP) in item.openingHours"
                      :key="indexOP"
                    >
                      <span class="font-weight-bold">{{ oh.name }} </span>
                      <br />
                      <span> {{ oh.value }}</span>
                      <div class="pt-2" />
                    </div>
                  </b-media>
                </b-col>
                <b-col v-if="item.contactNumber" md="4">
                  <b-media class="items-details">
                    <template #aside>
                      <fa :icon="faPhone" />
                    </template>
                    <span>
                      <b-link :href="'tel:' + item.contactNumber">
                        <u>{{ item.contactNumber }}</u>
                      </b-link>
                    </span>
                  </b-media>
                </b-col>
                <template v-if="item.brands">
                  <b-col v-if="item.brands.length >= 1" md="4">
                    <b-media class="items-details">
                      <template #aside>
                        <fa :icon="faStar" />
                      </template>
                      <div v-for="(brand, indexB) in item.brands" :key="indexB">
                        <span>{{ brand.name }} </span>
                      </div>
                    </b-media>
                  </b-col>
                </template>
              </b-row>
            </b-collapse>
          </b-card>
        </template>
      </b-col>
      <b-col md="4">
        <div class="title-section-col">Marcas</div>
        <b-row>
          <b-col
            v-for="(item, index) in value.brands"
            :key="index"
            cols="4"
            md="3"
            sm="3"
          >
            <b-img
              center
              height="50"
              :src="
                require('@/assets/img/marcas/desktop/' + item.slug + '.png')
              "
              class="p-1"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  faMapMarkedAlt,
  faPhone,
  faMinus,
  faPlus,
  faClock,
  faStar
} from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'CardShopsWorkshops',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      visibleHours: false,
      visibleServices: false
    }
  },
  computed: {
    faStar() {
      return faStar
    },
    faClock() {
      return faClock
    },
    faMapMarkedAlt() {
      return faMapMarkedAlt
    },
    faPhone() {
      return faPhone
    },
    faMinus() {
      return faMinus
    },
    faPlus() {
      return faPlus
    }
  }
}
</script>

<style scoped lang="scss">
.media-aside {
  display: flex !important;
  margin-right: 0.5rem !important;
  padding-top: 0.25rem !important;
}
.card-shops-workshops {
  .collapsed > .when-open,
  .not-collapsed > .when-closed {
    display: none;
  }

  margin-top: 15px;
  margin-bottom: 15px;

  .one-col {
    .title-direction {
      font-size: 14px;
      font-weight: bold;
      line-height: 18px;
      color: #dc241f;
      max-width: 250px;
      //margin-left: auto;
      //margin-right: auto;
    }

    .details {
      margin-top: 20px;
      color: #4d4d4d;
      font-size: 14px;
      max-width: 200px;
      //margin-left: auto;
      //margin-right: auto;

      .icon {
        width: 20px;
        font-size: 14px;
        font-weight: bold;
        color: #dc241f;
      }

      a {
        color: #4d4d4d;
      }
    }

    @media (max-width: 768px) {
      .title-direction,
      .details {
        text-align: left !important;
      }
      .details {
        margin-left: 0;
      }
    }
  }

  .title-section-col {
    font-size: 14px;
    font-weight: bold;
    color: #4d4d4d;
  }

  .two-col {
    .card-section-details {
      background: #f9f9f9;
      border: none;
      .button-section-details {
        color: #4d4d4d;
        font-size: 15px;
        font-weight: bold;
      }

      .card-body-details {
        padding: 0.375rem 0.75rem;
        .items-details {
          font-size: 14px;
          color: #4d4d4d;
          padding-bottom: 20px;
          a {
            color: #4d4d4d;
          }
        }
      }
    }

    .list-services {
      font-size: 14px;
      font-weight: normal;
      color: #4d4d4d;

      ul {
        padding-left: 0.9rem;
      }
    }
  }
}
</style>
