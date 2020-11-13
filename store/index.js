import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { BASE_API_PATH, codeModals } from '~/helpers/constants'
import {
  authToken,
  refreshTokenAction,
  refreshTokenRequest,
} from '~/helpers/helpers'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      fieldActive: false,
      captcha: false,
      code: null,
      rules: '',
      winners: [],
      modal: null,
      infoModal: null,
      user: null,
      userCodes: [],
      sidebar: false,
      divanPromo: '',
      glassEmpty: false,
      glassCode: null,
      glasses: [],
    },
    mutations: {
      FIELD_TOGGLED(state, payload) {
        state.fieldActive = payload
      },
      MODAL_SET(state, payload) {
        state.modal = payload
        state.sidebar = false
      },
      SET_GLASS_STATE(state, payload) {
        state.glassEmpty = payload
      },
      MODAL_INFO_SET(state, payload) {
        state.infoModal = payload
        state.sidebar = false
      },
      CODE_SAVED(state, payload) {
        state.code = payload
      },
      FETCH_RULES_SUCCESS(state, payload) {
        state.rules = payload.content
      },
      FETCH_WINNERS_SUCCESS(state, payload) {
        state.winners = payload
      },
      USER_CODES_SUCCESS(state, payload) {
        state.userCodes = payload
      },
      LOG_IN(state, payload) {
        state.user = payload
      },
      LOG_OUT(state) {
        state.user = null
      },
      CAPTCHA_SET(state) {
        state.captcha = true
        localStorage.setItem('captcha', true)
      },
      CAPTCHA_UNSET(state) {
        state.captcha = false
        localStorage.removeItem('captcha')
      },
      SIDEBAR_TOGGLE(state) {
        state.sidebar = !state.sidebar
      },
      SAVE_PROMO(state, payload) {
        state.divanPromo = payload
      },
      GLASS_CODE_SAVED(state, payload) {
        state.glassCode = payload
      },
      GLASSES_SET(state, payload) {
        state.glasses = payload
      },
    },
    actions: {
      toggleSidebarState({ commit }) {
        commit('SIDEBAR_TOGGLE')
      },
      saveGlassCode({ commit }, payload) {
        commit('GLASS_CODE_SAVED', payload)
      },
      toggleCodeField({ commit }, payload) {
        commit('FIELD_TOGGLED', payload)
      },
      setModal({ commit, state }, payload) {
        commit('MODAL_SET', payload)
        if (payload === null && state.modal) {
          commit('SET_GLASS_STATE', false)
          commit('SAVE_PROMO', '')
          history.pushState(null, null, '/')
        }
      },
      setInfoModal({ commit, state }, payload) {
        commit('MODAL_INFO_SET', payload)
        if (payload === null) {
          commit('SET_GLASS_STATE', false)
          commit('SAVE_PROMO', '')
          history.pushState(null, null, '/')
        }
      },
      setCaptcha({ commit }) {
        commit('CAPTCHA_SET')
        setTimeout(() => {
          commit('CAPTCHA_UNSET')
        }, 7000)
      },
      saveCode({ commit, state, dispatch }, payload) {
        payload && commit('CODE_SAVED', payload)
        dispatch('toggleCodeField', false)
        if (state.user) {
          const regex = /^[A-Za-z0-9]+$/
          if (
            !state.code ||
            state.code.length < 11 ||
            !regex.test(state.code)
          ) {
            dispatch('setInfoModal', 'incorrect_code')
            commit('FIELD_TOGGLED', false)
          } else if (state.captcha) {
            return dispatch('setInfoModal', 'captcha')
          } else {
            axios
              .get(
                `${BASE_API_PATH}/codes/sendcode?code=${state.code}`,
                authToken()
              )
              .then((res) => {
                const codeStatus = res.data.txtype
                if (
                  res.data.codes &&
                  res.data.cnt &&
                  parseInt(res.data.codes.bad.today) === 9 &&
                  codeStatus !== 1 &&
                  codeStatus !== 2 &&
                  codeStatus !== 3 &&
                  codeStatus !== 4 &&
                  codeStatus !== 21 &&
                  codeStatus !== 22 &&
                  codeStatus !== 23 &&
                  codeStatus !== 24 &&
                  codeStatus !== 124 &&
                  codeStatus !== 103
                ) {
                  dispatch('setInfoModal', codeModals[15])
                  dispatch('setCaptcha')
                  commit('CODE_SAVED', null)
                  commit('FIELD_TOGGLED', false)
                } else if (
                  res.data.codes &&
                  res.data.cnt === 0 &&
                  parseInt(res.data.codes.ok.total) % 5 === 0 &&
                  (codeStatus === 3 || codeStatus === 23 || codeStatus === 104)
                ) {
                  commit('SAVE_PROMO', res.data.divan)
                  commit('SET_GLASS_STATE', true)
                  dispatch('setInfoModal', codeModals[codeStatus])
                  dispatch('setCaptcha')
                  commit('CODE_SAVED', null)
                  commit('FIELD_TOGGLED', false)
                } else {
                  commit('SAVE_PROMO', res.data.divan)
                  dispatch('setInfoModal', codeModals[codeStatus])
                  dispatch('setCaptcha')
                  commit('CODE_SAVED', null)
                  commit('FIELD_TOGGLED', false)
                }
              })
              .catch((err) => {
                if (!err.response) return
                const status = err.response.status
                if (status === 403) {
                  refreshTokenRequest()
                    .then((res) => {
                      localStorage.setItem('access_token', res.data)
                      dispatch('saveCode', state.code)
                    })
                    .catch((err) => {
                      const status = err.response.status
                      if (status === 401) {
                        dispatch('logOut')
                      }
                    })
                }
                // dispatch('setInfoModal', codeModals[status])
              })
          }
        } else {
          commit('MODAL_SET', 'login')
        }
      },
      register({ commit, dispatch }, payload) {
        axios
          .post(`${BASE_API_PATH}/user/registration`, payload)
          .then((res) => {
            dispatch('logIn', res.data)
          })
          .catch((err) => {
            if (!err.response) return
            const status = err.response.status
            if (status === 409) {
              dispatch('setInfoModal', 'emailError')
            } else if (status === 401) {
              dispatch('setInfoModal', 'phoneError')
            }
          })
      },
      logInRequest({ dispatch }, payload) {
        axios
          .post(`${BASE_API_PATH}/user/login`, payload)
          .then((res) => {
            dispatch('logIn', res.data)
          })
          .catch((err) => {
            if (!err.response) return
            const status = err.response.status
            if (status === 409) {
              dispatch('setInfoModal', 'loginError')
            }
          })
      },
      getUser({ dispatch }) {
        axios
          .get(`${BASE_API_PATH}/user/userinfo`, authToken())
          .then((res) => {
            dispatch('logIn', res.data)
          })
          .catch((err) => {
            const status = err.response.status
            if (status === 403) {
              refreshTokenAction(dispatch, 'getUser')
            }
          })
      },
      glassesForSelectRequest({ commit, dispatch, state }) {
        axios
          .get(
            `${BASE_API_PATH}/user/glasses_for_select?usercode=${state.glassCode}`,
            authToken()
          )
          .then((res) => {
            commit('GLASSES_SET', res.data)
          })
          .catch((err) => {
            if (!err.response) return
            const status = err.response.status
            if (status === 403) {
              refreshTokenAction(dispatch, 'glassesForSelectRequest')
            }
            dispatch('setModal', null)
            dispatch('setInfoModal', 'glass_error')
          })
      },
      sendGlassForm({ commit, state, dispatch }, payload) {
        axios
          .post(
            `${BASE_API_PATH}/user/select_glass`,
            { ...payload, usercode: state.glassCode },
            authToken()
          )
          .then((res) => {
            dispatch('saveGlassCode', null)
            dispatch('setModal', null)
            dispatch('setInfoModal', 'glass_success')
          })
          .catch((err) => {
            if (!err.response) return
            const status = err.response.status
            if (status === 403) {
              refreshTokenRequest()
                .then((res) => {
                  localStorage.setItem('access_token', res.data)
                  dispatch('sendGlassForm', payload)
                })
                .catch((err) => {
                  if (!err.response) return
                  const status = err.response.status
                  if (status === 401) {
                    dispatch('logOut')
                  }
                })
            }
            dispatch('setInfoModal', 'glass_error')
          })
      },
      getUserCodes({ commit, dispatch }) {
        axios
          .get(`${BASE_API_PATH}/codes/usercodes`, authToken())
          .then((res) => {
            commit('USER_CODES_SUCCESS', res.data)
          })
          .catch((err) => {
            const status = err.response.status
            if (status === 403) {
              refreshTokenAction(dispatch, 'getUserCodes')
            }
          })
      },
      recover({ commit, dispatch }, payload) {
        axios
          .post(`${BASE_API_PATH}/user/forgot`, payload)
          .then((res) => {
            dispatch('setInfoModal', 'recoverySuccess')
            dispatch('setModal', null)
          })
          .catch((err) => {
            const status = err.response.status
            if (status === 409) {
              dispatch('setInfoModal', 'recoveryError')
            }
          })
      },
      logIn({ commit, state, dispatch }, payload) {
        commit('LOG_IN', payload.attributes)
        commit('USER_CODES_SUCCESS', payload.codes)
        localStorage.setItem('user', JSON.stringify(payload.attributes))
        if (localStorage.getItem('redirect')) {
          dispatch('setModal', 'order')
          localStorage.removeItem('redirect')
        } else {
          state.modal !== 'order' && dispatch('setModal', null)
          localStorage.removeItem('redirect')
        }
        if (payload.access_token && payload.refresh_token) {
          localStorage.setItem(
            'access_token',
            JSON.stringify(payload.access_token)
          )
          localStorage.setItem(
            'refresh_token',
            JSON.stringify(payload.refresh_token)
          )
          if (state.code) {
            dispatch('saveCode', state.code)
          }
        }
      },
      logOut({ commit }) {
        localStorage.removeItem('user')
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        commit('LOG_OUT')
      },
      fetchInfo({ commit }, payload) {
        axios.get(`${BASE_API_PATH}/info/${payload}`).then((res) => {
          commit(`FETCH_${payload.toUpperCase()}_SUCCESS`, res.data)
        })
      },
    },
    getters: {
      getModal: (state) => state.modal,
      getInfo: (state) => state.infoModal,
      getUser: (state) => state.user,
    },
  })

export default store
