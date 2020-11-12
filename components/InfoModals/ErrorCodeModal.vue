<template>
  <info-modal-layout :autoclose="autoclose">
    <div class="modal-header mb40">
      <h2>Увага!</h2>
    </div>
    <div class="modal-body">
      <slot />
      <p class="uppercase mt50">
        <a href="#" @click.prevent="$store.dispatch('setInfoModal', 'rules')"
          >ПРАВИЛА АКЦІЇ</a
        >
      </p>
    </div>
  </info-modal-layout>
</template>
<script>
import EventHub from '@/plugins/EventHub'
export default {
  props: {
    autoclose: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  destroyed() {
    if (this.autoclose) {
      EventHub.$emit('focusCodeInput')
    }
  },
}
</script>
