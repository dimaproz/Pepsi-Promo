<template>
  <div
    id="success_show"
    class="modal-wrap zi"
    :class="modifier"
    @click="$store.dispatch('setInfoModal', null)"
  >
    <div class="modal-centered">
      <div class="modal-block" @click.stop>
        <div class="modal-content">
          <button
            type="button"
            class="close"
            @click="$store.dispatch('setInfoModal', null)"
          />
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { modalCloseTimeout } from '~/helpers/constants'
export default {
  props: {
    modifier: {
      type: String,
      default() {
        return 'info-modal'
      },
    },
    autoclose: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  mounted() {
    if (this.autoclose) {
      const self = this
      setTimeout(() => {
        self.$store.dispatch('setInfoModal', null)
      }, modalCloseTimeout)
    }
  },
}
</script>
