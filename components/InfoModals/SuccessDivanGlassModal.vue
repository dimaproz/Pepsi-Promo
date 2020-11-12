<template>
  <info-modal-layout>
    <div class="modal-header mb40">
      <h2>КОД ЗАРЕЄСТРОВАНО!</h2>
    </div>
    <div class="modal-body">
      <p class="mb30">
        Ти отримав промокод <br />
        для перегляду кінохітів на Divan.TV: <br />
        <span class="uppercase font-35"> {{ $store.state.divanPromo }} </span>
      </p>
      <p class="mb30">
        Активуй тут: <br />
        <a href="https://divan.tv/promo">https://divan.tv/promo</a>
      </p>
      <p class="mb30">
        а також одну з п’яти колекційних склянок. <br />
        Замовляй склянку тут: <br />
        <client-only>
          <a :href="link">{{ link }}</a>
        </client-only>
      </p>
      <p class="mb40">
        Ти також збільшив шанси виграти
        <span class="color-red">смартфон</span> наступного понеділка!
      </p>
      <p class="font-light">
        Реєструй нові коди, щоб зібрати колекцію склянок, а наприкінці акції –
        збільшити шанс виграти авто!
      </p>
    </div>
  </info-modal-layout>
</template>
<script>
import ClientOnly from 'vue-client-only'
export default {
  components: { ClientOnly },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    link() {
      if (process.browser) {
        return `${window.location.origin}/user`
      }
    },
  },
}
</script>
