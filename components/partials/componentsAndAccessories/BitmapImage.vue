<template>
  <div>
    <b-img
      v-if="$device.isDesktop"
      :data-src="
        require('@/assets/img/componentsAndAccessories/desktop/bitmap.png')
      "
      class="lozad"
      alt="Banner Components y Accesorios"
      center
      fluid
    />
    <b-img
      v-if="$device.isMobile"
      center
      :data-src="
        require('@/assets/img/componentsAndAccessories/mobile/bitmap.png')
      "
      class="lozad"
      alt="Banner Components y Accesorios"
      fluid
    />
  </div>
</template>

<script>
export default {
  name: 'BitmapImage',
  mounted() {
    this.$lozad.observe()
  }
}
</script>

<style scoped></style>
