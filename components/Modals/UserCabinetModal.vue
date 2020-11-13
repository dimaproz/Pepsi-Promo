<template>
  <modal-layout :modifier="'account-wrap'">
    <div class="modal-header mb60">
      <h2 class="align-left">особистий кабінет</h2>
    </div>
    <div v-if="user" class="modal-body">
      <div class="account-info mb20">
        <p>{{ user.first_name }}</p>
        <p>Телефон +{{ user.phone | phone }}</p>
      </div>
      <h2 class="color-light-blue mb40">МОЇ АКЦІЙНІ КОДИ ТА ПРИЗИ</h2>
      <div class="codes-list modal-list">
        <vuescroll :ops="ops">
          <div class="codes-list_type">
            <div
              v-for="(item, idx) in getUserCodesByType('glass')"
              :key="item.created_at + idx"
              class="codes-list__item"
            >
              <div class="codes-list__item_main-info">
                <span>{{ item.code }}</span>
                -
                <span>{{ item.created_at | date }}</span>
                -
                <span>Колекційна склянка.</span>
              </div>
              <button
                v-if="parseInt(item.final_select) === 0"
                type="button"
                class="modal-btn light-btn small-btn"
                @click.prevent="goToOrder(item.code)"
              >
                <span> ЗАМОВИТИ </span>
              </button>
              <span
                v-if="parseInt(item.final_select) === 1"
                class="color-light-blue codes-list__item_status"
                >{{ presentTitle[item.selected_glass] }}
              </span>
            </div>
          </div>
          <div class="codes-list_type codes-list_type-divan">
            <div
              v-for="(item, idx) in getUserCodesByType('promo')"
              :key="item.created_at + idx"
              class="codes-list__item"
            >
              <div class="codes-list__item_main-info">
                <span>{{ item.code }}</span>
                -
                <span>{{ item.created_at | date }}</span>
                -
                <span>Підписка Divan.TV на 5 днів.</span>
              </div>
              <div class="codes-list__item_status">
                <span>Промокод: {{ item.promocode }}</span>
              </div>
            </div>
          </div>
          <div class="codes-list_type">
            <div
              v-for="(item, idx) in getUserCodesByType()"
              :key="item.created_at + idx"
              class="codes-list__item"
            >
              <div class="codes-list__item_main-info">
                <span>{{ item.code }}</span>
                -
                <span>{{ item.created_at | date }}</span>
              </div>
            </div>
          </div>
        </vuescroll>
      </div>
    </div>
    <div v-else class="modal-body">
      <h2 class="color-light-blue mb40 not-authorized">
        Спочатку авторизуйтесь
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
import vuescroll from 'vuescroll'
import { scrollOptions, presentTitle } from '@/helpers/constants'
import { dateParser } from '@/helpers/helpers'
import ModalLayout from '@/components/Common/ModalLayout'

import { mapActions } from 'vuex'
export default {
  name: 'UserCabinetModal',
  components: {
    vuescroll,
    ModalLayout,
  },
  filters: {
    phone(phone) {
      return phone.replace(
        /(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/,
        '$1($2)-$3-$4-$5'
      )
    },
    date(date) {
      return dateParser(date)
    },
  },
  data() {
    return {
      presentTitle,
      ops: { ...scrollOptions },
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  mounted() {
    if (this.$store.state.user) {
      this.$store.dispatch('getUserCodes')
    }
  },
  methods: {
    ...mapActions({
      setModal: 'setModal',
      setInfoModal: 'setInfoModal',
    }),
    getUserCodesByType(type) {
      if (type === 'promo') {
        return this.$store.state.userCodes.filter(
          (item) => item.promocode.length
        )
      } else if (type === 'glass') {
        return this.$store.state.userCodes.filter((item) => item.selected_glass)
      } else {
        return this.$store.state.userCodes.filter(
          (item) => !item.selected_glass && !item.promocode.length
        )
      }
    },
    goToOrder(code) {
      this.$store.dispatch('saveGlassCode', code)
      this.$store.dispatch('setModal', 'order')
    },
  },
}
</script>

<style lang="scss"></style>
