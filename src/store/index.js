import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state:{
        sidebarActive: false,
        modal: null,
        infoModal: null,
        codeInputActive: false,
    },
    getters: {
        getModal: ({modal}) => modal,
        getInfo: ({infoModal}) => infoModal
    },
    mutations: {
        MODAL_SET(state, payload) {
            state.modal = payload
            state.sidebarActive = false
        },
        MODAL_INFO_SET(state, payload) {
            state.infoModal = payload
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
        setInfoModal({ commit }, payload) {
            commit('MODAL_INFO_SET', payload)
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