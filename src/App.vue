<template>
    <div class="wrapper">

        <header class="header">header</header>

        <main class="main">
            <div class="main__block">
                <div class="layer layer__front"></div>
                <div class="layer layer__middle"></div>
                <div class="layer layer__back"></div>
            </div>
        </main>

        <footer class="footer">footer</footer>

    </div>
</template>

<script setup>

</script>

<style>
@import '~@csstools/normalize.css';

:root {
    --sync: calc(1vw + 1vh);
    --border: 1px solid white;
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
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: var(--border);
    z-index: 10;
}

.main {
    width: 100%;
    height: max-content;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: var(--border); */
}

.main__block {
    width: 100%;
    min-height: 100vh;
    background-image: url(./images/background-main.jpg);
    background-size: cover;
    background-position: center;
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
    z-index: 5;
}
.layer__middle{
    background-image: url(./images/main--middle.png);
    z-index: 4;
}
/* .layer__back{
    background-image: url(./images/main--back.png);
    z-index: 3;
} */

.footer {
    width: 100%;
    display: flex;
    align-items: center;
    border-top: var(--border);
}</style>