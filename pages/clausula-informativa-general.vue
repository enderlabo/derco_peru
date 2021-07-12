<template>
  <div>
    <Title v-model="title" />
    <informative-clause />
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import InformativeClause from '@/components/partials/legals/terms/InformativeClause'
import SeoData from '@/mixins/SeoData'
export default {
  name: 'ClausulaInformativaGeneral',
  components: { InformativeClause, Title },
  mixins: [SeoData],
  data() {
    return {
      title: 'Cláusula Informativa'
    }
  }
}
</script>

<style scoped></style>
