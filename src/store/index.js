import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state:{
        sidebarActive: false,
        modal: null,
        codeInputActive: false,
    },
    getters: {
        getModal: ({modal}) => modal,
    },
    mutations: {
        MODAL_SET(state, payload) {
            state.modal = payload
            state.sidebarActive = false
        },
        SIDEBAR_TOGGLE(state){
            state.sidebarActive = !state.sidebarActive
        },
        CODEINPUT_TOGGLE(state){
            state.codeInputActive = !state.codeInputActive
        },
    },
    actions: {
        setModal({ commit }, payload) {
            commit('MODAL_SET', payload)
        },
        toggleSidebarState({commit}){
            commit("SIDEBAR_TOGGLE")
        },
        toggleCodeInputState({commit}){
            commit("CODEINPUT_TOGGLE")
        },
    }
})

export default store;