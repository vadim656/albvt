export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'albb',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css',],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   '~/plugins/persistedState.client.js',
   '@plugins/v-mask.js',
   '@plugins/v-tooltip.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'http://localhost:3000', 
    // proxy: true
  },
  // proxy: {
  //   '/api/': { target: 'https://foxsis.ru/alvd/wp-json/wc/v3/products', pathRewrite: {'^/api/': ''} }
  //   },
  googleFonts: {
    display: 'swap',
    preconnect: true,
    families: {
      Inter: {
        wght: [300, 600, 400, 500, 700]
      }
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  }
}
