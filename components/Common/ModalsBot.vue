<template>
  <div class="sociale">
    <a :href="viber" target="_blank" class="viber">
      <img src="~assets/images/icon-viber.svg" alt="viber" />
    </a>
    <a :href="telegram" target="_blank" class="telegram">
      <img src="~assets/images/icon-telegram.svg" alt="tg" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viber: '',
      telegram: '',
    }
  },
  mounted() {
    const regexp = /[-|.\\\\/\s]/g
    const params = Object.keys(this.$route.query)
      .sort()
      .reduce(
        (acc, key) => ({
          ...acc,
          [key.replace(regexp, '')]: this.$route.query[key].replace(regexp, ''),
        }),
        {}
      )
    const viber = 'viber://pa?chatURI=pepsi&context='
    const telegram = 'https://telegram.me/pepsi_ua_bot?start='
    if (Object.keys(params).length) {
      let viberCust = viber
      let telegramCust = telegram
      Object.keys(params).reduce((str, key) => {
        viberCust += `${key}-${params[key]}|`
        telegramCust += `${key}-${params[key]}=`
        return str
      }, '')
      this.viber = viberCust.slice(0, -1)
      this.telegram = telegramCust.slice(0, -1)
    } else {
      this.viber = `${viber}organicWeb`
      this.telegram = `${telegram}organicWeb`
    }
  },
}
</script>

<style>
.bots-wrap {
  margin-top: 20px;
}
.bots-wrap p {
  margin-bottom: 20px;
  text-align: center;
}
.bots-wrap .sociale {
  margin-bottom: 30px;
  justify-content: center;
}
.bots-wrap .sociale a {
  border-bottom: 5px solid #0eb4f2;
}
.bots-wrap .sociale a + a {
  margin-left: 20px;
}
</style>
