<template>
  <div>
    <Title v-model="title" />
  </div>
</template>

<script>
import Title from '@/components/common/Title'
export default {
  name: 'Banner',
  components: { Title },
  data() {
    return {
      title: 'Cobertura de garantía'
    }
  }
}
</script>

<style scoped></style>
