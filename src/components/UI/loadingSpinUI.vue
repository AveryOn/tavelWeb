<template>
    <span 
    class="loading" 
    v-show="props.isLoading"
    >
    </span>
</template>

<script setup>
// для Vue
const props = defineProps({isLoading: [Boolean]})

</script>

<style scoped>
.loading{
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

@keyframes loading {
    0%{
        border-top: 2px solid rgb(12, 255, 182);
    }
    25%{
        border-right: 2px solid rgb(12, 255, 247);
    }
    50%{
        border-bottom: 2px solid rgb(12, 255, 113);
    }
    75%{
        border-left: 2px solid rgb(12, 247, 255);
    }
}
</style>