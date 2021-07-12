<template>
  <div>
    <lazy-hydrate when-idle>
      <carousel />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <group-cards-assets />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <shops-workshops />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <featured />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <news />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <brands />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <GroupCardsAssets />
    </lazy-hydrate>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Carousel from '@/components/example/Carousel'
import SeoData from '@/mixins/SeoData'
const GroupCardsAssets = () =>
  import('@/components/partials/home/GroupCardsAssets')
const ShopsWorkshops = () => import('@/components/partials/home/ShopsWorkshops')
const Featured = () => import('@/components/partials/home/Featured')
const Brands = () => import('@/components/partials/home/BrandsHome')
const News = () => import('@/components/partials/home/News')
const LazyHydrate = () => import('vue-lazy-hydration')

export default {
  components: {
    Carousel,
    News,
    Brands,
    Featured,
    ShopsWorkshops,
    GroupCardsAssets,
    LazyHydrate
  },
  mixins: [SeoData],
  computed: {
    ...mapGetters({
      globals: 'resources/globals'
    })
  }
}
</script>
