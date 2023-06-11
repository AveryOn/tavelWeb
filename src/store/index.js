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
        confirmAuth({ state, commit }, { login, password }) {
            commit('showLoading');
            console.log(login, password);
            axios.post(state.hostServer + 'auth', {
                login,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(
                    (response) => {
                        console.log(response.data);
                    }, (err) => {
                        console.log(err);
                    }
                )
                .finally(() => {
                    commit('hiddenLoading');
                })
        },

        // Отправка полей формы РЕГИСТРАЦИИ
        confirmRegister({ state, commit }, { login, password, confirmPassword }) {
            commit('showLoading');
            axios.post(state.hostServer + 'register', {
                login,
                password,
                confirmPassword
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(
                    (response) => {
                        console.log(response.data);
                    }, (err) => {
                        console.log(err);
                    }
                ).finally(() => {
                    commit('hiddenLoading');
                })
        }

    },
    modules: {
    }
})
