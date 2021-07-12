<template>
  <div class="row">
    <div
      v-for="comunicado in news"
      :key="comunicado.id"
      class="col-12 col-md-4 col-lg-4"
    >
      <ComunicadoItem
        :id="comunicado.metas.slug"
        :title="comunicado.metas.title"
        :publication-date="new Date(comunicado.created_at)"
        :link-read="comunicado.linkRead"
        :link-download="comunicado.linkDowload"
      />
    </div>
    <div class="col-12">
      <b-pagination
        v-if="comunicados !== null"
        v-model="currentPage"
        :total-rows="comunicados.length"
        :per-page="perPage"
        :prefetch="true"
        class="paginationStyle"
      ></b-pagination>
    </div>
  </div>
</template>
<script>
import ComunicadoItem from '@/components/partials/comunicados/ComunicadoItem'
import { mapGetters } from 'vuex'
export default {
  name: 'SectionComunicados',
  components: { ComunicadoItem },
  data() {
    return {
      comunicados: [
        {
          id: 1,
          title: 'Prueba Comunicados',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          linkRead: '/comunicados',
          linkDowload: 'https://www.google.com.pe',
          publicationDate: new Date()
        },
        {
          id: 2,
          title: 'Prueba Comunicado 2',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          linkRead: '/comunicados',
          linkDowload: 'https://www.google.com.pe',
          publicationDate: new Date()
        },
        {
          id: 3,
          title: 'Prueba Comunicados 3',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          linkRead: '/comunicados',
          linkDowload: 'https://www.google.com.pe',
          publicationDate: new Date()
        }
      ],
      comunicadosFilter: [],
      currentPage: 1,
      perPage: 9
    }
  },
  computed: {
    ...mapGetters({
      news: 'news/news'
    })
  },
  watch: {
    async currentPage() {
      console.log('currentPage', this.currentPage)
      this.comunicadosFilter = this.comunicados.slice(
        this.perPage * (this.currentPage - 1),
        this.perPage * this.currentPage
      )
      await this.goTop()
    }
  },
  async mounted() {
    this.comunicadosFilter = await this.comunicados.slice(
      this.perPage * (this.currentPage - 1),
      this.perPage * this.currentPage
    )
  },
  methods: {
    clickCallback(pageNum) {
      console.log(pageNum)
    },
    goTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
