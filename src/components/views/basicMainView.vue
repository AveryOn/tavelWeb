<!-- ОСНОВНАЯ СЕКЦИЯ СТРАНИЦЫ -->
<template>

    <div class="main__basic">

        
        <div class="basic__action-block">
            <div class="logo">TravelWeb</div>
        </div>
        
        <div class="layer basic-front">
        </div>
        <div class="layer basic-middle__front"></div>
        <div class="layer basic-middle__back"></div>
        <div class="layer basic-back__front"></div>
        <div class="layer basic-back__middle"></div>
        <div class="layer basic-back__back"></div>
    </div>

</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue'

onMounted(() => {
    const footer = document.querySelector('.footer');
    const actBlock = document.querySelector('.basic__action-block');
    // console.log(actBlock.clientHeight + footer.clientHeight);
    // console.log(actBlock.offsetTop)
    const footerHeight = +(footer.getBoundingClientRect().height).toFixed(0);
    const actBlockHeight = +(actBlock.getBoundingClientRect().height).toFixed(0);
    // console.log(footerHeight + actBlockHeight);
    // console.log(footerHeight);

    // Присваивание CSS-переменной в action-block для определения его высоты относительно высоты монитора
    const actionBlock = document.querySelector('.basic__action-block');
    actionBlock.style.cssText += `--height-action-block: ${Math.round(window.innerHeight / 1.3)}px`;


    const innerHeightBottom = +((document.body.clientHeight - window.innerHeight) - 20).toFixed();

    document.addEventListener('scroll', (e) => {
        // Создание CSS-переменной scrollTop (Возможно не будет использоваться)
        document.body.style.cssText += `--scrollTop: ${window.scrollY}px`;
    
        // Создание триггера для появления @@@, если скролл дошел до конца страницы
        if(window.scrollY >= Math.round(innerHeightBottom) / 2){
            gsap.to('.basic__action-block', {bottom: '23.5vh', duration: 1});
        }else{
            gsap.to('.basic__action-block', {bottom: '-100vh', duration: 3});
        }
    })
})

</script>

<style scoped>
/* СТИЛИ ДЛЯ СЕЛЕКТОРА .layer НАХОДЯТСЯ В App.vue */
.main__basic {
    position: relative;
    /* top: 30px; */
    width: 100%;
    height: 120vh;
    z-index: 16;    
    scale: 1.1;
}
.logo{
    position: absolute;
    top: -30px;
    background-color: var(--green);
    padding: 5px 15px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    font-family: var(--font);
    cursor: default;
}
.basic__action-block{
    position: absolute;
    bottom: -100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: auto;
    height: var(--height-action-block);
    background-color: rgba(0,0,0, .45);
    z-index: 25;
    border-top: var(--border);
    border-bottom: var(--border);
}

                    /* НЕБО */
.basic-back__back{
    background-image: url(../../images/basic-layers/basic-back__back.png);
    background-size: cover;
    background-position: center;
    /* transform: translate3d(calc(var(--mouseMoveX) / -380), calc(var(--mouseMoveY) / -320), 0); */
    transform: translate3d(calc(var(--mouseMoveX) / -150), calc(var(--mouseMoveY) / -120), 0);
    z-index: 16;
}
                    /* ГОРА */
.basic-back__middle{
    background-image: url(../../images/basic-layers/basic-back__middle.png);
    background-size: cover;
    background-position: center;
    transform: translate3d(calc(var(--mouseMoveX) / -270), calc(var(--mouseMoveY) / -200), 0);
    z-index: 17;
}
                    /* ОСНОВА КАРТИНКИ (ГОРА СЛЕВА, ОЗЕРО И ЛЕС) */
.basic-back__front{
    background-image: url(../../images/basic-layers/basic-back__front.png);
    background-size: cover;
    background-position: center;
    transform: translate3d(calc(var(--mouseMoveX) / -350), calc(var(--mouseMoveY) / -300), 0);
    z-index: 18;
}
                    /* ЕЛКИ ЗАДНЕГО ПЛАНА */
.basic-middle__back{
    background-image: url(../../images/basic-layers/basic-middle__back.png);
    background-size: cover;
    background-position: center;
    transform: translate3d(calc(var(--mouseMoveX) / 420), calc(var(--mouseMoveY) / 310), 0);
    z-index: 19;
}
                    /* ЕЛКИ ПЕРЕДНЕГО ПЛАНА */
.basic-middle__front{
    background-image: url(../../images/basic-layers/basic-middle__front.png);
    background-size: cover;
    background-position: center;
    transform: translate3d(calc(var(--mouseMoveX) / 320), calc(var(--mouseMoveY) / 230), 0);
    z-index: 20;
}
                    /* БЛИЖЙАШИЕ ДВЕ ЕЛКИ */
.basic-front{
    background-image: url(../../images/basic-layers/basic-front.png);
    background-size: cover;
    background-position: center;
    transform: translate3d(calc(var(--mouseMoveX) / 120), calc(var(--mouseMoveY) / 90), 0);
    z-index: 21;
}
</style>