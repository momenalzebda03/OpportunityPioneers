<template>
    <div>
        <div v-if="isClient"></div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

const isClient = ref(false);

onMounted(() => {
    isClient.value = true;
});
</script>