<template>
    <div class="wrapper">

        <navbar-comp @openLogup="openLogup"></navbar-comp>

        <main class="main">

            <!-- Первая Заглавная секция с параллакс эффектом -->
            <div class="main__block">
                <div class="layer layer__front"></div>
                <div class="layer layer__middle"></div>
                <h1 class="main__title">Unbelievable adventures!</h1>
                <!--  -->
                <!-- Меню для регистрации и авторизации пользователя -->
                <menuLogup 
                @closeLogup="closeLogup"
                >
                </menuLogup>
            
            </div>
            
            <!-- Разделитель секций -->
            
            <!-- Вторая секция с контентом -->
            <div class="main__basic">
                <div class="separator-section"></div>

            </div>

        </main>

        <footer-comp>Footer!</footer-comp>

    </div>
</template>

<script setup>
// для Vue
import { onMounted, ref } from 'vue';

// Компоненты
import navbarComp from '@/components/navbar.vue';
import menuLogup from '@/components/menuLogup.vue';
import footerComp from '@/components/footer.vue'

// Вспомогательные инструменты
import computedMouseMove from '@/tools/computedMoseMove.js'
import { gsap } from 'gsap';

const data = {
    isShowLogup: ref(true),
    mainText: ref(''),
    isScroll: ref(false),
}

function openLogup() {
    // data.isShowLogup.value = true;
    gsap.to('.menu-logup', { width: '30%' , duration: 1});
};
function closeLogup() {
    // data.isShowLogup.value = false;
    gsap.to('.menu-logup', { width: '0' , duration: 1});
};

onMounted(() => {
    if(window.scrollY === 0){
        data.isScroll.value = false
    }
    document.addEventListener('scroll', (e) => {
        document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
    })

    document.addEventListener('mousemove', (e) => {
        computedMouseMove(e, window.innerWidth, window.innerHeight, 'mouseMoveX', 'mouseMoveY');
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
}

::-webkit-scrollbar{
    width: 7px;
}
::-webkit-scrollbar-thumb{
    background-color: var(--green);
    border-radius: 20px;
}
::-webkit-scrollbar-track-piece{
    background-color: rgba(0, 0, 0, 0);
}

body {
    background-color: rgb(23, 24, 24);
    font-family: sans-serif;
    color: whitesmoke;
}

.wrapper {
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
    overflow: hidden;
    z-index: 0;
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
    /* transform: translate3d(calc(var(--mouseMoveX) / 200), calc(var(--mouseMoveY) / 200), 0); */
    background-size: cover;
    background-position: center;
    overflow: hidden;
}
.main__title{
    position: relative;
    top: 50px;
    color: var(--green);
    -webkit-transform: translate(calc((var(--scrollTop) / 12)), calc((var(--scrollTop) / 4)));
    -ms-transform: translate(calc((var(--scrollTop) / 12)), calc((var(--scrollTop) / 4)));
    transform: translate(calc((var(--scrollTop) / 12)), calc((var(--scrollTop) / 4)));
    font-family: 'Ubuntu', sans-serif;
    text-shadow: 0px 5px 50px rgba(255, 255, 255, 0.514);
    font-size: calc(var(--sync) * 2.8);
}

.layer{
    position: absolute;
    width: 100%;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
}
.layer__front{
    background-image: url(./images/main--front.png);
    -webkit-transform: translate3d(0, calc((var(--scrollTop) / -10)), 0);
    transform: translate3d(0, calc((var(--scrollTop) / -10)), 0);
    /* transform: translate3d(calc(var(--mouseMoveX) / 250), calc(var(--mouseMoveY) / 250), 0); */
    z-index: 12;
    background-size: cover;
    background-position: center;
}
.layer__middle{
    background-image: url(./images/main--middle.png);
    -webkit-transform: translate3d(0, calc((var(--scrollTop) / -8)), 0);
    transform: translate3d(0, calc((var(--scrollTop) / -8)), 0);
    /* transform: translate3d(calc(var(--mouseMoveX) / 170), calc(var(--mouseMoveY) / 170), 0); */
    z-index: 9;
    background-size: cover;
    background-position: center;
}
.separator-section{
    position: absolute;
    top: -10px;
    width: 100%;
    height: 150px;
    background-image: url(./images/separator.png);
    -webkit-transform: translate3d(0, calc((var(--scrollTop) / -26)), 0);
    transform: translate3d(0, calc((var(--scrollTop) / -26)), 0);
    z-index: 9;
    background-size: cover;
    background-position: center;
}
.main__basic{
    position: relative;
    top: 10px;
    width: 100%;
    height: 100vh;
    z-index: 16;
    background-image: url(./images/background-basic.jpg);
    -webkit-transform: translate3d(0, calc((var(--scrollTop) / -14)), 0);
    transform: translate3d(0, calc((var(--scrollTop) / -14)), 0);
    background-size: cover;
    background-position: center;
}

</style>