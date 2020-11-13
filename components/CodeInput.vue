<template>
  <div v-click-outside="disableField" class="enter-code-wrap">
    <div class="key-form-wrap">
      <div class="key-form">
        <form @submit.prevent="handleSubmit">
          <input
            ref="codeInput"
            v-model="form.code"
            type="text"
            placeholder="XXXXXXXXXXX"
            :maxlength="11"
            class="key-input"
            oninput="javascript: if (this.value.length > 11) this.value = this.value.slice(0, 11);"
          />
          <button id="reg-code" type="submit" class="key-btn" />
        </form>
      </div>
      <div class="key-red-bg"></div>
      <div class="key-blue-bg"></div>
      <div
        ref="overKey"
        class="over-key"
        :class="[$store.state.fieldActive && 'hidden']"
        @click="activateField"
      >
        <span>РЕЄСТРУЙ КОД</span>
      </div>
    </div>
    <modals-bot />
    <img
      class="white-line"
      src="~assets/images/main-page/white-line.png"
      alt=""
    />
    <img class="red-line" src="~assets/images/main-page/red-line.png" alt="" />
    <div class="get-code">
      <a href="#" @click.prevent="setInfoModal('findCode')">Як знайти код?</a>
    </div>
    <div class="scroll-bottom-btn"></div>
  </div>
</template>
<script>
import vClickOutside from 'v-click-outside'
import { mapActions } from 'vuex'
import EventHub from '~/plugins/EventHub'
import ModalsBot from '~/components/Common/ModalsBot'

export default {
  components: {
    ModalsBot,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      submitted: false,
      form: {
        code: this.$store.state.code,
      },
    }
  },
  mounted() {
    const self = this
    EventHub.$on('focusCodeInput', function () {
      setTimeout(() => {
        self.activateField()
      }, 300)
    })
  },
  methods: {
    ...mapActions({
      setInfoModal: 'setInfoModal',
    }),
    handleSubmit() {
      const code = this.form.code
      this.$store.dispatch('saveCode', code.toUpperCase())
    },
    disableField() {
      this.$store.dispatch('toggleCodeField', false)
    },
    activateField() {
      const self = this
      this.form.code = ''
      this.$store.dispatch('toggleCodeField', true)
      setTimeout(function () {
        self.$refs.codeInput.focus()
      }, 500)
    },
  },
}
</script>

<style scoped lang="scss">
.code-form {
  position: relative;
  box-sizing: border-box;
  input {
    &::-ms-clear {
      display: none;
    }
  }
}
.send-button {
  position: absolute;
  right: 5px;
  top: 3px;
  width: 50px;
  @media all and (max-width: 1380px) {
    width: 40px;
  }
  @media all and (max-width: 380px) {
    width: 35px;
  }
  height: 85%;
  background: #f06b15;
  border: 0;
  border-radius: 50%;
  &:after {
    content: '';
    position: absolute;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 16px solid #fff;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    @media all and (max-width: 1380px) {
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 14px solid #fff;
      right: 11px;
    }
    @media all and (max-width: 380px) {
      right: 8px;
    }
  }
}
</style>
