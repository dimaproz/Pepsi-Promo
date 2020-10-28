<template>
  <div class="wrapper">
    <header class="main-header main-page-header">
      <div class="menu-trigger" :class="{ active: sidebarActive }">
        <span>
          Вхід
        </span>
        <div class="menu-burger" @click="sidebarToggle()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <sidebar :active="sidebarActive" @sidebarClose="sidebarToggle"/>
    </header>
    <main-body/>
    <steps />
  </div>
</template>

<script>
import MainBody from '../components/MainBody'
import Steps from '../components/Steps'
import Sidebar from "@/components/Sidebar";

export default {
  name: "index",
  data() {
    return{
      sidebarActive: false
    }
  },
  components:{
    Sidebar,
    MainBody,
    Steps
  },
  methods: {
    sidebarToggle(){
      this.sidebarActive = !this.sidebarActive
    },
  }
}
</script>

<style lang="scss">
.menu-trigger, .main-menu-head{
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 22px;
  text-transform: uppercase;
  //transition: all .5s;
}
.menu-burger{
  margin-left: 40px;
  span{
    display: block;
    width: 30px;
    margin-bottom: 2px;
    height: 6px;
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

</style>