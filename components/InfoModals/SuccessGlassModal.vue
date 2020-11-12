<template>
  <info-modal-layout>
    <div class="modal-header mb40">
      <h2>КОД ЗАРЕЄСТРОВАНО!</h2>
    </div>
    <div class="modal-body">
      <p class="mb30">Ти отримуєш одну з 5 колекційних склянок.</p>
      <p class="mb30">
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
