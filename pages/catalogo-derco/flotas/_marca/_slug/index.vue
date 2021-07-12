<template>
  <div class="elevated">
    <b-container>
      <div class="pt-2 pt-md-4 pb-2 pb-md-4">
        <details-individual-quote v-model="model" />
        <form-individual-quote v-model="model" />
      </div>
    </b-container>
  </div>
</template>

<script>
import DetailsIndividualQuote from '@/components/partials/catalog/fleets/quotation/Individual/DetailsIndividualQuote'
import FormIndividualQuote from '@/components/partials/catalog/fleets/quotation/Individual/FormIndividualQuote'
export default {
  name: 'Index',
  components: { FormIndividualQuote, DetailsIndividualQuote },
  async asyncData({ route, app }) {
    const { slug } = route.params
    let { data: model } = await app.$axios.get(`models/slug/${slug}`)
    model = model[0]
    const title = `Cotiza tu flota de ${model.brand.name} ${model.name}`
    return {
      model,
      title
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style scoped></style>
