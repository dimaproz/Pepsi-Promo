<template>
  <transition name="fade-in-down">
    <login-modal v-if="modal === 'login'" />
    <winners v-if="modal === 'winners'" />
    <register-modal v-if="modal === 'registration'" />
    <password-recovery-modal v-if="modal === 'recovery'" />
    <order-modal v-if="modal === 'order'" />
    <user-cabinet-modal v-if="modal === 'myaccount'" />
  </transition>
</template>

<script>
import OrderModal from '~/components/Modals/OrderModal'
import UserCabinetModal from '~/components/Modals/UserCabinetModal'
import LoginModal from '~/components/Modals/LoginModal'
import Winners from '~/components/Modals/Winners'
import RegisterModal from '~/components/Modals/RegisterModal'
import PasswordRecoveryModal from '~/components/Modals/PasswordRecoveryModal'
export default {
  components: {
    LoginModal,
    Winners,
    RegisterModal,
    PasswordRecoveryModal,
    OrderModal,
    UserCabinetModal,
  },
  props: {
    modal: {
      type: [String, Object],
      default() {
        return null
      },
    },
  },
}
</script>

<style lang="scss">
.fade-in-down-enter-active,
.fade-in-down-leave-active {
  transition: all linear 0.25s;
}
.fade-in-down-enter, .fade-in-down-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate3d(0, -5%, 0);
}
</style>
