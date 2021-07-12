<template>
  <div class="elevated">
    <Title v-model="title" />
    <BrandsCommon />
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import BrandsCommon from '@/components/partials/others/BrandsCommon'

export default {
  name: 'Brands',
  components: { BrandsCommon, Title },
  data() {
    return {
      title: 'Somos la mayor red automotriz del país'
    }
  }
}
</script>

<style scoped></style>
