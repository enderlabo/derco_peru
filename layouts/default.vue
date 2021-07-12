<template>
  <div>
    <LazyHydrate when-idle>
      <TopBar class="d-none d-sm-none d-md-block" />
    </LazyHydrate>
    <LazyHydrate when-idle>
      <NavBar />
    </LazyHydrate>
    <Nuxt />
    <Footer />
    <LazyHydrate when-visible>
      <sub-footer />
    </LazyHydrate>
  </div>
</template>
<script>
import LazyHydrate from 'vue-lazy-hydration'
import SubFooter from '@/components/core/SubFooter'
import Footer from '@/components/core/Footer/index'
import TopBar from '@/components/core/TopBar'
import NavBar from '@/components/core/NavBar'

export default {
  components: { SubFooter, Footer, NavBar, TopBar, LazyHydrate }
}
</script>
<style>
.shadow-nav {
  box-shadow: 7px 15px 15px #f2f2f2;
}
</style>
