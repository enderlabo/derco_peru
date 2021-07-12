<template>
  <div class="details-truck">
    <b-row>
      <b-col md="12">
        <div class="single-version-title-container">
          <b-img
            :src="require(`@/assets/img/marcas/desktop/jac-camiones.png`)"
            alt="brand logo"
          />
          <h1>
            <span class="title-model-name"> {{ truck.model.name }}</span
            ><br />{{ truck.name }}<br class="separator-class" /><span
              class="version-year"
              >Año modelo {{ $route.params.year }}</span
            >
          </h1>
        </div>
      </b-col>
    </b-row>
    <b-col class="pt-0">
      <b-img fluid center alt="LOGO-AUTO" height="320" :src="truck.image.url" />
    </b-col>
    <b-col>
      <div class="text-referential" style="width: 100%">
        <label>Imágen referencial</label>
      </div>
    </b-col>
    <b-col class="px-0 pb-4 container-price">
      <div v-if="price" style="max-width: 17rem" class="mx-auto">
        <label class="price-list-text mb-0">PRECIO LISTA</label>
        <br />
        <label class="price-list-value">
          {{ price.value | USD }} ó {{ price.convertedValue | PE }}
        </label>
      </div>
    </b-col>
    <div v-if="model.versions.length > 0" class="pb-4">
      <div class="card-specs">
        <div v-if="fuel" class="text-uppercase">
          <fa id="GasPump" :icon="faGasPump" />
          <span>{{ fuel.value }}</span>
        </div>
        <div class="text-uppercase">
          <span><icon-transmission /> &nbsp; {{ version.transmission }}</span>
        </div>
      </div>
    </div>

    <div v-if="truck.specpdf1" class="button-download-container pb-4">
      <b-button class="button-download" @click="download">
        <fa :icon="faDownload" />
        &nbsp; DESCARGAR FICHA TÉCNICA
      </b-button>
    </div>
  </div>
</template>

<script>
import { faDownload, faGasPump } from '@fortawesome/free-solid-svg-icons'
import IconTransmission from '@/components/svg/icons/Transmision'
export default {
  name: 'DetailsTrucks',
  components: { IconTransmission },
  props: {
    truck: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      urlStore: null,
      model: {
        versions: [],
        colors: []
      },
      version: {
        transmission: null,
        specs: {
          categories: []
        }
      },
      fuel: {
        value: ''
      }
    }
  },
  computed: {
    faDownload() {
      return faDownload
    },
    faGasPump() {
      return faGasPump
    },
    price() {
      const price = this.truck.prices.find(
        item => item.name === this.$route.params.year
      )
      return price
    }
  },
  methods: {
    async fetchDataVersion() {
      try {
        let model = await this.$axios.$get(
          `models/slug/${this.$route.params.modelo}`
        )
        console.log(model)
        model = model[0]
        const version = this.model.versions.find(i => {
          return i.id === Number(this.$route.params.id)
        })

        this.model = model
        this.version = version

        const fuel = version.specs.categories.find(
          i => i.name === 'Consumo Energético'
        )
        this.fuel = fuel.categorySpecs.find(
          c => c.specName === 'Combustible - Tipo'
        )
      } catch (e) {
        console.log(e)
      }
    },
    download() {
      window.open(this.truck.specpdf1, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
.details-truck {
  .single-version-title-container {
    display: flex;
    align-items: center;
    img {
      width: 60px;
    }
    h1 {
      font-size: 12px;
      color: #4d4d4d;
      padding: 12px 0 12px 22px;
      margin: 0 0 0 22px;
      border-left: 1px solid #e8e8e8;
      font-weight: bold;
      .title-model-name {
        font-size: 18px;
      }
      .separator-class {
        display: block;
        content: '';
        margin-top: 5px;
      }
      .version-year {
        font-size: 12px;
      }
      @media (max-width: 767px) {
        font-size: 16px;
        line-height: 16px;
        padding: 5px 0 5px 9.5px;
        margin-left: 7.5px;
      }
    }
  }
  .container-price {
    .price-list-text {
      font-weight: bold;
      font-size: 15px;
      color: #7c7c7c;
      margin-left: 0 !important;
    }

    .price-list-value {
      color: #dc241f;
      font-size: 24px;
      font-weight: bold;
    }
  }
  .card-specs {
    display: flex;
    justify-content: space-evenly;
    background-color: #e5e5e5;
    position: relative;
    border-radius: 5px;

    :first-child {
      display: flex;
      height: 50px;
      align-items: center;
      color: #595959;
      font-family: 'Lato', sans-serif;
      font-size: 14px;
    }

    :last-child {
      color: #595959;
      font-family: 'Lato', sans-serif;
    }
  }

  .button-download-container {
    display: flex;
    justify-content: center;
    position: relative;
    .button-download {
      background-color: #b2b2b2;
      border-color: transparent !important;
      color: #4d4d4d;
      font-size: 15px;
      font-weight: bold;
      width: 350px !important;
      border-radius: 25px;
      height: 50px;
      &:hover {
        background-color: #838383;
      }
    }
  }

  .text-referential {
    font-size: 10px;
    color: #4d4d4d;
  }
}
</style>
