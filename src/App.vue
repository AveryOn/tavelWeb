
<template>
    <!-- спиннер загрузки -->
    <loadingSpinUI :isLoading="store.state.isLoading"></loadingSpinUI>
    <div class="wrapper">
        <div class="content">
            <!-- Меню для регистрации и авторизации пользователя -->
            <menuLogup @closeLogup="closeLogup">
            </menuLogup>
            <navbar-comp @openLogup="openLogup"></navbar-comp>
            <main class="main">

                <!-- Первая Заглавная секция с параллакс эффектом -->
                <main-up-view></main-up-view>

                <!-- Разделитель секций -->
                <div class="separator-section"></div>

                <!-- Вторая секция с контентом -->
                <basic-main-view></basic-main-view>

                <footer-comp :is-scroll-bottom="data.isScrollBottom.value"></footer-comp>
            </main>


        </div>

    </div>
</template>

<script setup>
// для Vue
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
// Компоненты
import mainUpView from '@/components/views/mainUpView.vue'
import basicMainView from '@/components/views/basicMainView.vue';
import navbarComp from '@/components/navbar.vue';
import menuLogup from '@/components/menuLogup.vue';
import footerComp from '@/components/footer.vue';
import loadingSpinUI from '@/components/UI/loadingSpinUI.vue';

// Вспомогательные инструменты
import computedMouseMove from '@/tools/computedMoseMove.js';
import gsap from 'gsap';
import ScrollSmother from '../node_modules/gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/all';

const data = {
    isShowLogup: ref(true),
    mainText: ref(''),
    isScrollBottom: ref(true),
}

// Открыть окно регистрации
function openLogup() {
    gsap.to('.menu-logup', { width: '30%', duration: 1 });
    gsap.to('.form-logup', { left: '', width: '', scale: 1, duration: 0.8, });
    gsap.to('.form-logup__title', { scale: 1, duration: 0.5, delay: 0.2 });
    gsap.to('.smiley', { scale: 1, duration: 0.5, delay: 0.2 });
    gsap.to('.form-logup__input', { scale: 1, duration: 0.5, delay: 0.2 });
    gsap.to('.form-logup__confirm-btn', { scale: 1, duration: 0.5, delay: 0.2 });
    gsap.to('.form-logup__register-question', { scale: 1, duration: 0.5, delay: 0.6 });
    gsap.to('.form-logup__login-btn', { scale: 1, duration: 0.5, delay: 0.2 });
    gsap.to('.menu-logup__close-btn', { left: '10px', scale: 1.2, duration: 0.6, delay: 0.3 });
};

// Закрыть окно регистрации
function closeLogup() {
    gsap.to('.menu-logup', { width: '0', duration: 1 });
    gsap.to('.form-logup', { left: '10%', width: 0, scale: 0.8, duration: 1 });
    gsap.to('.form-logup__title', { scale: 0, duration: 0.3 });
    gsap.to('.smiley', { scale: 0, duration: 0.8 });
    gsap.to('.form-logup__input', { scale: 0, duration: 0.8 });
    gsap.to('.form-logup__confirm-btn', { scale: 0, duration: 0.8 });
    gsap.to('.form-logup__register-question', { scale: 0, duration: 0.3 });
    gsap.to('.form-logup__login-btn', { scale: 0, duration: 0.8 });
    gsap.to('.menu-logup__close-btn', { left: '100%', scale: 0.2, duration: 0.4 });
};

onMounted(() => {
    // спиннер загрузки
    // для первоначальной загрузки страницы
    const loading = document.querySelector('.loading');
    loading.style.cssText += `--cursorX: ${Math.round(document.body.clientWidth / 2)}px`;
    loading.style.cssText += `--cursorY: ${Math.round(document.body.clientHeight / 2)}px`;


    // Плавный скролл страницы
    gsap.registerPlugin(ScrollSmother, ScrollTrigger)
    ScrollSmother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 2,
    });

    const innerHeightBottom = +((document.body.clientHeight - window.innerHeight) - 20).toFixed();
    document.addEventListener('scroll', (e) => {
        // Создание CSS-переменной scrollTop (Возможно не будет использоваться)
        document.body.style.cssText += `--scrollTop: ${window.scrollY}px`;

        // Создание триггера для появления футера, если скролл дошел до конца страницы
        if (window.scrollY >= innerHeightBottom) {
            data.isScrollBottom.value = true;
        } 
        else {
            data.isScrollBottom.value = false;
        }
    })

    // Создание перменных для спиннера загрузки, и создание CSS-переменных для параллакс эффекта
    document.addEventListener('mousemove', (e) => {
        computedMouseMove(e, window.innerWidth, window.innerHeight, 'mouseMoveX', 'mouseMoveY');
        // спиннер загрузки
        loading.style.cssText += `--cursorX: ${e.clientX + 10}px`;
        loading.style.cssText += `--cursorY: ${e.clientY + 10}px`;
    })
})
</script>

<style>
@import '~@csstools/normalize.css'; 
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');

:root {
    --sync: calc(1vw + 1vh);
    --border: 2px solid rgb(64, 175, 140);
    --green: rgb(64, 175, 140);
    --yellow: rgb(218, 218, 87);
    --yellow-hover: orange;
    --green-hover: rgb(7, 144, 101);
    --transition: transform .75 cubic-bezier(.075, .5, 0, 1);
    --font: 'Ubuntu', sans-serif;
    --box-shadow: 10px 5px 15px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar {
    width: 7px;
}

::-webkit-scrollbar-thumb {
    background-color: var(--green);
    border-radius: 20px;
}

::-webkit-scrollbar-track-piece {
    background-color: rgba(0, 0, 0, 0);
}

::selection {
    color: rgb(0, 0, 0);
    background-color: rgb(92, 224, 182);
}

body {
    background-color: rgb(23, 24, 24);
    font-family: sans-serif;
    color: whitesmoke;
}
a {
    color: var(--yellow);
    cursor: pointer;
}
a:hover {
    color: orange;
}
.layer {
    position: absolute;
    width: 100%;
    min-height: 100%;
    background-size: cover;
    background-position: center;
    will-change: transform;
}

.content {
    position: relative;
    width: 100%;
    height: -webkit-max-content;
    height: -moz-max-content;
    height: max-content;
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
}

.main {
    width: 100%;
    height: -webkit-max-content;
    height: -moz-max-content;
    height: max-content;
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    /* border: var(--border); */
}

.separator-section {
    /* position: absolute; */
    top: -10px;
    width: 100%;
    height: 150px;
    background-image: url(./images/separator.png);
    z-index: 9;
    background-size: cover;
    background-position: center;
}
</style>