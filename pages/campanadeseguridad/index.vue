<template>
  <Principal>
    <ConsultaChasis />
  </Principal>
</template>

<script>
import ConsultaChasis from '@/components/partials/campana-seguridad/consultaChasis'
import Principal from '@/components/partials/campana-seguridad/Principal'
import SeoData from '@/mixins/SeoData'

export default {
  name: 'CampanaSeguridad',
  components: { Principal, ConsultaChasis },
  mixins: [SeoData]
}
</script>
