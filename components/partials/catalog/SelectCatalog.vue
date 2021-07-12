<template>
  <b-row class="justify-content-md-end">
    <b-col v-if="$device.isDesktop" md="3" class="mb-5">
      <FormSelect
        v-model="select"
        class="w-30"
        placeholder="Selecciona una opción"
        :options="options"
        text-field="text"
        value-field="value"
      ></FormSelect>
    </b-col>
  </b-row>
</template>

<script>
import FormSelect from '@/components/common/AdvancedSelect/FormSelect'

export default {
  name: 'SelectCatalog',
  components: { FormSelect },
  data() {
    return {
      select: this.$route.name,
      options: [
        { value: 'catalogo-derco-autos', text: 'Autos' },
        { value: 'catalogo-derco-flotas', text: 'Flotas' },
        {
          value: 'catalogo-derco-camiones-y-maquinarias',
          text: 'Camiones y Maquinarias'
        }
      ]
    }
  },
  watch: {
    async select() {
      await this.$router.push({ name: this.select })
    }
  }
}
</script>

<style scoped></style>
