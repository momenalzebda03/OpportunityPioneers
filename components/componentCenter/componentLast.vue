<template>
    <ul class="row p-0 mt-4">
        <li class="col">
            <div class="d-flex flex-column gap-2">
                <span class=" text-nowrap spanLast"
                    :class="{ active: currentRoute === '/formCreateUser' || currentRoute == '/PageVerifyYourPhoneNumber', activeEmail: currentRoute === '/PageEmailAddressVerification' || currentRoute == '/PageVerifyYourPhoneNumber' }">Personal
                    Information</span>
                <div class="lineLast ms-3 position-relative rounded-2"
                    :class="{ active: currentRoute === '/formCreateUser' || currentRoute == '/PageVerifyYourPhoneNumber', activeEmail: currentRoute === '/PageEmailAddressVerification' || currentRoute == '/PageVerifyYourPhoneNumber' }">
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
        <!-- v-if="currentRoute == '/PageEmailAddressVerification' || currentRoute == '/PageVerifyYourPhoneNumber'" -->
        <!-- :class="{ 'active': isActive }" -->
        <li class="col" v-if="activeIndex !== 1 && activeIndex !== 2">
            <div class="d-flex flex-column gap-2">
                <span class="text-nowrap spanLast">Job Preferences</span>
                <div class="lineLast ms-3 position-relative rounded-2"></div>
            </div>
        </li>
        <!-- <li class="col"
            v-if="currentRoute == '/PageEmailAddressVerification' || currentRoute == '/PageVerifyYourPhoneNumber'">
            <div class=" d-flex flex-column gap-2">
                <span class="text-nowrap spanLast">Job Preferences</span>
                <div class="lineLast ms-3 position-relative rounded-2"></div>
            </div>
        </li> -->
    </ul>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed, ref, onMounted } from 'vue';

const route = useRoute();
const currentRoute = computed(() => route.path);
const activeIndex = ref(null);

onMounted(() => {
    const storedIndex = localStorage.getItem('selectedIndex');
    if (storedIndex !== null) {
        activeIndex.value = Number(storedIndex);
    }
});

// onMounted(() => {
//     const storedIndex = localStorage.getItem('selectedIndex');
//     if (storedIndex !== null) {
//         activeIndex.value = Number(storedIndex);
//     }
//     console.log(activeIndex.value);
// });

// const isActive = computed(() => activeIndex.value === 0);
</script>