<template>
    <div style="position: relative;">
        <div class="action-block__main">
            <div class="part main__part-first" v-show="currentPage === 'up'">
                <logotype-comp class="part__logotype"></logotype-comp>
                <h1 class="part__heading">Why choose us?</h1>
                <p class="description first">
                    We have been in the market for a long time, and clients tend to trust
                    us because we know our job, and we know how best to do it. And in order to provide
                    you with an expanded range of opportunities for our company, we recommend that you go to the
                    <a @click="$emit('slideToPlaces')">"Places"</a>
                    tab. There you will find all the information you need for your grand trip to North America!
                </p>
                <button class="button-bottom" @click="pushDown">▽</button>
            </div>
            <div class="part main__part-second" v-show="currentPage === 'bottom'">
                <h1 class="part__heading second">Over 100 cities... Over 1000 attractions!</h1>
                <span class="part__count">100+</span>
                <p class="description second">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel minus
                    voluptatibus asperiores velit maiores eaque maxime cupiditate odio porro, amet voluptatum beatae
                    ducimus, quasi quibusdam voluptates rem soluta et libero, unde excepturi! Laudantium quisquam
                    magnam esse necessitatibus iusto. Rem beatae expedita ex. Quos aspernatur odit delectus fugit
                    ullam deleniti amet assumenda quod cupiditate iste quaerat obcaecati provident libero iure
                    temporibus impedit, fugiat aliquam, magnam laboriosam atque facilis. Minus molestiae, est
                    eligendi sequi adipisci beatae aperiam animi. Dolor, sint error? Ad.
                </p>
                <button class="button-up" @click="pushUp">△</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

defineEmits(['slideToPlaces']);

const currentPage = ref('up');

const tl = gsap.timeline();
async function pushUp() {
    await tl.to(".part.main__part-second", { top: '80vh', duration: 0.5 });
    currentPage.value = 'up';
    await tl.to(".part.main__part-first", { top: 20, duration: 1 });
}

async function pushDown() {
    console.log(currentPage.value);
    await tl.to(".part.main__part-first", { top: '-80vh', duration: 0.5 });
    currentPage.value = 'bottom';
    await tl.to(".part.main__part-second", { top: '15%', duration: 1 });
 
}

onMounted(() => {

})


</script>

<style scoped>
@keyframes button-bottom {
    50% {
        transform: translate(0, 5px);
        text-shadow: 0px -6px 10px rgb(64, 175, 140);
    }

    100% {
        transform: translate(0, 0);
        text-shadow: none;
    }
}

@keyframes button-up {
    50% {
        transform: translate(0, -5px);
        text-shadow: 0px 6px 10px rgb(64, 175, 140);
    }

    100% {
        transform: translate(0, 0);
        text-shadow: none;
    }
}

.button-up {
    position: absolute;
    top: -40px;
    left: 20px;
    background: none;
    color: var(--green);
    font-size: 3em;
    font-weight: bolder;
    border: 1px solid rgba(0, 0, 0, 0);
    cursor: pointer;
    animation-name: button-up;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

.button-up:hover {
    animation-name: none;
}

.button-bottom {
    position: relative;
    bottom: -20px;
    right: -25px;
    background: none;
    color: var(--green);
    align-self: flex-start;
    font-size: 3em;
    font-weight: bolder;
    border: 1px solid rgba(0, 0, 0, 0);
    cursor: pointer;
    animation-name: button-bottom;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

.button-bottom:hover {
    animation-name: none;
}

.action-block__main {
    position: relative;
    display: flex;
    flex-direction: column;
    /* padding: 50px 10px 10px 10px; */
    padding: 10px;
    margin-top: 5px;
    height: 100%;
    font-family: var(--font);
    border-top: var(--border);
}

.part {
    align-self: center;
    display: flex;
    flex-direction: column;
    /* border: var(--border); */
}

.main__part-first {
    position: absolute;
    top: 20px;
    right: 10px;
    bottom: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    bottom: -25%;
}

.main__part-second {
    position: absolute;
    top: 100vh;
    right: 10px;
    bottom: 10px;
    left: 10px;
    align-items: flex-end;
}

.part__logotype {
    scale: 7.5;
    right: 20%;
    top: 35%;
    rotate: 5deg;
}

.part__heading {
    width: max-content;
    background: var(--green);
    color: black;
    font-size: 1.7em;
    padding: 0 20px 0 5px;
    box-shadow: var(--box-shadow);
}

.part__heading.second {
    align-self: center;
}

.part__count {
    position: absolute;
    top: 30%;
    left: 2%;
    font-size: 3.7em;
    color: var(--green);
    font-family: var(--font);
}

.description {
    color: rgb(92, 234, 189);
    padding: 5px;
    font-size: .93em;
    text-align: justify;
    text-indent: 15px;
    letter-spacing: 0.7px;
    line-height: 1.3;
    word-spacing: -1px;
}

.description.first {
    margin-right: 45%;
}

.description.second {
    margin-left: 25%;
}</style>