<template>
  <Principal>
    <b-card
      body-bg-variant="transparent"
      border-variant="primary"
      header-bg-variant="transparent"
      class="card-message"
    >
      <template #header>
        <div class="text-center font-weight-bold text-uppercase title-message">
          VIN NO REGISTRADO EN NUESTRA CAMPAÑA DE SEGURIDAD
        </div>
      </template>
      <b-card-text class="text-justify text-primary description-message">
        Estimado cliente, el VIN/N° de Chasis no está en los registros de
        nuestras Campañas de Seguridad. Por favor valide que el VIN/Nº de Chasis
        ingresado sea el correcto. El VIN (Vehicle Identification Number) o Nº
        de Chasis es un código de 17 caracteres que contiene números y letras.
        En caso de consultas, te invitamos a contactarnos al teléfono 713-5000
        opción 0.
      </b-card-text>
    </b-card>
  </Principal>
</template>

<script>
import Principal from '@/components/partials/campana-seguridad/Principal'
import SeoData from '@/mixins/SeoData'
export default {
  name: 'NoRegistrado',
  components: { Principal },
  mixins: [SeoData]
}
</script>

<style scoped>
.card-message {
  margin-bottom: 65px;
}

.title-message {
  font-size: 14px;
  font-weight: 700;
  color: #dc241f;
}

.description-message {
  font-size: 14px;
  color: #dc241f;
  font-weight: normal;
}
</style>
