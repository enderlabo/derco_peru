<template>
  <section class="coverage-component">
    <b-container>
      <div class="d-flex">
        <div>
          <h2>1. Cobertura de Garantía</h2>
          <p>
            Las coberturas de garantía se relacionan por 2 parámetros, las
            cuales son las siguientes:
          </p>
        </div>
        <peru class="peru-icon ml-auto" />
      </div>
      <b-row class="justify-content-center">
        <div
          v-for="(item, index) in brandsOne"
          :key="index"
          class="col-md-14 cols-6 py-2"
        >
          <div class="container-brand">
            <div class="content-one mx-auto">
              <div class="w-100 h-100">
                <b-img
                  for="enlace"
                  :src="item.img"
                  center
                  alt="image detail warranty"
                  class="img-brand-section"
                />
              </div>
            </div>
            <div class="content-text mx-auto text-center">
              <span class="text-year"> {{ item.year }} años </span>
            </div>
            <div class="content-text mx-auto text-center">
              <span class="text-year">{{ item.km }} KM </span>
            </div>
          </div>
        </div>
      </b-row>
      <b-row class="py-2">
        <b-col cols="12" md="6" class="py-2">
          <div class="w-100">
            <b-img
              class="img-fluid details-secondary"
              center
              alt="image detail warranty"
              :src="require('@/assets/img/warranty/renault.png')"
            />
          </div>
        </b-col>
        <b-col cols="12" md="6" class="py-2">
          <div class="w-100">
            <b-img
              class="img-fluid details-secondary"
              center
              alt="image detail warranty"
              :src="require('@/assets/img/warranty/jac.png')"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Peru from '~/assets/img/warranty/peru.svg?inline'

export default {
  name: 'Coverage',
  components: {
    Peru
  },
  data() {
    return {
      brandsOne: [
        {
          img: require('@/assets/img/marcas/desktop/suzuki.png'),
          year: '3',
          km: '100 000'
        },
        {
          img: require('@/assets/img/marcas/desktop/mazda.png'),
          year: '3',
          km: '100 000'
        },
        {
          img: require('@/assets/img/marcas/desktop/citroen.png'),
          year: '3',
          km: '100 000'
        },
        {
          img: require('@/assets/img/marcas/desktop/ds.png'),
          year: '3',
          km: '100 000'
        },
        {
          img: require('@/assets/img/marcas/desktop/changan.png'),
          year: '3',
          km: '100 000'
        },
        {
          img: require('@/assets/img/marcas/desktop/great-wall.png'),
          year: '3',
          km: '100 000'
        },
        {
          img: require('@/assets/img/marcas/desktop/haval.png'),
          year: '3',
          km: '100 000'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.coverage-component {
  .peru-icon {
    height: 49px;
  }
  .container-brand {
    position: relative;
    .content-one {
      overflow: hidden;
      border: 4px solid #e6e6e6;
      box-sizing: border-box;
      border-radius: 26px;
      height: 110px;
      width: 123px;
      .img-brand-section {
        padding-top: 14px;
        width: 78px;
        vertical-align: middle;
        border-style: none;
      }
    }
    .content-text {
      margin-top: 9px;
      width: 123px;
      border: 4px solid #e6e6e6;
      box-sizing: border-box;
      border-radius: 26px;
      padding-top: 8px;
      padding-bottom: 8px;
      .text-year {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #4b4b4b;
      }
    }
  }
  .details-secondary {
    width: 492px;
    height: auto;
  }
  h2 {
    font-family: Lato, serif;
    font-weight: bold;
    font-size: 18px;
    color: #4d4d4d;
  }
  p {
    font-weight: normal;
    font-size: 16px;
    color: $secondary;
  }
}
</style>
