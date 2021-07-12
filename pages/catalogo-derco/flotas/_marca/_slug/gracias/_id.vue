<template>
  <div class="elevated">
    <b-container>
      <Title v-model="title" :description="description"></Title>
      <hr class="divisor" />
    </b-container>
    <cards-thanks />
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import CardsThanks from '@/components/partials/thanks/CardsThanks'

export default {
  name: 'Gracias',
  components: { CardsThanks, Title },
  data() {
    return {
      title: 'Gracias Estimado,¡Buena elección!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Ya estás a un paso para tener tu flota que deseas, pronto te contactaremos.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.divisor {
  border-top: 5px solid #dc241f !important;
  max-width: 800px;
  margin: auto;
  padding-bottom: 2.5rem;
}
</style>
