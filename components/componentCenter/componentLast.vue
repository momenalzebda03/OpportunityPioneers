<template>
    <ul class="row p-0 mt-4">
        <!-- <li class="col">
            <div class="d-flex flex-column gap-2">
                <span class=" text-nowrap spanLast active">Personal Information</span>
                <div class="lineLast active ms-3 position-relative rounded-2"></div>
            </div>
        </li> -->
        <li class="col">
            <div class="d-flex flex-column gap-2">
                <span class=" text-nowrap spanLast activeEmail active">Personal Information</span>
                <div class="lineLast activeEmail active ms-3 position-relative rounded-2"></div>
            </div>
        </li>
        <li class="col">    
            <div class="d-flex flex-column gap-2">
                <span class="text-nowrap spanLast activeEmail active">Email Verification</span>
                <div class="lineLast ms-3 activeEmail active position-relative rounded-2"></div>
            </div>
        </li>
        <li class="col">
            <div class="d-flex flex-column gap-2">
                <span class="text-nowrap spanLast">Phone Verification</span>
                <div class="lineLast ms-3 position-relative rounded-2"></div>
            </div>
        </li>
        <li class="col" v-if="currentRoute == '/pageSignUpJobSeeker' || currentRoute == '/PageEmailAddressVerification'">
            <div class=" d-flex flex-column gap-2">
                <span class="text-nowrap spanLast">Job Preferences</span>
                <div class="lineLast ms-3 position-relative rounded-2"></div>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute();
const currentRoute = computed(() => route.path);

// if (currentRoute.value == "/PageEmailAddressVerification") {
//     console.log("welcome");
// }
</script>