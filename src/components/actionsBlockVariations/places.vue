<template>
    <div class="action-block__places">
        <div class="places__first-part">
            <div class="flag" id="Alaska"></div>
            <!-- <div class="flag" id="Canada"></div>
            <div class="flag" id="USA"></div> -->
        </div>
        <div class="places__second-part">

        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.action-block__places {
    position: relative;
    width: 100%;
    border-top: var(--border);
    margin-top: 5px;
    padding: 5px;
}
.places__first-part {
    width: 100%;
    margin: 5px;
    border-top: var(--border);
}
.flag {
    height: 150px;
    width: 50%;
    background-size: cover;
    background-position: center;
}
#Alaska {
    background-image: url(../../images/flags/Alaska.jpg);
    border: var(--border);
}
/* #Canada {
    background-image: url(../../images/flags/Canada.png);
    width: 30%;
    height: 50%;
}
#USA {
    background-image: url(../../images/flags/USA.jpg);
    width: 30%;
    height: 50%;
} */
</style>