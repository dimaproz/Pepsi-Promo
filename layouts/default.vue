<template>
  <Nuxt />
</template>
<script>
export default {
  created() {
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      const noscript = document.createElement('noscript')
      // eslint-disable-next-line nuxt/no-globals-in-created
      document.body.prepend(noscript)
      noscript.insertAdjacentHTML(
        'afterbegin',
        '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P77PRPF" height="0" width="0" style="display:none;visibility:hidden"></iframe'
      )
    }
  },
  mounted() {
    const token = localStorage.getItem('access_token')
    if (token) {
      this.$store.dispatch('getUser')
      this.$store.dispatch('getUserCodes')
    }
  },
}
</script>
