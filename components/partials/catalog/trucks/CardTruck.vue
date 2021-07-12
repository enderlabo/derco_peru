<template>
  <div class="card-container manual-flip">
    <div class="card">
      <div class="front">
        <div class="user align-content-center">
          <b-img center :src="item.image" />
        </div>
        <div class="main">
          <div class="d-flex justify-content-between">
            <div class="car-info ml-3 text-uppercase font-weight-bold">
              <img
                :src="
                  require('@/assets/img/marcas/horizontales/' +
                    item.model.brandSlug +
                    '.png')
                "
                :alt="item.model.brandSlug"
                height="20"
              />
              <div class="title-card">
                {{ item.model.name }}
              </div>
              <div class="subtitle-card">
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="justify-content-between font-weight-bold">
            <div class="now text-muted ml-3">
              <span>PRECIO LISTA</span>
              <br />
              <span class="text-danger">{{ pricesUSD | USD }}</span>
              <span class="text-danger"> ó {{ pricesPEN | PE }} </span>
            </div>
          </div>
        </div>
        <div class="text-center align-content-center car-buttons">
          <b-button
            pill
            variant="primary"
            class="cot px-3"
            @click="
              $router.push({
                name:
                  'catalogo-derco-camiones-y-maquinarias-marca-modelo-version-year-id-cotizar',
                params: {
                  marca: item.model.brandSlug,
                  modelo: item.model.slug,
                  version: item.slug,
                  year: año,
                  id: item.id
                }
              })
            "
          >
            COTIZAR
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CardTruck',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      urlImage: '',
      logoUrl: '',
      selected: '',
      urlOnline: null
    }
  },
  computed: {
    pricesUSD() {
      const price = this.item.prices.find(item => item.id === this.selected)
      return !price ? 0 : price.value
    },
    pricesPEN() {
      const price = this.item.prices.find(item => item.id === this.selected)
      return !price ? 0 : price.convertedValue
    },
    año() {
      const price = this.item.prices.find(item => item.id === this.selected)
      return !price ? 0 : price.name
    }
  },
  watch: {
    async item(val) {
      const count = val.prices.length
      this.selected = val.prices[count - 1].id
      this.urlOnline = null
      await this.fetchData()
    }
  },
  async mounted() {
    const count = this.item.prices.length
    this.selected = this.item.prices[count - 1].id
    await this.fetchData()
  },
  methods: {
    ...mapActions({
      getVersionId: 'versions/getVersionId'
    }),
    async fetchData() {
      try {
        const res = await this.$axios.$post(
          process.env.apiStoreUrl.replace(/\$/, '') +
            `/api/store/cars/reservationlink`,
          [{ sap: this.item.code, year: this.año }]
        )
        const find = res[0].prices.find(i => i.year === this.año)
        this.urlOnline = find.link
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style scoped>
.subtitle-card {
}
.title-card {
  font-size: 20px;
  line-height: 18px;
  color: #4d4d4d;
  font-weight: 700;
  font-family: 'Lato';
}
.card {
  background: none repeat scroll 0 0 #ffffff;
  border-radius: 4px;
  color: #444444;
}

.card-container,
.front {
  padding-top: 3rem;
  width: 100%;
  border-radius: 5px;
}

.card .cover {
  height: 0px;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
}

.card .cover img {
  width: 100%;
}

.card .user {
  display: block;
  height: 120px;
  margin: -100px auto 0;
  overflow: hidden;
  width: 200px;
}

.card .user img {
  background: none repeat scroll 0 0 #ffffff;
  border: 4px solid #ffffff;
  height: 100%;
}

.card .content {
  /*! background-color: rgba(0, 0, 0, 0); */
  /*! box-shadow: none; */
  padding: 10px 20px 20px;
}

.card .content .main {
  min-height: 160px;
}

.card .back .content .main {
  height: 215px;
}

.card .name {
  font-size: 22px;
  line-height: 28px;
  margin: 10px 0 0;
  text-align: center;
  text-transform: capitalize;
}

.card h5 {
  margin: 5px 0;
  font-weight: 400;
  line-height: 20px;
}

.card .profession {
  color: #999999;
  text-align: center;
  margin-bottom: 20px;
}

.card .footer {
  border-top: 1px solid #eeeeee;
  color: #999999;
  margin: 30px 0 0;
  padding: 10px 0 0;
  text-align: center;
}

.card .footer .social-links {
  font-size: 18px;
}

.card .footer .social-links a {
  margin: 0 7px;
}

.card .footer .btn-simple {
  margin-top: -6px;
}

.card .header {
  padding: 15px 20px;
  height: 90px;
}

.card .motto {
  border-bottom: 1px solid #eeeeee;
  color: #999999;
  font-size: 14px;
  font-weight: 400;
  padding-bottom: 10px;
  text-align: center;
}

.card .stats-container {
  width: 100%;
  margin-top: 50px;
}

.card .stats {
  display: block;
  float: left;
  width: 33.333333%;
  text-align: center;
}

.card .stats:first-child {
  border-right: 1px solid #eeeeee;
}

.card .stats:last-child {
  border-left: 1px solid #eeeeee;
}

.card .stats h4 {
  font-weight: 300;
  margin-bottom: 5px;
}

.card .stats p {
  color: #777777;
}

.navbar-brand-logo .logo {
  border: 1px solid #333333;
  border-radius: 50%;
  float: left;
  overflow: hidden;
  width: 60px;
}

.navbar .navbar-brand-logo .brand {
  color: #ffffff;
  float: left;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  margin-left: 10px;
  margin-top: 10px;
  width: 60px;
}

.navbar-default .navbar-brand-logo .brand {
  color: #555;
}

/*       Fix bug for IE      */

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .front {
    -ms-backface-visibility: visible;
    backface-visibility: visible;
  }

  .front {
    z-index: 4;
  }

  .card-container:not(.manual-flip):hover .back,
  .card-container.manual-flip.hover .back {
    z-index: 5;
    visibility: visible;
  }
}

.unit__spanContain span {
  font-size: 12px;
  color: #4d4d4d;
}

.car-img img {
  width: 100%;
  height: auto;
}

.car-dcto span {
  background-color: red;
  color: white;
}

.car-buttons {
  transform: translateY(+1.1rem);
}

.car-info {
  color: #5d5d5d;
}

.f-20 {
  font-size: 20px;
  margin-bottom: 0;
}

.f-11 {
  font-size: 12px;
  margin-top: 0;
}

.year {
  color: #5f5f5f;
  font-weight: 600;
}

.btn-red {
  background-color: #fe1f18;
  border-color: #fe1f18;
  font-size: 13px;
  height: 35px;
}

.cot {
  width: 123px;
  margin-left: -3px;
  height: 35px;
  font-size: 13px;
}

.btn-red:hover {
  background-color: #860617;
  border-color: #860617;
}

.cot:hover {
  background-color: black;
  border-color: black;
}

@media (max-width: 450px) {
  .btn-red {
    margin-left: 8px;
    width: 150px;
  }

  .cot {
    width: 150px;
    margin-left: 3px;
  }
}
</style>
