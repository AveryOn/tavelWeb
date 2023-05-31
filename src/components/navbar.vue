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
    z-index: 9;
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
    -webkit-transform: translate(calc(var(--mouseMoveX) / 250), calc(var(--mouseMoveY) / 250));
    -ms-transform: translate(calc(var(--mouseMoveX) / 250), calc(var(--mouseMoveY) / 250));
    transform: translate(calc(var(--mouseMoveX) / 250), calc(var(--mouseMoveY) / 250));
}
.header__button{
    background: none;
    border: none;
    color: var(--green);
    cursor: pointer;
}
</style>