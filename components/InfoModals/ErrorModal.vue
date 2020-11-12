<template>
  <info-modal-layout :autoclose="autoclose">
    <div class="modal-header mb40">
      <h2>Увага!</h2>
    </div>
    <div class="modal-body">
      <p class="uppercase mb-40" v-html="message" />
      <div class="bots-wrap">
        <p>Реєструйте коди у чат-боті:</p>
        <modals-bot />
      </div>
    </div>
  </info-modal-layout>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      default() {
        return ''
      },
    },
    autoclose: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
}
</script>
