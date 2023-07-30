<template>
    <div>
        <div class="tickets-block">
            <nav class="tickets-block__sorting">
                
            </nav>
            <ticketItem></ticketItem>
        </div>
    </div>
</template>

<script setup>
import ticketItem from '@/components/ticketItem.vue';

</script>

<style scoped>
.tickets-block {
    height: 100%;
    border-top: var(--border);
    margin-top: 5px;
}
</style>