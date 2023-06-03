<template>
    <header class="header">
        <p class="header__logo-name">TravelWeb</p>
        <button @click="$emit('openLogup')" class="header__button">
            <span class="material-symbols-outlined">
                person
            </span>
        </button>
    </header>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
const scrollValues = reactive([0, 0]);

onMounted(() => {
    const footer = document.querySelector('.footer')
    const basicSectorPosition = Math.round(+((document.body.clientHeight - window.innerHeight) - Math.floor(footer.clientHeight)).toFixed());
    if(window.scrollY === 0) scrollValues[0] = 0;

    document.addEventListener('scroll', () => {
        if(scrollValues.length >= 4){
            scrollValues.splice(0,2)
        }
        if(window.scrollY > scrollValues[scrollValues.length-2] && window.scrollY <= basicSectorPosition ){
            window.scrollTo({top: basicSectorPosition});
        }
        if(window.scrollY < scrollValues[scrollValues.length-2] && window.scrollY >= basicSectorPosition ){

        }
        scrollValues.push(Math.round(window.scrollY))
        // console.log("Предыдущий: ", scrollValues[scrollValues.length - 2], 'Текущий: ', Math.round(window.scrollY));

    })
})

</script>

<style scoped>
.header {
    position: absolute;
    right: 0;
    left: 0;
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 20px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 10;
    border-bottom: 1px solid var(--green);
    background-color: rgba(0, 0, 0, 0.36);
}
.header__logo-name{
    position: relative;
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
</style>