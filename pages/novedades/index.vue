<template>
  <b-container>
    <div class="mx-4">
      <Title v-model="titleView" />
    </div>
    <b-row>
      <b-col
        v-for="(item, index) in news"
        :key="index"
        cols="12"
        md="12"
        lg="3"
      >
        <card-new :new-item="item" />
      </b-col>
    </b-row>
    <div class="d-flex justify-content-center">
      <b-pagination id="store__pagination" :per-page="5" />
    </div>
  </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
import CardNew from '@/components/partials/cards/CardNew'
export default {
  name: 'Novedades',
  components: {
    CardNew
  },
  async asyncData({ store }) {
    await store.dispatch('news/getNews', {
      category: 'Novedades'
    })
  },
  data() {
    return {
      titleView: 'Novedades'
    }
  },
  computed: {
    ...mapGetters({
      news: 'news/news'
    })
  },
  head() {
    return {
      title: 'Novedades',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Entérate De Lo Último En Derco, Tenemos Novedades Que Contarte'
        }
      ]
    }
  }
}
</script>

<style scoped>
p,
span,
label {
  font-family: 'Lato', sans-serif;
}
</style>
