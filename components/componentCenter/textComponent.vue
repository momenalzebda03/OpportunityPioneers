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
    { url: "/formCreateUser", title: "Email Address Verification", text: "We have sent a verification code to your email address. Please enter the code in the box below to verify your email." },
    // { url: "/JobPreferences", title: "Job Preferences", text: "Providing details about your needs will help us find job opportunities worldwide that are specifically tailored to your expertise and career goals." },
];
</script>