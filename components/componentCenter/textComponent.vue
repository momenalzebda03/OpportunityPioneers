<template>
    <div>
        <div class="text-center d-flex flex-column gap-2" v-if="currentRoute === '/'">
            <h1 class="fs-3 fw-bold">Hey there, What brings you here today?</h1>
            <h2 class="fs-6 hChild">Please choose the option that best describes you to proceed with the sign-up process.
            </h2>
        </div>
        <div class="text-center d-flex flex-column gap-2" v-if="currentRoute === '/SignUpJobSeeker'">
            <h1 class="fs-3 fw-bold">Sign up as Job Seeker</h1>
            <h2 class="fs-6 hChild">Please enter the information below to continue the registration process</h2>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

// Get the current route
const route = useRoute();

// Create a computed property for the current path
const currentRoute = computed(() => route.path);
</script>

<style scoped>
/* Add your styles here */
</style>