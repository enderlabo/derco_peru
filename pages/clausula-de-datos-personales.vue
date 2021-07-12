<template>
  <div>
    <Title v-model="title" />
    <personal-data-clause />
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import PersonalDataClause from '@/components/partials/legals/terms/PersonalDataClause'
import SeoData from '@/mixins/SeoData'
export default {
  name: 'ClausulaDeDatosPersonales',
  components: { PersonalDataClause, Title },
  mixins: [SeoData],
  data() {
    return {
      title: 'Cláusula de Datos Personales para Usos Adicionales'
    }
  }
}
</script>

<style scoped></style>
