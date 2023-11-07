<template>
    <div class="place-description">
        {{ props.activePlace }}
    </div>
</template>

<script setup>

const props = defineProps({
    activePlace: {
        type: String,
        default: 'None',
        required: true,
    }
});


</script>

<style scoped>
.place-description {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>