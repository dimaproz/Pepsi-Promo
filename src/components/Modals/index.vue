<template>
    <transition name="fade-in-down">
      <login-modal
          v-if="modal === 'login'"
          @close="$store.commit('MODAL_SET', null)"
      />
      <registration-modal
          v-if="modal === 'registration'"
          @close="$store.commit('MODAL_SET', null)"
      />
      <winners-modal
          v-if="modal === 'winners'"
          @close="$store.commit('MODAL_SET', null)"
      />
    </transition>
</template>

<script>
import LoginModal from "@/components/Modals/LoginModal";
import RegistrationModal from "@/components/Modals/RegistrationModal";
import WinnersModal from "@/components/Modals/WinnersModal";

export default {
  name: "index",
  components: {
    LoginModal,
    RegistrationModal,
    WinnersModal
  },
  props: {
    modal: {
      type: [String, Object],
      default(){
        return null
      }
    }
  }
}
</script>

<style lang="scss">
.fade-in-down-enter-active,
.fade-in-down-leave-active {
  transition: all linear 0.25s;
}
.fade-in-down-enter, .fade-in-down-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate3d(0, -5%, 0);
}

.modal-wrap{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(#0066D4, 0.6);
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
  color: #0266c6;
}
.modal-centered{
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
  max-width: 500px;
  margin: 0 auto;
}
.modal-block{
  position: relative;
  width: 100%;
  z-index: 11;
  &:before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 13px;
    top: 10px;
    background-color: #ff0000;
    transform: rotate(0.7deg);
    z-index: 1;
  }
  &:after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: -12px;
    top: -13px;
    background-color: #33bbef;
    transform: rotate(-0.7deg);
    z-index: 2;
  }
}
.modal-content{
  width: 100%;
  background-color: #fff;
  padding: 35px 35px 60px;
  z-index: 3;
  position: relative;
}
.modal-header{
  color: #0266c6;
  text-align: center;
  h2{
    font-size: 25px;
    margin: 0;
    text-transform: uppercase;
  }
}
.modal-subtitle{
  font-size: 20px;
  font-weight: normal;
  max-width: 235px;
  margin: 20px auto 50px;
}
.modal-list{
  max-height: 428px;
  overflow-y: auto;
  font-family: "Futura New Book";
  font-weight: normal;
  font-size: 20px;
  max-width: 365px;
  margin: 0px 10px  0 auto;
  p{
    margin: 0;
  }
}
.winners-list{
  height: 428px;
}
.input-wrap{
  border-bottom: 2px solid #00aeef;
  padding-bottom: 5px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  position: relative;
}
label{
  color: #0266c6;
  font-size: 20px;
  font-weight: normal;
  text-transform: none;
  cursor: pointer;
  white-space: nowrap;
}
input{
  border: none;
  outline: none;
  font-size: 18px;
  font-family: "Futura New";
  color: #00aeef;
  font-weight: normal;
  padding-left: 50px;
  width: 100%;
  min-width: 0;
  &::placeholder{
    color: #cccccc;
  }
}
.field-error{
  opacity: 0;
  bottom: -115%;
  z-index: 20;
  font-size: 12px;
  font-weight: normal;
  margin: 0 0 3px;
  line-height: 1;
  text-align: right;
  color: #fff;
  transition: opacity .3s linear;
  background: #c51437;
  border-radius: 8px;
  pointer-events: none;
  box-sizing: border-box;
  padding: 5px;
  white-space: nowrap;
  &.modified{
    bottom: auto;
    top: 110%;
  }
  &:after{
    content: "";
    display: block;
    top: -8px;
    max-width: 8px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #c51437;
  }
}

.field-error, .field-error:after{
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
}
.checkbox-wrap.error>.field-error, .input-wrap.error>.field-error{
  opacity: 1;
}
.checkbox-wrap{
  padding-left: 20px;
  position: relative;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus
input:-webkit-autofill,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 0;
  -webkit-text-fill-color: #00aeef;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
  background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(0,174,255,0.04) 50%,rgba(255,255,255,0) 51%,rgba(0,174,255,0.03) 100%);
}
input[type=checkbox],input[type=radio]{
  display: none;
}

input[type=checkbox]+label, input[type=radio]+label{
  cursor: pointer;
  padding-left: 37px;
  padding-top: 0;
  position: relative;
  margin-bottom: 0;
  display: block;
  line-height: 1.2em;
  color: #49618a;
  font-size: 20px;
  font-family: "Futura New Book";
  text-align: left;
  color: #0266c6;
  font-weight: normal;
  white-space: normal;
  a{
    color: #0266c6;
    transition: all .2s;
    &:hover{
      color: red;
    }
  }
}

input[type=checkbox]+label:before, input[type=radio]+label:before{
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 18px;
  height: 18px;
  background: #49618a;
  border-radius: 50%;
  transform: translateY(-50%);
}

input[type=checkbox]+label:after, input[type=radio]+label:after{
  content: "";
  position: absolute;
  left: 4px;
  top: 50%;
  width: 10px;
  height: 10px;
  opacity: 0;
  background: #db6314;
  border-radius: 50%;
  transform: translateY(-50%);
}

input[type=checkbox]:checked+label:after, input[type=radio]:checked+label:after{
  opacity: 1;
}

.modal-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background: none;
  color: #0266c6;
  margin: 0 auto;
  font-size: 18px;
  line-height: 43px;
  color: #fff;
  min-width: 295px;
  height: 43px;
  font-family: "Futura New";
  text-transform: uppercase;
  letter-spacing: 0.6px;
  cursor: pointer;
  position: relative;
  &+.modal-btn{
    margin-top: 50px;
  }
  span{
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 3;
  }
}
.dark-btn{
  span{
    background-color: #014a9b;
    transition: all .2s;
  }
  &:hover{
    span{
      background-color: #2257A8;
    }
  }
  &:before{
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: -7px;
    top: -4px;
    transform: rotate(-0.8deg);
    background-color: #00aeef;
    z-index: 1;
  }
  &:after{
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 6px;
    top: 5px;
    transform: rotate(0.8deg);
    background-color: #ff0000;
    z-index: 2;
  }
}
.light-btn{
  span{
    background-color: #00aeef;
    transition: all .2s;
  }
  &:hover{
    span{
      background-color: #16C4FF;
    }
  }
  &:before{
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: -7px;
    top: -4px;
    transform: rotate(-0.8deg);
    background-color: #014a9b;
    z-index: 1;
  }
  &:after{
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 6px;
    top: 5px;
    transform: rotate(0.8deg);
    background-color: #ff0000;
    z-index: 2;
  }
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
  cursor: pointer;
}
.modal-footer{
  text-align: center;
  margin-top: 40px;
}
.close{
  position: absolute;
  right:17px;
  top: 17px;
  z-index: 3;
  width: 26px;
  height: 26px;
  border: none;
  background: none;
  cursor: pointer;
  &:before, &:after{
    content: "";
    width: 30px;
    height: 4px;
    background: #ff0000;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -17px;
    transition-duration: .2s;
    transform-origin: center center;
  }
  &:before{
    transform: rotate(45deg);
  }
  &:after{
    transform: rotate(-45deg);
  }
}
.mb20{
  margin-bottom: 20px;
}
.mb40{
  margin-bottom: 40px;
}
.mb70{
  margin-bottom: 70px;
}
.mb95 {
  margin-bottom: 95px;
}

@media all  and (max-width: 1280px){
  .modal-content{
    padding: 30px 30px 45px;
  }
  .modal-header h2{
    font-size: 22px;
  }
  .modal-subtitle {
    font-size: 18px;
  }
  .modal-list{
    font-size: 18px;
  }
  .winners-list{
    height: 358px;
  }
  .mb95{
    margin-bottom: 70px;
  }
  .mb70{
    margin-bottom: 50px;
  }
  label{
    font-size: 18px;
  }
  .modal-btn{
    min-width: 270px;
    font-size: 17px;
    &+ .modal-btn {
      margin-top: 35px;
    }
  }
  input{
    font-size: 16px;
    padding-left: 30px;
  }
  input[type=checkbox] + label, input[type=radio] + label{
    font-size: 18px;
  }
  .modal-centered{
    max-width: 450px;
  }
  .modal-footer{
    margin-top: 30px;
  }
  .modal-text {
    font-size: 18px;
  }
}
@media all  and (max-width: 550px){
  .modal-centered{
    max-width: 300px;
  }
  .close{
    right: 0px;
    top: 5px;
  }
  .close:before, .close:after{
    width: 20px;
    height: 3px;
  }
  .modal-header h2 {
    font-size: 20px;
  }
  .modal-subtitle{
    margin: 10px auto 25px;
    font-size: 16px;
  }
  .modal-list{
    font-size: 14px;
  }
  .winners-list{
    height: 300px;
  }
  .mb95{
    margin-bottom: 45px;
  }
  .mb70{
    margin-bottom: 35px;
  }
  .mb40{
    margin-bottom: 20px;
  }
  .mb20{
    margin-bottom: 10px;
  }
  .modal-content {
    padding: 20px 15px 25px;
  }
  label{
    font-size: 14px;
  }
  input[type=checkbox] + label, input[type=radio] + label{
    font-size: 14px;
  }
  input{
    font-size: 13px;
    padding-left: 20px;
  }
  .modal-btn{
    min-width: 200px;
    height: 35px;
    font-size: 13px;
    line-height: 35px;
  }
  .modal-text{
    font-size: 14px;
  }
}
</style>