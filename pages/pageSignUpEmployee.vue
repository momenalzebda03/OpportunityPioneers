<template>
    <!-- start signUpEmploeey -->
    <componentCenter style="padding-top: 220px !important;">
        <div class="container">
            <router-link to="/">
                <img src="/assets/images/arrowBack.png">
            </router-link>
            <ComponentLast />
        </div>
        <div class="mt-5">
            <ComponentCenterText />
            <form action="" method="get">
                <div class="mt-4 d-flex flex-column gap-4">
                    <div class="w-100 position-relative">
                        <label class="labelVaild fw-bold">Full Name</label>
                        <div class="d-flex flex-column mt-2 gap-2">
                            <input type="text" placeholder="Content" class="rounded-3 p-2 border">
                            <span>Helper Place holder</span>
                        </div>
                    </div>
                    <div class="row rowChild">
                        <div class="col-lg-6">
                            <div class="position-relative">
                                <label class="labelVaild fw-bold">Email Address</label>
                                <div class="mt-2 position-relative">
                                    <div class="divLine">
                                        <input type="email" placeholder="Content"
                                            class="w-100 inputPadding rounded-3 p-2 border border-2" v-model="inputGange" />
                                        <span v-if="containsAcshen"></span>
                                        <img src="/assets/images/Email.png" class="position-absolute imageWidthInput" alt=""
                                            v-else-if="!inputGange" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="position-relative">
                                <label class="labelVaild fw-bold">Phone Number</label>
                                <div class="mt-2 position-relative">
                                    <input type="text" placeholder="(+970)"
                                        class="w-100 inputPadding rounded-3 p-2 border border-2" v-model="inputGange1" />
                                    <span v-if="containsAcshen1"></span>
                                    <details v-else-if="!inputGange1" class="position-absolute selectWaths py-1 px-1">
                                        <summary>
                                            <img src='/assets/images/palisten.png' alt="" />
                                        </summary>
                                        <div class="bg-white">
                                            <li v-for="option in options" :key="option">
                                                <img :src="option.image" alt="">
                                            </li>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="position-relative">
                                <label class="labelVaild fw-bold">Password</label>
                                <div class="mt-2 position-relative">
                                    <div class="divLine">
                                        <input type="Password" placeholder="Content"
                                            class="w-100 inputPadding inputPaddingOverflow rounded-3 p-2 border border-2"
                                            v-model="inputGange2" />
                                        <span v-if="containsAcshen2"></span>
                                        <img src="/assets/images/yayClose.png" alt=""
                                            class="position-absolute imageWidthInput imageWidthInputOverflow"
                                            v-else-if="!inputGange2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="position-relative">
                                <label class="labelVaild fw-bold">Confirm Password</label>
                                <div class="mt-2 position-relative">
                                    <div class="divLine">
                                        <input type="Password" placeholder="Content"
                                            class="w-100 inputPadding inputPaddingOverflow rounded-3 p-2 border border-2"
                                            v-model="inputGange3" />
                                        <span v-if="containsAcshen3"></span>
                                        <img src="/assets/images/yayClose.png" alt=""
                                            class="position-absolute imageWidthInput imageWidthInputOverflow"
                                            v-else-if="!inputGange3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mt-3">
                            <!-- <input type="submit" class="border ButtonContinue rounded-1"
                                value="Continue"> -->
                            <router-link to="/PageEmailAddressVerification" class="border ButtonContinue rounded-1">
                                <span class="fw-bold spanContinue">Continue</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </componentCenter>
    <!-- end signUpEmploeey -->
</template>

<script setup>
import componentCenter from "/components/componentCenter/componentCenter";
import ComponentCenterText from "/components/componentCenter/textComponent";
import ComponentLast from "/components/componentCenter/componentLast";
import { ref, computed } from 'vue';

const options = ref([
    { value: '1', image: 'http://localhost:3000/_nuxt/assets/images/palisten.png' },
    { value: '2', image: 'http://localhost:3000/_nuxt/assets/images/arrow.png' }
])

const inputGange = ref('');
const inputGange1 = ref('');
const inputGange2 = ref('');
const inputGange3 = ref('');

const containsAcshen = computed(() => {
    return inputGange.value.includes('acshen');
});

const containsAcshen1 = computed(() => {
    return inputGange1.value.includes('acshen');
});

const containsAcshen2 = computed(() => {
    return inputGange2.value.includes('acshen');
});

const containsAcshen3 = computed(() => {
    return inputGange3.value.includes('acshen');
});
</script>