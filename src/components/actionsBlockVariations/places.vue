<template>
    <div style="position: relative;">
        <div class="action-block__places">
            <div class="places__first-part">
                <div class="flags">
                    <!-- Alaska -->
                    <div class="flag__container">
                        <h2 class="flag__title">Alaska</h2>
                        <div>
                            <img class="flag" id="Alaska" src="../../images/flags/Alaska.jpg">
                            <img class="ghost" id="alaska-ghost" src="../../images/ghosts/Alaska_ghost.png"
                                alt="alaska-ghost">
                        </div>
                    </div>

                    <!-- Canada -->
                    <div class="flag__container">
                        <h2 class="flag__title">Canada</h2>
                        <div>
                            <img class="flag" id="Canada" src="../../images/flags/Canada.png">
                            <img class="ghost" id="canada-ghost" src="../../images/ghosts/Canada-ghost.png"
                                alt="canada-ghost">
                        </div>
                    </div>

                    <!-- USA -->
                    <div class="flag__container">
                        <h2 class="flag__title">United States of America</h2>
                        <div>
                            <img class="flag" id="USA" src="../../images/flags/USA.jpg">
                            <img class="ghost" id="usa-ghost" src="../../images/ghosts/usa_ghost.png" alt="usa-ghost">
                        </div>
                    </div>
                </div>
                <div class="places__description">
                    <h1 class="places__description--title first">{{ titleFirst }}</h1>
                    <h1 class="places__description--title second">{{ titleSecond }}</h1>
                </div>
            </div>
            <div class="places__second-part" v-show="false">

            </div>
        </div>
    </div>
</template>

<script setup>
import animateText from '@/tools/animations';
import { ref, watch, onMounted } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    }
});

function hover(elementID, isEnter) {
    if (isEnter) {
        gsap.to(`#${elementID}`, { height: '100%', top: '0', opacity: 1, duration: 0.4 });
    }
    else {
        gsap.to(`#${elementID}`, { height: '0%', top: '100%', opacity: 0, duration: 0.8 });
    }
}

const titleFirst = ref('');
const titleSecond = ref('');

// Анимация появления текста описания
function appearDescription() {
    return new Promise((resolve, reject) => {
        try {
            animateText('Just choose your place where you would like to visit...', (res, done) => {
                titleFirst.value = res;
                if (done) {
                    setTimeout(() => {
                        animateText('...and the grand journey will begin!', (res, done) => {
                            titleSecond.value = res;
                            if(done) {
                                return resolve(true);
                            }
                        }, true, 40);
                    }, 1000)
                }
            }, true, 30);
        } catch (err) {
            reject(err);
        }
    })
}

onMounted(() => {
    watch(() => props.isOpen, async(value) => {
        if (value && titleFirst.value === '' && titleSecond.value === '') {
            // Анимация появления текста описания
            await appearDescription();
        }
    });

    const flags = document.querySelectorAll('.flag__container');
    flags.forEach((entry) => {
        entry.addEventListener('mouseenter', e => {
            hover(entry?.children[1]?.children[1]?.id, true);
        })
        entry.addEventListener('mouseleave', (e) => {
            hover(entry?.children[1]?.children[1]?.id, false);
        })
    });
})


</script>

<style scoped>
.action-block__places {
    position: absolute;
    top: 5px;
    right: 0;
    bottom: 0;
    left: 0;
    border-top: var(--border);
}

.places__first-part {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
}

.places__second-part {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.flags {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40%;
    display: flex;
}

.flag__container {
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.flag__container>div {
    position: relative;
    width: max-content;
    height: max-content;
    margin: 5px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
}

.ghost {
    position: absolute;
    width: 100%;
    height: 0%;
    top: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    border-radius: 10px;
}

.flag__title {
    color: var(--green);
    font-family: var(--font);
    font-size: calc(var(--sync) / 1.2);
}

.flag {
    width: calc(var(--sync) * 9.5);
    height: calc(var(--sync) * 4.8);
    overflow: hidden;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    cursor: pointer;
}

#Alaska {}

#USA {}

.places__description {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.places__description--title {
    font-size: calc(var(--sync));
    background: var(--green);
    font-family: var(--font);
    color: rgb(50, 50, 50);
    padding: 0 20px 0 5px;
}

.places__description--title.first {
    position: absolute;
    top: 20%;
    left: 20px;
    transform: rotate(2deg);
}

.places__description--title.second {
    position: absolute;
    transform: rotate(-2deg);
    right: 20px;
    top: 45%;
}
</style>