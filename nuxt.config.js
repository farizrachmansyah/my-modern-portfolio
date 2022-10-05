export default {
  target: 'static',
  env: {
    CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fariz Rachmansyah',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss', '@fortawesome/fontawesome-svg-core/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/fontawesome', '~/plugins/contentful'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    proxy: true,
    baseURL: process.env.BASE_URL,
    withCredentials: false,
    retry: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  },

  proxy: {
    '/api': {
      target: process.env.ADMIN_URL,
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
      onProxyReq (request) {
        request.setHeader('origin', process.env.ADMIN_URL)
      }
    }
  },

  styleResources: {
    scss: ['./assets/scss/partials/_variables.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
