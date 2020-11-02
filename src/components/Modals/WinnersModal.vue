<template>
  <transition name="fade-in-down">
    <div class="modal-wrap" v-if="$store.state.winnersModalActive" >
      <div class="modal-centered">
        <div class="modal-block">
          <div class="modal-content">
            <button type="button" class="close"  @click="$store.dispatch('winnersModalActive')"></button>
            <div class="modal-header">
              <h2>
                ПРИЗИ ТА ПЕРЕМОЖЦІ
              </h2>
              <p class="modal-subtitle">Результати
                щотижневих розіграшів
                смартфону</p>
            </div>
            <div class="modal-body">
              <div class="winners-list modal-list">
                <vuescroll :ops="ops">
                  <p>23.11.2020 – имя пользователя  </p>
                  <p>30.11.2020 – имя пользователя </p>
                  <p>07.12.2020 – имя пользователя </p>
                  <p>23.11.2020 – имя пользователя  </p>
                  <p>30.11.2020 – имя пользователя </p>
                  <p>07.12.2020 – имя пользователя </p>
                  <p>23.11.2020 – имя пользователя  </p>
                  <p>30.11.2020 – имя пользователя </p>
                  <p>07.12.2020 – имя пользователя </p>
                  <p>23.11.2020 – имя пользователя  </p>
                  <p>30.11.2020 – имя пользователя </p>
                  <p>07.12.2020 – имя пользователя </p>
                  <p>23.11.2020 – имя пользователя  </p>
                  <p>30.11.2020 – имя пользователя </p>
                  <p>07.12.2020 – имя пользователя </p>
                  <p>23.11.2020 – имя пользователя  </p>
                  <p>30.11.2020 – имя пользователя </p>
                  <p>07.12.2020 – имя пользователя </p>
                  <p>23.11.2020 – имя пользователя  </p>
                  <p>30.11.2020 – имя пользователя </p>
                  <p>07.12.2020 – имя пользователя </p>
                  <p>23.11.2020 – имя пользователя  </p>
                  <p>30.11.2020 – имя пользователя </p>
                  <p>07.12.2020 – имя пользователя </p>
                  <p>23.11.2020 – имя пользователя  </p>
                  <p>30.11.2020 – имя пользователя </p>
                  <p>07.12.2020 – имя пользователя </p>
                </vuescroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import vuescroll from 'vuescroll'
import { scrollOptions } from '@/helpers/constants'

export default {
  name: "WinnersModal",
  components: {
    vuescroll,
  },
  data(){
    return{
      ops: {...scrollOptions}
    }
  }
}
</script>

<style >

</style>