<template>
  <transition name="fade-in-down">
    <rules-modal
        v-if="infoModal === 'rules'"
        @close="$store.commit('MODAL_INFO_SET', null)"
    />
    <success-show-modal
        v-if="infoModal === 'success_show'"
        @close="$store.commit('MODAL_INFO_SET', null)"
    />
  </transition>
</template>

<script>
import RulesModal from "@/components/Modals/RulesModal";
import SuccessShowModal from "@/components/InfoModals/SuccessShowModal";

export default {
  name: "index",
  components: {
    RulesModal,
    SuccessShowModal
  },
  props: {
    infoModal: {
      type: [String, Object],
      default(){
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>