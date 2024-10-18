<template>
    <div v-for="(item, index) in ApiText" :key="index">
        <div class="text-center d-flex flex-column gap-2" v-if="currentRoute === item.url">
            <h1 class="fs-3 fw-bold">{{ item.title }}</h1>
            <h2 class="fs-6 hChild">{{ item.text }}</h2>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const currentRoute = computed(() => route.path);

const ApiText = [
    { url: "/", title: "Hey there, What brings you here today?", text: "Please choose the option that best describes you to proceed with the sign-up process." },
];
</script>