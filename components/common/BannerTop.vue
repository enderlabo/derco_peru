<template>
  <div>
    <img :src="imageBanner" :alt="altBanner" />
  </div>
</template>

<script>
export default {
  name: 'BannerTop',
  props: {
    imageBanner: {
      type: String,
      default:
        'https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-banner-dercocenter.jpg'
    },
    // eslint-disable-next-line vue/require-default-prop
    altBanner: {
      type: String,
      default: 'Banner Derco Perú'
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  max-height: 340px;
}
</style>
