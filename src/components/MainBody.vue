<template>
  <div class="main-site-screen">
<!--      <img class="girl-image" src="../assets/images/main-page/girl.png" alt="girl">-->
      <div class="girl-image-block">
        <picture>
          <source
              media="(max-width: 600px)"
              srcset="../assets/images/main-page/girl-mob.png"
          />
          <source
              media="(min-width: 992px)"
              srcset="../assets/images/main-page/girl.png"
          />
          <img src="../assets/images/main-page/girl.png" alt="girl" />
        </picture>
      </div>
      <code-input />
      <div class="steps">
        <div class="steps__item">
          <div class="steps__name">
            <span class="steps__number">1.</span>
            <span class="steps__title">Купуй</span>
            <div class="steps__images">
              <img src="../assets/images/pepsi.png" alt="pepsi" />
              <img src="../assets/images/7up.png" alt="7up" />
              <img src="../assets/images/mirinda.png" alt="mirinda" />
            </div>
          </div>
          <span class="steps__subtitle">акційний продукт</span>
        </div>
        <div class="steps__item">
          <div class="steps__name">
            <span class="steps__number">2.</span>
            <span class="steps__title">Реєструй</span>
          </div>
          <span class="steps__subtitle">код з-під кришки</span>
        </div>
        <div class="steps__item">
          <div class="steps__name">
            <span class="steps__number">3.</span>
            <span class="steps__title">Вигравай</span>
          </div>
          <span class="steps__subtitle">драйвові призи</span>
        </div>
        <div class="bg-lines"></div>
      </div>
        <div class="gifts">
          <div class="gifts__item">
            <div class="img-box img-box-1">
              <img src="../assets/images/gifts/telik.png" alt="" />
            </div>
            <div class="gifts__descr">
              <span class="gifts__codes">Кожному 5-му</span>
              <span class="gifts__title">підписка</span>
              <img class="tv-name" src="../assets/images/gifts/telik-text.png" alt="text">
            </div>
          </div>
          <div class="gifts__item">
            <div class="img-box img-box-2">
              <img src="../assets/images/gifts/glass.png" alt="glass" />
            </div>
            <div class="gifts__descr">
              <span class="gifts__codes">5 кодів</span>
              <span class="gifts__title">Колекційні</span>
              <span>Склянки</span>
            </div>
          </div>
          <div class="gifts__item">
            <div class="img-box img-box-3">
              <img src="../assets/images/gifts/phone.png" alt="Iphone" />
            </div>
            <div class="gifts__descr">
              <span class="gifts__codes">1 код</span>
              <span class="gifts__title">топовий</span>
              <span>смартфон</span>
            </div>
          </div>
          <div class="gifts__item">
            <div class="img-box img-box-4">
              <img src="../assets/images/gifts/car.png" alt="car" />
            </div>
            <div class="gifts__descr">
              <span class="gifts__codes">2 коди</span>
              <span class="gifts__title">круте</span>
              <span>авто</span>
            </div>
          </div>
        </div>


  </div>
</template>

<script>

import CodeInput from "@/components/CodeInput";

export default {
  name: "MainBody",
  components:{
    CodeInput
  }

}
</script>

<style lang="scss">
.girl-image-block{
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 0;
}
</style>