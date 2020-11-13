<template>
  <div class="wrapper">
    <header class="main-header main-page-header">
      <div
        class="menu-bg-hide"
        :class="{ active: $store.state.sidebar }"
        @click="$store.dispatch('toggleSidebarState')"
      />
      <div class="menu-trigger" :class="{ active: $store.state.sidebar }">
        <span
          v-if="!user"
          @click="$store.dispatch('saveCode', null), setModal('login')"
        >
          Вхід
        </span>
        <span v-else @click="setModal('myaccount')">ОСОБИСТИЙ КАБІНЕТ</span>
        <div class="menu-burger" @click="$store.dispatch('toggleSidebarState')">
          <span />
          <span />
          <span />
        </div>
      </div>
      <sidebar :user="user" />
    </header>
    <main-body />
    <footer class="footer">
      <div class="text">
        Акція триває з 15.11.2020 до 15.01.2021 по всій території України, крім
        тимчасово окупованих територій. *1 склянка кожному з перших 10 000
        учасників. Докладніше в Офіційних правилах на сайті.
      </div>
      <div class="triangle-top" />
    </footer>
    <modals :modal="modal" />
    <info-modals :info-modal="info" />
    <transition name="fade">
      <div v-if="modal || info" class="modal-bd" :class="[info ? 'zi' : '']" />
    </transition>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
// TODO Loader
import MainBody from '~/components/MainBody'
import Sidebar from '~/components/Sidebar'
import Modals from '~/components/Modals'
import InfoModals from '~/components/InfoModals'
export default {
  components: { Sidebar, Modals, MainBody, InfoModals },
  props: {
    modalProp: {
      type: String,
      default() {
        return null
      },
    },
  },

  computed: {
    ...mapGetters({
      modal: 'getModal',
      info: 'getInfo',
      user: 'getUser',
    }),
    bodyClass() {
      return this.modal || this.info ? 'loaded modal-open' : 'loaded'
    },
  },
  mounted() {
    const currentDate = new Date().getTime()
    const endDate = new Date('2021-01-15').getTime()

    if (currentDate >= endDate) {
      this.$store.dispatch('setInfoModal', 'promo_end')
    }

    if (localStorage.getItem('captcha')) {
      this.$store.dispatch('setCaptcha')
    }

    if (this.modalProp) {
      this.$store.dispatch('setModal', this.modalProp)
    }
  },
  methods: {
    ...mapActions({
      setModal: 'setModal',
    }),
  },
  head() {
    const self = this
    return {
      bodyAttrs: {
        class: self.bodyClass,
      },
    }
  },
}
</script>

<style lang="scss">
.modal-bd {
  background-color: rgb(0, 102, 212);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  opacity: 0.6;
  &.zi {
    z-index: 10;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
