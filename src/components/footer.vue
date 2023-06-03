<template>

    <footer class="footer">
        <div class="footer__location">
            <h2 class="footer__logo">TravelWeb</h2>
            <p class="geotag">
                <locationIcon class="icons"></locationIcon>
                402 U.S. Rte 2, Rugby, ND 58368, U.S.A
            </p>
        </div>

        <div class="footer__social-media-list">
            <facebookIcon class="icons"></facebookIcon>
            <instagramIcon class="icons"></instagramIcon>
            <pintersetIcon class="icons"></pintersetIcon>
            <twitterIcon class="icons"></twitterIcon>
            <youtubeIcon class="icons"></youtubeIcon>
        </div>
    </footer>

</template>
<script setup>
import facebookIcon from '@/components/icons/facebook.vue'
import instagramIcon from '@/components/icons/instagram.vue'
import locationIcon from '@/components/icons/location.vue'
import pintersetIcon from '@/components/icons/pinterest.vue'
import twitterIcon from '@/components/icons/twitter.vue'
import youtubeIcon from '@/components/icons/youtube.vue'
import { onMounted, watch, ref } from 'vue';
import { gsap } from 'gsap'

const props = defineProps({
    isScrollBottom: {
        type: Boolean,
        default: false,
    }
})

watch( props, (value) => {
    if(value.isScrollBottom){
        gsap.to('.footer', { bottom: 0, duration: 0.5 });
    }else{
        gsap.to('.footer', { bottom: '-22vh', duration: 1 });
    }
})

onMounted(() => {

    // На каждую иконку добавляется анимация подсвечивания цветом
    const icons = document.querySelectorAll('.icons');
    icons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transition = 'fill .5s ease'
        })
    })


})


</script>
<style scoped>
.footer {
    position: absolute;
    bottom: -22vh;
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--green);
    background-color: rgba(0,0,0, .4);
    border-top: 2px solid var(--green);
    z-index: 20;
}
.footer__location{
    position: absolute;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    left: 20px;
}
.geotag{
    display: flex;
    align-items: center;
    font-size: calc(var(--sync) / 1.6);
}
.footer__social-media-list{
    position: absolute;
    bottom: 10px;
    display: flex;
    align-self: center;
}
/* Задает внешние отсупы всем иконкам  */
.icon{
    margin: 2px 5px;
}
</style>