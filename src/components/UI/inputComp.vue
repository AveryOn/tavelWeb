<template>
    <input 
    class="input" 
    v-model="value"
    :type="inputType"
    >
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: [String, Number],
    inputType: String,
});
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style scoped>
.input {
    margin: 5px;
    border: 1px solid var(--green);
    background-color: rgba(0,0,0,0);
    color: var(--green);
    padding: 5px 10px;
    border-radius: 6px;
    font-family: 'Ubuntu', sans-serif;
    text-decoration-line: overline;
}
.input:focus{
    outline: 1px solid var(--green);
}
</style>