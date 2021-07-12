<template>
  <div>
    <HeaderBackground />
    <TabsType />
    <ButtonsSection />
  </div>
</template>

<script>
import HeaderBackground from '@/components/partials/we/HeaderBackground'
import TabsType from '@/components/partials/postVenta/TabsType'
import ButtonsSection from '@/components/partials/postVenta/ButtonsSection'
import SeoData from '@/mixins/SeoData'
export default {
  name: 'Postventa',
  components: { ButtonsSection, TabsType, HeaderBackground },
  mixins: [SeoData]
}
</script>

<style scoped></style>
