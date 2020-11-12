<template>
  <info-modal-layout :autoclose="true">
    <div class="modal-header mb40">
      <h2>ВІДНОВЛЕННЯ ПАРОЛЯ</h2>
    </div>
    <div class="modal-body">
      <p class="uppercase mb-40">
        Дякуємо!<br />
        Новий пароль відправлено<br />
        на вашу електронну пошту.
      </p>
      <div class="bots-wrap">
        <p>Реєструйте коди у чат-боті</p>
        <modals-bot />
      </div>
    </div>
  </info-modal-layout>
</template>
