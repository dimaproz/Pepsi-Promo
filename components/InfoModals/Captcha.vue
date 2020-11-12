<template>
  <info-modal-layout>
    <div style="display: flex; justify-content: center">
      <vue-recaptcha
        :sitekey="sitekey"
        :load-recaptcha-script="true"
        @verify="passCaptha"
      />
    </div>
  </info-modal-layout>
</template>

<script>
import { sitekey } from '@/helpers/constants'
import VueRecaptcha from 'vue-recaptcha'

export default {
  components: { VueRecaptcha },
  data() {
    return {
      sitekey,
    }
  },
  methods: {
    passCaptha() {
      this.$store.dispatch('setInfoModal', null)
      this.$store.commit('CAPTCHA_UNSET')
      this.$store.dispatch('saveCode')
    },
  },
}
</script>
