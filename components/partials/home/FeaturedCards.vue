<template>
  <b-container>
    <hooper
      v-if="$device.isDesktop"
      :items-to-show="3"
      :infinite-scroll="true"
      style="height: auto"
      :wheel-control="false"
      :center-mode="true"
    >
      <slide v-for="(item, index) in features" :key="index">
        <cards-featured :featured="item" />
      </slide>
      <hooper-navigation
        slot="hooper-addons"
        class="navigation-desktop"
      ></hooper-navigation>
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
      <slide v-for="(item, index) in features" :key="index">
        <cards-featured :featured="item" class="content-card" />
      </slide>
      <hooper-navigation
        slot="hooper-addons"
        class="navigation-desktop"
      ></hooper-navigation>
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
import CardsFeatured from '~/components/partials/cards/CardFeatured'

export default {
  name: 'FeaturedCards',
  components: {
    CardsFeatured,
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  },
  computed: {
    ...mapGetters({
      features: 'models/models'
    })
  }
}
</script>

<style scoped>
.featured-cards {
  height: 22.0625rem;
  width: auto;
}

@media (max-width: 768px) {
  .featured-cards {
    height: 21.0625rem;
    width: auto;
  }
}
</style>
