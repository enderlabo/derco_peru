<template>
  <div>
    <img :src="banner" alt="Banner Derco" />
  </div>
</template>

<script>
export default {
  name: 'HeaderBackground',
  data() {
    return {
      banner:
        'https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-banner-dercocenter.jpg'
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
