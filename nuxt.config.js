export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    __dangerouslyDisableSanitizers: ['script'],
    title: 'СВЯТКУЙ НА ДРАЙВІ!',
    htmlAttrs: {
      lang: 'ua',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Test Test',
      },
      { property: 'og:image', content: '/girl.png' },
      { property: 'og:title', content: 'СВЯТКУЙ НА ДРАЙВІ!' },
      {
        property: 'og:description',
        content: 'Test Test',
      },
      {
        property: 'og:image:width',
        content: '200',
      },
      {
        property: 'og:image:height',
        content: '205',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://pepsi.ua/favicon.ico',
      },
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-BC124SBJQE',
        async: true,
      },
      {
        innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-BC124SBJQE');`,
      },
      {
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P77PRPF')`,
      },
      {
        src: '/js/script.js',
        async: true,
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/style.css', '@/assets/css/styles.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/Global' },
    { src: '~/plugins/Vuelidate' },
    { src: '~/plugins/Vmask', mode: 'client' },
    { src: '~/plugins/VueSwiper', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    minifyCSS: true,
    minifyJS: true,
  },
  router: {
    trailingSlashes: false,
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/rules',
        component: resolve(__dirname, 'pages/index.vue'),
        props: { modalProp: 'rules' },
      })
      routes.push({
        path: '/winners',
        component: resolve(__dirname, 'pages/index.vue'),
        props: { modalProp: 'winners' },
      })
      routes.push({
        path: '/user',
        component: resolve(__dirname, 'pages/index.vue'),
        props: { modalProp: 'myaccount' },
      })
      routes.push({
        path: '/order',
        component: resolve(__dirname, 'pages/index.vue'),
        props: { modalProp: 'order' },
      })
    },
  },
}
