<!-- ВКЛАДКА ДЛЯ ЛОГИНА И РЕГИСТРАЦИИ -->
<template>
    <div 
    class="menu-logup" 
    @click="$emit('closeLogup')" 
    >
        
    </div>
</template>

<script setup>


</script>

<style scoped>
.menu-logup{
    position: absolute;
    right: 0;
    width: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, .55);
    z-index: 16;
}
   
</style>