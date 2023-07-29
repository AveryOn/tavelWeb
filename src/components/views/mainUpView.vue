<template>

    <div class="main__up">
        <div class="layer layer__front"></div>
        <div class="layer layer__middle"></div>
        <h1 class="main__title">Unbelievable adventures!</h1>
    </div>

</template>

<script setup>
</script>

<style scoped>
/* СТИЛИ ДЛЯ СЕЛЕКТОРА .layer НАХОДЯТСЯ В App.vue */
.main__up {
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
    background-image: url(../../images/background-main.jpg);
    transform: translate3d(calc(var(--mouseMoveX) / -220), calc(var(--mouseMoveY) / -220), 0);
    transition: var(--transition);
    background-size: cover;
    background-position: center;
    overflow: hidden;
}

.layer__front {
    background-image: url(../../images/main--front.png);
    /* -webkit-transform: translate3d(0, calc((var(--scrollTop) / -10)), 0); */
    /* transform: translate3d(0, calc((var(--scrollTop) / -10)), 0); */
    transform: translate3d(calc(var(--mouseMoveX) / 200), calc(var(--mouseMoveY) / 200), 0);
    transition: var(--transition);
    z-index: 9;
    background-size: cover;
    background-position: center;
}

.layer__middle {
    background-image: url(../../images/main--middle.png);
    -webkit-transform: translate3d(0, calc((var(--scrollTop) / -8)), 0);
    transform: translate3d(0, calc((var(--scrollTop) / -8)), 0);
    transition: var(--transition);
    transform: translate3d(calc(var(--mouseMoveX) / 170), calc(var(--mouseMoveY) / 170), 0);
    z-index: 9;
    background-size: cover;
    background-position: center;
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

/* DELETE!!! */
.TEST-BLOCK{
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 9999999999999999;
    background-color: rgba(0, 0, 0, .5);
    width: 50%;
    height: 50%;
    border-radius: 30px;
    padding: 30px;
}
</style>