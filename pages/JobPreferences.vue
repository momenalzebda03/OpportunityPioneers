<template>
    <ComponentCenter>
        <!-- start checkEmail -->
        <div class="container">
            <button @click="goBack" class="border border-0 bg-transparent">
                <img src="/assets/images/arrowBack.png" alt="Back">
            </button>
            <ComponentLast />
            <div class="text-center mt-5">
                <componentText />
            </div>
            <div>
                <p>welcome</p>
            </div>
            <div class="d-flex justify-content-end mt-5">
                <router-link to="/userProfile" class="border ButtonContinue rounded-1">
                    <span class="fw-bold spanContinue">Continue</span>
                </router-link>
            </div>
        </div>
        <!-- start checkEmail -->
    </ComponentCenter>
</template>

<script setup>
import ComponentCenter from "/components/componentCenter/componentCenter.vue";
import ComponentLast from "/components/componentCenter/componentLast";
import componentText from "/components/componentCenter/textComponent";

const router = useRouter();
const goBack = () => {
    router.go(-1);
};
</script>