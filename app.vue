<template>
  <ComponentNavbarSignUp v-if="currentRoute != '/userProfileProjects'" />
  <ComponentNavbarUserProfile v-if="currentRoute == '/userProfileProjects'" />
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