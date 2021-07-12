<template>
  <div class="news">
    <Title v-model="title" />

    <client-only>
      <news-cards class="content-card" />
    </client-only>

    <div class="d-flex justify-content-center">
      <b-button
        class="text-uppercase button-red-section"
        @click="$router.push('/novedades')"
      >
        ver más
      </b-button>
    </div>
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import { mapGetters } from 'vuex'
import NewsCards from '@/components/partials/home/NewsCards'

export default {
  name: 'News',
  components: { NewsCards, Title },
  async fetch() {
    await this.$store.dispatch('news/getNews', {
      page: 1,
      category: 'Novedades'
    })
  },
  data() {
    return {
      title: 'Novedades'
    }
  },
  computed: {
    ...mapGetters({
      news: 'news/news'
    })
  }
}
</script>

<style scoped>
.button-red-section {
  margin-top: 35px;
}
.content-card {
  padding-bottom: 2rem;
}
@media (max-width: 768px) {
  .content-card {
    padding-bottom: 2rem;
  }
  .button-red-section {
    margin-bottom: 3rem;
  }
}
</style>
