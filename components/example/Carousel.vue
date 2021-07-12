<template>
  <div v-if="!$fetchState.pending" class="example">
    <client-only>
      <carousel-example :slider="slider" />
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CarouselExample from '@/components/example/CarouselExample'

export default {
  name: 'Carousel',
  components: { CarouselExample },
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

<style lang="scss">
.example {
  height: auto;
  .swiper {
    .swiper-pagination {
      > .swiper-pagination-bullet {
        width: 22px !important;
        height: 22px !important;
        border-radius: 50% !important;
        background-color: transparent !important;
        border: 0.125rem solid rgba(0, 0, 0, 0.12) !important;
        opacity: 1;
        transform: scale(1) !important;
      }
      > .swiper-pagination-bullet-active {
        background-color: #ffffff !important;
        border: 0.125rem solid rgba(0, 0, 0, 0.125) !important;
        border-radius: 5rem !important;
        width: 3.125rem !important;
      }
    }
  }
  @media (max-width: 767px) {
    .swiper {
      .swiper-pagination {
        > .swiper-pagination-bullet {
          width: 20px !important;
          height: 20px !important;
        }
        > .swiper-pagination-bullet-active {
          width: 3.125rem !important;
        }
      }
    }
  }
}
</style>
