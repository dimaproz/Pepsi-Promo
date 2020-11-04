<template>
  <div class="modal-wrap info-modal" id="success_show">
    <div class="modal-centered">
      <div class="modal-block">
        <div class="modal-content">
          <button type="button" class="close" @click="$emit('close')"></button>
          <div class="modal-header mb40">
            <h2>
              КОД ЗАРЕЄСТРОВАНО!
            </h2>
          </div>
          <div class="modal-body">
            <p class="mb30">
              Ти отримав промокод <br>
              для перегляду кінохітів на Divan.TV: <br>
              <span class="uppercase font-35">
                R25436915
              </span>
            </p>
            <p class="mb30">
              Активуй тут: <br>
              <a href="https://divan.tv/promo">https://divan.tv/promo</a>
            </p>
            <p class="mb30">
              а також одну з п’яти колекційних склянок. <br>
              Замовляй склянку тут: <br>
              <a href="#">ссылкассылка</a>
            </p>
            <p class="mb40">
              Ти також збільшив шанси виграти <span class="color-red">смартфон</span> наступного понеділка!
            </p>
            <p class="font-light">
              Реєструй нові коди, щоб зібрати колекцію склянок,
              а наприкінці акції – збільшити шанс виграти авто!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
name: "SuccessShowModal"
}
</script>

<style scoped>

</style>