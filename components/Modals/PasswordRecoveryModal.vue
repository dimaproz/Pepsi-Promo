<template>
  <modal-layout :redirect="'login'">
    <div class="modal-header mb95">
      <h2>ВІДНОВЛЕННЯ ПАРОЛЯ</h2>
    </div>
    <div class="modal-body">
      <form @submit.prevent="handleSubmit">
        <div class="input-wrap mb70" :class="[$v.form.email.$error && 'error']">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="$v.form.email.$model"
            style="text-transform: uppercase"
            placeholder="MAIL@MAIL.COM"
            type="text"
            name="email"
          />
          <span v-if="!$v.form.email.required" class="field-error">
            Обов'язкове поле
          </span>
          <span v-if="!$v.form.email.email" class="field-error">
            Email має бути валідним
          </span>
          <span v-if="!$v.form.email.emailValidator" class="field-error">
            Поштовий сервіс не підтримується
          </span>
        </div>
        <div class="bots-wrap">
          <p>Реєструйте коди у чат-боті</p>
          <modals-bot />
        </div>
        <button type="submit" class="modal-btn dark-btn">
          <span> далі </span>
        </button>
      </form>
    </div>
  </modal-layout>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { emailValidator } from '@/helpers/helpers'

export default {
  data() {
    return {
      submitted: false,
      form: {
        email: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('recover', this.form)
      }
    },
  },
  validations: {
    form: {
      email: {
        required,
        email,
        emailValidator,
      },
    },
  },
}
</script>

<style scoped></style>
