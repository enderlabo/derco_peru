<template>
  <swiper
    v-if="$device.isDesktop"
    ref="carousel"
    class="swiper"
    :options="swiperOptions"
  >
    <template v-for="(slide, index) in slider.desktop">
      <swiper-slide :key="index">
        <card-slide :slide="slide" />
      </swiper-slide>
    </template>
    <div
      v-if="slider.desktop.length > 1"
      slot="pagination"
      class="swiper-pagination"
    ></div>
  </swiper>
  <swiper
    v-else-if="$device.isMobile"
    ref="carousel"
    class="swiper"
    :options="swiperOptions"
  >
    <template v-for="(slide, index) in slider.mobile">
      <swiper-slide :key="index">
        <card-slide :slide="slide" />
      </swiper-slide>
    </template>
    <div
      v-if="slider.mobile.length > 1"
      slot="pagination"
      class="swiper-pagination"
    ></div>
  </swiper>
</template>

<script>
import CardSlide from '@/components/partials/cards/CardSlide'
export default {
  name: 'CarouselExample',
  components: { CardSlide },
  props: {
    slider: {
      type: Object,
      default() {
        return {
          mobile: [
            {
              url: '/',
              title: 'suzuki_new_vitara_desk',
              imageSrc:
                'https://s3.amazonaws.com/dercocenterpe/uploads/sites/7/2019/06/suzuki_new_vitara_desk.jpg'
            }
          ],
          desktop: [
            {
              url: '/',
              title: 'suzuki_new_vitara_desk',
              imageSrc:
                'https://s3.amazonaws.com/dercocenterpe/uploads/sites/7/2019/06/suzuki_new_vitara_desk.jpg'
            }
          ]
        }
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: false
        }
      }
    }
  },
  methods: {
    onSwiperRedied(swiper) {
      console.log('Swiper redied!', swiper)
    },
    onSwiperSlideChangeTransitionStart() {
      console.log('SwiperSlideChangeTransitionStart!')
    },
    onSwiperClickSlide(index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex)
    }
  }
}
</script>
