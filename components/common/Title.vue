<template>
  <div class="content-title">
    <h1 class="text-center title-c">
      {{ value }}
    </h1>
    <b-container v-if="description">
      <p class="mx-auto text-center description">
        {{ description }}
      </p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    value: {
      type: String,
      default: 'Title'
    },
    // eslint-disable-next-line vue/require-default-prop
    description: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
h1,
p {
  margin-bottom: 0;
}
.title-c {
  font-weight: 900;
  text-transform: uppercase;
  color: $secondary;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
}

.description {
  max-width: 700px;
  font-size: 14px;
  font-weight: 400;
}
@media (min-width: 768px) {
  .description {
    font-size: 16px;
  }
}
</style>
