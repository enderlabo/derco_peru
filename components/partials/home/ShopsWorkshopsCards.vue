<template>
  <b-container>
    <Hooper
      v-if="$device.isDesktop"
      :items-to-show="3"
      class="shops-and-workshops-cards"
      style="height: auto"
      :infinite-scroll="true"
      :wheel-control="false"
    >
      <Slide v-for="(item, index) in subsidiaries" :key="index" class="d-flex">
        <CardShopsWorkshopsInHome :subsidiary="item" />
      </Slide>
      <hooper-navigation
        slot="hooper-addons"
        class="navigation-desktop"
      ></hooper-navigation>
      <hooper-pagination
        slot="hooper-addons"
        class="pagination-desktop"
      ></hooper-pagination>
    </Hooper>
    <Hooper
      v-if="$device.isMobile"
      :items-to-show="1"
      class="shops-and-workshops-cards"
      style="height: auto"
      infinite-scroll="true"
      :wheel-control="false"
    >
      <Slide v-for="(item, index) in subsidiaries" :key="index">
        <CardShopsWorkshopsInHome :subsidiary="item" />
      </Slide>
      <hooper-pagination
        slot="hooper-addons"
        class="pagination-desktop"
      ></hooper-pagination>
      <hooper-navigation
        slot="hooper-addons"
        class="navigation-desktop"
      ></hooper-navigation>
    </Hooper>
  </b-container>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
} from 'hooper'
import CardShopsWorkshopsInHome from '@/components/partials/cards/CardShopsWorkshopsInHome'
import { mapGetters } from 'vuex'

export default {
  name: 'ShopsWorkshopsCards',
  title: 'Centered slides + Auto slides per view',
  components: {
    CardShopsWorkshopsInHome,
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  },
  computed: {
    ...mapGetters({
      subsidiaries: 'subsidiaries/subsidiariesTotal'
    })
  }
}
</script>
<style lang="scss" scoped>
.shops-and-workshops-cards {
  height: 22.0625rem;
  width: auto;
}

@media (max-width: 768px) {
  .shops-and-workshops-cards {
    height: 21.0625rem;
    width: auto;
  }
}
</style>
