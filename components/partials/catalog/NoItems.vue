<template>
  <b-col class="NoItems text-center">
    <div class="NoItems__container">
      <search-icon class="NoItems__search-icon" />
      <div class="NoItems__search-text">
        <span>
          No se han encontrado artículos relacionados a tu búsqueda, intenta
          probar con otros filtros
        </span>
      </div>
    </div>
  </b-col>
</template>

<script>
import SearchIcon from '@/components/svg/icons/SearchIcon'
export default {
  name: 'NoItems',
  components: { SearchIcon }
}
</script>

<style scoped lang="scss">
.NoItems {
  &__container {
    padding-top: 20vh;
    padding-bottom: 20vh;
  }
  &__search-icon {
    width: 111px;
    height: 100px;
  }
  &__search-text {
    margin: auto;
    max-width: 422px;
    font-weight: 400;
    font-size: 16px;
  }
}
</style>
