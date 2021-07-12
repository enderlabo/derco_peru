<template>
  <b-container>
    <div class="details">
      <b-row class="my-2">
        <div class="mx-4">
          <Title v-model="title" />
        </div>

        <!-- TODO: Pagination component -->
      </b-row>
    </div>
  </b-container>
</template>

<script>
// import CardNew from '@/components/partials/cards/CardNew'
export default {
  name: 'CardShopsWorkshopsInHome',
  // components: {
  //   CardNew
  // },
  props: {
    subsidiary: {
      type: Object,
      default() {
        return { name: '', address: '' }
      }
    }
  },
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: '#777',
        width: 75,
        height: 75,
        class: 'm1 mb-2'
      },
      imgBrands: [
        'https://assets.stickpng.com/images/580b585b2edbce24c47b2cc5.png',
        'https://valcorconsultores.com/wp-content/uploads/2019/10/renault-png-400.png'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.details {
  border-width: 3px;
  border-style: solid;
  border-color: #e6e6e6;
  border-radius: 5px;
}
#name {
  font-size: 16px;
  text-align: center;
}
.dir {
  color: #4d4d4d;
  font-weight: 600;
}
.info a {
  color: #4d4d4d;
  font-weight: bold;
}
.icon-info {
  font-size: 22px;
  color: #4d4d4d;
}
.span-dir {
  font-weight: 550;
}
.title-list {
  font-size: 14px;
  font-weight: 600;
  color: #4d4d4d;
}
.content-list {
  font-size: 14px;
}
@media (min-width: 1060px) {
  .pr-20 {
    padding-right: 25%;
  }
}
@media (max-width: 1060px) {
  .brand-container {
    display: flex;
    justify-content: center;
  }
}
</style>
