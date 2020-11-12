<template>
  <info-modal-layout>
    <div class="modal-header mb40">
      <h2>КОД ЗАРЕЄСТРОВАНО!</h2>
    </div>
    <div class="modal-body">
      <p v-if="!$store.state.glassEmpty" class="mb30">
        Ти отримав промокод <br />
        для перегляду кінохітів на Divan.TV: <br />
        <span class="uppercase font-35"> {{ $store.state.divanPromo }} </span>
      </p>
      <template v-else>
        <p class="mb-30">На жаль, склянки вже закынчилися.</p>
        <p class="mb30">
          Але ти отримав промокод <br />
          для перегляду кінохітів на Divan.TV: <br />
          <span class="uppercase font-35"> {{ $store.state.divanPromo }} </span>
        </p>
      </template>
      <p class="mb30">
        Активуй тут: <br />
        <a href="https://divan.tv/promo">https://divan.tv/promo</a>
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
