<template>
  <div>
    <b-card img-top tag="article" class="card-featured">
      <div class="img-container">
        <nuxt-link
          :to="`/catalogo-derco/autos/${featured.brand.slug}/${featured.slug}/${featured.defaultVersion.slug}/${featured.defaultVersion.prices[0].type}/${featured.defaultVersion.id}/cotizar`"
        >
          <img
            :id="featured.id"
            class="image-car lozad"
            :src="featured.defaultVersion.imageUrl"
            :alt="featured.name"
          />
        </nuxt-link>
      </div>
      <b-card-text>
        <div
          class="cardFeatured-Brands d-flex align-content-center justify-content-between"
        >
          <img
            :src="
              require('@/assets/img/marcas/horizontales/' +
                featured.brand.slug +
                '.png')
            "
            :alt="featured.brand.slug"
            class="image-featured"
          />
          <label class="text-description">Desde:</label>
        </div>
        <div
          v-if="featured.defaultVersion"
          class="d-flex align-content-center justify-content-between"
        >
          <span class="text-uppercase text-featured-name">{{
            featured.name
          }}</span>
          <div class="text-price text-right">
            <span>{{ featured.defaultVersion.minPrice | USD }}</span> ó
            <span>{{ featured.defaultVersion.convertedMinPrice | PE }}</span>
          </div>
        </div>
      </b-card-text>
    </b-card>
    <div class="text-center align-content-center">
      <b-button
        pill
        variant="secondary"
        class="button-featured-card"
        @click="redirectCotizadorAuto"
      >
        VER VERSIONES
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFeatured',
  props: {
    featured: {
      type: Object,
      default() {
        return {
          imageModelUrl: '',
          name: '',
          defaultVersion: {
            minPrice: 0,
            convertedMinPrice: 0
          }
        }
      }
    }
  },
  methods: {
    redirectCotizadorAuto() {
      this.$router.push({
        name: 'catalogo-derco-autos',
        query: {
          models: this.featured.slug
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.text-description {
  font-size: 15px;
}

.text-featured-name {
  max-width: 150px;
  font-size: 16px;
}

.text-price {
  color: #dc241f;
}

.image-featured {
  height: 15px;
}

.img-container {
  height: 205px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.image-car {
  width: 100%;
  height: 125%;
  object-fit: contain;
  transition: all 0.3s ease-in-out;
  padding: 0 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.button-featured-card {
  background: #4d4d4d !important;
  border: none !important;
  font-size: 15px;
  font-weight: bold;
  width: 200px;
  height: 40px;
  transform: translateY(-1.25rem);
}

:hover.button-featured-card {
  background: #dc241f !important;
}

#cardFeatured-P {
  margin-left: 74%;
  font-size: 14px;
}

#btn-danger {
  margin-top: 13px;
}

:hover#btn-danger {
  background-color: #dc241f;
  border-color: #dc241f;
}

.cardFeatured-Brands {
  margin-top: 7px;

  img {
    height: 18px;
    width: auto;
  }
}

.card-featured {
  height: 20.9375rem;
  min-width: 353px;
  margin-right: 1rem;
  margin-left: 1rem;
}

.card-img {
  height: 12.9375rem;
  width: auto;
}

.button-featured {
  position: absolute;
}

@media (max-width: 768px) {
  .card-featured {
    height: 19.9375rem;
    min-width: auto;
    margin-right: 0;
    margin-left: 0;
  }

  .card-img {
    height: 12.9375rem;
    width: auto;
  }
}
@media (max-width: 360px) {
  .img-container {
    height: 190px;
    width: auto;
  }
}
</style>
