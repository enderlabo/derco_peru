<template>
  <div class="elevated">
    <b-container>
      <div class="pt-2 pt-md-4">
        <b-row>
          <b-col md="6">
            <details-trucks :truck="truck" />
          </b-col>
          <b-col md="6"> <quotation-form-trucks :version="truck" /></b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import DetailsTrucks from '@/components/partials/catalog/trucks/quotation/DetailsTrucks'
import QuotationFormTrucks from '@/components/partials/catalog/trucks/quotation/QuotationFormTrucks'
export default {
  name: 'Index',
  components: { QuotationFormTrucks, DetailsTrucks },
  async asyncData({ store, route, app }) {
    const id = route.params.id
    const { data: truck } = await app.$axios.get(`versions/${id}`)
    const seoData = store.getters['resources/getSeoInfo'](route.path)
    seoData.title = `Cotizar ${truck.model.brandName} ${truck.model.name} ${route.params.year}`
    return {
      seoData,
      truck
    }
  },
  data() {
    return {
      truck: {},
      seoData: {}
    }
  },
  async mounted() {
    await this.$recaptcha.init()

    const { style } = await document.querySelector('.grecaptcha-badge')
    if (style) {
      style.display = 'block'
    }
  },
  async destroyed() {
    const { style } = await document.querySelector('.grecaptcha-badge')
    if (style) {
      style.display = 'none'
    }
  },
  head() {
    return {
      script: [
        {
          src: '/assets/lib/md5.js',
          async: true,
          defer: true
        }
      ],
      title: this.seoData.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seoData.description
        }
      ]
    }
  }
}
</script>

<style scoped>
.content-quotations-trucks {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
