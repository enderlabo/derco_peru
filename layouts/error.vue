<template>
  <div class="page-wrap d-flex flex-row align-items-center">
    <b-container>
      <b-row class="justify-content-center">
        <b-col md="12" class="text-center">
          <span class="title"> <warning class="icon" /> UPS!</span>
          <div class="section-description">
            <span class="text-description">
              Parece que ha habído un error con la página que estabas buscando.
            </span>
            <br />
            <span class="text-description">
              Es posible que la entrada haya sido eliminada o la página no
              exista.
            </span>
          </div>
          <b-button
            class="button-error"
            pill
            variant="primary"
            :to="{ name: 'index' }"
          >
            IR A LA PÁGINA PRINCIPAL
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Warning from '@/components/svg/icons/Warning'
export default {
  name: 'Error',
  components: { Warning },
  head() {
    return {
      title: 'Página no encontrada',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  font-weight: bold;
  font-size: 90px;
}
.icon {
  width: 75px;
}
.section-description {
  padding-top: 40px;
  .text-description {
    font-size: 21px;
  }
}
.page-wrap {
  min-height: 100vh;
}
.button-error {
  margin-top: 35px;
  min-width: 292px;
}
</style>
