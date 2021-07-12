<template>
  <b-img
    v-if="$device.isDesktop"
    :data-src="
      require('@/assets/img/componentsAndAccessories/desktop/logo.png')
    "
    class="lozad img-transform"
    alt="Banner Components y Accesorios"
    center
    fluid
  />
  <b-img
    v-else
    center
    :data-src="require('@/assets/img/componentsAndAccessories/mobile/logo.png')"
    class="lozad img-transform"
    alt="Banner Components y Accesorios"
    fluid
  />
</template>

<script>
export default {
  name: 'LogoImage',
  mounted() {
    this.$lozad.observe()
  }
}
</script>

<style scoped>
.img-transform {
  transform: translateY(+1rem);
  position: relative;
}
</style>
