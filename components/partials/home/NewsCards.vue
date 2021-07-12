<template>
  <b-container>
    <hooper
      v-if="$device.isDesktop"
      :items-to-show="4"
      :infinite-scroll="true"
      style="height: auto"
      class="news-cards"
      :wheel-control="false"
    >
      <slide v-for="(item, index) in news" :key="index">
        <card-new :new-item="item" />
      </slide>
      <hooper-navigation slot="hooper-addons" class="navigation-desktop">
      </hooper-navigation>
      <hooper-pagination
        slot="hooper-addons"
        class="pagination-desktop"
      ></hooper-pagination>
    </hooper>
    <hooper
      v-if="$device.isMobile"
      :items-to-show="1"
      :infinite-scroll="false"
      style="height: auto"
      :wheel-control="false"
    >
      <slide v-for="(item, index) in news" :key="index">
        <card-new :new-item="item" />
      </slide>
      <hooper-pagination
        slot="hooper-addons"
        class="pagination-desktop"
      ></hooper-pagination>
    </hooper>
  </b-container>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
} from 'hooper'
import { mapGetters } from 'vuex'
import CardNew from '@/components/partials/cards/CardNew'
export default {
  name: 'NewsCards',
  components: {
    CardNew,
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  },
  computed: {
    ...mapGetters({
      news: 'news/news'
    })
  }
}
</script>

<style scoped>
.news-cards {
  height: 20.53125rem;
  width: auto;
}

@media (max-width: 768px) {
  .news-cards {
    height: auto;
    width: auto;
  }
}
</style>
