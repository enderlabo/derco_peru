<template>
  <b-modal
    id="modal-center"
    class=""
    size="lg"
    centered
    hide-header
    hide-footer
  >
    <b-row>
      <b-col md="8">
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="3">
              <b-card-img
                src="
                  https://derco-pe-prod.s3.amazonaws.com/medias/suzuki/migration/front-image/nuevo-alto/Alto_destacado-3.jpg
                "
                class="ModalIF__image-car img-fluid"
              ></b-card-img>
            </b-col>
            <b-col md="4" class="Details">
              <b-card-img
                :src="
                  require('@/assets/img/marcas/horizontales/' +
                    'suzuki' +
                    '.png')
                "
                class="ModalIF__image-brand"
              ></b-card-img>
              <div class="ModalIF__text-title text-uppercase">Nuevo Alto</div>
            </b-col>
            <b-col md="4">
              <div class="Buttons">
                <div class="ModalIF__title-details">Flota a solicitar</div>
                <div class="d-inline-flex">
                  <b-button size="sm" class=""> -</b-button>
                  <div>
                    <span> 1 </span>
                  </div>
                  <b-button size="sm"> +</b-button>
                </div>
              </div>
            </b-col>
            <b-col md="1">
              <b-button size="sm"> /</b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col md="4">
        <b-row>
          <b-col cols="12" md="12">
            <b-button
              block
              variant="primary"
              class="mt-2 mb-2 text-uppercase font-weight-bold"
            >
              Finalizar Cotización
            </b-button>
          </b-col>
          <b-col class="text-center">
            <span
              class="pointer mt-3 mb-3"
              @click="$bvModal.hide('modal-center')"
            >
              Seguir Cotizando ->
            </span>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalItemsFleets'
}
</script>

<style scoped lang="scss">
$color-text: #4d4d4d;

.ModalIF {
  &__image-car {
  }

  &__image-brand {
    max-height: 20px;
    width: auto;
  }

  &__text-title {
    font-weight: bold;
    font-size: 20px;
    color: $color-text;
  }

  &__title-details {
    color: $color-text;
    font-size: 14px;
    font-weight: bold;
  }
}

.pointer {
  cursor: pointer;
}
</style>
