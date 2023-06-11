<!-- ВКЛАДКА ДЛЯ ЛОГИНА И РЕГИСТРАЦИИ -->
<template>
    <div class="menu-logup">
        <closeBtn class="menu-logup__close-btn" @click="$emit('closeLogup')"></closeBtn>

        <div class="form-logup">

            <!-- Окно АВТОРИЗАЦИИ -->
            <div class="auth-container" v-show="!isRegister">
                <h2 class="form-logup__title">Authorization</h2>
    
                <p class="smiley">༼ つ ◕_◕ ༽つ</p>
                <inputComp 
                class="form-logup__input"
                v-model="login" 
                placeholder="email or username" 
                :inputType="'email'"
                >
                </inputComp>
                <inputComp 
                class="form-logup__input"
                v-model="password" 
                placeholder="password" 
                :inputType="'password'"
                >
                </inputComp>

                <!-- Сообщение об ошибке, текст встраивается в зависимости от типа ошибки -->
                <p class="password-error-hint">{{ errorMessage }}</p>

                <div class="form-logup__btns">
                    <buttonComp class="form-logup__confirm-btn" @click="checkDataAuth">
                        Confirm
                    </buttonComp>
                </div>
                <!-- Кнопка включения окна РЕГИСТРАЦИИ -->
                <p class="form-logup__register-question">Don't have an account? 
                    <a class="form-logup__register-btn" @click="activeRegistration">Register now!</a>
                </p>
            </div>

            <!-- Окно РЕГИСТРАЦИИ  -->
            <div class="register-container" v-show="isRegister">
                <h2 class="form-logup__title">Registration</h2>
    
                <p class="smiley">༼ つ ◕_◕ ༽つ</p>
                <!-- Ввод email или username -->
                <inputComp 
                class="form-logup__input"
                v-model="login" 
                placeholder="email" 
                :inputType="'email'"
                >
                </inputComp>

                <!-- Ввод пароля -->
                <inputComp 
                class="form-logup__input"
                v-model="password" 
                placeholder="password" 
                :inputType="'password'"
                >
                </inputComp>

                <!-- Подтверждение пароля -->
                <inputComp 
                class="form-logup__input"
                v-model="confirmPassword" 
                placeholder="confirm password" 
                :inputType="'password'"
                >
                </inputComp>

                <!-- Сообщение об ошибке, текст встраивается в зависимости от типа ошибки -->
                <p class="password-error-hint">{{ errorMessage }}</p>

                <div class="form-logup__btns">
                    <buttonComp class="form-logup__login-btn" @click="activeAuthorization">{{ '<- Login' }}</buttonComp>
                    <buttonComp class="form-logup__confirm-btn" @click="checkDataRegister">
                        Confirm
                    </buttonComp>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import closeBtn from '@/components/icons/close.vue';
import inputComp from '@/components/UI/inputComp.vue';
import buttonComp from '@/components/UI/buttonComp.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import gsap from 'gsap';
import animateText from '@/tools/animations.js';

const store = useStore();

const isRegister = ref(false);
const login = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');


// Включить окно РЕГИСТРАЦИИ
function activeRegistration(){
    Promise.resolve(gsap.to('.auth-container', {bottom: '100%', duration: 0.3}))
        .then(() => isRegister.value = true )
        .then(() => gsap.to('.register-container', {top: '0', duration: 0.3}))
}
// Включить окно АВТОРИЗАЦИИ
function activeAuthorization(){
    Promise.resolve(gsap.to('.register-container', {top: '100%', duration: 0.3}))
        .then(() => { isRegister.value = false })
        .then(() => { gsap.to('.auth-container', {bottom: '0', duration: 0.3}) })
}

// Проверка полей при АВТОРИЗАЦИИ
function checkDataAuth(){
    // Если Логин пустой
    if(!login.value.length){
        const text = store.state.loginErrorTexts.empty;
        animateText(text, (message) => {
            errorMessage.value = message;
        })
        // Выход до запроса на сервер
        return;
    }
    // Если Пароль пустой
    else if(!password.value.length){
        const text = store.state.passwordErrorTexts.empty;
        animateText(text, (message) => {
            errorMessage.value = message;
        })
        // Выход до запроса на сервер
        return;
    }
    store.dispatch('confirmAuth', {login: login.value, password: password.value});
}

// Проверка полей при РЕГИСТРАЦИИ
function checkDataRegister(){
    // Если Логин пустой
    if(!login.value.length){
        const text = store.state.loginErrorTexts.empty;
        animateText(text, (message) => {
            errorMessage.value = message;
        })
        // Выход до запроса на сервер
        return;
    }
    // Если поле подтверждения пароля пустое
    else if(!confirmPassword.value.length){
        // исключает дублирование сообщения
        if(errorMessage.value === store.state.passwordErrorTexts.noConfirm) return;
        const text = store.state.passwordErrorTexts.noConfirm;
        // Анимации появления ошибки
        animateText(text, (message) => {
            errorMessage.value = message;
        })
        // Выход до запроса на сервер
        return;
    }
    // Если пароли не совпадают
    else if(password.value !== confirmPassword.value){
        // исключает дублирование сообщения
        if(errorMessage.value === store.state.passwordErrorTexts.noMatch) return;
        // Анимации появления ошибки
        const text = store.state.passwordErrorTexts.noMatch;
        // функция для анимации появления ошибки
        animateText(text, (message) => {
            errorMessage.value = message;
        })
        // Выход до запроса на сервер
        return;
    }
    // Выход если одно из полей пустое
    else if(!password.value.length || !confirmPassword.value.length) return;
    // отправка данных на сервер
    store.dispatch('confirmRegister', {login: login.value, password: password.value, confirmPassword: confirmPassword.value});
}

</script>

<style scoped>

.menu-logup {
    position: absolute;
    right: 0;
    width: 0;
    height: 100vh;
    width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .55);
    z-index: 16;
    color: var(--green);
}
.menu-logup__close-btn{
    position: absolute;
    top: 10px;
    left: 10px;
    scale: 1.2;
}
.form-logup {
    position: relative;
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: rgba(25, 74, 59, 0.392);
    backdrop-filter: blur(6px);
    box-shadow: var(--box-shadow);
    overflow: hidden;
}
.auth-container{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0);
}
.register-container{
    position: relative;
    top: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0);
}
.form-logup__title{
    scale: 0;
    position: relative;
    bottom: 80px;
    font-size: calc(var(--sync));
}
.smiley{
    scale: 0;
    font-size: calc(var(--sync) / 1.2);
}
.form-logup__input{
    scale: 0;
    width: calc(var(--sync) * 12);
    height: calc(var(--sync));
    margin: 10px 0;
}
.password-error-hint{
    color: rgb(222, 34, 34);
    font-size: calc(var(--sync) / 1.3);
    font-family: 'Ubuntu', sans-serif;
}
.form-logup__btns{
    width: 80%;
    display: flex; 
    justify-content: space-between;
}
.form-logup__confirm-btn{
    scale: 0;
    position: relative;
    margin-left: auto;
}
.form-logup__login-btn{
    margin-right: auto;
}
.form-logup__register-question{
    scale: 0;
    position: relative;
    color: var(--green);
    margin: 10px 0;
    cursor: default;
}
.form-logup__register-btn{
    color: rgb(30, 250, 232);
}
.form-logup__register-btn{
    cursor: pointer;
}
</style>