<template>
  <div class="main-slider-img">
    <a
      v-if="slide.url.includes('https://')"
      :target="slide.target"
      :href="slide.url"
      class="content-img"
    >
      <img
        :data-src="slide.imageSrc"
        :alt="slide.title"
        class="img-element-main-slider lozad"
      />
    </a>
    <nuxt-link v-else :target="slide.target" :to="`${slide.url}`">
      <img
        class="img-element-main-slider lozad"
        :alt="slide.title"
        :data-src="slide.imageSrc"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'CardSlide',
  props: {
    slide: {
      type: Object,
      default() {
        return {
          url: String,
          title: String,
          imageSrc: String
        }
      }
    }
  },
  mounted() {
    this.$lozad.observe()
  }
}
</script>

<style scoped>
.img-element-main-slider {
  width: 100vw;
}
</style>
