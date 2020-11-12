<template>
  <modal-layout>
    <div class="modal-header">
      <h2>ПРИЗИ ТА ПЕРЕМОЖЦІ</h2>
      <p class="modal-subtitle">Результати щотижневих розіграшів смартфону</p>
    </div>
    <div class="modal-body">
      <div class="winners-list modal-list">
        <vuescroll :ops="ops">
          <p
            v-for="item in $store.state.winners"
            :key="item.activatetime + item.created_at"
          >
            {{ item.activatetime | date }}
            -
            {{ item.name }}
          </p>
        </vuescroll>
      </div>
    </div>
  </modal-layout>
</template>

<script>
import vuescroll from 'vuescroll'
import { dateParser } from '@/helpers/helpers'
import ModalLayout from '@/components/common/ModalLayout'
import { scrollOptions } from '@/helpers/constants'

export default {
  components: { vuescroll, ModalLayout },
  filters: {
    date(date) {
      return dateParser(date)
    },
  },
  data() {
    return {
      ops: { ...scrollOptions },
    }
  },
  mounted() {
    this.$store.dispatch('fetchInfo', 'winners')
  },
}
</script>

<style scoped lang="scss">
.scroll-overlay {
  margin-bottom: 4px;
  @media all and (max-width: 1280px) {
    margin-bottom: 35px;
  }
  @media all and (max-width: 768px) {
    margin-bottom: 6px;
  }
}
.winners {
  padding: 7px;
}
.tab-content {
  position: relative;
  padding-left: 0;
}
.tab-pane {
  padding-left: 30px;
  @media all and (max-width: 1280px) {
    padding-left: 23px;
  }
}

.modal-results {
  padding-bottom: 20px;
}

@media all and (max-width: 768px) {
  .fade-win-enter-active {
    transition-duration: 0.5s;
    transition-timing-function: ease;
  }
  .fade-win-leave-active {
    transition-duration: 0.5s;
    transition-timing-function: ease;
  }
  .fade-win-enter-to,
  .fade-win-leave {
    overflow: hidden;
    max-height: 400px;
  }
  .fade-win-enter,
  .fade-win-leave-to {
    overflow: hidden;
    max-height: 0;
  }
}

@media all and (min-width: 768px) {
  .fade-win-enter-active {
    transition: opacity ease-in-out 0.5s;
    max-height: none;
  }
  .fade-win-leave-active {
    position: absolute;
    max-height: none;
    transition-duration: 0;
    transition-timing-function: ease;
  }
  .fade-win-enter,
  .fade-win-leave-to {
    opacity: 0;
    max-height: none;
  }
  .modal-results {
    padding-bottom: 30px;
  }
}
</style>
