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
      <rules-modal
          v-if="modal === 'rules'"
          @close="$store.commit('MODAL_SET', null)"
      />
      <user-cabinet-modal
          v-if="modal === 'myaccount'"
          @close="$store.commit('MODAL_SET', null)"
      />
      <glass-modal
          v-if="modal === 'glass'"
          @close="$store.commit('MODAL_SET', null)"
      />
    </transition>
</template>

<script>
import LoginModal from "@/components/Modals/LoginModal";
import RegistrationModal from "@/components/Modals/RegistrationModal";
import WinnersModal from "@/components/Modals/WinnersModal";
import RulesModal from "@/components/Modals/RulesModal";
import UserCabinetModal from "@/components/Modals/UserCabinetModal";
import GlassModal from "@/components/Modals/GlassModal";

export default {
  name: "index",
  components: {
    LoginModal,
    RegistrationModal,
    WinnersModal,
    RulesModal,
    UserCabinetModal,
    GlassModal
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
.info-modal{
  .modal-body{
    text-align: center;
  }
  .modal-content{
    padding: 35px 37px 40px;
  }
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
  h2{
    font-size: 25px;
    text-transform: uppercase;
  }
}
.modal-header{
  color: #0266c6;
  text-align: center;
}
.modal-subtitle{
  font-size: 20px;
  font-weight: normal;
  max-width: 235px;
  margin: 20px auto 50px;
}
.modal-body{
  p{
    font-size: 20px;
    font-weight: normal;
    //margin: 0;
  }
  a{
    color: #0266c6;
    border-bottom: 1px solid #0266c6;
  }
} 
.uppercase{
  text-transform: uppercase;
}
.font-35{
  font-size: 35px;
}
.color-red{
  color: #ff0000;
}
.color-light-blue{
  color: #00aeef;
}
.font-light{
  font-family: "Futura New Book";
}
.align-left{
  text-align: left;
}
.modal-list{
  height: 400px;
  overflow-y: auto;
  font-family: "Futura New Book";
  font-weight: normal;
  font-size: 20px;
  p{
    margin: 0;
  }
}
.winners-list{
  height: 428px;
  max-width: 365px;
  margin: 0px 10px  0 auto;
}

.codes-list{
  font-family: "Futura New";
  height: 410px;
  &__item{
    display: flex;
    flex-wrap: wrap;
    padding-right: 40px;
    &+&{
      margin-top: 13px;
    }
    &:first-child{
      padding-top: 10px;
    }
    &_main-info{
      display: flex;
      span:after{
        content: "-";
        display: inline-block;
        margin-left: 5px;
      }
    }
    &_status{
      display: flex;
    }
  }
  span{
    padding-left: 5px;
    &:last-child{
      flex: 1;
    }
  }
}
.rules-list{
  font-size: 16px;
  .rules{
    padding-right: 45px;
  }
  .rules li {
    font-family: "Futura New Book";
  }
  .rules > li {
    font-weight: bolder;
    margin-bottom: 10px;
  }
  .rules > li ul {
    margin: 10px 0 15px 25px;
    font-weight: normal;
  }
  .rules a {
    text-decoration: underline;
    color: #0266c6;
  }
  .rules a:hover {
    color: rgba(#0266c6, 0.8);
  }
}
.rules-wrap .modal-centered{
  max-width: 700px;
}
.glass-modal-wrap{
  .modal-centered{
    max-width: 1640px;
  }
}
.glass-form{
  display: grid;
  grid-template-columns: 35% 35% 30%;
  grid-column-gap: 50px;
  justify-content: space-between;
}
.glass-step{
  &__head{
    display: flex;
    align-items: center;
    text-transform: uppercase;
    margin-bottom: 35px;
  }
  &:nth-child(2){
    .glass-step__head{
      justify-content: center;
    }
  }
  &:first-child{
    .glass-step__body{
      margin-top: 75px;
    }
  }
  &:last-child{
    .glass-step__body{
      display: flex;
      align-items: flex-end;
      height: 100%;
      padding-bottom: 150px;
    }
  }
  &__number{
    position: relative;
    margin-right: 5px;
    span{
      font-size: 63px;
      &:first-child{
        font-size: 34px;
      }
    }
    .triangle{
      width: 100%;
      height: 0;
      border-bottom: 20px solid transparent;
      border-left: 120px solid #00aeef;
      transform: skewX(-10deg);
    }
  }
  &__descr{
    font-size: 25px;
    span {
        display: block;
    }
  }
}
.glass-select{
  display: flex;
  justify-content: space-between;
  &__item{
    p{
      font-size: 13px;
      text-transform: uppercase;
      font-weight: 800;
      max-width: 84px;
      margin-bottom: 15px;
    }
  }
  &__image{
    margin-bottom: 15px;
  }
  input[type=radio] + label{
    padding: 0;
  }
  input[type=radio] + label:before{
    background: #fff;
    border: 5px solid #00aeef;
    border-radius: 0;
    width: 42px;
    height: 42px;
    transform: skewX(-7deg);
    position: relative;
    top: 0;
    left: 0;
    display: inline-block;
  }
  input[type=radio] + label:after{
    background: url("../../assets/images/glass/select.png") center center no-repeat;
    background-size: contain;
    height: 49px;
    width: 37px;
    transform: none;
    left: 12px;
    top: -5px;
  }
}
.account-wrap .modal-centered{
  max-width: 1105px;
  padding: 0 15px;
}
.account-wrap .modal-content{
  padding: 35px 30px 70px 60px;
}
.account-wrap .modal-header h2{
  position: relative;
  &:before{
    content: "";
    display: inline-block;
    width: 170px;
    height: 18px;
    position: absolute;
    left: 0;
    bottom: -28px;
    background: url('../../assets/images/main-page/blue-line.png') center center no-repeat;
  }
}
.account-wrap .modal-body h2{
  position: relative;
  &:before{
    content: "";
    display: inline-block;
    width: 278px;
    height: 12px;
    position: absolute;
    left: 180px;
    bottom: -17px;
    background: url('../../assets/images/main-page/red-line-account.png') center center no-repeat;
  }
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
  &.small-btn{
    height: 20px;
    min-width: 195px;
    font-size: 17px;
    line-height: 20px;
    margin-left: 25px;
    &:before{
      transform: rotate(-0.8deg) skewX(-10deg);
      left: -3px;
      top: -2px;
    }
    &:after{
      transform: rotate(0.8deg) skewX(-10deg);
      left: 3px;
      top: 3px;
    }
    span{
      transform: skewX(-10deg);
    }
  }
  &.skew-btn{
    &:before{
      transform: rotate(-0.8deg) skewX(-10deg);
    }
    &:after{
      transform: rotate(0.8deg) skewX(-10deg);
    }
    span{
      transform: skewX(-10deg);
    }
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
.mb30{
  margin-bottom: 30px;
}
.mb40{
  margin-bottom: 40px;
}
.mb60{
  margin-bottom: 60px;
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
  .info-modal{
    .modal-content{
      padding: 30px 37px 40px;
    }
  }
  .modal-content h2{
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
  .codes-list{
    height: 310px;
  }
  .mb95{
    margin-bottom: 70px;
  }
  .mb70{
    margin-bottom: 50px;
  }
  .mb60{
    margin-bottom: 45px;
  }
  .mb40{
    margin-bottom: 30px;
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
  .info-modal{
    .modal-centered{
      max-width: 500px;
    }
  }
  .modal-footer{
    margin-top: 30px;
  }
  .modal-text {
    font-size: 18px;
  }
}
@media all  and (max-width: 900px) {
  .codes-list{
    font-size: 15px;
  }
  .modal-btn.small-btn{
    height: 18px;
    min-width: 160px;
    font-size: 13px;
    line-height: 18px;
    margin-left: 25px;
  }
  .account-wrap .modal-content{
    padding: 30px 25px 40px 25px;
  }
  .account-wrap .modal-centered {
    max-width: 810px;
  }
  .account-wrap .modal-header h2:before {
    width: 119px;
    bottom: -21px;
    background-size: contain;
  }
  .account-wrap .modal-body h2:before {
    width: 210px;
    left: 160px;
    bottom: -14px;
    background-size: contain;
  }
  .mb60{
    margin-bottom: 30px;
  }
  .account-info p{
    font-size: 16px;
  }
  .account-wrap .modal-content h2{
    font-size: 20px;
  }
}
@media all  and (max-width: 550px){
  .modal-centered{
    max-width: 300px;
  }

  .info-modal{
    .modal-content{
      padding: 30px 15px 20px;
    }
  }
  .close{
    right: 0px;
    top: 5px;
  }
  .close:before, .close:after{
    width: 20px;
    height: 3px;
  }
  .modal-content h2 {
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
  .mb30{
    margin-bottom: 15px;
  }
  .font-35{
    font-size: 25px;
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
  .modal-body p {
    font-size: 14px;
    font-weight: normal;
  }
}
</style>