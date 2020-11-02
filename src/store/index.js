import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state:{
        sidebarActive: false,
        codeInputActive: false,
        loginModalActive: false,
        registrationModalActive: false,
        winnersModalActive: false
    },
    getters: {
    },
    mutations: {
        SIDEBAR_TOGGLE(state){
            state.sidebarActive = !state.sidebarActive
        },
        CODEINPUT_TOGGLE(state){
            state.codeInputActive = !state.codeInputActive
        },
        LOGIN_MODAL_TOGGLE(state){
            state.loginModalActive = !state.loginModalActive
        },
        REGISTRATION_MODAL_TOGGLE(state){
            state.registrationModalActive = !state.registrationModalActive
            state.sidebarActive = false
        },
        WINNERS_MODAL_TOGGLE(state){
            state.winnersModalActive = !state.winnersModalActive
            state.sidebarActive = false
        }
    },
    actions: {
        toggleSidebarState({commit}){
            commit("SIDEBAR_TOGGLE")
        },
        toggleCodeInputState({commit}){
            commit("CODEINPUT_TOGGLE")
        },
        loginModalActive({commit}){
            commit("LOGIN_MODAL_TOGGLE")
        },
        registrationModalActive({commit}){
            commit("REGISTRATION_MODAL_TOGGLE")
        },
        winnersModalActive({commit}){
            commit("WINNERS_MODAL_TOGGLE")
        },
    }
})

export default store;