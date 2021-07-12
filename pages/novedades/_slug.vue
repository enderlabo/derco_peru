<template>
  <div class="elevated">
    <b-container>
      <b-row class="novedad">
        <b-col md="6">
          <div class="information">
            <div>
              <span class="title">{{ newItem.metas.title }} </span>
            </div>
            <div>
              <span class="date"> {{ FormatDate(newItem.created_at) }}</span>
            </div>
            <div class="content">
              <!-- eslint-disable vue/no-v-html -->
              <div v-html="newItem.metas.content"></div>
              <!-- eslint-enable -->
            </div>
          </div>
        </b-col>
        <b-col>
          <b-img center fluid :src="newItem.metas.imageUrl0"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { formatDate } from '@/utils'
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store }) {
    await store.dispatch('news/getNews', {
      category: 'Novedades'
    })
  },
  computed: {
    ...mapGetters({
      new: 'news/new'
    }),
    newItem() {
      return this.new(this.$route.params.slug)
    }
  },
  methods: {
    FormatDate(date) {
      return formatDate(date, 'MMMM yyyy')
    }
  },
  head() {
    return {
      title: this.newItem.metas ? this.newItem.metas.title : '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.newItem.metas ? this.newItem.metas.extract : ''
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.novedad {
  padding-top: 5vh;

  .information {
    .title {
      font-size: 24px;
      font-weight: bold;
      line-height: 28px;
      color: #4d4d4d;
    }

    .date {
      margin-top: 20px;
      margin-bottom: 20px;
      color: #4d4d4d;
      font-style: italic;
      font-size: 16px;
    }

    .content {
      font-size: 16px;
      color: #4d4d4d;
    }
  }
}
</style>
