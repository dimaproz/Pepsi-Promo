<template>
  <modal-layout
    :modifier="user ? 'glass-modal-wrap' : 'glass-modal-wrap not-authorized'"
  >
    <div v-if="user" class="modal-body">
      <form id="glass-form" class="glass-form" @submit.prevent="handleSubmit">
        <div class="glass-step">
          <div class="glass-step__head">
            <div class="glass-step__number">
              <div>
                <span>Крок</span>
                <span>1</span>
              </div>
              <div class="triangle" />
            </div>
            <div class="glass-step__descr">
              <span>Заповни форму</span>
              <span>для доставки склянки</span>
            </div>
          </div>
          <div class="glass-step__body">
            <div
              class="input-wrap"
              :class="[$v.form.fullname.$error && 'error']"
            >
              <label for="fullname">Ім’я та прізвище</label>
              <input
                id="fullname"
                v-model.trim="$v.form.fullname.$model"
                type="text"
                name="fullname"
                @input="handleChange($event, 'fullname')"
              />
              <span v-if="!$v.form.fullname.required" class="field-error">
                Обов'язкове поле
              </span>
              <span
                v-if="!$v.form.fullname.fullnameValidator"
                class="field-error"
              >
                Введіть Ім'я та Прізвище
              </span>
            </div>
            <div class="input-wrap" :class="[$v.form.phone.$error && 'error']">
              <label for="your-tel">Мобільний номер</label>
              <input
                id="your-tel"
                v-model.trim="$v.form.phone.$model"
                v-mask="{ mask: '+38(999)-999-99-99', greedy: true }"
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
            <div class="input-wrap" :class="[$v.form.city.$error && 'error']">
              <label for="city">Місто</label>
              <input
                id="city"
                v-model.trim="$v.form.city.$model"
                type="text"
                name="city"
                @input="handleChange($event, 'city')"
              />
              <span v-if="!$v.form.city.required" class="field-error">
                Обов'язкове поле
              </span>
            </div>
            <div class="input-wrap" :class="[$v.form.np.$error && 'error']">
              <label for="branch">№ відділення нової пошти</label>
              <input
                id="branch"
                v-model.number.trim="$v.form.np.$model"
                type="text"
                name="np"
                @keydown="handleNumberInput($event, 'np')"
              />
              <span v-if="!$v.form.np.required" class="field-error">
                Обов'язкове поле
              </span>
              <span v-if="!$v.form.np.numeric" class="field-error">
                Поле повинно містити тільки цифри
              </span>
            </div>
            <div
              class="input-wrap mb40"
              :class="[$v.form.email.$error && 'error']"
            >
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
                  <img
                    src="~assets/images/glass/glass-for-select/glass-1.png"
                    alt="glass"
                  />
                </div>
                <div class="checkbox-wrap">
                  <input
                    id="glass-selected-1"
                    type="radio"
                    name="glass"
                    checked
                  />
                  <label for="glass-selected-1"></label>
                </div>
              </div>
              <div class="glass-select__item">
                <p>Ялинка готова?</p>
                <div class="glass-select__image">
                  <img
                    src="~assets/images/glass/glass-for-select/glass-5.png"
                    alt="glass"
                  />
                </div>
                <div class="checkbox-wrap">
                  <input id="glass-selected-2" type="radio" name="glass" />
                  <label for="glass-selected-2"></label>
                </div>
              </div>
              <div class="glass-select__item">
                <p>Пограємо в сніжки?</p>
                <div class="glass-select__image">
                  <img
                    src="~assets/images/glass/glass-for-select/glass-3.png"
                    alt="glass"
                  />
                </div>
                <div class="checkbox-wrap">
                  <input id="glass-selected-3" type="radio" name="glass" />
                  <label for="glass-selected-3"></label>
                </div>
              </div>
              <div class="glass-select__item inactive">
                <p>Гоу на двіж?</p>
                <div class="glass-select__image">
                  <img
                    src="~assets/images/glass/glass-for-select/glass-4.png"
                    alt="glass"
                  />
                </div>
                <div class="checkbox-wrap">
                  <input id="glass-selected-4" type="radio" name="glass" />
                  <label for="glass-selected-4"></label>
                </div>
              </div>
              <div class="glass-select__item">
                <p>Катнемо на стилі?</p>
                <div class="glass-select__image">
                  <img
                    src="~assets/images/glass/glass-for-select/glass-2.png"
                    alt="glass"
                  />
                </div>
                <div class="checkbox-wrap">
                  <input id="glass-selected-5" type="radio" name="glass" />
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
            <button
              type="submit"
              form="glass-form"
              class="modal-btn light-btn skew-btn"
            >
              <span> Підтвердити </span>
            </button>
          </div>
        </div>
      </form>
    </div>
    <div v-else>
      <h2 class="mb40 text-center">
        Для замовлення склянки потрібно авторизуватись
      </h2>
      <button
        type="button"
        class="modal-btn light-btn skew-btn"
        @click="$store.dispatch('setModal', 'login')"
      >
        <span> Вхід </span>
      </button>
    </div>
  </modal-layout>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators'
import {
  emailValidator,
  phoneValidator,
  fullnameValidator,
} from '@/helpers/helpers'
import { validationMixin } from 'vuelidate'
import ModalLayout from '@/components/Common/ModalLayout'

export default {
  name: 'GlassModal',
  components: {
    ModalLayout,
  },
  mixins: [validationMixin],
  // data() {
  //   return {
  //     form: {
  //       fullname: '',
  //       phone: '',
  //       email: '',
  //       city: '',
  //       np: '',
  //     },
  //   }
  // },
  computed: {
    user() {
      return this.$store.state.user
    },
    form: {
      get() {
        return {
          fullname: this.user.first_name,
          phone: this.user.phone,
          email: this.user.email,
          city: '',
          np: '',
        }
      },
      set(newVal) {
        console.log(newVal)
      },
    },
  },
  methods: {
    handleSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        console.log(this.form)
      }
    },
    handleChange(e, name) {
      this.$v.form[name].$model = e.target.value.toUpperCase()
      this.$v.form[name].$touch()
    },
    handleNumberInput(e, name) {
      e = e || window.event
      const charCode = e.which ? e.which : e.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        e.preventDefault()
      } else {
        this.$v.form[name].$touch()
        return true
      }
    },
  },
  validations: {
    form: {
      fullname: {
        required,
        fullnameValidator,
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
      city: {
        required,
      },
      np: {
        required,
        numeric,
      },
    },
  },
}
</script>
