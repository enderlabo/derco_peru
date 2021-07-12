<template>
  <div class="elevated">
    <b-container class="pt-4 pt-md-2 pb-2 pb-md-2">
      <div v-if="quotations.length" class="thank-you-page mx-auto">
        <div class="icon-container">
          <img
            class="icon-check-desktop"
            src="~/assets/img/icons/icon-check-circle-green.svg"
            alt=""
          />
          <img
            class="icon-check-mobile"
            src="~/assets/img/icons/icon-check-circle-green.svg"
            alt=""
          />
        </div>
        <div class="thank-you-page-content">
          <div class="initial-info">
            <h2>¡Buena elección {{ quotations[0].name }}!</h2>
            <p>
              Ya estás a un paso para tener tu
              <span class="font-bold">camión</span> que deseas, pronto te
              contactaremos.
            </p>
          </div>
          <div class="quotation-info">
            <ul class="vehicles-to-get-quote-list">
              <li v-for="vehicle in quotations" :key="vehicle.id">
                <div class="vehicle-title">
                  <img
                    v-if="brandCar"
                    :src="
                      require(`~/assets/img/marcas/desktop/${$route.params.marca}.png`)
                    "
                    alt=""
                    class="brand-image"
                  />
                  <h4 class="model-title">
                    {{ vehicle.model_name }}
                    <span>{{ vehicle.version_name }}</span>
                  </h4>
                </div>
                <div class="vehicle-image">
                  <img :src="vehicle.car_picture" alt="" />
                </div>
                <div class="vehicle-price">
                  <p class="main-price">{{ vehicle.price_list | USD }}</p>
                  <p class="main-price other-currency-price">
                    {{ vehicle.price_min | PE }}
                  </p>
                  <div
                    v-if="vehicle.price_amicar && vehicle.price_brand"
                    class="bonuses-included"
                  >
                    <p class="bonuses-included-arrow-text">*Incluye bonos</p>
                    <p>
                      Marca: <span>{{ vehicle.price_brand | USD }}</span
                      ><br />
                      Financiamiento:
                      <span>{{ vehicle.price_amicar | USD }}</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <!--            <div class="selected-subsidiary-info">-->
            <!--              <p>-->
            <!--                Recuerda que tu concesionario<br />-->
            <!--                seleccionado es:-->
            <!--              </p>-->
            <!--              <p class="subsidiary-name">{{ quotations[0].subsidiary_name }}</p>-->
            <!--              <p class="subsidiary-address">-->
            <!--                <img-->
            <!--                  src="~/assets/img/icons/subsidiary-address-icon.svg"-->
            <!--                  alt=""-->
            <!--                />{{-->
            <!--                  quotations[0].subsidiary_address.replace('Nro. 0', 'S/N')-->
            <!--                }}-->
            <!--              </p>-->
            <!--            </div>-->
          </div>
          <!--          <div class="extra-info">-->
          <!--            <div class="schedules">-->
          <!--              <h3>Horario de atención</h3>-->
          <!--              <ul class="service-list">-->
          <!--                <li v-for="(service, i) in services" :key="`service-${i}`">-->
          <!--                  <h5 class="service-name">{{ service.name }}</h5>-->
          <!--                  <div-->
          <!--                    v-for="(schedule, i2) in service.openingHours"-->
          <!--                    :key="`schedule-${i2}`"-->
          <!--                  >-->
          <!--                    {{ schedule.name }} de-->
          <!--                    <span class="font-bold">{{-->
          <!--                      schedule.value.replace('-', 'a')-->
          <!--                    }}</span-->
          <!--                    ><br />-->
          <!--                  </div>-->
          <!--                  <ul class="service-telephone-numbers-list">-->
          <!--                    <li v-if="service.contactNumber">-->
          <!--                      <img-->
          <!--                        src="~/assets/img/icons/service-telephone-icon.svg"-->
          <!--                        alt=""-->
          <!--                      />-->
          <!--                      <a-->
          <!--                        class="phoneLink"-->
          <!--                        :href="'tel:' + service.contactNumber"-->
          <!--                      >-->
          <!--                        {{ service.contactNumber }}-->
          <!--                      </a>-->
          <!--                    </li>-->
          <!--                  </ul>-->
          <!--                </li>-->
          <!--              </ul>-->
          <!--            </div>-->
          <!--            <div class="how-to-get-subsidiary">-->
          <!--              <a-->
          <!--                :href="`https://maps.google.com/?q=${latitude},${longitude}`"-->
          <!--                target="_blank"-->
          <!--              >-->
          <!--                <img src="~/assets/img/icons/map-pin-icon.svg" alt="" />-->
          <!--                ¿Cómo llegar a tu concesionario?-->
          <!--              </a>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { createSlug } from '@/utils'

export default {
  name: 'Uuid',
  async asyncData({ app, error, route }) {
    // uuid hardcodeado por mietras para maquetar
    // Reemplazar despues con ${route.params.uuid}
    let { data: quotations } = await app.$axios.get(
      `quotations/uuid/${route.params.uuid}`
    )
    console.log(quotations)
    if (quotations.length) {
      quotations = quotations.map(q => {
        return {
          ...q,
          subsidiary_extras: JSON.parse(q.subsidiary_extras)
        }
      })
      return { quotations }
    } else {
      error({
        statusCode: 404,
        message: 'Not found'
      })
    }
  },
  data() {
    return {
      quotations: []
    }
  },
  computed: {
    latitude() {
      return this.quotations[0].subsidiary_extras.location.latitude
    },
    longitude() {
      return this.quotations[0].subsidiary_extras.location.longitude
    },
    contactNumber() {
      return this.quotations[0].subsidiary_extras.services[0].contactNumber
    },
    services() {
      return this.quotations[0].subsidiary_extras.services
    },
    brandCar() {
      return createSlug(this.quotations[0].brand_name)
    }
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      // Launch facebook pixel event only when router is used
      if (from.name) {
        vm.$analytics.fbq.event('CompleteRegistration')
        vm.$gtag.event('conversion', {
          send_to: 'AW-923613239/MwG0CPCm6JIBELfwtLgD'
        })
      }
    })
  }
}
</script>

<style scoped lang="scss">
.thank-you-page {
  width: 100%;
  max-width: 962px;
  //padding: 0 15px 69px;
  //margin: 177px auto 0;
  display: flex;
  flex-wrap: wrap;

  .icon-container {
    width: 82px;
    padding-right: 20px;
  }

  .thank-you-page-content {
    width: calc(100% - 82px);

    .initial-info {
      padding-bottom: 40px;
      border-bottom: 1px solid #979797;

      h2 {
        font-size: 30px;
        line-height: 35px;
        letter-spacing: -0.01px;
        color: #000;
        margin: 0;
      }

      p {
        font-size: 20px;
        letter-spacing: -0.01px;
        line-height: 28px;
        color: #000;
        margin: 0;
      }
    }

    .quotation-info {
      padding-bottom: 30px;
      border-bottom: 1px solid #979797;

      .vehicles-to-get-quote-list {
        margin: 0;
        padding: 0;
        list-style: none;

        > li {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          max-width: 800px;

          .vehicle-title {
            display: flex;
            align-items: center;
            padding-top: 25px;

            .brand-image {
              width: 64px;
            }

            .model-title {
              padding: 12px 0 12px 10px;
              border-left: 1px solid #979797;
              margin: 0 0 0 10px;
              font-size: 16px;
              line-height: 16px;

              span {
                display: block;
                margin-top: 5px;
              }
            }
          }

          .vehicle-image {
            width: 200px;

            img {
              width: 100%;
            }
          }

          .vehicle-price {
            padding-top: 30px;

            .main-price {
              margin: 0;
              color: red;
              font-size: 22px;
              line-height: 22px;

              &.other-currency-price {
                padding-bottom: 10px;
              }
            }

            .bonuses-included {
              display: flex;
              flex-wrap: wrap;
              align-items: center;

              .bonuses-included-arrow-text {
                font-size: 10px;
                line-height: 10px;
                padding: 10px;
                background: #e30513;
                color: #ffffff;
                margin: 0 10px 0 0;
              }

              p {
                font-size: 10px;
                margin: 0;

                span {
                  color: #e30513;
                }
              }
            }
          }
        }
      }

      .selected-subsidiary-info {
        padding-top: 30px;

        p {
          margin-top: 0;
          margin-bottom: 5px;
          font-size: 16px;
          line-height: 19px;
          color: #2b303c;
        }

        .subsidiary-name {
          font-size: 14px;
          line-height: 22px;
          color: #2b303c;
          margin: 0;
        }

        .subsidiary-address {
          font-size: 14px;
          line-height: 22px;
          color: #2b303c;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin: 0;

          img {
            width: 24px;
            margin: 0 5px 0 0;
          }
        }
      }
    }

    .extra-info {
      padding-top: 18px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 800px;

      .schedules {
        h3 {
          padding-top: 6px;
          font-size: 16px;
          line-height: 19px;
          color: #2b303c;
          margin: 0 0 2px;
        }

        .service-list {
          list-style: none;
          padding-left: 0;

          > li {
            font-size: 14px;
            line-height: 22px;
            color: #2b303c;
            margin: 0 0 14px 0;
          }

          .service-name {
            font-size: 14px;
            line-height: 22px;
            color: #2b303c;
            margin: 0;
          }
        }

        .service-telephone-numbers-list {
          margin-top: 10px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          list-style-type: none;
          padding-left: 0;

          li {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-right: 12px;
            font-size: 14px;
            line-height: 22px;
            color: #2b303c;

            &:last-child {
              margin-right: 0;
            }

            img {
              width: 23px;
              display: inline;
              margin: 0 4px 0 0;
            }
          }
        }
      }

      .how-to-get-subsidiary {
        a {
          display: flex;
          align-items: center;
          font-size: 16px;
          line-height: 19px;
          color: #2b303c;

          img {
            width: 34px;
            margin: 0 9px 0 0;
            display: inline;
          }
        }
      }
    }
  }
}

.icon-check-mobile {
  display: none;
}

@media all and (max-width: 768px) {
  .icon-check-desktop {
    display: none;
  }

  .icon-check-mobile {
    display: inline;
  }
  //
  //.thank-you-page {
  //  margin-top: 99px;
  //  padding-bottom: 25px;
  //}

  .thank-you-page .icon-container {
    width: 100%;
    padding: 0;
    text-align: center;

    img {
      width: 50px;
    }
  }

  .thank-you-page .thank-you-page-content {
    padding-top: 9px;
    width: 100%;
  }

  .thank-you-page .thank-you-page-content .initial-info {
    text-align: center;
    border-bottom: none;
    padding-bottom: 31px;
  }

  .thank-you-page .thank-you-page-content .initial-info h2 {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 8px;
  }

  .thank-you-page .thank-you-page-content .initial-info p {
    font-size: 16px;
    line-height: 19px;
  }

  .thank-you-page
    .thank-you-page-content
    .quotation-info
    .vehicles-to-get-quote-list
    > li
    .vehicle-title {
    padding: 0;
  }

  .thank-you-page
    .thank-you-page-content
    .quotation-info
    .vehicles-to-get-quote-list
    > li
    .vehicle-image {
    width: 100%;
  }

  .thank-you-page
    .thank-you-page-content
    .quotation-info
    .vehicles-to-get-quote-list
    > li
    .vehicle-price {
    width: 100%;
    border-bottom: 1px solid #979797;
    padding-bottom: 36px;
  }

  .thank-you-page
    .thank-you-page-content
    .quotation-info
    .vehicles-to-get-quote-list
    > li
    .vehicle-price
    .bonuses-included
    .bonuses-included-arrow-text {
    font-size: 11px;
  }

  .thank-you-page
    .thank-you-page-content
    .quotation-info
    .vehicles-to-get-quote-list
    > li
    .vehicle-price
    .bonuses-included
    p {
    font-size: 11px;
  }

  .thank-you-page .thank-you-page-content .extra-info .schedules {
    width: 100%;
    border-bottom: 1px solid #979797;
  }

  .thank-you-page .thank-you-page-content .extra-info .how-to-get-subsidiary {
    padding-top: 24px;
  }
}

.phoneLink {
  text-decoration: none;
  color: #000;
}
</style>
