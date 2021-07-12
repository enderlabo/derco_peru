<template>
  <div>
    <div class="text-center content-button-filter">
      <b-button v-b-modal.modal-filters pill class="button-filter">
        FILTRAR &nbsp;
        <fa :icon="faFilter" />
      </b-button>
    </div>
    <b-modal id="modal-filters" hide-header hide-footer>
      <div class="text-center">
        <b-button
          class="button-return"
          pill
          @click="$bvModal.hide('modal-filters')"
        >
          Volver</b-button
        >
      </div>
      <filters-shops-workshops />
    </b-modal>
  </div>
</template>

<script>
import FiltersShopsWorkshops from '@/components/partials/shopsWorkshops/FiltersShopsWorkshops'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'FilterShopsWorkshopsMobile',
  components: { FiltersShopsWorkshops },
  computed: {
    faFilter() {
      return faFilter
    }
  }
}
</script>

<style scoped>
.content-button-filter {
  margin-bottom: 40px;
}

.button-filter {
  width: 200px;
  background: #e5e5e5 !important;
  border: none;
  outline: none;
  color: #4d4d4d !important;
  font-size: 14px;
  font-weight: normal;
  height: 40px;
  border-radius: 5px;
}
.button-return {
  width: 200px;
  margin-top: 30px;
  margin-bottom: 40px;
  background: #cecece;
  border: #4d4d4d;
  color: #4d4d4d;
}
</style>
