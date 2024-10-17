<template>
    <div class="divChildSelect shadow" style="padding-top: 150px; max-width: 600px; margin: auto;">
        <ul class="row p-0 mt-4 gap-3 gap-md-0">
            <li class="col step" v-for="(item, index) in items" :key="index">
                <div class="step-header d-flex flex-column gap-2"
                    :class="{ active: currentStep == index, completed: currentStep > index }" @click="goToStep(index)">
                    <span class="text-nowrap spanLast">
                        {{ item }}
                    </span>
                    <div class="lineLast ms-3 position-relative rounded-2"></div>
                </div>
            </li>
            <div class="navigation">
                <button @click="prevStep" :disabled="currentStep == 0">Previous</button>
                <button @click="nextStep" :disabled="currentStep >= items.length - 1">Next</button>
            </div>
        </ul>
        <div v-if="currentStep == 0">
            <p>Welcome to Step 1!</p>
        </div>
        <div v-if="currentStep == 1">
            <p>Welcome to Step 2!</p>
        </div>
        <div v-if="currentStep == 2">
            <p>Welcome to Step 3!</p>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const currentStep = ref(0);
const items = ['Personal Information', 'Email Verification', 'Job Preferences'];

const nextStep = () => {
    if (currentStep.value < items.length - 1) {
        currentStep.value++;
    }
};

const prevStep = () => {
    if (currentStep.value > 0) {
        currentStep.value--;
    }
};

const goToStep = (index) => {
    currentStep.value = index;
};
</script>

<!-- <template>
    <div class="divChildSelect">
        <div v-if="index == 0">
            start signUpSeeker 
            <componentCenter style="padding-top: 220px !important;">
                <div class="container">
                    <router-link to="/">
                        <img src="/assets/images/arrowBack.png">
                    </router-link>
                    <ComponentLast />
                </div>
                <div class="mt-5">
                    <div class="text-center d-flex flex-column gap-2">
                        <h1 class="fs-3 fw-bold">Sign up as Job Seeker</h1>
                        <h2 class="fs-6 hChild">Please choose the option that best describes you to proceed with the sign-up
                            process.</h2>
                    </div>
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
                                                    class="w-100 inputPadding rounded-3 p-2 border border-2"
                                                    v-model="inputGange" />
                                                <span v-if="containsAcshen"></span>
                                                <img src="/assets/images/Email.png"
                                                    class="position-absolute imageWidthInput" v-else-if="!inputGange" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 colChild">
                                    <div class="position-relative">
                                        <label class="labelVaild fw-bold">Phone Number</label>
                                        <div class="mt-2 position-relative">
                                            <input type="text" placeholder="(+970)"
                                                class="w-100 inputPadding rounded-3 p-2 border border-2"
                                                v-model="inputGange1" />
                                            <span v-if="containsAcshen1"></span>
                                            <details v-else-if="!inputGange1"
                                                class="position-absolute selectWaths py-1 px-1">
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
                                    <input type="submit" class="border ButtonContinue rounded-1"
                                value="Continue">
                                    <router-link to="/PageEmailAddressVerification" class="border ButtonContinue rounded-1">
                                        <span class="fw-bold spanContinue">Continue</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </componentCenter>
            end signUpSeeker
        </div>
<div v-if="index == 1">
            start signUpEmploeey
            <componentCenter style="padding-top: 220px !important;">
                <div class="container">
                    <router-link to="/">
                        <img src="/assets/images/arrowBack.png">
                    </router-link>
                    <ComponentLast />
                </div>
<div class="mt-5">
                    <div class="text-center d-flex flex-column gap-2">
                        <h1 class="fs-3 fw-bold">Sign up as Supporting Initiative</h1>
                        <h2 class="fs-6 hChild">Please choose the option that best describes you to proceed with the sign-up
                            process.</h2>
                    </div>
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
                                                    class="w-100 inputPadding rounded-3 p-2 border border-2"
                                                    v-model="inputGange" />
                                                <span v-if="containsAcshen"></span>
                                                <img src="/assets/images/Email.png"
                                                    class="position-absolute imageWidthInput" alt=""
                                                    v-else-if="!inputGange" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 colChild">
                                    <div class="position-relative">
                                        <label class="labelVaild fw-bold">Phone Number</label>
                                        <div class="mt-2 position-relative">
                                            <input type="text" placeholder="(+970)"
                                                class="w-100 inputPadding inputPaddingSelect rounded-3 p-2 border border-2"
                                                v-model="inputGange1" />
                                            <span v-if="containsAcshen1"></span>
                                            <details v-else-if="!inputGange1" :class="{ open: arrowOpen }"
                                                @click="toggleArrow"
                                                class="position-absolute selectWaths selectWathsWhats py-1">
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
                                    <input type="submit" class="border ButtonContinue rounded-1"
                                value="Continue">
                                    <router-link to="/PageEmailAddressVerification" class="border ButtonContinue rounded-1">
                                        <span class="fw-bold spanContinue">Continue</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </componentCenter>
            end signUpEmploeey
        </div>
<div v-if="index == 2">
            start signUpSupporting
            <componentCenter style="padding-top: 220px !important;">
                <div class="container">
                    <router-link to="/">
                        <img src="/assets/images/arrowBack.png" alt="">
                    </router-link>
                    <ComponentLast />
                </div>
<div class="mt-5">
                    <div class="text-center d-flex flex-column gap-2">
                        <h1 class="fs-3 fw-bold">Sign up as Employer</h1>
                        <h2 class="fs-6 hChild">Please choose the option that best describes you to proceed with the sign-up
                            process.</h2>
                    </div>
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
                                                    class="w-100 inputPadding rounded-3 p-2 border border-2"
                                                    v-model="inputGange" />
                                                <span v-if="containsAcshen"></span>
                                                <img src="/assets/images/Email.png"
                                                    class="position-absolute imageWidthInput" alt=""
                                                    v-else-if="!inputGange" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 colChild">
                                    <div class="position-relative">
                                        <label class="labelVaild fw-bold">Phone Number</label>
                                        <div class="mt-2 position-relative">
                                            <input type="text" placeholder="(+970)"
                                                class="w-100 inputPadding inputPaddingSelect rounded-3 p-2 border border-2"
                                                v-model="inputGange1" />
                                            <span v-if="containsAcshen1"></span>
                                            <details v-else-if="!inputGange1" :class="{ open: arrowOpen }"
                                                @click="toggleArrow"
                                                class="position-absolute selectWaths selectWathsWhats py-1">
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
                                    <input type="submit" class="border ButtonContinue rounded-1"
                                value="Continue">
                                    <router-link to="/PageEmailAddressVerification" class="border ButtonContinue rounded-1">
                                        <span class="fw-bold spanContinue">Continue</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </componentCenter>
            end signUpSupporting
        </div>
    </div>
</template> -->

<!-- <script setup>
import componentCenter from "/components/componentCenter/componentCenter";
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
const arrowOpen = ref(false);
const index = ref(null);

const toggleArrow = () => {
    arrowOpen.value = !arrowOpen.value;
};

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

onMounted(() => {
    const storedIndex = localStorage.getItem('selectedIndex');
    if (storedIndex !== null) {
        index.value = Number(storedIndex);
    }
});
</script> -->