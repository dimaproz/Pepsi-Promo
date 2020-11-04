<template>
  <div class="modal-wrap account-wrap" id="user-cabinet">
    <div class="modal-centered">
      <div class="modal-block">
        <div class="modal-content">
          <button type="button" class="close" @click="$emit('close')"></button>
          <div class="modal-header mb60">
            <h2 class="align-left">
              особистий  кабінет
            </h2>
          </div>
          <div class="modal-body">
            <div class="account-info mb20">
              <p>Миколка Петренко</p>
              <p>Телефон 38 050 333 33 33</p>
            </div>
            <h2 class="color-light-blue mb40">МОЇ АКЦІЙНІ КОДИ ТА ПРИЗИ</h2>
            <div class="codes-list modal-list">
              <vuescroll :ops="ops">
                <div class="codes-list__item">
                  <div class="codes-list__item_main-info">
                    <span>Акционный код</span>
                    <span>25. 12. 20</span>
                  </div>
                  <div class="codes-list__item_status">
                    <span>Колекційна склянка.</span>
                    <button type="submit" class="modal-btn light-btn small-btn">
                    <span>
                      ЗАМОВИТИ
                    </span>
                    </button>
                  </div>
                </div>
                <div class="codes-list__item">
                  <div class="codes-list__item_main-info">
                    <span>Акционный код</span>
                    <span>25. 12. 20</span>
                  </div>
                  <div class="codes-list__item_status">
                    <span>Колекційна склянка.</span>
                    <button type="submit" class="modal-btn light-btn small-btn">
                    <span>
                      ЗАМОВИТИ
                    </span>
                    </button>
                  </div>
                </div>
                <div class="codes-list__item">
                  <div class="codes-list__item_main-info">
                    <span>Акционный код</span>
                    <span>25. 12. 20</span>
                  </div>
                  <div class="codes-list__item_status">
                    <span>Колекційна склянка.</span>
                    <button type="submit" class="modal-btn light-btn small-btn">
                    <span>
                      ЗАМОВИТИ
                    </span>
                    </button>
                  </div>
                </div>
                <div class="codes-list__item">
                  <div class="codes-list__item_main-info">
                    <span>Акционный код</span>
                    <span>25. 12. 20</span>
                  </div>
                  <div class="codes-list__item_status">
                    <span>Колекційна склянка.</span>
                    <button type="submit" class="modal-btn light-btn small-btn">
                    <span>
                      ЗАМОВИТИ
                    </span>
                    </button>
                  </div>
                </div>
                <div class="codes-list__item">
                  <div class="codes-list__item_main-info">
                    <span>Акционный код</span>
                    <span>25. 12. 20</span>
                  </div>
                  <div class="codes-list__item_status">
                    <span>Колекційна склянка.</span>
                    <span class="color-light-blue">ЗАМОВЛЕНО СКЛЯНКУ «Пограємо в сніжки?» </span>
                  </div>
                </div>
                <div class="codes-list__item">
                  <div class="codes-list__item_main-info">
                    <span>Акционный код</span>
                    <span>25. 12. 20</span>
                  </div>
                  <div class="codes-list__item_status">
                    <span>Колекційна склянка.</span>
                    <span class="color-light-blue">ЗАМОВЛЕНО СКЛЯНКУ «Пограємо в сніжки?» </span>
                  </div>
                </div>
                <div class="codes-list__item">
                  <div class="codes-list__item_main-info">
                    <span>Акционный код</span>
                    <span>25. 12. 20</span>
                  </div>
                  <div class="codes-list__item_status">
                    <span>Колекційна склянка.</span>
                    <span class="color-light-blue">ЗАМОВЛЕНО СКЛЯНКУ «Пограємо в сніжки?» </span>
                  </div>
                </div>
                <div class="codes-list__item">
                  <div class="codes-list__item_main-info">
                    <span>Акционный код</span>
                    <span>25. 12. 20</span>
                  </div>
                  <div class="codes-list__item_status">
                    <span>Колекційна склянка.</span>
                    <span class="color-light-blue">ЗАМОВЛЕНО СКЛЯНКУ «Пограємо в сніжки?» </span>
                  </div>
                </div>

                <div class="codes-list__item">
                  <div class="codes-list__item_main-info">
                    <span>Акционный код</span>
                    <span>25. 12. 20</span>
                  </div>
                  <div class="codes-list__item_status">
                    <span>Підписка Divan.TV на 5 днів.</span>
                    <span>Промокод: _________</span>
                  </div>
                </div>
              </vuescroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vuescroll from 'vuescroll'
import { scrollOptions } from '@/helpers/constants'


export default {
  name: "UserCabinetModal",
  components: {
    vuescroll,
  },
  data() {
    return {
      ops: {...scrollOptions}
    }
  }
}
</script>

<style lang="scss">

</style>