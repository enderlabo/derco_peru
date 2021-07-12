<template>
  <div class="elevated">
    <!--    <banner-components-and-accessories />-->
    <form-components-and-accessories />
    <bitmap-image />
  </div>
</template>

<script>
// import BannerComponentsAndAccessories from '@/components/partials/componentsAndAccessories/BannerComponentsAndAccessories'
import FormComponentsAndAccessories from '@/components/partials/componentsAndAccessories/FormComponentsAndAccessories'
import BitmapImage from '@/components/partials/componentsAndAccessories/BitmapImage'
import SeoData from '@/mixins/SeoData'

export default {
  name: 'Index',
  components: {
    BitmapImage,
    FormComponentsAndAccessories
    // BannerComponentsAndAccessories
  },
  mixins: [SeoData]
}
</script>

<style scoped></style>
