<template>
  <div class="elevated">
    <BannerTop :image-banner="imageBanner" :alt-banner="altBanner" />
    <Title v-model="title" :description="description" />
    <b-container>
      <slot />
    </b-container>
  </div>
</template>

<script>
import BannerTop from '@/components/common/BannerTop'
import Title from '@/components/common/Title'

export default {
  name: 'Principal',
  components: { BannerTop, Title },
  data() {
    return {
      title: 'CAMPAÑAS DE SEGURIDAD',
      description:
        'Las campañas Recalls son los llamados a revisión que las marcas automotrices realizan a nivel mundial como parte del programa de mejora continua. Para el mercado peruano, Derco brinda estas atenciones dentro de su política de servicio al cliente con el objetivo de mantener un producto de alta calidad que asegure su completa satisfacción.',
      imageBanner:
        'https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-bannerCampana.jpg',
      altBanner: 'Texto ejemplo de AltBanner'
    }
  }
}
</script>
