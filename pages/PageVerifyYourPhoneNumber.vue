<template>
    <ComponentCenter>
        <!-- start checkEmail -->
        <div class="container">
            <router-link to="/">
                <img src="/assets/images/arrowBack.png">
            </router-link>
            <ComponentLast />
            <div class="text-center mt-5">
                <img src="/assets/images/MessageText.png" alt="">
                <componentText></componentText>
            </div>
            <form action="" method="get" class="mt-4 row gap-3 gap-md-0">
                <div class="col col-lg-3 text-center" v-for="item in 4" :key="index">
                    <input type="text" class="rounded-3 text-center inputWidthEmail borderColorNormal pt-3 pb-2"
                        placeholder="*">
                </div>
                <!-- <div class="mt-4 col col-lg-3 text-center" v-for="item in 4" :key="index">
                    <input type="text" class="rounded-3 text-center inputWidthEmail inputWidthEmailTrue pt-3 pb-2"
                        placeholder="*">
                </div>
                <div class="mt-4 col col-lg-3 text-center" v-for="item in 4" :key="index">
                    <input type="text" class="rounded-3 text-center inputWidthEmail inputWidthEmailFalse pt-3 pb-2"
                        placeholder="*">
                </div> -->
                <div class="d-flex justify-content-end mt-5">
                    <router-link to="/userProfile" class="border ButtonContinue rounded-1" @click="functionCheckForm">
                        <span class="fw-bold spanContinue">Continue</span>
                    </router-link>
                </div>
            </form>
        </div>
        <!-- start checkEmail -->
    </ComponentCenter>
</template>

<script setup>
import ComponentCenter from "/components/componentCenter/componentCenter.vue";
import ComponentLast from "/components/componentCenter/componentLast";
import componentText from "/components/componentCenter/textComponent";

const functionCheckForm = () => {
    console.log("welcome");
}
</script>