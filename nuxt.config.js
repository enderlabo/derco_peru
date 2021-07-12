import url from 'url'

console.log(process.env.NODE_ENV)
export default {
  head: {
    title: 'Derco',
    titleTemplate: ' %s • Derco Perú',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Derco Perú'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/derco.gif'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/derco.gif'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  env: {
    apiBaseUrl: process.env.API_BASE_URL,
    apiStoreUrl: process.env.API_STORE_URL
  },
  router: {
    middleware: 'global'
  },
  loading: { color: '#860617' },
  plugins: [
    '@/plugins/filters',
    '~/plugins/axios',
    '~/plugins/vue-placeholders.js',
    '~/plugins/vue-observe-visibility.client.js',
    { src: '~plugins/check-utm-source-or-gclid', ssr: false },
    { src: '@/plugins/swiper.js', ssr: false },
    { src: '@/plugins/vue-slider-component.js', ssr: false },
    { src: '@/plugins/crypto.js', ssr: false },
    { src: '~/plugins/vue-the-mask', ssr: false },
    { src: '~/plugins/vue-analytics-facebook-pixel', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
    { src: '~/plugins/vue-gtag', ssr: false },
    '~/plugins/vee-validate'
  ],

  css: ['@/assets/scss/main.scss', 'hooper/dist/hooper.css'],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa'
      }
    ],
    '@nuxtjs/style-resources'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/device',
    '@ax2/lozad-module',
    '@nuxtjs/recaptcha',
    '@nuxtjs/svg'
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    icons: false,
    bootstrapVue: {
      components: [
        'BContainer',
        'BRow',
        'BCol',
        'BButton',
        'BTable',
        'BModal',
        'BCollapse',
        'BCard',
        'BCardHeader',
        'BCardBody'
      ],
      directivePlugins: [
        'VBPopoverPlugin',
        'VBTooltipPlugin',
        'VBScrollspyPlugin',
        'VBToggle',
        'VBTooltipPlugin'
      ]
    }
  },
  styleResources: {
    scss: [
      '~assets/scss/theme/variables.scss',
      'bootstrap/scss/_functions.scss',
      'bootstrap/scss/_variables.scss',
      'bootstrap/scss/mixins/_breakpoints.scss'
    ]
  },
  recaptcha: {
    hideBadge: false, // Hide badge element (v3)
    siteKey: process.env.CAPTCHA_SITE_KEY, // Site key for requests
    version: 3 // Version
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // eslint-disable-next-line node/no-deprecated-api
    baseURL: url.resolve(
      process.env.API_BASE_URL,
      process.env.API_VERSION || ''
    ),
    headers: {
      common: {
        'blog-url': process.env.SITE_TOKEN || 'dercocenter'
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    analyze: false,
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    extends(config) {
      const vueLoader = config.module.rules.find(
        rule => rule.loader === 'vue-loader'
      )
      vueLoader.options.transformToRequire.img = ['src', 'data-src']
      vueLoader.options.transformToRequire['b-img'] = ['src', 'data-src']
    }
  },
  // directiva para lazyload
  lozad: {
    // Module options
    load: el => {
      console.log(el)
      el.src = el.dataset.src
      el.onload = () => el.classList.add('fade')
    }
  }
}
