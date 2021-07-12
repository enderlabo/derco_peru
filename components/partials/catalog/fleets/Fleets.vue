<template>
  <div>
    <SelectCatalog />
    <b-row>
      <b-col
        v-for="(item, index) in models"
        :key="index"
        cols="12"
        md="4"
        class="col-unit"
      >
        <CardFleets :item="item" />
      </b-col>
    </b-row>
    <modal-items-fleets />
  </div>
</template>

<script>
import SelectCatalog from '@/components/partials/catalog/SelectCatalog'
import CardFleets from '@/components/partials/catalog/fleets/CardFleets'
import ModalItemsFleets from '@/components/partials/catalog/fleets/ModalItemsFleets'

export default {
  name: 'Fleets',
  components: { ModalItemsFleets, CardFleets, SelectCatalog },
  props: {
    models: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.col-unit {
  margin-bottom: 3.5rem !important;
}
</style>
