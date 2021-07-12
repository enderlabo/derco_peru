<template>
  <Principal>
    <vin-response />
  </Principal>
</template>

<script>
import Principal from '@/components/partials/campana-seguridad/Principal'
import VinResponse from '@/components/partials/campana-seguridad/VinResponse'

export default {
  name: 'Vin',
  components: { VinResponse, Principal },
  head() {
    return {
      title: this.$route.query.status || 'Repuesta llamados a revisión'
    }
  }
}
</script>

<style scoped></style>
