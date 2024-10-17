<template>
    <div class="divChildSelect">
        <componentCenter>
            <router-link to="/">
                <img src="/assets/images/arrowBack.png">
            </router-link>
            <ul class=" row p-0 mt-4 gap-3 gap-md-0">
                <li class="col step" v-for="(item, index) in items" :key="index">
                    <div class="step-header d-flex flex-column gap-2">
                        <span class="text-nowrap spanLast"
                            :class="{ active: currentStep == index, completed: currentStep > index }">
                            {{ item }}
                        </span>
                        <div class="lineLast ms-3 position-relative rounded-2"
                            :class="{ active: currentStep == index, completed: currentStep > index }">
                        </div>
                    </div>
                </li>
            </ul>
            <div v-if="currentStep == 0">
                <div class="mt-5" v-if="index == 0">
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
                            </div>
                        </div>
                    </form>
                </div>
                <div class="mt-5" v-if="index == 1">
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
                            </div>
                        </div>
                    </form>
                </div>
                <div class="mt-5" v-if="index == 2">
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
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div v-if="currentStep == 1">
                <div class="text-center mt-5">
                    <img src="/assets/images/smsNotification.png" alt="">
                    <componentText />
                </div>
                <form action="" method="get" class="mt-4 row gap-3 gap-md-0" @input="inputSubmit">
                    <div class="row gap-3 gap-lg-0">
                        <div class="col text-center" v-for="index in 5" :key="index">
                            <input class="borderColorNormal" v-model="inputValues[index]" :class="[
                                'rounded-3',
                                'text-center',
                                'inputWidthEmail',
                                'pt-3',
                                'pb-2',
                                'fw-bold',
                                inputClasses[index],
                                {
                                    inputWidthEmailTrue: inputValues[index] == 8,
                                    inputWidthEmailFalse: inputValues[index] != 8,
                                    borderColorNormal: inputValues[index] !== '8' && emitTriggered
                                }
                            ]" @input="checkInput(index)" type="text" placeholder="*" />
                            <!-- <input v-model="inputValues[index]"
                                :class="['rounded-3', 'text-center', 'inputWidthEmail', 'pt-3', 'pb-2', 'fw-bold', inputClasses[index],
                                    { inputWidthEmailTrue: inputValues[index] == 8, inputWidthEmailFalse: inputValues[index] != 8 }]" type="text"
                                placeholder="*"> -->
                        </div>
                    </div>
                </form>
            </div>
            <div v-if="currentStep == 2">
                <p>Welcome to Step 3!</p>
            </div>
            <div class="navigation justify-content-end">
                <button class="border ButtonContinue rounded-1" value="Continue" @click="nextStep"
                    :disabled="currentStep >= items.length - 1">Continue</button>
            </div>
        </componentCenter>
    </div>
</template>
  
<script setup>
import componentCenter from "/components/componentCenter/componentCenter";
import componentText from '/components/componentCenter/textComponent.vue';
import { ref, computed, watch } from 'vue';

const currentStep = ref(0);
const items = ref(['Personal Information', 'Email Verification', 'Job Preferences']);

const nextStep = () => {
    if (currentStep.value < items.value.length - 1) {
        currentStep.value++;
    }
};

const options = ref([
    { value: '1', image: 'http://localhost:3000/_nuxt/assets/images/palisten.png' },
    { value: '2', image: 'http://localhost:3000/_nuxt/assets/images/arrow.png' }
]);

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

watch(index, (newIndex) => {
    if (newIndex == 1 || newIndex == 2) {
        items.value = ['Personal Information', 'Email Verification'];
    } else {
        items.value = ['Personal Information', 'Email Verification', 'Job Preferences'];
    }
});

onMounted(() => {
    const storedIndex = localStorage.getItem('selectedIndex');
    if (storedIndex !== null) {
        index.value = Number(storedIndex);
    }
});

const inputValues = ref(['', '', '']);  // Example with 3 inputs
const inputClasses = ref(['', '', '']); // Placeholder for input classes

// Flag to track if the emit event has been triggered
const emitTriggered = ref(false);

// Function to check input and trigger emit
const checkInput = (index) => {
    if (inputValues.value[index] !== '8') {
        emitTriggered.value = true; // Trigger emit flag when input is not 8
        // Emit event logic here, e.g., this.$emit('input-event')
    } else {
        emitTriggered.value = false; // Reset flag if input is 8
    }
};
</script>