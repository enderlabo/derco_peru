<template>
  <b-container>
    <div class="assets">
      <b-container>
        <b-row class="row-content-assets">
          <b-col
            v-for="(item, index) in cards"
            :key="index"
            cols="12"
            md="3"
            class="pt-md-0 pt-1 pb-md-0 pb-1"
          >
            <b-card
              no-body
              header-text-variant="white"
              header-tag="header"
              header-class="header-rounded"
            >
              <nuxt-link
                :to="item.link"
                class="text-decoration-none link-assets"
              >
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
  </b-container>
</template>

<script>
export default {
  name: 'CardThanks',
  data() {
    return {
      title: '¿qué estás buscando?',
      cards: [
        {
          title: 'Catálogo',
          img:
            'https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-autos.png',
          link: '/catalogo-derco'
        },
        {
          title: 'Tiendas y Talleres',
          img:
            'https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-tiendas-y-talleres.png',
          link: '/tiendas-y-talleres'
        },
        {
          title: 'Llamados a Revisión',
          img:
            'https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-llamados-a-revision.png',
          link: '/campanadeseguridad'
        },
        {
          title: 'Agendar Cita en Taller',
          img:
            'https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-agendar-cita-en-taller.png',
          link: 'https://dercoperu.agendapro.com/pe'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.assets {
  .row-content-assets {
    padding-bottom: 1.5rem;
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
