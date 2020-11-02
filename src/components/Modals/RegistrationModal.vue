<template>
  <transition name="fade-in-down">
    <div class="modal-wrap" v-if="$store.state.registrationModalActive" >
      <div class="modal-centered">
        <div class="modal-block">
          <div class="modal-content">
            <button type="button" class="close"  @click="$store.dispatch('registrationModalActive')"></button>
            <div class="modal-header mb95">
              <h2>
                РЕЄСТРАЦІЯ
              </h2>
            </div>
            <div class="modal-body">
              <form>
                <div class="input-wrap">
                  <label for="name">Ім'я</label>
                  <input type="text" id="name" name="name">
                </div>
                <div class="input-wrap">
                  <label for="phone">Мобільний номер</label>
                  <input type="text" id="phone" name="phone" placeholder="+38 00 000 00 00">
                </div>
                <div class="input-wrap">
                  <label for="password">Пароль</label>
                  <input type="password" id="password" name="password">
                </div>
                <div class="input-wrap mb40" >
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email">
                </div>
                <div class="checkbox-wrap mb20">
                  <input type="checkbox" name="rules" id="rules">
                  <label for="rules">Я погоджуюсь з Офіційними правилами та даю згоду на обробку персональних </label>
                </div>
                <div class="checkbox-wrap mb70">
                  <input type="checkbox" name="policy" id="policy">
                  <label for="policy">Я погоджуюсь з Політикою конфіденційності.</label>
                </div>
                <button class="modal-btn light-btn">
                  <span>
                    Зареєструватись
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
name: "RegistrationModal"
}
</script>

<style scoped>

</style>