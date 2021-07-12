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
      title: 'Gracias Estimado',
      description:
        'Recibimos tus datos con éxito, un ejecutivo se pondrá en contacto contigo'
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // Launch facebook pixel event only when router is used
      if (from.name) {
        vm.$analytics.fbq.event('CompleteRegistration')
        vm.$gtag.event('conversion', {
          send_to: 'AW-923613239/MwG0CPCm6JIBELfwtLgD'
        })
      }
    })
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
