<template>
    <span class="loading" v-show="false" :style="isLoadingComputed"></span>
</template>

<script setup>
// для Vue
import { computed, ref, onMounted } from 'vue';

const isLoading = defineProps({isLoading: [Boolean]})


const loading = {
    isLoading: ref(false),
}

// Вычисляет стили для спинера загрузки
const isLoadingComputed = computed(() => {
    if(isLoading){
        return {
            visibility: 'visible',
            scale: 1,
        }
    }else{
        return {
            visibility: 'hidden',
            scale: 0
        }
    }
})

onMounted(() => {
})

</script>

<style scoped>
.loading{
    visibility: hidden;
    scale: 0;
    position: fixed;
    left: var(--cursorX);
    top: var(--cursorY);
    background-color: rgba(0, 0, 0, .3);
    width: 12px;
    height: 12px;
    border: 1px solid var(--green);
    border-radius: 50%;
    z-index: 9999999;
    animation-name: loading;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}
</style>