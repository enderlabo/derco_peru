<template>
  <div class="bg-footer mt-4 mt-md-2 py-3">
    <b-container>
      <label>
        (*)Precios expresados en dólares americanos, los precios en soles son
        referenciales u calculados en función al Tipo de Cambio vigente,
        imágenes y especificaciones son referenciales y varian según versión
        disponible del producto. Para más información revisa los
        <b-link class="quotationFooter__a" to="/terminos-y-condiciones"
          >Términos y Condiciones</b-link
        >
        contacta con tu tienda Derco de tu preferencia.
        <b-link class="quotationFooter__a" to="/tiendas-y-talleres"
          >Ver red Derco</b-link
        >
      </label>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'QuotationFooter'
}
</script>
<style lang="scss" scoped>
.bg-footer {
  background: #e5e5e5;
  label {
    font-size: 12px;
    font-weight: bold;
    color: #4d4d4d;
  }
}
</style>
