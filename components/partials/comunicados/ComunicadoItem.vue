<template>
  <div class="comunicadoItem col-12">
    <div class="comunicadoItem__contentTop">
      <h3>{{ title }}</h3>
      <b-link :to="'/comunicados/' + id">LEER MÁS</b-link>
    </div>
    <div class="comunicadoItem__contentBottom">
      <p>
        Fecha de publicación:
        {{ publicationDate.toLocaleDateString('es-PE') }}
      </p>
      <!--      <a :href="linkDownload" target="_blank">-->
      <!--        DESCARGAR-->
      <!--        <img-->
      <!--          src="@/assets/img/assets/comunicados/iconDescarga.png"-->
      <!--          alt="Descarga Icon - Derco Perú"-->
      <!--        />-->
      <!--      </a>-->
    </div>
  </div>
</template>
<script>
export default {
  name: 'ComunicadoItem',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    id: {
      type: Number || String
    },
    title: {
      type: String,
      default: ''
    },
    linkRead: {
      type: String,
      default: '/comunicados'
    },
    publicationDate: {
      type: String,
      default: new Date().toLocaleDateString('es-PE')
    },
    linkDownload: {
      type: String,
      default: '/comunicados'
    }
  },
  data() {
    return {
      optionsDate: {
        year: 'numeric',
        month: 'long'
      }
    }
  }
}
</script>
