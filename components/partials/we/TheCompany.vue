<template>
  <div>
    <Title v-model="title" :description="description" />
    <b-container class="cardContainer">
      <b-row cols="1" cols-md="2" cols-lg="2" cols-xl="3">
        <b-col
          v-for="card in cardTemplate"
          :key="card.id"
          class="cardContainer__colCard"
        >
          <b-card
            :title="card.title"
            :img-src="card.image"
            :img-alt="card.title"
            img-top
          >
            <b-card-text>
              {{ card.description }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Title from '@/components/common/Title'

export default {
  name: 'TheCompany',
  components: { Title },
  data() {
    return {
      title: 'La Empresa',
      description:
        'Hace 21 años DERCO llegó al Perú y, a lo largo de este tiempo, ha logrado posicionarse como uno de los grupos automotrices más importantes y con mayor potencial de desarrollo del país. Desde 1997 somo líderes en el sector automotriz y maquinarias, y contamos con el respaldo de un sólido grupo económico con operaciones en Chile, Bolivia, Colombia y Perú',
      cardTemplate: [
        {
          id: Math.random(),
          title: 'Misión',
          image: require('~/assets/img/assets/mi_empresa/mision_card.jpg'),
          description:
            'Somos una organización líder que brinda productos y servicios integrales de calidad en los rubros Automotriz y Maquinarias. Sustentamos nuestra rentabilidad y crecimiento en la lealtad de nuestros clientes, excediendo nuestras expectativas, gracias al alto nivel de motivación y competencia de nuestros colaboradores.'
        },
        {
          id: Math.random(),
          title: 'Visión',
          image: require('~/assets/img/assets/mi_empresa/vision_card.jpg'),
          description:
            'Ser la empresa con los clientes más satisfechos y los colaboradores más motivados en los mercados en los que participamos'
        },
        {
          id: Math.random(),
          title: 'Políticas de calidad',
          image: require('~/assets/img/assets/mi_empresa/politica_card.jpg'),
          description:
            'Nuestro compromiso de calidad va dirigido a obtener la satisfacción total de nuestros clientes. En Derco, nos comprometemos a cumplir con los compromisos adquiridos durante la venta de unidades, repuestos y servicio técnico de los rubros en los que participamos. Orientamos nuestra gestión hacia la mejora continua de los procesos y el desarrollo integral de nuestros colaboradores.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/scss/theme/variables.scss';

.cardContainer {
  padding-bottom: 45px;
  &__colCard:nth-child(1) {
    .card {
      .card-body {
        background-color: $color-primary;
      }
    }
  }
  &__colCard:nth-child(2) {
    .card {
      .card-body {
        background-color: $color-secondary;
      }
    }
  }
  &__colCard:nth-child(3) {
    .card {
      .card-body {
        background-color: $light-gray;
      }
    }
  }
  .col {
    padding-top: 0 !important;
  }
  &__colCard {
    margin: 10px auto;

    .card {
      @media (max-width: 767px) {
        max-width: 350px;
        margin: 0 auto;
      }
      .card-body {
        min-height: 310px;
        display: flex;
        margin-top: -5px;
        flex-direction: column;
        padding: 45px 30px 45px 30px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        @media (max-width: 767px) {
          padding: 30px;
          height: auto !important;
          min-height: auto;
        }
        .card-title {
          font-family: $font-primary;
          font-weight: 600;
          font-size: 14px;
          color: $white;
        }
        .card-text {
          font-family: $font-primary;
          font-weight: 400;
          font-size: 14px;
          padding-left: 0;
          color: $white;
        }
      }
    }
  }
}
</style>
