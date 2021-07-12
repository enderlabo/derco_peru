<template>
  <article>
    <template v-if="$fetchState.pending">
      <content-placeholders>
        <content-placeholders-img style="height: 20rem" />
      </content-placeholders>
    </template>
    <template v-else-if="$fetchState.error">
      <content-placeholders>
        <content-placeholders-img style="height: 20rem" />
      </content-placeholders>
    </template>
    <template v-else>
      <div class="main-slider main-slider-home-component">
        <client-only>
          <carousel-home-cards :slider="slider" />
        </client-only>
      </div>
    </template>
  </article>
</template>

<script>
import CarouselHomeCards from '@/components/partials/home/CarouselHomeCards'
import { mapGetters } from 'vuex'

export default {
  name: 'CarouselHome',
  components: { CarouselHomeCards },
  async fetch() {
    const home = await this.$axios.$get('resources/home')
    this.slider = home.slider
  },
  data() {
    return {
      slider: []
    }
  },
  computed: {
    ...mapGetters({
      home: 'resources/home'
    })
  }
}
</script>
