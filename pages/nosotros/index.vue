<template>
  <div>
    <HeaderBackground />
    <TheCompany />
    <OurValues />
    <Brands />
  </div>
</template>

<script>
import SeoData from '@/mixins/SeoData'
import HeaderBackground from '@/components/partials/we/HeaderBackground'
import TheCompany from '@/components/partials/we/TheCompany'
import OurValues from '@/components/partials/we/OurValues'
import Brands from '@/components/partials/we/Brands'
export default {
  name: 'Nosotros',
  components: { Brands, OurValues, TheCompany, HeaderBackground },
  mixins: [SeoData]
}
</script>

<style scoped></style>
