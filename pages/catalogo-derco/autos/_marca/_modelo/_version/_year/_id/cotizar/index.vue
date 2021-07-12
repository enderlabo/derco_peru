<template>
  <div class="elevated">
    <b-container>
      <div class="search-section pt-2 pt-md-4">
        <div>
          <b-row>
            <quotation-car-data-sheet :car="car" />
            <quotation-form :version="car" />
          </b-row>
        </div>
      </div>
    </b-container>
    <quotation-footer />
  </div>
</template>

<script>
import QuotationCarDataSheet from '@/components/partials/quotation/QuotationCarDataSheet'
import QuotationFooter from '@/components/partials/quotation/QuotationFooter'
import QuotationForm from '@/components/partials/quotation/QuotationForm'

export default {
  components: { QuotationForm, QuotationFooter, QuotationCarDataSheet },
  async asyncData({ store, route, app }) {
    const id = route.params.id
    const { data: car } = await app.$axios.get(`versions/${id}`)
    const seoData = store.getters['resources/getSeoInfo'](route.path)
    seoData.title = `Cotizar ${car.model.brandName} ${car.model.name} ${route.params.year}`
    return {
      seoData,
      car
    }
  },
  data() {
    return {
      car: {}
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
  methods: {
    redirect() {
      this.$router.push('/gracias')
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
