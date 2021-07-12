<template>
  <div class="elevated">
    <Title v-model="title" class=".title-c" />
    <BrandsCommon />
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import BrandsCommon from '@/components/partials/others/BrandsCommon'
export default {
  name: 'BrandsHome',
  components: { BrandsCommon, Title },
  data() {
    return {
      title: 'Marcas'
    }
  }
}
</script>

<style scoped></style>
