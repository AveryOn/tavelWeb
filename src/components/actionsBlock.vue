<template>
    <div class="action-block">
        <div class="action-block__content">
            <h1 class="action-block__title">{{ currentBlock.title }}</h1>
            <nav class="action-block__navigate">
                <button class="navigate-btn" id="Main" @click="slideTo(0, 'Main')">Main</button>
                <button class="navigate-btn" id="Tickets" @click="slideTo(1, 'Tickets')">Tickets</button>
                <button class="navigate-btn" id="Places" @click="slideTo(2, 'Places')">Places</button>
                <button class="navigate-btn" id="About" @click="slideTo(3, 'About')">About</button>
            </nav>
            <div class="swiper">
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <mainComp class="swiper-slide" @slideToPlaces="slideTo(2, 'Places')"></mainComp>
                    <ticketsComp class="swiper-slide"></ticketsComp>
                    <placesComp class="swiper-slide"></placesComp>
                    <aboutComp class="swiper-slide"></aboutComp>
                </div>
            </div>
        </div>
        <div class="action-block__bg"></div>
    </div>
</template>

<script setup>
import { watch, ref, reactive, onMounted } from 'vue';
import mainComp from '@/components/actionsBlockVariations/main.vue';
import ticketsComp from '@/components/actionsBlockVariations/tickets.vue';
import placesComp from '@/components/actionsBlockVariations/places.vue';
import aboutComp from '@/components/actionsBlockVariations/about.vue';
import Swiper from 'swiper';
import gsap from 'gsap';

const currentBlock = reactive({ title: 'Main' });
const slide = ref(null);

// Функция скролит функциональные блоки
async function slideTo(index, title) {
    if (slide.value) {
        slide.value.slideTo(index, 500);
        currentBlock.title = title;
    }
    else {
        throw new Error('slide.value - значение null невызываемое');
    }
}


onMounted(() => {
    if(currentBlock.title === 'Main') document.querySelectorAll('.navigate-btn')[0].style.top = '-2px';
    // Установка слайдера
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        init: true,
        allowTouchMove: false,
    });
    slide.value = swiper;

    const btns = document.querySelectorAll('.navigate-btn');
    watch(() => currentBlock.title, (newValue) => {
        btns.forEach((entry) => {
            if (currentBlock.title === entry.innerHTML) {
                gsap.to(`#${entry.innerHTML}`, { top: '-2px', duration: 0.2 });
            }
            else {
                // entry.style.top = '';
                gsap.to(`#${entry.innerHTML}`, { top: '0px', duration: 0.1 });
            }
        })
    })
})

</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.swiper-wrapper {
    width: max-content;
    height: 100%;
    display: flex;
}

.swiper-slide {
    height: 100%;
}

.action-block {
    position: relative;
    width: 50%;
    height: 85%;
    align-self: center;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0);
    z-index: 30;
    /* box-shadow: var(--box-shadow); */
}

.action-block__content {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: var(--border);
    border-radius: 10px;
    /* overflow: hidden; */
    z-index: 35;
}

.action-block__title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: var(--green);
    font-family: var(--font);
    margin: 0px 0 5px 0;
}

.action-block__navigate {
    position: relative;
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    padding: 0 10px 3.5px 10px;
    border-bottom: var(--border);
}

.navigate-btn {
    position: relative;
    background: rgb(78, 176, 145);
    color: rgb(50, 50, 50);
    font-family: var(--font);
    font-size: 0.9em;
    border: 1px solid rgba(0, 0, 0, 0);
    margin: 0 1px;
    cursor: pointer;
}

.navigate-btn:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.navigate-btn:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.action-block__wrapper {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    width: max-content;
    height: 85%;
    border-top: var(--border);
    /* overflow: hidden; */
}

.action-block__bg {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: 10px;
    background: rgba(0, 0, 0, .1);
    backdrop-filter: blur(5px);
    z-index: 28;
}
</style>