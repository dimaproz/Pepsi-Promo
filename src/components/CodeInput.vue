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
      <div class="scroll-bottom-btn"></div>
    </div>
</template>

<script>

import Socials from "@/components/Socials"

export default {
  name: "CodeInput",
  components: {
    Socials
  },
  // methods:{
  //   scrollToBottom(){
  //     window.scrollTo({
  //       top: 1000,
  //       behavior: "smooth"
  //     });
  //   }
  // }
}
</script>

<style lang="scss">


</style>