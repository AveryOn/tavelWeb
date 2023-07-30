import { createStore } from 'vuex'
import axios from 'axios';


export default createStore({
    state: {
        isShowLogup: false,
        // Для отображения спинера загрузки 
        isLoading: false,

        hostServer: 'http://localhost:3000/',

        // текст ошибок логина
        loginErrorTexts: {
            empty: 'Fill in the email!'
        },

        // Текст ошибок пароля
        passwordErrorTexts: {
            noMatch: `Passwords don't match!`,
            noConfirm: `Confirm your password!`,
            empty: `Enter your password!`,
        }
    },
    getters: {

    },
    mutations: {
        showLogup(state) {
            state.isShowLogup = true;
        },
        hiddenLogup(state) {
            state.isShowLogup = false;
        },
        showLoading(state) {
            state.isLoading = true;
        },
        hiddenLoading(state) {
            state.isLoading = false;
        }
    },
    actions: {
        // Авторизация и регистрация
        // Отправка полей формы АВТОРИЗАЦИИ

    },
    modules: {
        
    }
})
