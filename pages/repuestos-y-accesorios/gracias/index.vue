<template>
  <div class="elevated">
    <b-container>
      <Title v-model="title" :description="description" />
      <hr class="divisor" />
    </b-container>
    <cards-thanks />
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import CardsThanks from '@/components/partials/thanks/CardsThanks'
import SeoData from '@/mixins/SeoData'

export default {
  name: 'Index',
  components: { CardsThanks, Title },
  mixins: [SeoData],
  data() {
    return {
      title: 'Gracias Estimado',
      description:
        'Recibimos tus datos con éxito, un ejecutivo se pondrá en contacto contigo'
    }
  }
}
</script>
