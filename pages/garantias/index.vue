<template>
  <div class="elevated">
    <banner />
    <coverage />
    <wear-component-coverage />
    <limit-expiry-warranty />
  </div>
</template>

<script>
import SeoData from '@/mixins/SeoData'
import Banner from '@/components/partials/warranty/banner'
import Coverage from '@/components/partials/warranty/Coverage'
import WearComponentCoverage from '@/components/partials/warranty/WearComponentCoverage'
import LimitExpiryWarranty from '@/components/partials/warranty/LimitExpiryWarranty'

export default {
  name: 'Index',
  components: { LimitExpiryWarranty, WearComponentCoverage, Coverage, Banner },
  mixins: [SeoData]
}
</script>

<style scoped></style>
