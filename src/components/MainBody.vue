<template>
  <div class="main-site-screen">

    <!--  <img class="girl-image" src="../assets/images/main-page/girl.png" alt="girl">-->
    <main>
      <div class="code-block-wrapper">
        <div class="enter-code-wrap">
          <div class="key-form-wrap">
            <div class="key-form">
              <form>
                <input type="text" maxlength="12" class="key-input" />
                <button class="key-btn"></button>
              </form>
              <div class="key-red-bg"></div>
              <div class="key-blue-bg"></div>
              <a href=""></a>
            </div>
            <div class="over-key">РЕЄСТРУЙ КОД</div>
          </div>
          <div class="sociale">
            <a href="#" target="_blank" class="viber">
              <img src="../assets/images/icon-viber.svg" alt="" />
            </a>
            <a href="#" target="_blank" class="telegram">
              <img src="../assets/images/icon-telegram.svg" alt="" />
            </a>
          </div>
          <img class="white-line" src="../assets/images/main-page/white-line.png" alt="">
          <img class="red-line" src="../assets/images/main-page/red-line.png" alt="">
          <div class="get-code">
            Як знайти код?
          </div>
        </div>
      </div>

      <div class="gifts-wrap">
        <div class="gifts">
          <div class="gifts__item">
            <div class="img-box img-box-1">
              <img src="../assets/images/gifts/telik.png" alt="" />
            </div>
            <span class="gifts__codes">Кожному 5-му</span>
            <span class="gifts__title">підписка</span>
            <img src="../assets/images/gifts/telik-text.png" alt="text">
          </div>
          <div class="gifts__item">
            <div class="img-box img-box-2">
              <img src="../assets/images/gifts/glass.png" alt="glass" />
            </div>
            <span class="gifts__codes">5 кодів</span>
            <span class="gifts__title">Колекційні</span>
            <span>Склянки</span>
          </div>
          <div class="gifts__item">
            <div class="img-box img-box-3">
              <img src="../assets/images/gifts/phone.png" alt="Iphone" />
            </div>
            <span class="gifts__codes">1 код</span>
            <span class="gifts__title">топовий</span>
            <span>смартфон</span>
          </div>
          <div class="gifts__item">
            <div class="img-box img-box-4">
              <img src="../assets/images/gifts/car.png" alt="car" />
            </div>
            <span class="gifts__codes">2 коди</span>
            <span class="gifts__title">круте</span>
            <span>авто</span>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
export default {
  name: "MainBody"
}
</script>

<style scoped>

</style>