<template>
  <modal-layout>
    <div class="modal-header mb70">
      <h2>РЕЄСТРАЦІЯ</h2>
    </div>
    <div class="modal-body">
      <form @submit.prevent="handleSubmit">
        <div class="input-wrap" :class="[$v.form.first_name.$error && 'error']">
          <label for="name">Ім'я</label>
          <input
            id="name"
            v-model.trim="$v.form.first_name.$model"
            type="text"
            name="first_name"
            @input="handleChange($event, 'first_name')"
          />
          <span v-if="!$v.form.first_name.required" class="field-error">
            Обов'язкове поле
          </span>
          <span v-if="!$v.form.first_name.nameValidator" class="field-error">
            Поле має містити тільки букви
          </span>
        </div>
        <div class="input-wrap" :class="[$v.form.phone.$error && 'error']">
          <label for="your-tel">Мобільний номер</label>
          <input
            id="your-tel"
            v-model.trim="$v.form.phone.$model"
            v-mask="'+38(###)-###-##-##'"
            type="tel"
            name="your-tel"
            placeholder="+38 00 000 00 00"
          />
          <span v-if="!$v.form.phone.required" class="field-error">
            Обов'язкове поле
          </span>
          <span v-if="!$v.form.phone.phoneValidator" class="field-error">
            Невалідний номер
          </span>
        </div>
        <div class="input-wrap" :class="[$v.form.password.$error && 'error']">
          <label for="your-password">Пароль</label>
          <input
            id="your-password"
            v-model="$v.form.password.$model"
            type="password"
            name="your-password"
          />
          <span v-if="!$v.form.password.required" class="field-error">
            Обов'язкове поле
          </span>
          <span v-if="!$v.form.password.minLength" class="field-error">
            Пароль повинен містити не менше
            {{ $v.form.password.$params.minLength.min }} символів
          </span>
        </div>
        <div class="input-wrap mb40" :class="[$v.form.email.$error && 'error']">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="$v.form.email.$model"
            type="text"
            name="email"
            style="text-transform: uppercase"
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
        <div
          class="checkbox-wrap mb20"
          :class="[$v.form.rules.$error && 'error']"
        >
          <input
            id="rules"
            v-model="$v.form.rules.$model"
            type="checkbox"
            name="rules"
          />
          <label for="rules"
            >Я погоджуюсь з
            <a
              href="#"
              @click.prevent="$store.dispatch('setInfoModal', 'rules')"
              >Офіційними правилами</a
            >
            та даю згоду на обробку персональних
          </label>
          <span v-if="!$v.form.rules.sameAs" class="field-error modified">
            Погодьтесь з Офіційними правилами
          </span>
        </div>
        <div
          class="checkbox-wrap mb40"
          :class="[$v.form.policy.$error && 'error']"
        >
          <input
            id="policy"
            v-model="$v.form.policy.$model"
            type="checkbox"
            name="policy"
          />
          <label for="policy"
            >Я погоджуюсь з
            <a
              href="https://drive.google.com/file/d/1U2PgVTYvP57TB-Nl0MUn8oASGHHPqoBs/view"
              target="_blank"
              >Умовами використання</a
            >
          </label>
          <span v-if="!$v.form.policy.sameAs" class="field-error modified">
            Погодьтесь з Умовами використання
          </span>
        </div>
        <div class="captcha mb40" :class="[$v.form.captcha.$error && 'error']">
          <vue-recaptcha
            :sitekey="sitekey"
            :load-recaptcha-script="true"
            @verify="passCaptcha"
          />
          <span v-if="!$v.form.captcha.sameAs" class="field-error">
            Доведіть що ви людина
          </span>
          <input
            v-model="$v.form.captcha.$model"
            name="captha"
            type="checkbox"
          />
        </div>
        <button
          type="submit"
          class="modal-btn light-btn"
          :disabled="$v.form.$pending"
        >
          <span> Зареєструватись </span>
        </button>
      </form>
    </div>
  </modal-layout>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
import { email, minLength, required, sameAs } from 'vuelidate/lib/validators'
import {
  emailValidator,
  nameValidator,
  phoneValidator,
} from '@/helpers/helpers'
import { sitekey } from '@/helpers/constants'
export default {
  components: { VueRecaptcha },
  filters: {
    upperCase(val) {
      return val.toUpperCase()
    },
  },
  data() {
    return {
      sitekey,
      submitted: false,
      form: {
        first_name: '',
        phone: '',
        email: '',
        password: '',
        rules: false,
        policy: false,
        captcha: false,
      },
    }
  },
  methods: {
    handleChange(e, name) {
      this.$v.form[name].$model = e.target.value.toUpperCase()
      this.$v.form[name].$touch()
    },
    handleSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('register', this.form)
      }
    },
    passCaptcha() {
      this.$v.form.captcha.$model = true
    },
  },
  validations: {
    form: {
      first_name: {
        required,
        nameValidator,
      },
      phone: {
        required,
        phoneValidator,
      },
      email: {
        required,
        email,
        emailValidator,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      rules: {
        sameAs: sameAs(() => true),
      },
      policy: {
        sameAs: sameAs(() => true),
      },
      captcha: {
        sameAs: sameAs(() => true),
      },
    },
  },
}
</script>

<style scoped lang="scss">
.captcha {
  max-width: none;
  position: relative;
  display: flex;
  justify-content: center;
  &.error {
    .field-error {
      bottom: -50%;
      opacity: 1;
    }
  }
}
</style>
