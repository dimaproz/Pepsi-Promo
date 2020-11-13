<template>
  <modal-layout>
    <div class="modal-header mb95">
      <h2>Вхід</h2>
    </div>
    <div class="modal-body">
      <form @submit.prevent="handleSubmit">
        <div class="input-wrap" :class="[$v.form.phone.$error && 'error']">
          <label for="phone">Мобільний номер</label>
          <input
            id="phone"
            v-model.trim="$v.form.phone.$model"
            v-mask="{ mask: '+38(999)-999-99-99', greedy: true }"
            type="tel"
            name="phone"
            placeholder="+38 00 000 00 00"
            autocomplete="none"
          />
        </div>
        <div
          class="input-wrap mb70"
          :class="[$v.form.password.$error && 'error']"
        >
          <label for="password">Пароль</label>
          <input
            id="password"
            v-model="$v.form.password.$model"
            :type="[showPassword ? 'text' : 'password']"
            name="password"
          />
          <span
            class="eye-icon"
            :class="{ open: showPassword }"
            @click="handleChangeInput"
          ></span>
        </div>
        <button type="submit" class="modal-btn dark-btn">
          <span> Увійти </span>
        </button>
        <button
          type="button"
          class="modal-btn light-btn"
          @click="$store.dispatch('setModal', 'registration')"
        >
          <span> Зареєструватись </span>
        </button>
      </form>
    </div>
    <div class="modal-footer">
      <span
        class="modal-text forgot-password"
        @click="$store.dispatch('setModal', 'recovery')"
      >
        Забули пароль?
      </span>
    </div>
  </modal-layout>
</template>

<script>
import { minLength, required } from 'vuelidate/lib/validators'
import { phoneValidator } from '@/helpers/helpers'

export default {
  data() {
    return {
      submited: false,
      loading: false,
      showPassword: false,
      form: {
        phone: '',
        password: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('logInRequest', this.form)
      }
    },
    handleChangeInput() {
      this.showPassword = !this.showPassword
    },
  },
  validations: {
    form: {
      phone: {
        required,
        phoneValidator,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
}
</script>

<style scoped></style>
