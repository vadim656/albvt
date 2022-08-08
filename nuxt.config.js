export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'albb',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  static: {
    prefix: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/persistedState.client.js',
    '@plugins/v-mask.js',
    '@plugins/v-tooltip.js',
    '@plugins/vue-input-facade.js',
    '@plugins/lodash.js',
    { src: '~/plugins/vue-datepicker', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    '@nuxtjs/auth-next',
    
    [
      'nuxt-mail',
      {
        smtp: {
          auth: {
            user: 'albv@foxsis.ru',
            pass: 'Dropestroke0013!'
          }
        }

      }
    ]
  ],
  mail: {
    message: {
      to: 'va.four2016@gmail.com',
    },
    smtp: {
      host: "smtp.beget.com",
      port: 25,
    },
  },
  auth: {
    strategies: {
      graphql: {
        scheme: '@shemes/graphqlScheme.js'
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: false,
      home: false
    },
    refreshToken: {
      property: 'refreshToken',
      maxAge: 14000
    },
    cookie: true,
    token: {
      prefix: 'token-baer'
    }
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://foxsis.ru/alvd/graphql',
        httpLinkOptions: {
          credentials: 'include'
        },
        errorHandler: '~/plugins/apollo-error-handler.js',
        wsEndpoint: null,
        tokenName: 'apollo-token',
        authenticationType: 'Bearer',
        persisting: false,
        websocketsOnly: false
      }
    },
    defaultOptions: {
      $query: {
        fetchPolicy: 'cache-and-network'
      }
    }
  },
  axios: {
    baseURL: 'https://albvt.ru/',
    credentials: true,
    common: {
      'Cache-Control': 'max-age=0',
      'Content-Encoding': 'gzip',
      'Content-Type': 'application/json; charset=UTF-8',
      Allow: 'GET, POST',
      'Access-control-allow-methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'Authorization, Content-Type'
      // 'Authorization': 'Basic Y2tfODVlNDRlODczNTI2MWQ0NWExOWQ4ZjdhYWYwMTJmOGQ2NDBjMmRhYzpjc180MjYxYmI2MzlmNGU5YTE4YzE0Njg1MTM2MWQ2MzE3ODA0YTgxNmZj'
    },
    // proxy: true
  },
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
  },

  cache: true
}
