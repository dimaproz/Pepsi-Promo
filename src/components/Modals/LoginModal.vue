<template>
    <div class="modal-wrap" id="login">
      <div class="modal-centered">
        <div class="modal-block">
          <div class="modal-content">
            <button type="button" class="close" @click="$emit('close')"></button>
            <div class="modal-header mb95">
              <h2>
                Вхід
              </h2>
            </div>
            <div class="modal-body">
              <form @submit.prevent="handleSubmit">
                <div class="input-wrap" :class="[$v.form.phone.$error && 'error']">
                  <label for="phone">Мобільний номер</label>
                  <input
                      type="tel"
                      v-model.trim="$v.form.phone.$model"
                      id="phone"
                      name="phone"
                      placeholder="+38 00 000 00 00"
                      v-mask="'+38(0##)-###-##-##'"
                      autocomplete="none"
                  />
                  <span v-if="!$v.form.phone.required" class="field-error">
                      Обов'язкове поле
                    </span>
                  <span v-if="!$v.form.phone.phoneValidator" class="field-error">
                       Телефон повинен містити не менше 11 символів
                    </span>
                </div>
                <div class="input-wrap mb70" :class="[$v.form.password.$error && 'error']">
                  <label for="password">Пароль</label>
                  <input
                      type="password"
                      v-model="$v.form.password.$model"
                      id="password"
                      name="password"
                  />
                  <span v-if="!$v.form.password.required" class="field-error">
                      Обов'язкове поле
                    </span>
                  <span v-if="!$v.form.password.minLength" class="field-error">
                      Пароль повинен бути не меньше
                      {{ $v.form.password.$params.minLength.min }} символів
                    </span>
                </div>
                <button type="submit" class="modal-btn dark-btn">
                    <span>
                      Увійти
                    </span>
                </button>
                <button type="button" class="modal-btn light-btn" @click="$store.dispatch('setModal', 'registration')">
                    <span>
                      Зареєструватись
                    </span>
                </button>
              </form>
            </div>
            <div class="modal-footer">
            <span class="modal-text forgot-password">
              Забули пароль?
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { minLength, required } from 'vuelidate/lib/validators'
import { phoneValidator } from '@/helpers/constants'
import { mask } from 'vue-the-mask'

export default {
  name: "LoginModal",
  mixins: [validationMixin],
  directives: {mask},
  data(){
    return{
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
        console.log(this.form)
      }
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

<style>

</style>