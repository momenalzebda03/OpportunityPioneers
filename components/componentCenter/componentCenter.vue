<template>
    <div class="divHayThere pt-md-0">
        <div class="h-100 d-flex justify-content-center align-items-start align-items-md-center">
            <div class="shadow-lg rounded-4 p-5 divHayPerint">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineOptions } from 'vue';

defineOptions({
    name: 'ComponentCenter',
});
</script>