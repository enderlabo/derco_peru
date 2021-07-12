<template>
  <div class="elevated">
    <Title v-model="title" :description="description" />
    <b-container>
      <b-row class="valuesContainer">
        <div
          v-for="value in valueCardTemplate"
          :key="value.id"
          class="valuesContainer__cardValue"
        >
          <img :src="value.image" alt="" />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Title from '@/components/common/Title'

export default {
  name: 'OurValues',
  components: { Title },
  data() {
    return {
      title: 'Nuestros Valores',
      description:
        'Te invitamos a vivir nuestros valores, en cada acción y decisión que tomes',
      valueCardTemplate: [
        {
          id: Math.random(),
          altImage: 'Pasion - Derco Perú',
          image: require('~/assets/img/assets/mi_empresa/pasion.png')
        },
        {
          id: Math.random(),
          altImage: 'Excelencia - Derco Perú',
          image: require('~/assets/img/assets/mi_empresa/excelencia.png')
        },
        {
          id: Math.random(),
          altImage: 'Respeto - Derco Perú',
          image: require('~/assets/img/assets/mi_empresa/respeto.png')
        },
        {
          id: Math.random(),
          altImage: 'Colaboración - Derco Perú',
          image: require('~/assets/img/assets/mi_empresa/colaboracion.png')
        },
        {
          id: Math.random(),
          altImage: 'Integridad - Derco Perú',
          image: require('~/assets/img/assets/mi_empresa/integridad.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/scss/theme/variables.scss';

.valuesContainer {
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  &__cardValue {
    width: 20%;
    text-align: center;
    margin-bottom: 15px;
    @media (max-width: 767px) {
      width: 50%;
    }

    img {
      max-width: 140px;
      width: 100%;
      margin: 0 auto;
    }
  }
}

@media (max-width: 767px) {
  .valuesContainer div:nth-child(5) {
    width: 100%;
  }
}
</style>
