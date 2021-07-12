<template>
  <div class="assets-cards">
    <Title v-model="title" />
    <b-container>
      <b-row class="row-content-assets">
        <b-col
          v-for="(item, index) in cards"
          :key="index"
          :cols="index === 0 ? '12' : '6'"
          md="4"
          :class="classCol(index)"
        >
          <b-card
            no-body
            header-text-variant="white"
            header-tag="header"
            header-class="header-rounded"
          >
            <nuxt-link :to="item.link" class="text-decoration-none link-assets">
              <div class="rounded">
                <div
                  :style="{
                    backgroundImage: `url(${item.img})`
                  }"
                  :alt="item.title"
                  class="card-img-top"
                />
                <header
                  class="card-header text-white header-rounded bg-danger border-none"
                >
                  <h5 class="mb-0 text-center title-card">
                    {{ item.title }}
                  </h5>
                </header>
              </div>
            </nuxt-link>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Title from '@/components/common/Title'
export default {
  name: 'GroupCardsAssets',
  components: { Title },
  async fetch() {},
  data() {
    return {
      title: '¿qué estás buscando?',
      cards: [
        {
          title: 'Autos',
          img:
            'https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-autos.png',
          link: '/catalogo-derco/autos'
        },
        {
          title: 'Flotas',
          img:
            'https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-flotas.png',
          link: '/catalogo-derco/flotas'
        },
        {
          title: 'Camiones y Maquinarias',
          img:
            'https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-camiones.png',
          link: '/catalogo-derco/camiones-y-maquinarias'
        }
      ]
    }
  },
  methods: {
    classCol(index) {
      if (index === 0) {
        return 'col-one'
      } else if (index === 1) {
        return 'col-asset padding-right-5'
      } else {
        return 'col-asset padding-left-5'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/scss/theme/variables.scss';
.assets-cards {
  .header-rounded {
    border-bottom-left-radius: calc(0.25rem - 1px);
    border-bottom-right-radius: calc(0.25rem - 1px);
    background: $color-primary !important;
  }
  .row-content-assets {
    margin-bottom: 40px;
  }
  .link-assets {
    text-decoration: none;
    opacity: 1;
    :hover {
      background-color: #dc241f;
      opacity: 0.8;
    }
  }
  .col-one {
  }
  .card-img-top {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    height: 130px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .text-decoration-none .img-container-asset {
    min-height: 130px;
    min-width: 375px;
  }

  .title-card {
    font-size: 20px !important;
    font-weight: bold !important;
  }

  .card {
    border: none !important;
  }
  @media (max-width: 768px) {
    .row-content-assets {
      margin-bottom: 25px;
    }
    .col-asset {
      margin-top: 25px;
      .card-img-top {
        height: 76px;
      }
      .title-card {
        font-size: 12px !important;
      }
      .card-header {
        height: 30px !important;
      }
    }
    .padding-left-5 {
      padding-left: 0.5rem;
    }
    .padding-right-5 {
      padding-right: 0.5rem;
    }
  }
}
</style>
