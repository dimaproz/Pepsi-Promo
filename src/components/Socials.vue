<template>
  <div class="sociale">
    <a href="#" target="_blank" class="viber">
      <img src="../assets/images/icon-viber.svg" alt="" />
    </a>
    <a href="#" target="_blank" class="telegram">
      <img src="../assets/images/icon-telegram.svg" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Socials"
}
</script>

<style scoped lang="scss">
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


//.sociale.sociale-mobile {
//  display: none
//}
</style>