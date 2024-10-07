<template>
    <ul class="row p-0 mt-4">
        <li class="col">
            <div class="d-flex flex-column gap-2">
                <span class=" text-nowrap spanLast"
                    :class="{ active: currentRoute === '/PageEmailAddressVerification' || currentRoute == '/pageSignUpJobSeeker' || currentRoute == '/pageSignUpEmployee' || currentRoute == '/pageSignUpSupportingInitiative' || currentRoute == '/PageVerifyYourPhoneNumber', activeEmail: currentRoute === '/PageEmailAddressVerification' || currentRoute == '/PageVerifyYourPhoneNumber' }">Personal
                    Information</span>
                <div class="lineLast ms-3 position-relative rounded-2"
                    :class="{ active: currentRoute === '/PageEmailAddressVerification' || currentRoute == '/pageSignUpJobSeeker' || currentRoute == '/pageSignUpEmployee' || currentRoute == '/pageSignUpSupportingInitiative' || currentRoute == '/PageVerifyYourPhoneNumber', activeEmail: currentRoute === '/PageEmailAddressVerification' || currentRoute == '/PageVerifyYourPhoneNumber' }">
                </div>
            </div>
        </li>
        <li class="col">
            <div class="d-flex flex-column gap-2">
                <span class="text-nowrap spanLast"
                    :class="{ active: currentRoute == '/PageVerifyYourPhoneNumber', activeEmail: currentRoute == '/PageVerifyYourPhoneNumber' }">Email
                    Verification</span>
                <div class="lineLast ms-3 position-relative rounded-2"
                    :class="{ active: currentRoute == '/PageVerifyYourPhoneNumber', activeEmail: currentRoute == '/PageVerifyYourPhoneNumber' }">
                </div>
            </div>
        </li>
        <li class="col">
            <div class="d-flex flex-column gap-2">
                <span class="text-nowrap spanLast">Phone Verification</span>
                <div class="lineLast ms-3 position-relative rounded-2"></div>
            </div>
        </li>
        <li class="col"
            v-if="currentRoute == '/pageSignUpJobSeeker' || currentRoute == '/PageEmailAddressVerification' || currentRoute == '/PageVerifyYourPhoneNumber'">
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
</script>