<template>
    <div class="modal-wrap" id="registration">
      <div class="modal-centered">
        <div class="modal-block">
          <div class="modal-content">
            <button type="button" class="close" @click="$emit('close')"></button>
            <div class="modal-header mb95">
              <h2>
                РЕЄСТРАЦІЯ
              </h2>
            </div>
            <div class="modal-body">
              <form @submit.prevent="handleSubmit">
                <div class="input-wrap" :class="[$v.form.name.$error && 'error']">
                  <label for="name">Ім'я</label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      v-model.trim="$v.form.name.$model"
                  />
                  <span v-if="!$v.form.name.required" class="field-error">
                    Обов'язкове поле
                  </span>
                </div>
                <div class="input-wrap" :class="[$v.form.phone.$error && 'error']">
                  <label for="your-tel">Мобільний номер</label>
                  <input
                      type="tel"
                      id="your-tel"
                      name="your-tel"
                      placeholder="+38 00 000 00 00"
                      v-mask="'+38(0##)-###-##-##'"
                      v-model.trim="$v.form.phone.$model"
                  />
                  <span v-if="!$v.form.phone.required" class="field-error">
                    Обов'язкове поле
                  </span>
                  <span v-if="!$v.form.phone.phoneValidator" class="field-error">
                    Телефон повинен містити не менше 11 символів
                  </span>
                </div>
                <div class="input-wrap" :class="[$v.form.password.$error && 'error']">
                  <label for="your-password">Пароль</label>
                  <input
                      type="password"
                      id="your-password"
                      name="your-password"
                      v-model="$v.form.password.$model"
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
                      type="text"
                      id="email"
                      name="email"
                      v-model="$v.form.email.$model"
                  />
                  <span v-if="!$v.form.email.required" class="field-error">
                    Обов'язкове поле
                  </span>
                  <span v-if="!$v.form.email.email" class="field-error">
                    Email має бути валідним
                  </span>
                </div>
                <div class="checkbox-wrap mb20" :class="[$v.form.rules.$error && 'error']">
                  <input
                      type="checkbox"
                      name="rules"
                      id="rules"
                      v-model="$v.form.rules.$model"
                  />
                  <label for="rules">Я погоджуюсь з <a href="#" @click.prevent="$store.dispatch('setInfoModal', 'rules')">Офіційними правилами</a> та даю згоду на обробку персональних </label>
                  <span v-if="!$v.form.rules.sameAs" class="field-error modified">
                    Погодьтесь з Офіційними правилами
                  </span>
                </div>
                <div class="checkbox-wrap mb70" :class="[$v.form.policy.$error && 'error']">
                  <input
                      type="checkbox"
                      name="policy"
                      id="policy"
                      v-model="$v.form.policy.$model"
                  />
                  <label for="policy">Я погоджуюсь з <a href="#">Політикою конфіденційності.</a> </label>
                  <span
                      v-if="!$v.form.policy.sameAs"
                      class="field-error modified"
                  >
                    Погодьтесь з Умовами використання
                  </span>
                </div>
                <button type="submit" class="modal-btn light-btn">
                  <span>
                    Зареєструватись
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mask} from 'vue-the-mask'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import { phoneValidator } from '@/helpers/constants'
import {validationMixin} from "vuelidate";

export default {
  name: "RegistrationModal",
  mixins: [validationMixin],
  directives: {mask},
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        password: '',
        rules: false,
        policy: false,
        // captcha: false,
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        console.log(this.form)
      }
    },
  },
  validations: {
    form: {
      name: {
        required,
      },
      phone: {
        required,
        phoneValidator,
      },
      email: {
        required,
        email,
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
      // captcha: {
      //   sameAs: sameAs(() => true),
      // },
    },
  },

}
</script>

<style scoped>

</style>