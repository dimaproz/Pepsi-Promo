<template>
    <transition name="fade">
      <div class="modal-wrap" v-if="$store.state.loginModalActive" >
        <div class="modal-block">
          <div class="modal-content">
            <div class="modal-header">
              <h2>
                Вхід
              </h2>
            </div>
            <div class="modal-body">
              <form>
                <div class="input-wrap">
                  <label for="phone">Мобільний телефон</label>
                  <input type="text" id="phone" placeholder="+38 00 000 00 00">
                </div>
                <div class="input-wrap mb70">
                  <label for="password">Пароль</label>
                  <input type="text" id="password">
                </div>
                <button class="modal-btn dark-btn">Увійти</button>
                <button class="modal-btn light-btn">Зареєструватись</button>
              </form>
            </div>
            <div class="modal-footer">
            <span class="modal-text forgot-password">
              Забули пароль?
            </span>
            </div>
          </div>
          <div class="modal-bg-red"></div>
          <div class="modal-bg-blue"></div>
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
  width: 500px;
  min-height: 300px;
  position: relative;
  z-index: 3;
  //&:before{

  //}
}
.modal-bg-red{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 13px;
  top: 10px;
  background-color: #ff0000;
  transform: rotate(0.7deg);
  z-index: 1;
}
.modal-bg-blue{
  width: 100%;
  height: 100%;
  position: absolute;
  left: -12px;
  top: -13px;
  background-color: #33bbef;
  transform: rotate(-0.7deg);
  z-index: 2;
}
.modal-content{
  background-color: #fff;
  padding: 35px 35px 60px;
  z-index: 3;
  position: relative;
}
.modal-header{
  color: #0266c6;
  text-align: center;
  margin-bottom: 95px;
  h2{
    font-size: 25px;
    margin: 0;
  }
}
.input-wrap{
  border-bottom: 2px solid #0066D4;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 15px;
}
label{
  color: #0266c6;
  font-size: 20px;
  text-transform: none;
  flex: 0 0 212px;
}
input{
  border: none;
  outline: none;
  font-size: 18px;
  font-family: "Futura New";
  color: #cccccc;
  font-weight: normal;
  padding: 0 20px;
  width: 100%;
  &::placeholder{
    color: #cccccc;
  }

}
.modal-btn{
  display: block;
  outline: none;
  border: none;
  background: none;
  color: #0266c6;
  margin: 0 auto;
  font-size: 18px;
  color: #fff;
  min-width: 295px;
  height: 43px;
  font-family: "Futura New";
  text-transform: uppercase;
  letter-spacing: 0.6px;
  &+.modal-btn{
    margin-top: 50px;
  }
}
.dark-btn{
  background-color: #014a9b;
}
.light-btn{
  background-color: #00aeef;
}
.modal-text{
  color: #0266c6;
  font-size: 20px;
  text-transform: none;
  font-weight: 200;
  font-family: "Futura New Book";
}
.forgot-password{
  border-bottom: 1px solid #0266c6;
}
.modal-footer{
  text-align: center;
  margin-top: 40px;
}
.mb70{
  margin-bottom: 70px;
}
</style>