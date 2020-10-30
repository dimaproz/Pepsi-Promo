<template>
  <div class="wrapper">
    <header class="main-header main-page-header">
      <div class="menu-bg-hide" :class="{ active: $store.state.sidebarActive }" @click="$store.dispatch('toggleSidebarState')"></div>
      <div class="menu-trigger" :class="{ active: $store.state.sidebarActive }">
        <span>
          Вхід
        </span>
        <div class="menu-burger" @click="$store.dispatch('toggleSidebarState')">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <sidebar/>
    </header>
    <main-body/>
    <footer class="footer">
      <div class="text">
        Акція триває з 15.11.2020 до 15.01.2021 по всій території України, крім тимчасово окупованих територій. *1 склянка
        кожному з перших 10 000 учасників. Докладніше в Офіційних правилах на сайті.
      </div>
      <div class="triangle-top"></div>
    </footer>
  </div>
</template>

<script>
import MainBody from '../components/MainBody';
import Sidebar from "@/components/Sidebar";

let vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

document.documentElement.style.setProperty("--vh", "".concat(vh, "px")); // We listen to the resize event

window.addEventListener("resize", function () {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});

export default {
  name: "index",
  components:{
    Sidebar,
    MainBody,
  },
}
</script>

<style lang="scss">
.wrapper {
  position: relative;
  background-color: #0266c6;
  background-image: url(../assets/images/bg/bg-shadow.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.main-header {
  transition-duration: .2s;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  padding: 20px 20px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end
}
.main-site-screen {
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.menu-trigger{
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 12px;
  text-transform: uppercase;
}
.menu-burger{
  margin-left: 25px;
  span{
    display: block;
    width: 20px;
    margin-bottom: 2px;
    height: 3px;
    background-color: #fff;
    transform: skewX(-10deg);
    &:first-child{
      transform: skewX(-10deg) translateX(2px);
    }
    &:nth-child(2){
      transform: skewX(-10deg) translateX(1px);
    }
  }
}
.menu-bg-hide{
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  -webkit-transition: opacity .4s;
  -o-transition: opacity .4s;
  transition: opacity .4s;
  opacity: 0;
  background: #004990;
  z-index: -1;
  visibility: hidden;
  &.active{
    width: 100%;
    height: 100%;
    visibility: visible;
    display: block;
    opacity: 0.7;
    z-index: 150;
  }
}
.footer{
  background-color: #00aeef;
  padding: 30px 15px 15px;
  position: relative;
  .triangle-top{
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 0;
    border-bottom: 10px solid transparent;
    border-left: 440px solid #fff;
  }
}
.text {
  font-size: 10px;
  color: #fff;
  font-family: "Futura New", Arial, Helvetica, sans-serif;
  font-weight: normal;
}

// gifts


.gifts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 25px 15px 25px 25px;
  background-color: #0266c6;
  z-index: 0;
}

.gifts__item {
  flex: 0 50%;
  position: relative;
  color: #fff;
  font-size: 15px;
  line-height: 14px;
  font-weight: 800;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gifts__item span {
  display: block
}


.gifts__item:last-child {
  padding-left: 0
}

.gifts__title {
  margin-left: 5px
}

.gifts__codes {
  font-size: 10px;
  text-transform: none;
  margin-left: -18px
}
.img-box{
  margin-bottom: 8px;
}
.img-box img{
  width: 100%;
}
.img-box-1 {
  width: 92px;
  height: 81px;
}
.img-box-2 {
  width: 108px;
  height: 84px;
}
.img-box-3 {
  width: 110px;
  height: 105px;
}
.img-box-4 {
  width: 161px;
  height: 94px;
}
.tv-name{
  width: 68px;
}

// steps
.steps{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #0266c6;
  background-color: #fff;
  padding: 25px 0px 20px;
  z-index: 2;
  position: relative;
  &__item{
    width: 190px;
    text-align: center;
    &+&{
      margin-top: 5px;
    }
    &:nth-child(2){
      margin-left: 15px;
    }
    &:nth-child(3){
      margin-left: 30px;
    }
  }
  &__name{
    display: flex;
    align-items: flex-end;
  }
  &__number{
    font-size: 25px;
    line-height: 24px;
    margin-right: 5px;
  }
  &__title{
    font-size: 14px;
    text-transform: uppercase;
  }
  &__subtitle{
    font-size: 15px;
  }
  &__images{
    height: 22px;
    margin-left: 15px;
    img{
      height: 100%;
      margin-right: 5px;
    }
  }
  .triangle-left{
    position: absolute;
    left: 0;
    top: 55%;
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-left: 70px solid #00aeef;
    border-bottom: 3px solid transparent;
  }
  .triangle-right{
    position: absolute;
    right: 0;
    top: 32%;
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-right: 80px solid #00aeef;
    border-bottom: 3px solid transparent;
  }
  .triangle-right_2{
    position: absolute;
    right: 0;
    top: 83%;
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-right: 75px solid #00aeef;
    border-bottom: 3px solid transparent;
  }
  .triangle-bottom{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 440px solid #00aeef;
  }
}

.steps-wrap{
  position: relative;
}

.steps-blue-bg{
  position: absolute;
  width: 110%;
  top: -7px;
  left: 0;
  right: 0;
  height: 40px;
  background-color: #0066CA;
  transform: rotate(-1deg);
  z-index: 1;
}

.steps-red-bg{
  position: absolute;
  width: 110%;
  top: -11px;
  left: 0;
  right: 0;
  height: 40px;
  background-color: #ff0000;
  transform: rotate(-2deg);
  z-index: 0;
}
// girl image

.girl-image-block{
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 0;
}

// code input

.enter-code-wrap {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 400px auto 60px;
  padding: 0 25px;
  max-width: 340px;
  width: 100%;
}

.enter-code-wrap .white-line {
  position: absolute;
  top: -90%;
  left: 53%;
  width: 90px;
}

.enter-code-wrap .red-line {
  position: absolute;
  bottom: -30%;
  right: -14px;
  width: 80px;
  transform: rotate(-7deg);
}

.key-form-wrap {
  position: relative;
}

.key-input {
  text-align: center;
  border: 3px solid #00B0F2;
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  color: #0066ca;
  padding: 0 20px 0 10px;
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Proxima Nova Condensed";
  font-weight: 900;
  font-style: italic;
  position: relative;
  z-index: 1
}

.key-form-wrap:hover .key-red-bg {
  left: -7px;
  top: -9px;
  bottom: 0px;
  right: -11px;
  z-index: 0;
}

.key-form-wrap:hover .key-blue-bg {
  left: 3px;
  top: 0;
  bottom: -13px;
  right: -4px;
  z-index: 1;
}

.key-form {
  background: url(../assets/images/code-bg-mob.png) center center no-repeat;
  background-size: contain;
  width: 172px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  form{
    position: relative;
    text-align: center;
    width: 90%;
    height: 60%;
    margin-top: 6px;
    transform: rotate(-2deg);
  }
}

.key-red-bg {
  position: absolute;
  left: 3px;
  top: 0;
  bottom: -13px;
  right: -4px;
  background: url(../assets/images/code-bg-red-mob.png) center center no-repeat;
  background-size: contain;
  transition: all .3s;
  z-index: 1;
}
//
.key-blue-bg {
  position: absolute;
  left: -7px;
  top: -9px;
  bottom: 0px;
  right: -11px;
  background: url(../assets/images/code-bg-blue-mob.png) center center no-repeat;
  background-size: contain;
  transition: all .3s;
  z-index: 0;
}

.key-form .key-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 27px;
  border-radius: 20px;
  border: none;
  background: #00B0F2;
  color: #fff;
  font-size: 30px;
  line-height: 0;
  padding-bottom: 8px;
  z-index: 1;
  cursor: pointer
}

.key-form .key-btn:after {
  content: "›";
  position: absolute;
  left: 10px;
  top: 3px;
  line-height: 14px;
}

.over-key {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-size: 13px;
  font-weight: 800;
  color: #0066ca;
  z-index: 2;
  cursor: pointer;
  background: url(../assets/images/code-bg-mob.png) center center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  &.hidden {
    animation: over-key-hide 0.7s ease-in-out;
    z-index: 0;
  }
}

@-webkit-keyframes over-key-hide {
  0% {
    -webkit-transform: translateY(0px);
    z-index: 2;
  }
  50% {
    -webkit-transform: translateY(-150%);
  }
  100% {
    -webkit-transform: translateY(0px);
    z-index: 0;
  }
}

.get-code {
  position: absolute;
  left: -2%;
  bottom: -100%;
  width: 138px;
  height: 26px;
  font-size: 12px;
  font-weight: 800;
  color: #00aeef;
  cursor: pointer;
  background: url("../assets/images/get-code-white-bg.png") center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  z-index: 2;
  span{
    margin-top: 3px;
  }
}

.scroll-bottom-btn{
  position: absolute;
  bottom: -158%;
  left: 50%;
  transform: translateX(-50%);
  width: 36px;
  height: 36px;
  border: 2px solid #00aeef;
  border-radius: 50%;
  background-color: #fff;
  z-index: 4;
  &:after{
    content: "";
    display: inline-block;
    position: absolute;
    top: 16px;
    left: 6px;
    width: 12px;
    height: 2px;
    background-color: #00aeef;
    transform: rotate(45deg);
  }
  &:before{
    content: "";
    display: inline-block;
    position: absolute;
    top: 16px;
    left: 14px;
    width: 12px;
    height: 2px;
    background-color: #00aeef;
    transform: rotate(-45deg);
  }
}

// sociale
.sociale {
display: flex;
align-items: center
}

.sociale a {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 3px solid #0eb4f2;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  &+a{
    margin-left: 2px;
  }
}

.sociale a img {
  max-width: 19px
}

@media all and (min-width: 768px){

  .girl-image-block{
    top: auto;
    width: 530px;
    bottom: 0;
    img{
      width: 100%;
      display: block;
    }
  }

  .main-header{
    padding: 30px 40px 0;
  }
  .menu-trigger{
    font-size: 17px;
  }
  .menu-burger{
    margin-left: 40px;
    span{
      width: 25px;
      height: 4px;
    }
  }
  .steps-wrap{
    order: 2;
  }
  .steps{
    flex-direction: row;
    justify-content: space-between;
    transform: rotate(-1.2deg) translateY(15px) skewX(-1.2deg) translateX(-2px);
    z-index: 2;
    padding-right: 65px;
    padding-left: 30px;
    width: 100.3%;
    &__item{
      transform: rotate(1.2deg);
      margin: 0 !important;
      width: auto;
      &:nth-child(2), &:nth-child(3){
        .steps__subtitle{
          margin-left: 25%;
        }
      }
    }
    &__number{
      font-size: 32px;
      line-height: 29px;
    }
    &__title{
      font-size: 18px;
    }
    &__subtitle{
      font-size: 18.2px;
      line-height: 18px;
      white-space: nowrap;
    }
    &__images{
      height: 28px;
      margin-left: 20px;
    }
    .triangle-left, .triangle-right, .triangle-right_2, .triangle-bottom{
      display: none;
    }
  }
  .steps-blue-bg{
    transform: rotate(-2deg);
    top: 8px;
  }

  .steps-red-bg{
    transform: rotate(-3deg);
    top: 6px;
  }
  .gifts{
    width: 45%;
    background: none;
    margin-left: auto;
    padding-right: 40px;
    padding-bottom: 50px;
  }
  .enter-code-wrap{
    margin: 15% 0 60px auto;
    max-width: 390px;
    .red-line{
      position: absolute;
      bottom: -52%;
      right: 30%;
      width: 100px;
      transform: none;
    }
    .white-line{
      position: absolute;
      top: -90%;
      left: 52%;
      width: 113px;
    }
  }
  .scroll-bottom-btn{
    display: none;
  }
  .get-code{
    background: none;
    text-transform: uppercase;
    left: 3%;
    bottom: -81%;
  }
  .over-key{
    font-size: 16px;
  }
  .key-form{
    width: 215px;
    height: 54px;
  }
  .sociale a{
    width: 45px;
    height: 45px;
    img{
      max-width: 24px;
    }
  }
  .sociale a.telegram img{
    margin-right: 3px;
  }
  .key-input{
    height: 90%;
    font-size: 16px;
  }
  .key-form .key-btn{
    height: 90%;
    &:after{
      top: 5px;
    }
  }
  .footer .triangle-top{
    display: none;
  }
}
@media all and (min-width: 1024px) {
  .enter-code-wrap{
    transform: scale(1.1);
    transform-origin: center right;
  }
  .gifts{
    transform: scale(1.1);
    transform-origin: center right;
  }
}
@media all and (min-width: 1280px){
  .girl-image-block{
    width: 50%;
    z-index: 3;
  }
  .main-header{
    padding: 39px 73px 0;
  }
  .key-input{
    height: 90%;
    font-size: 24px;
  }
  .key-form .key-btn{
    height: 90%;
    width: 50px;
    &:after{
      top: 11px;
      left: 18px;
      font-size: 50px;
    }
  }
  .key-form form{
    margin-top: 17px;
    transform: none;
  }
  .steps{
    padding-left: 40%;
    padding-right: 127px;
    transform: rotate(-1.2deg) translateY(28px);
  }
  .steps-blue-bg{
    transform: rotate(-2deg);
    top: 22px;
  }

  .steps-red-bg{
    transform: rotate(-2.5deg);
    top: 20px;
  }
  .text{
    font-size: 8px;
  }
  .footer{
    display: flex;
    justify-content: flex-end;
    padding: 40px 25px 12px 24%;
  }
  .gifts{
    display: flex;
    align-items: flex-end;
    width: auto;
    padding-right: 90px;
    padding-bottom: 17px;
    transform: none;
    &__item{
      //padding: 0 20px;
      font-size: 15.68px;
      &:nth-child(2){
        padding-left: 28px;
      }
      &:nth-child(3){
        padding-left: 14px;
      }
      &:last-child{
        padding: 0;
        transform: translateX(-50px);
      }
    }
    &__codes{
      font-size: 10.66px;
    }
  }
  .img-box-1 {
    width: 78px;
    height: 63px;
  }
  .img-box-2 {
    width: 106px;
    height: 71px;
  }
  .img-box-3 {
    width: 118px;
    height: 113px;
    margin-bottom: 5px;
  }
  .img-box-4 {
    width: 211px;
    height: 123px;
    position: relative;
    left: 72px;
    top: 16px;
  }
  .tv-name {
    width: 74px;
  }
  .key-form{
    width: 427px;
    height: 90px;
    background: url(../assets/images/code-btn/white-bg.png) center center no-repeat;
    background-size: unset;
  }
  .key-red-bg{
    position: absolute;
    left: 6px;
    top: 13px;
    bottom: 0;
    right: 0;
    background: url(../assets/images/code-btn/red-bg.png) center center no-repeat;
    background-size: auto;
    width: 100%;
    height: 100%;
    transform: rotate(-0.2deg);
  }
  .key-blue-bg{
    position: absolute;
    left: -17px;
    top: -7px;
    bottom: 0;
    right: 0;
    background: url(../assets/images/code-btn/blue-bg.png) center center no-repeat;
    background-size: auto;
    width: 100%;
    height: 100%;
  }
  .key-form-wrap:hover .key-blue-bg{
    left: 6px;
    top: 13px;
    transform: rotate(-0.2deg);
  }
  .key-form-wrap:hover .key-red-bg{
    left: -17px;
    top: -7px;
  }
  .over-key{
    background: url(../assets/images/code-btn/white-bg.png) center center no-repeat;
    background-size: auto;
    font-size: 28px;
    justify-content: flex-start;
    padding-left: 65px;
    padding-top: 10px;
  }
  .enter-code-wrap{
    max-width: 605px;
    align-items: center;
    margin: 5% 8.8% 17px auto;
    transform: none;
    .white-line{
      width: 157px;
      top: -42%;
      left: 40%;
    }
    .red-line{
      width: 132px;
      bottom: -36%;
      right: 22%;
    }
  }
  .key-form-wrap{
    transform-origin: center right;
    transform: scale(0.7);
  }
  .sociale a{
    width: 55px;
    height: 55px;
    border: 5px solid #0eb4f2;
    img{
      max-width: 30px;
    }
    &+a{
      margin-left: 5px;
    }
  }
  .get-code{
    font-size: 17.5px;
    width: auto;
    padding: 0;
    left: 22%;
    bottom: -29%;
  }
}
@media all and (min-width: 1400px){
  .gifts{
    padding-right: 8%;
    padding-bottom: 38px;
    transform: scale(0.8);
    transform-origin: bottom right;
    &__item{
      font-size: 25px;
      line-height: 23px;
      &:nth-child(2){
        padding-left: 57px;
      }
      &:nth-child(3){
        padding-left: 12px;
      }
    }
    &__codes{
      font-size: 17px;
    }
  }
  .tv-name {
    width: 118px;
  }
  .img-box-1{
    width: 119px;
    height: 97px;
  }
  .img-box-2{
    width: 166px;
    height: 129px;
  }
  .img-box-3{
    width: 188px;
    height: 179px;
  }
  .img-box-4{
    width: 320px;
    height: 187px;
    left: 105px;
    top: 25px;
  }
  .text {
    font-size: 10px;
  }
}
@media all and (min-width: 1600px){
  .girl-image-block{
    width: 50%;
    z-index: 3;
  }
  .gifts {
    transform: scale(0.9);
  }
  .menu-trigger{
    font-size: 22px;
  }
  .menu-burger span{
    width: 30px;
    height: 5px;
    margin-bottom: 3px;
  }
  .sociale a{
    width: 70px;
    height: 70px;
    border: 5px solid #0eb4f2;
    img{
      max-width: 38px;
    }
    &+a{
      margin-left: 5px;
    }
  }
  .text{
    font-size: 11.5px;
  }
  .footer{
    padding: 56px 25px 7px 24%;
  }
}
@media all and (min-width: 1820px){

  .key-form-wrap{
    transform: none;
  }
  .enter-code-wrap {
    max-width: 650px;
    margin: 5% 10.6% 76px auto;
    .red-line{
      width: 183px;
      bottom: -68%;
      right: 26%;
    }
    .white-line{
      width: 223px;
      top: -85%;
      left: 23%;
    }
  }
  .get-code{
    font-size: 25px;
    left: -1%;
    bottom: -49%;
  }
  .steps{
    padding-left: 42%;
    padding-right: 180px;
    &__number{
      font-size: 45px;
      line-height: 43px;
    }
    &__title{
      font-size: 25px;
    }
    &__subtitle{
      font-size: 25.4px;
    }
    &__images{
      height: 40px;
    }
  }
  .gifts{
    transform: none;
  }
  .text{
    font-size: 12px;
  }

}
@media all and (min-width: 768px) and (max-height: 850px) {
  .girl-image-block{
    top: auto;
    width: 500px;
    bottom: 0;
    img{
      width: 100%;
    }
  }
}
@media (max-width: 850px) and (max-height: 1090px) {
  .wrapper {
    min-height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
    min-height: calc(var(--vh, 1vh) * 100);
  }
}
@media all and (min-width: 1280px) and (max-height: 850px){
  .girl-image-block{
    width: 534px;
  }
}
@media all and (min-width: 1400px) and (max-height: 850px){
  .girl-image-block{
    width: 640px;
  }
}
@media all and (min-width: 1600px) and (max-height: 850px){
  .girl-image-block{
    width: 650px;
  }
}
@media all and (min-width: 1820px) and (max-height: 930px){
  .girl-image-block{
    width: 750px;
  }
}

</style>