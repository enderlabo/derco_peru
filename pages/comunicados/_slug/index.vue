<template>
  <div class="elevated releases-component">
    <div class="container">
      <Title v-model="title" />
      <div v-if="comunicado.metas" class="row textComunicadoSection">
        <div class="col-12">
          <h1>{{ comunicado.metas.title }}</h1>
        </div>
        <div class="col-12">
          <p class="textComunicadoSection__date">
            {{ comunicado.created_at.toLocaleDateString('es-PE', optionsDate) }}
          </p>
        </div>
        <div class="col-12">
          <!-- eslint-disable vue/no-v-html -->
          <div
            class="textComunicadoSection__text"
            v-html="comunicado.metas.content"
          ></div>
          <!-- eslint-enable -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from '@/components/common/Title'
import { mapGetters } from 'vuex'
export default {
  components: { Title },
  async fetch() {
    await this.$store.dispatch('news/getNews', {
      page: 1,
      category: 'Comunicados'
    })
  },
  data() {
    return {
      title: 'COMUNICADOS',
      comunicado: {},
      optionsDate: {
        year: 'numeric',
        month: 'long'
      }
    }
  },
  computed: {
    ...mapGetters({
      news: 'news/news'
    })
  },
  async mounted() {
    this.idComunicado = await this.$route.params.slug
    const comunicadoArray = this.news.filter(
      // eslint-disable-next-line prettier/prettier
      comunicadoItem =>
        comunicadoItem.metas.slug.toString() === this.idComunicado
    )
    if (comunicadoArray) {
      this.comunicado = comunicadoArray[0]
      this.comunicado.created_at = new Date(this.comunicado.created_at)
      console.log(
        '🚀 ~ file: _slug.vue ~ line 57 ~ mounted ~ this.comunicado ',
        this.comunicado
      )
    }
  },
  head() {
    return {
      title: this.comunicado.metas ? this.comunicado.metas.title : '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.comunicado.metas ? this.comunicado.metas.extract : ''
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.releases-component {
  img {
    width: 100% !important;
  }
  p {
    font-weight: normal !important;
  }
}
</style>
