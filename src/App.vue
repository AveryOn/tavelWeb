<template>
    <div class="wrapper">

        <header class="header">
            <p class="header__logo-name">TravelWeb</p>
            <button class="header__button">
                <span class="material-symbols-outlined">
                    person
                </span>
            </button>
        </header>

        <main class="main">

            <!-- Первая Заглавная секция с параллакс эффектом -->
            <div class="main__block">
                <div class="layer layer__front"></div>
                <div class="layer layer__middle"></div>
                <h1 class="main__title">Unbelievable adventures!</h1>
            </div>
            
            <!-- Разделитель секций -->
            
            <!-- Вторая секция с контентом -->
            <div class="main__basic">
                <div class="separator-section"></div>

            </div>

        </main>

        <footer class="footer">footer</footer>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    document.addEventListener('scroll', (e) => {
        document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
    
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

.header {
    position: absolute;
    right: 0;
    left: 0;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    border-bottom: 1px solid var(--green);
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.36);
}
.header__logo-name{
    color: var(--green);
    font-weight: 700;
    font-size: calc(var(--sync) / 1.17);
    font-family: 'Ubuntu', sans-serif;
    cursor: default;
}
.header__button{
    background: none;
    border: none;
    color: var(--green);
    cursor: pointer;
}

.main {
    width: 100%;
    height: max-content;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* border: var(--border); */
}

.main__block {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(./images/background-main.jpg);
    background-size: cover;
    background-position: center;
}
.main__title{
    position: relative;
    top: 50px;
    color: var(--green);
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
    transform: translate3d(0, calc((var(--scrollTop) / -10)), 0);
    z-index: 5;
    background-size: cover;
    background-position: center;
}
.layer__middle{
    background-image: url(./images/main--middle.png);
    transform: translate3d(0, calc((var(--scrollTop) / -8)), 0);
    z-index: 4;
    background-size: cover;
    background-position: center;
}
.separator-section{
    position: absolute;
    top: -10px;
    width: 100%;
    height: 150px;
    background-image: url(./images/separator.png);
    transform: translate3d(0, calc((var(--scrollTop) / -26)), 0);
    z-index: 2;
    background-size: cover;
    background-position: center;
}
.main__basic{
    position: relative;
    top: 10px;
    width: 100%;
    height: 100vh;
    z-index: 5;
    background-image: url(./images/background-basic.jpg);
    transform: translate3d(0, calc((var(--scrollTop) / -14)), 0);
    background-size: cover;
    background-position: center;
}
.footer {
    width: 100%;
    display: flex;
    align-items: center;
    border-top: var(--border);
}
</style>