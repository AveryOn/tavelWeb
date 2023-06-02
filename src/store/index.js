import { createStore } from 'vuex'

export default createStore({
    state: {
        isShowLogup: false,
    },
    getters: {

    },
    mutations: {
        showLogup(state){
            state.isShowLogup = true;
        },
        hiddenLogup(state){
            state.isShowLogup = false;
        }
    },
    actions: {

    },
    modules: {
    }
})
