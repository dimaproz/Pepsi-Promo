<template>
  <nav id="nav" class="main-menu-wrap" :class="{ active: active }" >
    <div class="main-menu-head">
      <ul>
        <li>Вхід</li>
      </ul>
      <div class="burger" @click="sidebarClose()">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="main-menu">
      <ul>
        <li>Зареєструвати код</li>
        <li>Переможці</li>
        <li>Офіційні правила</li>
        <li>Запитання та відповіді</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  props:[
    "active"
  ],
  methods: {
    sidebarClose(){
      this.$emit("sidebarClose")
    }
  }
}
</script>

<style lang="scss">
.main-menu-wrap{
  z-index: 900;
  padding: 40px 66px 100px 15px;
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  width: 45%;
  height: 100vh;
  transform: translateX(130%);
  transition: transform .3s;
  &.active{
    transform: translateX(0);
  }
}
.main-menu-wrap:after {
  content: "";
  position: absolute;
  left: -100px;
  top: -100px;
  right: -50px;
  bottom: -100px;
  background: #00225f;
  opacity: .9;
  z-index: -1;
  -webkit-transform: skewX(-6deg);
  -ms-transform: skewX(-6deg);
  transform: skewX(-6deg);
}
</style>