<template>
  <transition name="fade-in-down">
    <captcha v-if="infoModal === 'captcha'" />
    <success-divan-modal v-if="infoModal === 'success_divan'" />
    <success-divan-glass-modal v-if="infoModal === 'success_divan_glass'" />
    <success-glass-modal v-if="infoModal === 'success_glass'" />
    <success-phone-modal v-if="infoModal === 'success_phone'" />
    <success-car-modal v-if="infoModal === 'success_car'" />
    <success-phone-chance-modal v-if="infoModal === 'success_phone_chance'" />
    <success-day-limit-modal v-if="infoModal === 'success_day_limit'" />
    <rules-modal v-if="infoModal === 'rules'" />
    <password-recovery-error v-if="infoModal === 'recoveryError'" />
    <password-recovery-success v-if="infoModal === 'recoverySuccess'" />
    <find-code-modal v-if="infoModal === 'findCode'" />
    <error-modal
      v-if="infoModal === 'emailError'"
      :message="`Email <br /> вже <br />зареєстровано.`"
    />
    <error-modal
      v-if="infoModal === 'phoneError'"
      :message="`Номер <br /> вже <br />зареєстровано.`"
    />
    <error-modal
      v-if="infoModal === 'loginError'"
      :message="`Номер <br /> або пароль <br />невірний.`"
    />
    <error-code-modal v-if="infoModal === 'wrong_code'" :autoclose="true">
      <p class="uppercase mb-30">
        Введено некоректний код. <br />
        Спробуйте ще раз.
      </p>
      <p class="mb-30">
        Звертаємо увагу, що після 10 спроб <br />
        введення некоректного коду ваш номер <br />
        автоматично буде заблоковано для участі <br />
        в Акції на 24 години!
      </p>
    </error-code-modal>
    <error-code-modal v-if="infoModal === 'incorrect_code'" :autoclose="true">
      <p class="uppercase">
        Такого коду не існує.<br />
        Будь ласка, введіть коректний <br />
        акційний код.
      </p>
    </error-code-modal>
    <error-code-modal v-if="infoModal === 'duplicate_my'">
      <p class="uppercase">
        Такий код вже зареєстровано в акції.<br />
        Реєструй нові коди.
      </p>
    </error-code-modal>
    <error-code-modal v-if="infoModal === 'duplicate'">
      <p class="uppercase">
        Цей код тобою вже було зареєстровано.<br />
        Реєструй нові коди.
      </p>
    </error-code-modal>
    <error-code-modal v-if="infoModal === 'error_day_limit'">
      <p class="uppercase">
        Ти зробив 5 спроб зареєструвати неправильний акційний код. Відповідно до
        Офіційних правил, доступ до участі в акції заблоковано на одну добу.
      </p>
    </error-code-modal>
    <error-code-modal v-if="infoModal === 'ban'">
      <p class="uppercase">
        Ти зробив 5 спроб зареєструвати неправильний акційний код. Відповідно до
        Офіційних правил, твій доступ до участі в акції обмежено.
      </p>
    </error-code-modal>
    <error-code-modal v-if="infoModal === 'rules_ban'">
      <p class="uppercase">
        Відповідно до Офіційних правил, твій доступ до участі в акції обмежено.
      </p>
    </error-code-modal>
    <error-code-modal v-if="infoModal === 'limit_reached'">
      <p class="uppercase mb-40">
        На сьогодні доступна лише одна спроба для реєстрації коду.
      </p>

      <p class="mb-30">
        Звертаємо увагу, що після 10 спроб введення некоректного коду ваш номер
        автоматично буде заблоковано для участі<br />
        в Акції на 24 години!
      </p>
    </error-code-modal>
    <promo-end v-if="infoModal === 'promo_end'" />
    <promo-start v-if="infoModal === 'promo_not_started'" />
  </transition>
</template>

<script>
import Captcha from '@/components/InfoModals/Captcha'
import SuccessDivanModal from '@/components/InfoModals/SuccessDivanModal'
import SuccessDivanGlassModal from '@/components/InfoModals/SuccessDivanGlassModal'
import SuccessGlassModal from '@/components/InfoModals/SuccessGlassModal'
import SuccessPhoneModal from '@/components/InfoModals/SuccessPhoneModal'
import SuccessCarModal from '@/components/InfoModals/SuccessCarModal'
import SuccessDayLimitModal from '@/components/InfoModals/SuccessDayLimitModal'
import SuccessPhoneChanceModal from '@/components/InfoModals/SuccessPhoneChanceModal'
import RulesModal from '@/components/InfoModals/RulesModal'
import PasswordRecoveryError from '@/components/InfoModals/PasswordRecoveryError'
import PasswordRecoverySuccess from '@/components/InfoModals/PasswordRecoverySuccess'
import ErrorModal from '@/components/InfoModals/ErrorModal'
import ErrorCodeModal from '@/components/InfoModals/ErrorCodeModal'
import PromoEnd from '@/components/InfoModals/PromoEnd'
import PromoStart from '@/components/InfoModals/PromoStart'
import FindCodeModal from '@/components/InfoModals/FindCodeModal'

export default {
  components: {
    Captcha,
    SuccessDivanModal,
    SuccessDivanGlassModal,
    SuccessGlassModal,
    SuccessPhoneModal,
    SuccessCarModal,
    SuccessPhoneChanceModal,
    SuccessDayLimitModal,
    RulesModal,
    PasswordRecoveryError,
    PasswordRecoverySuccess,
    ErrorModal,
    ErrorCodeModal,
    FindCodeModal,
    PromoEnd,
    PromoStart,
  },
  props: {
    infoModal: {
      type: [String, Object],
      default() {
        return null
      },
    },
  },
}
</script>
