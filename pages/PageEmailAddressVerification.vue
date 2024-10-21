<template>
    <ComponentCenter>
        <!-- start checkEmail -->
        <div class="container">
            <button @click="goBack" class="border border-0 bg-transparent">
                <img src="/assets/images/arrowBack.png" alt="Back">
            </button>
            <ComponentLast :hideJobPreferences="hideJobPreferences" />
            <div class="text-center mt-5">
                <img src="/assets/images/smsNotification.png" alt="">
                <componentText />
            </div>
            <form action="" method="get" class="mt-4 row gap-3 gap-md-0" @submit.prevent="handleSubmit">
                <div class="row gap-3 gap-lg-0">
                    <div class="col text-center" v-for="index in 5" :key="index">
                        <input type="text" maxlength="1" v-model="inputValues[index]" :class="inputClasses[index]"
                            class="rounded-3 text-center inputWidthEmail pt-3 pb-2 fw-bold" placeholder="*"
                            @input="checkForNumbers" />
                    </div>
                </div>
                <div class="d-flex justify-content-end mt-5">
                    <input type="submit" class="border ButtonContinue rounded-1" value="Continue" @click="inputSubmit" />
                </div>
            </form>
        </div>
        <!-- start checkEmail -->
    </ComponentCenter>
</template>

<script setup>
import ComponentCenter from '/components/componentCenter/componentCenter.vue';
import ComponentLast from '/components/componentCenter/componentLast.vue';
import componentText from '/components/componentCenter/textComponent.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const inputValues = ref(['', '', '', '', '']);
const inputClasses = ref(['borderColorNormal', 'borderColorNormal', 'borderColorNormal', 'borderColorNormal', 'borderColorNormal']);
const hideJobPreferences = ref(false);

const checkForNumbers = () => {
    hideJobPreferences.value = inputValues.value.some(value => !isNaN(value) && value !== '');
};

const inputSubmit = () => {
    inputValues.value.forEach((value, index) => {
        if (isNaN(value) || value === '') {
            inputClasses.value[index] = 'borderColorNormal';
        } else {
            inputClasses.value[index] = 'inputWidthEmailTrue';
        }
    });
    // router.push('/JobPreferences');
};

const goBack = () => {
    router.go(-1);
};
</script>