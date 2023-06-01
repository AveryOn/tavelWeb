<template>
    <span class="loading" :style="isLoadingComputed"></span>
    <div class="wrapper">
        <div class="content">
            <menuLogup @closeLogup="closeLogup">
            </menuLogup>
            <navbar-comp @click="data.isScrollBottom.value = !data.isScrollBottom.value" @openLogup="openLogup"></navbar-comp>
            <main class="main">

                <!-- Первая Заглавная секция с параллакс эффектом -->
                <div class="main__block">
                    <div class="layer layer__front"></div>
                    <div class="layer layer__middle"></div>
                    <h1 class="main__title">Unbelievable adventures!</h1>
                    <!--  -->
                    <!-- Меню для регистрации и авторизации пользователя -->

                </div>

                <!-- Разделитель секций -->
                <div class="separator-section"></div>

                <!-- Вторая секция с контентом -->
                <div class="main__basic">
                    <!-- <div class="separator-section"></div> -->

                </div>

            </main>

            <footer-comp :is-scroll-bottom="data.isScrollBottom.value"></footer-comp>

        </div>

    </div>
</template>

<script setup>
// для Vue
import { 
    onMounted, 
    ref, 
    watch, 
    reactive,
    computed 
} from 'vue';

// Компоненты
import navbarComp from '@/components/navbar.vue';
import menuLogup from '@/components/menuLogup.vue';
import footerComp from '@/components/footer.vue'

// Вспомогательные инструменты
import computedMouseMove from '@/tools/computedMoseMove.js';
import gsap from 'gsap';
import ScrollSmother from '../node_modules/gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/all';

const data = {
    isShowLogup: ref(true),
    mainText: ref(''),
    isScrollBottom: ref(true),
    // Проверить используется или нет
    isScroll: ref(false),
}
const loading = {
    isLoading: ref(false),
    loadingScale: ref(0),
}


function openLogup() {
    // data.isShowLogup.value = true;
    gsap.to('.menu-logup', { width: '30%', duration: 1 });
    loading.isLoading.value = true;
};
function closeLogup() {
    // data.isShowLogup.value = false;
    gsap.to('.menu-logup', { width: '0', duration: 1 });
    setTimeout(() => {
        loading.isLoading.value = false;
    }, 500)
};

// Вычисляет стили для спинера загрузки
const isLoadingComputed = computed(() => {
    if(loading.isLoading.value){
        return {
            visibility: 'visible',
            scale: 1,
        }
    }else{
        return {
            visibility: 'hidden',
            scale: 0
        }
    }
})

onMounted(() => {

    // console.log(window.innerHeight);
    // console.log(Math.round((document.body.clientHeight - window.innerHeight) - 20));

    // спиннер загрузки
    const loading = document.querySelector('.loading');
    loading.style.cssText += `--cursorX: ${Math.round(document.body.clientWidth / 2)}px`;
    loading.style.cssText += `--cursorY: ${Math.round(document.body.clientHeight / 2)}px`;

    // Плавный скролл страницы
    gsap.registerPlugin(ScrollSmother, ScrollTrigger)
    ScrollSmother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 2,
    })

    const innerHeightBottom = +((document.body.clientHeight - window.innerHeight) - 20).toFixed();
    document.addEventListener('scroll', (e) => {
        // Создание CSS-переменной scrollTop (Возможно не будет использоваться)
        document.body.style.cssText += `--scrollTop: ${window.scrollY}px`;

        // Создание триггера для появления футера, если скролл дошел до конца страницы
        if(window.scrollY >= innerHeightBottom){
            data.isScrollBottom.value = true;
        }else{
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
    --border: 1px solid white;
    --green: rgb(64, 175, 140);
    --green-hover: rgb(7, 144, 101);
    --transition: transform .75 cubic-bezier(.075, .5, 0, 1);
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

body {
    background-color: rgb(23, 24, 24);
    font-family: sans-serif;
    color: whitesmoke;
}

.loading{
    visibility: hidden;
    scale: 0;
    position: fixed;
    left: var(--cursorX);
    top: var(--cursorY);
    background-color: rgba(0, 0, 0, .3);
    width: 12px;
    height: 12px;
    border: 1px solid var(--green);
    border-radius: 50%;
    z-index: 9999999;
    animation-name: loading;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

@keyframes loading {
    0%{
        border-top: 2px solid rgb(12, 255, 182);
    }
    25%{
        border-right: 2px solid rgb(12, 255, 247);
    }
    50%{
        border-bottom: 2px solid rgb(12, 255, 113);
    }
    75%{
        border-left: 2px solid rgb(12, 247, 255);
    }
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

.main__block {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-image: url(./images/background-main.jpg);
    transform: translate3d(calc(var(--mouseMoveX) / -220), calc(var(--mouseMoveY) / -220), 0);
    transition: var(--transition);
    background-size: cover;
    background-position: center;
    overflow: hidden;
}

.main__title {
    position: relative;
    top: 50px;
    color: var(--green);
    transform: translate3d(calc(var(--mouseMoveX) / 50), calc(var(--mouseMoveY) / 50), 0);
    transition: var(--transition);
    font-family: 'Ubuntu', sans-serif;
    text-shadow: 0px 5px 50px rgba(255, 255, 255, 0.514);
    font-size: calc(var(--sync) * 2.8);
}

.layer {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    will-change: transform;
}

.layer__front {
    background-image: url(./images/main--front.png);
    /* -webkit-transform: translate3d(0, calc((var(--scrollTop) / -10)), 0); */
    /* transform: translate3d(0, calc((var(--scrollTop) / -10)), 0); */
    transform: translate3d(calc(var(--mouseMoveX) / 200), calc(var(--mouseMoveY) / 200), 0);
    transition: var(--transition);
    z-index: 9;
    background-size: cover;
    background-position: center;
}

.layer__middle {
    background-image: url(./images/main--middle.png);
    -webkit-transform: translate3d(0, calc((var(--scrollTop) / -8)), 0);
    transform: translate3d(0, calc((var(--scrollTop) / -8)), 0);
    transition: var(--transition);
    transform: translate3d(calc(var(--mouseMoveX) / 170), calc(var(--mouseMoveY) / 170), 0);
    z-index: 9;
    background-size: cover;
    background-position: center;
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

.main__basic {
    position: relative;
    top: 30px;
    scale: 1.1;
    width: 100%;
    height: 120vh;
    z-index: 16;
    background-image: url(./images/background-basic.jpg);
    -webkit-transform: translate3d(0, calc((var(--scrollTop) / -14)), 0);
    /* transform: translate3d(0, calc((var(--scrollTop) / -14)), 0); */
    transform: translate3d(calc(var(--mouseMoveX) / 170), calc(var(--mouseMoveY) / 170), 0);
    transition: var(--transition);
    background-size: cover;
    background-position: center;
}</style>