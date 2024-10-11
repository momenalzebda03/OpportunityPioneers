<template>
    <ComponentCenter>
        <!-- start checkEmail -->
        <div class="container">
            <button @click="goBack" class="border border-0 bg-transparent">
                <img src="/assets/images/arrowBack.png" alt="Back">
            </button>
            <ComponentLast />
            <div class="text-center mt-5">
                <img src="/assets/images/smsNotification.png" alt="">
                <componentText />
            </div>
            <componentCenterInputs />
            <div class="d-flex justify-content-end mt-5">
                <router-link to="/JobPreferences" class="border ButtonContinue rounded-1">
                    <span class="fw-bold spanContinue">Continue</span>
                </router-link>
            </div>
        </div>
        <!-- start checkEmail -->
    </ComponentCenter>
</template>

<script setup>
import ComponentCenter from '/components/componentCenter/componentCenter.vue';
import ComponentLast from '/components/componentCenter/componentLast.vue';
import componentText from '/components/componentCenter/textComponent.vue';
import componentCenterInputs from "/components/componentCenter/componentInputs";

const router = useRouter();
const goBack = () => {
    router.go(-1);
};
</script>