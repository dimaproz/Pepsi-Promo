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
    </footer>
  </div>
</template>

<script>
import MainBody from '../components/MainBody';
import Sidebar from "@/components/Sidebar";

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
  min-height: 100%;
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
    transform: skewX(-15deg);
    &:first-child{
      transform: skewX(-15deg) translateX(4px);
    }
    &:nth-child(2){
      transform: skewX(-15deg) translateX(2px);
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
}
.text {
  font-size: 10px;
  color: #fff;
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
  z-index: 0;
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
}




</style>