<template>
  <div class="container">
    <Title v-model="title" />
    <SectionComunicados />
  </div>
</template>
<script>
import Title from '@/components/common/Title'
import SectionComunicados from '@/components/partials/comunicados/sectionComunicados'

export default {
  components: { SectionComunicados, Title },
  async asyncData({ store }) {
    await store.dispatch('news/getNews', {
      page: 1,
      category: 'Comunicados'
    })
  },
  data() {
    return {
      title: 'Comunicados'
    }
  },
  head() {
    return {
      title: 'Comunicados',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  }
}
</script>
