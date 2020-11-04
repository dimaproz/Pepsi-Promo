<template>
  <div class="modal-wrap glass-modal-wrap" id="glass">
    <div class="modal-centered">
      <div class="modal-block">
        <div class="modal-content">
          <button type="button" class="close" @click="$emit('close')"></button>
          <div class="modal-body">
            <form id="glass-form" class="glass-form" @submit.prevent="handleSubmit">
              <div class="glass-step">
                <div class="glass-step__head">
                  <div class="glass-step__number">
                    <div>
                      <span>Крок</span>
                      <span>1</span>
                    </div>
                    <div class="triangle"></div>
                  </div>
                  <div class="glass-step__descr">
                    <span>Заповни форму</span>
                    <span>для доставки склянки</span>
                  </div>
                </div>
                <div class="glass-step__body">
                  <div class="input-wrap" :class="[$v.form.fullname.$error && 'error']">
                    <label for="fullname">Ім’я та прізвище</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        v-model.trim="$v.form.fullname.$model"
                    />
                    <span v-if="!$v.form.fullname.required" class="field-error">
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
                  <div class="input-wrap" :class="[$v.form.city.$error && 'error']">
                    <label for="city">Місто</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        v-model.trim="$v.form.city.$model"
                    />
                    <span v-if="!$v.form.city.required" class="field-error">
                    Обов'язкове поле
                  </span>
                  </div>
                  <div class="input-wrap" :class="[$v.form.branch.$error && 'error']">
                    <label for="branch">№ відділення нової пошти</label>
                    <input
                        type="text"
                        id="branch"
                        name="branch"
                        v-model.trim="$v.form.branch.$model"
                    />
                    <span v-if="!$v.form.branch.required" class="field-error">
                    Обов'язкове поле
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
                </div>
              </div>
              <div class="glass-step">
                <div class="glass-step__head">
                  <div class="glass-step__number">
                    <div>
                      <span>Крок</span>
                      <span>2</span>
                    </div>
                    <div class="triangle"></div>
                  </div>
                  <div class="glass-step__descr">
                    <span>Обери </span>
                    <span>склянку</span>
                  </div>
                </div>
                <div class="glass-step__body">
                  <div class="glass-select">
                    <div class="glass-select__item">
                      <p>Готовий до свят?</p>
                      <div class="glass-select__image">
                        <img src="../../assets/images/glass/glass-1.png" alt="glass">
                      </div>
                      <div class="checkbox-wrap">
                        <input
                            type="radio"
                            name="glass"
                            id="glass-selected-1"
                        />
                        <label for="glass-selected-1"></label>
                      </div>
                    </div>
                    <div class="glass-select__item">
                      <p>Готовий до свят?</p>
                      <div class="glass-select__image">
                        <img src="../../assets/images/glass/glass-1.png" alt="glass">
                      </div>
                      <div class="checkbox-wrap">
                        <input
                            type="radio"
                            name="glass"
                            id="glass-selected-2"
                        />
                        <label for="glass-selected-2"></label>
                      </div>
                    </div>
                    <div class="glass-select__item">
                      <p>Готовий до свят?</p>
                      <div class="glass-select__image">
                        <img src="../../assets/images/glass/glass-1.png" alt="glass">
                      </div>
                      <div class="checkbox-wrap">
                        <input
                            type="radio"
                            name="glass"
                            id="glass-selected-3"
                        />
                        <label for="glass-selected-3"></label>
                      </div>
                    </div>
                    <div class="glass-select__item">
                      <p>Готовий до свят?</p>
                      <div class="glass-select__image">
                        <img src="../../assets/images/glass/glass-1.png" alt="glass">
                      </div>
                      <div class="checkbox-wrap">
                        <input
                            type="radio"
                            name="glass"
                            id="glass-selected-4"
                        />
                        <label for="glass-selected-4"></label>
                      </div>
                    </div>
                    <div class="glass-select__item">
                      <p>Готовий до свят?</p>
                      <div class="glass-select__image">
                        <img src="../../assets/images/glass/glass-1.png" alt="glass">
                      </div>
                      <div class="checkbox-wrap">
                        <input
                            type="radio"
                            name="glass"
                            id="glass-selected-5"
                        />
                        <label for="glass-selected-5"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="glass-step">
                <div class="glass-step__head">
                  <div class="glass-step__number">
                    <div>
                      <span>Крок</span>
                      <span>3</span>
                    </div>
                    <div class="triangle"></div>
                  </div>
                  <div class="glass-step__descr">
                    <span>Підтверди</span>
                    <span>замовлення</span>
                  </div>
                </div>
                <div class="glass-step__body">
                  <button type="submit" form="glass-form" class="modal-btn light-btn skew-btn">
                  <span>
                    Підтвердити
                  </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mask} from 'vue-the-mask'
import { required, email } from 'vuelidate/lib/validators'
import { phoneValidator } from '@/helpers/constants'
import {validationMixin} from "vuelidate";

export default {
  name: "GlassModal",
  mixins: [validationMixin],
  directives: {mask},
  data() {
    return {
      form: {
        fullname: '',
        phone: '',
        email: '',
        city: '',
        branch: '',
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
      fullname: {
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
      city: {
        required,
      },
      branch: {
        required,
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