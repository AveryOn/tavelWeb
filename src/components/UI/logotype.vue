<template>
    <div class="logotype">
        <span class="T">T</span>
        <span class="W">w</span>
    </div>
</template>

<script setup>

</script>

<style scoped>
.logotype {
    position: absolute;
    width: max-content;
    height: max-content;
    color: var(--green);
    border: var(--border);
    padding: -10px 0;
    pointer-events: none;
}
.T {
    position: absolute;
    text-shadow: 1px 1px 8px black;
    left: -0.5px;
    right: 1px;
    top: 0px;
    bottom: 1px;
    z-index: 40;
    
}
.W {
    z-index: 35;
}

</style>