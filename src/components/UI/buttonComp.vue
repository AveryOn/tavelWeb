<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped>
.button{
    background-color: rgba(0,0,0,0);
    border: 1px solid var(--green);
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
    font-family: 'Ubuntu', sans-serif;
    color: var(--green);
    cursor: pointer;
}
.button:hover{
    color: var(--green-hover);
    border: 1px solid var(--green-hover);
}
.button:focus{
    outline: 1px solid rgb(0, 255, 200);
}
</style>