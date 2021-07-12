<template>
  <div>
    <b-card v-if="newItem" tag="article" class="card-new">
      <div
        :style="{ backgroundImage: `url('${newItem.metas.imageUrl0}')` }"
        class="img-card-new"
      />
      <b-card-text class="title-new mt-2 text-card justify-content-between">
        {{ TruncateStrings(newItem.metas.title, 50) }}
      </b-card-text>
      <div class="date">
        {{ getFormat(newItem.created_at) }}
      </div>

      <div class="description">
        {{ TruncateStrings(newItem.metas.extract, 110) }}
      </div>

      <b-link
        id="cardNew-p"
        class="text-complete text-uppercase"
        style="cursor: pointer"
        :to="`/novedades/${newItem.metas.slug}`"
      >
        leer completo
      </b-link>
    </b-card>
  </div>
</template>

<script>
import { formatDate } from '@/utils'

export default {
  name: 'CardNew',
  props: {
    newItem: {
      type: Object,
      default() {
        return {
          created_at: Date,
          metas: {
            author: '',
            title: '',
            extract: '',
            imageUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyoinR0ZTfFVHcJp1PUDOTK-TtpHk2ldm7hg&usqp=CAU'
          }
        }
      }
    }
  },
  methods: {
    TruncateStrings(string, maxLength = 150) {
      if (!string) return null
      if (string.length <= maxLength) return string
      return `${string.substring(0, maxLength)}...`
    },
    getFormat(date) {
      return formatDate(date, 'MMMM yyyy')
    }
  }
}
</script>

<style lang="scss" scoped>
.title-new {
  padding-top: 12px;
  margin-bottom: 0;
}
.text-complete {
  font-size: 12px;
  font-weight: bold;
  color: #dc241f;
}

.date {
  font-size: 12px;
  font-style: italic;
  color: #4d4d4d;
  margin-bottom: 5px;
}
p.card-text {
  margin-top: 17px !important;
  height: 55px;
  max-height: 55px;
  line-height: 18px;
  overflow: hidden;
  -webkit-box-orient: vertical;
  font-size: 16px !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 0;
}

h3.ql-align-center {
  font-size: 12px !important;
  line-height: 14px;
  font-weight: 400;
  color: #4d4d4d;
  max-height: 62px;
}
.description {
  font-size: 12px !important;

  *|* {
    font-size: 12px !important;
    line-height: 14px;
    font-weight: 400;
    color: #4d4d4d;
    max-height: 62px;
  }
}
.img-card-new {
  display: flex;
  height: 100px;
  width: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
}
.content-new {
  font-size: 12px;

  p {
    background: rebeccapurple;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid red;
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }
}

.card-new {
  height: 20.53125rem;
  max-width: 17rem;
  min-width: 17rem;
}

@media (max-width: 768px) {
  .card-new {
    height: 20rem;
    min-width: auto;
    max-width: none;
    margin-right: 0;
    margin-left: 0;
  }
}

.card-new:hover {
  border-color: #dc241f;
}
</style>
