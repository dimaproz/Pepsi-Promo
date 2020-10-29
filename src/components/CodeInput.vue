<template>
    <div class="enter-code-wrap">
      <div class="key-form-wrap">
        <div class="key-form">
          <form>
            <input type="text" maxlength="12" class="key-input" />
            <button class="key-btn"></button>
          </form>

<!--          <a href=""></a>-->
        </div>
        <div class="key-red-bg"></div>
        <div class="key-blue-bg"></div>
        <div class="over-key" :class="{hidden : $store.state.codeInputActive}" @click="$store.dispatch('toggleCodeInputState')">
          <span>РЕЄСТРУЙ КОД</span>
        </div>
      </div>
      <socials/>
      <img class="white-line" src="../assets/images/main-page/white-line.png" alt="">
      <img class="red-line" src="../assets/images/main-page/red-line.png" alt="">
      <div class="get-code">
        <span>
          Як знайти код?
        </span>
      </div>
      <div class="scroll-bottom-btn" @click="scrollToBottom()"></div>
    </div>
</template>

<script>

import Socials from "@/components/Socials"

export default {
  name: "CodeInput",
  components: {
    Socials
  },
  methods:{
    scrollToBottom(){
      window.scrollTo({
        top: 1000,
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped lang="scss">

.enter-code-wrap {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto 60px;
  padding: 0 25px;
  max-width: 340px;
  width: 100%;
  margin-top: 400px;
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
  border: 3px solid #c51437;
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
  width: 30px;
  border-radius: 20px;
  border: none;
  background: #c51437;
  color: #fff;
  font-size: 30px;
  line-height: 0;
  padding-bottom: 8px;
  z-index: 1;
  cursor: pointer
}

.key-form .key-btn:after {
  content: "›"
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
  background-size: contain;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  span{
    margin-top: 5px;
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
  z-index: 1;
  cursor: pointer;
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
</style>