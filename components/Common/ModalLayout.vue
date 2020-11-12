<template>
  <div
    id="success_show"
    class="modal-wrap"
    :class="modifier"
    @click="$store.dispatch('setModal', redirect)"
  >
    <div class="modal-centered">
      <div class="modal-block" @click.stop>
        <div class="modal-content">
          <button
            type="button"
            class="close"
            @click="$store.dispatch('setModal', redirect)"
          />
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    redirect: {
      type: String,
      default() {
        return null
      },
    },
    modifier: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>
