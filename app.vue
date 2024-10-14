<template>
  <ComponentNavbarSignUp
    v-if="currentRoute != '/userProfile' || currentRoute !== '/pageCreateDataUser' || currentRoute !== '/companyProfile'" />
  <ComponentNavbarUserProfile
    v-if="currentRoute == '/userProfile' || currentRoute == '/pageCreateDataUser' || currentRoute == '/companyProfile'" />
  <NuxtPage />
</template>

<script setup>
import ComponentNavbarSignUp from "@/components/folderHeader/NavbarSignUp";
import ComponentNavbarUserProfile from "@/components/folderHeader/NavbaruserProfile";

import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute();
const currentRoute = computed(() => route.path);
</script>