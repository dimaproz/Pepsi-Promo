<template>
  <info-modal-layout>
    <div class="modal-header mb40">
      <h2>КОД ЗАРЕЄСТРОВАНО!</h2>
    </div>
    <div class="modal-body">
      <p v-if="!$store.state.glassEmpty" class="mb40">
        Ти збільшив свої шанси виграти
        <span class="color-red">смартфон</span> наступного понеділка!
      </p>
      <p v-if="$store.state.glassEmpty" class="mb40">
        На жаль, склянки вже закінчилися. <br />
        Але ти збільшив свої шанси виграти
        <span class="color-red">смартфон</span> наступного понеділка!
      </p>
      <p class="font-light">
        Реєструй нові коди, щоб зібрати колекцію склянок, а наприкінці акції –
        збільшити шанс виграти авто!
      </p>
    </div>
  </info-modal-layout>
</template>
