<template>
  <div>
    <hooper
      v-if="$device.isDesktop"
      :items-to-show="1"
      :infinite-scroll="true"
      style="width: 100%; height: auto"
      :auto-play="slider.desktop.length > 1 ? true : false"
      :center-mode="false"
      :wheel-control="false"
      class="carousel-desktop-banners"
    >
      <slide v-for="(slide, index) in slider.desktop" :key="index">
        <card-slide :slide="slide" :index="index" />
      </slide>
      <hooper-pagination
        v-if="slider.desktop.length > 1 ? true : false"
        slot="hooper-addons"
      ></hooper-pagination>
    </hooper>
    <hooper
      v-if="$device.isMobile"
      :items-to-show="1"
      :infinite-scroll="true"
      style="width: 100%; height: 11.25rem"
      :auto-play="slider.desktop.length > 1 ? true : false"
      :wheel-control="false"
      class="carousel-desktop-banners"
    >
      <slide v-for="(slide, index) in slider.mobile" :key="index">
        <card-slide :slide="slide" :index="index" />
      </slide>
      <hooper-pagination
        v-if="slider.desktop.length > 1 ? true : false"
        slot="hooper-addons"
      ></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'
import CardSlide from '@/components/partials/cards/CardSlide'

export default {
  name: 'CarouselHomeCards',
  components: {
    CardSlide,
    Hooper,
    Slide,
    HooperPagination
  },
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
  }
}
</script>

<style scoped lang="scss">
.swiper-pagination-bullet {
  width: 21px !important;
  height: 21px !important;
  background: transparent !important;
  border: 0.19rem solid #ffffff;
  opacity: 1 !important;
}

.swiper-pagination-bullet-active {
  width: 50px !important;
  border-radius: 90px !important;
  background: white !important;
}

#red {
  .swiper-pagination-bullet {
    width: 15px !important;
    height: 15px !important;
    background: transparent !important;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    border-radius: 90px !important;
  }
}
</style>
