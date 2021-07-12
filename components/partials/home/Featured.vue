<template>
  <div class="elevated featured">
    <Title v-model="title" class=".title-c" />
    <div v-if="$device.isMobile" class="d-flex justify-content-center">
      <b-button
        class="text-uppercase button-red-section"
        @click="$router.push('/catalogo-derco')"
      >
        ver el catálogo
      </b-button>
    </div>
    <client-only>
      <featured-cards class="content-card" />
    </client-only>
    <div v-if="$device.isDesktop" class="d-flex justify-content-center">
      <b-button
        class="text-uppercase button-red-section"
        @click="$router.push('/catalogo-derco')"
      >
        ver el catálogo
      </b-button>
    </div>
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import FeaturedCards from '@/components/partials/home/FeaturedCards'
export default {
  name: 'Featured',
  components: { FeaturedCards, Title },
  async fetch() {
    await this.$store.dispatch('models/getModels', { featured: true })
  },
  data() {
    return {
      title: 'Modelos Destacados'
    }
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .content-card {
    padding-bottom: 5.75rem;
  }
}
</style>
