<template>
    <transition name="fade">
      <div class="modal-wrap" v-if="$store.state.loginModalActive" @click="$store.dispatch('loginModalActive')">
        <div class="modal-block">
          <div class="modal-header">
            <h2>
              Вхід
            </h2>
          </div>
          <div class="modal-body">
            <form>
              <div class="input-wrap">
                <label for="phone">Мобільний телефон</label>
                <input type="text" id="phone">
              </div>
              <div class="input-wrap">
                <label for="password">Пароль</label>
                <input type="text" id="password">
              </div>
              <button class="modal-btn dark-btn">Увійти</button>
              <button class="modal-btn light-btn">Зареєструватись</button>
            </form>
            <p class="modal-text">
              Забули пароль?
            </p>
          </div>
        </div>


      </div>
    </transition>
</template>

<script>
export default {
name: "LoginModal"
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.modal-wrap{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(#0066D4, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-block{
  width: 400px;
  min-height: 300px;
  background-color: #fff;
}
.modal-header{
  color: #0066D4;
  text-align: center;
}
.input-wrap{
  border-bottom: 2px solid #0066D4;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 15px;
}
label{
  color: #0066D4;
  font-size: 12px;
}
input{
  border: none;
  outline: none;
}
.modal-btn{
  display: block;
  outline: none;
  border: none;
  background: none;
  color: #0066D4;
  margin: 0 auto;
}
.modal-text{
  color: #0066D4;
  font-size: 12px;
  text-transform: none;
  font-weight: 200;
}
</style>