<template>
  <div>
    <img
      v-if="$device.isDesktop"
      :data-src="
        require('@/assets/img/componentsAndAccessories/desktop/banner.png')
      "
      class="lozad"
      alt="Banner Components y Accesorios"
    />
    <img
      v-if="$device.isMobile"
      :data-src="
        require('@/assets/img/componentsAndAccessories/mobile/banner.png')
      "
      class="lozad"
      alt="Banner Components y Accesorios"
    />
  </div>
</template>

<script>
export default {
  name: 'BannerComponentsAndAccessories',
  mounted() {
    this.$lozad.observe()
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
