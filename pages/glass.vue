<template>
  <div class="wrapper glass-wrapper">
    <header>
      <NuxtLink class="back-to-main" to="/">на головну</NuxtLink>
      <div class="glass-quantity">
        <h1>Колекційні склянки</h1>
        <div class="glass-count-wrap">
          <p>Залишок:</p>
          <div class="glass-count">
            <span v-for="(item, idx) in total" :key="idx">{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="triangle-blue" />
      <div class="triangle-red" />
      <div class="triangle-white-left" />
      <div class="triangle-white-right" />
      <img
        class="star star-1"
        src="~assets/images/stars/star-M-vertical.png"
        alt="star"
      />
      <img
        class="star star-2"
        src="~assets/images/stars/star-M-vertical.png"
        alt="star"
      />
      <img
        class="star star-3"
        src="~assets/images/stars/star-M-vertical.png"
        alt="star"
      />
      <img
        class="star star-4"
        src="~assets/images/stars/star-M-vertical.png"
        alt="star"
      />
      <img
        class="star star-5"
        src="~assets/images/stars/star-M-vertical.png"
        alt="star"
      />
      <img
        class="star star-6"
        src="~assets/images/stars/star-M-red.png"
        alt="star"
      />
      <img
        class="star star-7"
        src="~assets/images/stars/star-M-red.png"
        alt="star"
      />
    </header>
    <main>
      <div class="glass-block-wrap">
        <div class="glass-block glass-block-mob">
          <client-only>
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide v-for="item in data" :key="item.glass_id + 'mob'">
                <slide-item :item="item" />
              </swiper-slide>
              <div
                slot="button-prev"
                class="swiper-button-prev"
                @click="prevSlide"
              />
              <div
                slot="button-next"
                class="swiper-button-next"
                @click="nextSlide"
              />
            </swiper>
          </client-only>
        </div>
        <div class="glass-block glass-block-desk">
          <div
            v-for="item in data"
            :key="item.glass_id"
            class="glass-block__item"
          >
            <p>{{ item.glass_name }}</p>
            <img
              class="glass-image"
              :src="require(`~/assets/images/glass/glass-${item.glass_id}.png`)"
              :alt="`glass_desc_${item.glass_id}`"
            />
            <img
              class="glass-bg"
              :src="
                require(`~/assets/images/glass/glass-bg/glass-bg-desk-${item.glass_id}.png`)
              "
              :alt="'glass_desc_bg_' + item.glass_id"
            />
          </div>
        </div>
      </div>
    </main>
    <footer :class="{ modified: getUser }">
      <div class="footer-content" :class="{ modified: getUser }">
        <button
          v-if="getUser && fiveCodes"
          type="button"
          class="modal-btn light-btn glass-btn"
          @click="goToOrder"
        >
          <span>перейти на замовлення</span>
        </button>
        <p v-else>
          Реєструй 5 кодів <br />
          та отримуй колекційну склянку!
        </p>
      </div>
      <div class="triangle-blue" />
      <img
        class="star star-1"
        src="~assets/images/stars/star-M-vertical.png"
        alt="star"
      />
      <img
        class="star star-2"
        src="~assets/images/stars/star-M-vertical.png"
        alt="star"
      />
      <img
        class="star star-3"
        src="~assets/images/stars/star-M-vertical.png"
        alt="star"
      />
      <img
        class="star star-4"
        src="~assets/images/stars/star-M-vertical.png"
        alt="star"
      />
      <img
        class="star star-5"
        src="~assets/images/stars/star-M-vertical.png"
        alt="star"
      />
      <img
        class="star star-6"
        src="~assets/images/stars/star-M-red.png"
        alt="star"
      />
      <img
        class="star star-7"
        src="~assets/images/stars/star-M-red.png"
        alt="star"
      />
    </footer>
  </div>
</template>

<script>
// TODO slider reload + img-bg hide on click
import { mapGetters } from 'vuex'
import { BASE_API_PATH } from '@/helpers/constants'
import SlideItem from '@/components/SlideItem'

import axios from 'axios'
import ClientOnly from 'vue-client-only'
export default {
  name: 'Glass',
  components: {
    ClientOnly,
    SlideItem,
  },
  async asyncData(ctx) {
    try {
      const res = await axios.get(`${BASE_API_PATH}/info/glasses`)
      const total = res.data.reduce((sum, current) => {
        sum += parseInt(current.glass_count)
        return sum
      }, 0)
      return {
        total: total.toString().split(''),
        data: res.data,
      }
    } catch (e) {
      ctx.error(e)
    }
  },
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        draggable: false,
        initialSlide: 0,
      },
    }
  },
  computed: {
    ...mapGetters(['getUser']),
    // swiper() {
    //   return this.$refs.mySwiper.$swiper
    // },
    fiveCodes() {
      return this.$store.state.userCodes.length >= 5
    },
  },
  watch: {
    windowHeight(newHeight, oldHeight) {
      this.txt = `it changed to ${newHeight} from ${oldHeight}`
    },
  },
  methods: {
    nextSlide() {
      this.$refs.mySwiper.$swiper.slideNext()
    },
    prevSlide() {
      this.$refs.mySwiper.$swiper.slidePrev()
    },
    goToOrder() {
      this.$router.push({ path: '/user' })
    },
  },
}
</script>
