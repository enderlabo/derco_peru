<template>
  <section>
    <b-container>
      <h2>2. Cobertura de componentes de desgaste</h2>
      <b-row class="justify-content-center">
        <b-col md="12" class="align-self-center">
          <b-img
            class="img-fluid"
            center
            alt="image detail warranty"
            :src="require('@/assets/img/warranty/2.svg')"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'WearComponentCoverage'
}
</script>

<style scoped lang="scss">
h2 {
  font-family: Lato, serif;
  font-weight: bold;
  font-size: 18px;
  color: #4d4d4d;
}

p {
  font-weight: normal;
  font-size: 16px;
  color: $secondary;
}
</style>
