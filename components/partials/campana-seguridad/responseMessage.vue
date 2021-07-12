<template>
  <div class="row rowResponse">
    <div class="col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
      <img
        src="@/assets/img/assets/campana_seguridad/iconExclamacion.png"
        alt="iconExclamacion Derco Perú"
      />
      <h3>VIN REGISTRADO EN NUESTRA CAMPAÑA DE SEGURIDAD</h3>
      <h4 class="text-white font-weight-bold">
        Estado: {{ $route.query.status }}
      </h4>
      <p>
        Estimado cliente, el <strong>VIN</strong> ingresado se encuentra
        comprendido en este llamado a revisión voluntario. Con la finalidad de
        atenderlo, le solicitamos pueda sacar una cita
        <strong
          >llamando al número 713 - 5050 para la atención gratuita en nuestro
          taller.</strong
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResponseMessage'
}
</script>
