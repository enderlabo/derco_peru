<template>
  <b-container>
    <b-row cols="3" cols-md="6">
      <div v-for="(item, index) in brands" :key="index">
        <b-col class="text-center">
          <a id="enlace" class="enlace" :href="item.url" target="_blank">
            <b-img
              for="enlace"
              :src="item.img"
              center
              alt="Rounded image"
              class="img-brand-section"
            ></b-img>
            <span class="enlace"> Ir a la Web</span></a
          >
        </b-col>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'BrandsCommon',
  data() {
    return {
      brands: [
        {
          img: require('@/assets/img/marcas/desktop/suzuki.png'),
          url: 'https://autos.suzuki.com.pe/'
        },
        {
          img: require('@/assets/img/marcas/desktop/mazda.png'),
          url: 'https://www.mazda.pe/'
        },
        {
          img: require('@/assets/img/marcas/desktop/renault.png'),
          url: 'https://www.renault.pe/'
        },
        {
          img: require('@/assets/img/marcas/desktop/citroen.png'),
          url: 'https://www.citroen.com.pe/'
        },
        {
          img: require('@/assets/img/marcas/desktop/ds.png'),
          url: 'https://www.dsautomobiles.com.pe/'
        },
        {
          img: require('@/assets/img/marcas/desktop/great-wall.png'),
          url: 'https://www.greatwall.com.pe/'
        },
        {
          img: require('@/assets/img/marcas/desktop/haval.png'),
          url: 'https://www.haval.com.pe/'
        },
        {
          img: require('@/assets/img/marcas/desktop/changan.png'),
          url: 'https://www.changan.com.pe/'
        },
        {
          img: require('@/assets/img/marcas/desktop/jac.png'),
          url: 'https://www.jac.pe/'
        },
        {
          img: require('@/assets/img/marcas/desktop/jac-camiones.png'),
          url: 'https://camionesjac.pe/'
        },
        {
          img: require('@/assets/img/marcas/desktop/still.png'),
          url: 'https://www.dercomaq.pe/'
        },
        {
          img: require('@/assets/img/marcas/desktop/komatsu.png'),
          url: 'https://www.dercomaq.pe/'
        },
        {
          img: require('@/assets/img/marcas/desktop/hangcha.png'),
          url: 'https://www.dercomaq.pe/'
        },
        {
          img: require('@/assets/img/marcas/desktop/landini.png'),
          url: 'https://www.dercomaq.pe/'
        }
      ]
    }
  }
}
</script>

<style scoped>
.img-brand-section {
  max-height: 70px;
  max-width: 90px;
}
.enlace {
  font-size: 12px;
  font-weight: bold;
  color: #cecece;
  transform: translateY(-2px);
}
.col {
  padding-top: 0 !important;
  padding-bottom: 30px;
  line-height: 0;
}
</style>
