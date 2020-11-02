import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state:{
        sidebarActive: false,
        codeInputActive: false,
        loginModalActive: false
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
        }
    }
})

export default store;