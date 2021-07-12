<template>
  <div class="details-individual-quote">
    <b-row>
      <b-col md="6">
        <div class="single-version-card-header">
          <b-row>
            <b-col md="6">
              <div class="single-version-title-container">
                <img
                  :src="
                    require(`@/assets/img/marcas/desktop/${$route.params.marca}.png`)
                  "
                  alt="brand logo"
                />
                <h1>
                  <span class="title-model-name text-uppercase">{{
                    value.name
                  }}</span>
                </h1>
              </div>
            </b-col>
          </b-row>
        </div>
        <b-col class="pt-0">
          <b-img
            fluid
            center
            alt="LOGO-AUTO"
            height="320"
            :src="value.defaultVersion.imageUrl"
          />
        </b-col>

        <b-col class="container-color p-0">
          <div style="width: 100%">
            <label>Imágen referencial</label>
          </div>
          <div v-if="value.colors" class="d-flex">
            <div
              v-for="(item, index) in value.colors"
              :key="index"
              class="group-colors"
            >
              <div
                v-b-tooltip.hover
                class="circle-color"
                :title="item.name"
                :style="{ background: item.hexadecimal1 }"
              ></div>
            </div>
          </div>
        </b-col>
      </b-col>
      <b-col md="6">
        <div class="pb-4 pt-md-4 pt-2">
          <div class="card-specs">
            <div v-if="fuel" class="text-uppercase">
              <fa id="GasPump" :icon="faGasPump" />
              <span>{{ fuel.value }}</span>
            </div>
            <div class="text-uppercase">
              <span
                ><icon-transmission /> &nbsp; {{ version.transmission }}</span
              >
            </div>
          </div>
        </div>
        <div class="button-download-container pb-4">
          <b-button class="button-download" @click="download">
            <fa :icon="faDownload" />
            &nbsp; DESCARGAR FICHA TÉCNICA
          </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { faDownload, faGasPump } from '@fortawesome/free-solid-svg-icons'
import IconTransmission from '@/components/svg/icons/Transmision'
export default {
  name: 'DetailsIndividualQuote',
  components: { IconTransmission },
  props: {
    value: {
      type: Object,
      default() {
        return {}
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
    fuel() {
      const version = this.value.versions[0]
      const fuel = version.specs.categories.find(
        i => i.name === 'Consumo Energético'
      )
      return (
        fuel.categorySpecs.find(c => c.specName === 'Combustible - Tipo') || {}
      )
    },
    version() {
      return this.value.versions[0]
    }
  },
  methods: {
    download() {
      window.open(this.value.specsSheetUrl, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
.details-individual-quote {
  padding-bottom: 1.5rem;
  .single-version-card-header {
    .single-version-title-container {
      display: flex;
      align-items: center;

      img {
        flex-shrink: 0;
        width: 85px;
      }

      h1 {
        font-size: 20px;
        font-weight: bold;
        line-height: auto;
        color: #4d4d4d;
        padding: 12px 0 12px 23px;
        margin: 0 0 0 30px;
        border-left: 2px solid #e8e8e8;

        .separator-class {
          display: block;
          content: '';
          margin-top: 5px;
        }

        .version-year {
          font-size: 18px;
          color: #808080;
        }
      }
    }
  }
  .container-color {
    display: flex;
    justify-content: space-between;
    position: relative;

    label {
      font-size: 10px;
      color: gray;
      font-weight: bold;
    }

    .group-colors {
      display: flex;
      position: relative;
      top: 10%;
      .circle-color {
        width: 1.5rem;
        height: 1.5rem;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        border: 1px solid #cecece;
        margin-left: 0.5rem;
        @media (max-width: 767px) {
          width: 20px;
          height: 20px;
        }
      }
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

  .cover-img {
    padding-top: 30px;
    .img-fleets {
      display: flex;
      height: 320px;
      width: auto;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 5px;
      @media (max-width: 767px) {
        height: 214px;
      }
    }
  }
  .text-ref {
    font-size: 10px;
    color: #4d4d4d;
  }

  .colors {
    display: flex;
    position: relative;
    top: 10%;

    .color {
      width: 45px;
      height: 45px;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      border: 1px solid #cecece;
      margin-left: 20px;
      @media (max-width: 767px) {
        width: 20px;
        height: 20px;
      }
    }
  }
  .button-quotation {
    height: 50px;
    width: 350px;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .contain-colors {
    padding-bottom: 30px;
  }
  .button-download {
    height: 50px;
    width: 350px;
    background: #b2b2b2;
    color: #4d4d4d;
    font-weight: bold;
  }
}
</style>
