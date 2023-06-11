<template>
    <button class="close-btn">
        <span class="material-symbols-outlined">
            close
        </span>
    </button>
</template>


<style scoped>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48;
}
.close-btn {
    cursor: pointer;
    color: var(--green);
    outline: 1px solid rgba(0,0,0,0);
    padding: 0;
    border: none;
    background: none;
}
.close-btn:hover{
    cursor: pointer;
    color: var(--green-hover);
}
</style>