<template>

    <footer class="footer">
        <slot></slot>
    </footer>

</template>
<script setup>

</script>
<style scoped>
.footer {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-top: var(--border);
}
</style>