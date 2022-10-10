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
      { hid: 'description', name: 'description', content: "Fariz's Portfolio" },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:url', property: 'og:url', content: '/' },
      { hid: 'og:title', property: 'og:title', content: 'Fariz Rachmansyah' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Fariz Rachmansyah' },
      { hid: 'og:description', property: 'og:description', content: "Fariz's Portfolio" },
      { hid: 'og:image', property: 'og:image', content: '/favicon.png' },
      { hid: 'og:type', property: 'og:type', content: 'website' }
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
  modules: [],

  styleResources: {
    scss: ['./assets/scss/partials/_variables.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
