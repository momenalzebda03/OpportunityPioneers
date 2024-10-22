<template>
    <div class="divChildSelect">
        <componentCenter>
            <img src="/assets/images/arrowBack.png" @click="prevStep" :disabled="currentStep == 0" class="imageMouse">
            <ul class=" row p-0 mt-4 gap-3 gap-md-0">
                <li class="col step" v-for="(item, index) in items" :key="index">
                    <div class="stepHeader d-flex flex-column gap-2">
                        <span class="text-nowrap spanLast" :class="{ active: currentStep == index }">
                            {{ item }}
                        </span>
                        <div class="lineLast ms-3 position-relative rounded-2"
                            :class="{ activeEmail: currentStep > index, active: currentStep == index, completed: currentStep > index }">
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
                                    <input type="text" placeholder="Content" class="rounded-3 p-2 border"
                                        v-model="fullName">
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
                            <div class="d-flex gap-3">
                                <div class="w-100 position-relative">
                                    <label class="labelVaild fw-bold">Full Name</label>
                                    <div class="d-flex flex-column mt-2 gap-2">
                                        <input type="text" placeholder="Content" class="rounded-3 p-2 border"
                                            v-model="fullName">
                                        <span>Helper Place holder</span>
                                    </div>
                                </div>
                                <div class="w-100 position-relative">
                                    <label class="labelVaild fw-bold">Country</label>
                                    <div class="d-flex flex-column mt-2 gap-2">
                                        <select class="rounded-3 p-2 border border-2 w-100"
                                            :class="['selectJobPreferences', { 'selectOpen': isOpen }]"
                                            @focus="isOpen = true" @blur="isOpen = false">
                                            <option value="">content</option>
                                            <option value="role1">content</option>
                                            <option value="role2">content</option>
                                        </select>
                                        <div class="position-absolute arrow arrowOverflow"
                                            :class="{ 'selectOpen': isOpen }">
                                        </div>
                                        <span>Helper Place holder</span>
                                    </div>
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
                            <div class="d-flex gap-3">
                                <div class="w-100 position-relative">
                                    <label class="labelVaild fw-bold">Full Name</label>
                                    <div class="d-flex flex-column mt-2 gap-2">
                                        <input type="text" placeholder="Content" class="rounded-3 p-2 border"
                                            v-model="fullName">
                                        <span>Helper Place holder</span>
                                    </div>
                                </div>
                                <div class="w-100 position-relative">
                                    <label class="labelVaild fw-bold">Country</label>
                                    <div class="d-flex flex-column mt-2 gap-2">
                                        <select class="rounded-3 p-2 border border-2 w-100"
                                            :class="['selectJobPreferences', { 'selectOpen': isOpen }]"
                                            @focus="isOpen = true" @blur="isOpen = false">
                                            <option value="">content</option>
                                            <option value="role1">content</option>
                                            <option value="role2">content</option>
                                        </select>
                                        <div class="position-absolute arrow arrowOverflow"
                                            :class="{ 'selectOpen': isOpen }">
                                        </div>
                                        <span>Helper Place holder</span>
                                    </div>
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
                    <div class="text-center d-flex flex-column gap-2">
                        <h1 class="fs-3 fw-bold">Email Address Verification</h1>
                        <h2 class="fs-6 hChild">We have sent a verification code to your email address. Please enter the
                            code in the box below to verify your email.</h2>
                    </div>
                </div>
                <form action="" method="get" class="mt-4 row gap-3 gap-md-0" @input="inputSubmit">
                    <div class="row gap-3 gap-lg-0">
                        <div class="col text-center" v-for="index in 5" :key="index">
                            <input v-model="inputValues[index - 1]" class="rounded-3 text-center pt-3 pb-2 fw-bold" :class="['inputWidthEmail', 'borderColorNormal', inputClasses[index - 1], {
                                inputWidthEmailTrue: inputValues[index - 1] == 8,
                                inputWidthEmailFalse: inputValues[index - 1] > 8 ||
                                    (inputValues[index - 1]
                                        < 8 && inputValues[index - 1] !== ''), borderColorNormal: inputValues[index - 1] == ''
                            }]" type="text" placeholder="*" maxlength="1" />
                        </div>
                    </div>
                </form>
            </div>
            <div v-if="currentStep == 2">
                <div class="text-center mt-5">
                    <div class="text-center d-flex flex-column gap-2">
                        <h1 class="fs-3 fw-bold">Job Preferences</h1>
                        <h2 class="fs-6 hChild">
                            Providing details about your needs will help us find job opportunities worldwide that are
                            specifically tailored to your expertise and career goals.
                        </h2>
                    </div>
                </div>
                <form action="" method="" class="mt-3">
                    <span>Select Your Job Preference</span>
                    <div class="d-flex gap-4 mt-4">
                        <div class="d-flex gap-2">
                            <input type="checkbox" class="inputBox" id="fullTime" v-model="fullTime">
                            <label for="fullTime">full time</label>
                        </div>
                        <div class="d-flex gap-2">
                            <input type="checkbox" class="inputBox" id="partTime" v-model="partTime">
                            <label for="partTime">part time</label>
                        </div>
                    </div>
                    <div class="d-flex flex-column gap-2 mt-4">
                        <div class="d-flex justify-content-between fw-bold">
                            <span>your role</span>
                            <span class="fs-5 text-danger mt-1">*</span>
                        </div>
                        <div class="position-relative">
                            <select v-model="selectedRole" class="rounded-3 p-2 border border-2 w-100"
                                :class="['selectJobPreferences', { 'selectOpen': isOpen }]" @focus="isOpen = true"
                                @blur="isOpen = false">
                                <option value="">Select role</option>
                                <option value="role1">Role 1</option>
                                <option value="role2">Role 2</option>
                            </select>
                            <div class="position-absolute arrow" :class="{ 'selectOpen': isOpen }"></div>
                        </div>
                        <span>Helper Place holder</span>
                    </div>
                </form>
            </div>
            <div class="d-flex navigation justify-content-end">
                <button class="border ButtonContinue rounded-1" value="Continue" @click="nextStep"
                    :class="{ 'hoverable': canContinue, 'disabled': !canContinue }" :disabled="!canContinue">
                    Continue
                </button>
            </div>
        </componentCenter>
    </div>
</template>

<script setup>
import componentCenter from "/components/componentCenter/componentCenter";
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isOpen = ref(false);
const currentStep = ref(0);
const items = ref([]);
const fullName = ref('');
const inputGange = ref('');
const inputGange1 = ref('');
const inputGange2 = ref('');
const inputGange3 = ref('');
const arrowOpen = ref(false);
const index = ref(null);
const inputValues = ref(new Array(5).fill(''));
const inputClasses = ref(new Array(5).fill(''));
const activeIndex = ref(0);
const hasSubmitted = ref(false);
const checkNewValues = ref(false);
const selectedRole = ref('');
const fullTime = ref('');
const partTime = ref('');

watch(inputValues, (newValues) => {
    checkNewValues.value = newValues.every(input => input === '8');
}, { deep: true });

const canContinue = computed(() => {
    if (hasSubmitted.value) {
        return false;
    }

    const jobPreferenceSelected = fullTime.value || partTime.value;
    const roleSelected = selectedRole !== '';

    const allInputsFilled = fullName.value && inputGange.value && inputGange1.value && inputGange2.value && inputGange3.value || checkNewValues.value;
    const canProceed = allInputsFilled || checkNewValues.value || jobPreferenceSelected && roleSelected;
    return canProceed;
});

const navigateTo = computed(() => {
    const storedIndex = localStorage.getItem('selectedIndex');
    storedIndex !== null ? activeIndex.value = Number(storedIndex) : '';
    return storedIndex == '0' ? '/companyProfile' : '/userProfile';
});

const nextStep = () => {
    const storedIndex = localStorage.getItem('selectedIndex');
    if (canContinue.value) {
        setTimeout(() => {
            storedIndex == '0' ? currentStep.value < items.value.length - 1 ? currentStep.value++ : router.push(navigateTo.value) : currentStep.value < items.value.length - 1 ? currentStep.value++ : router.push(navigateTo.value);
            hasSubmitted.value = false;
            resetInputs();
        }, 0);
    }
};

const resetInputs = () => {
    fullName.value = '';
    inputGange.value = '';
    inputGange1.value = '';
    inputGange2.value = '';
    inputGange3.value = '';
    inputValues.value = [''];
};

const prevStep = () => {
    currentStep.value < items.value.length - 0 ? currentStep.value-- : '';
    currentStep.value == -1 ? router.push("/") : '';
}

const options = ref([
    { value: '1', image: 'http://localhost:3000/_nuxt/assets/images/palisten.png' },
    { value: '2', image: 'http://localhost:3000/_nuxt/assets/images/arrow.png' }
]);

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
    newIndex == 1 || newIndex == 2 ? items.value = ['Personal Information', 'Email Verification'] : items.value = ['Personal Information', 'Email Verification', 'Job Preferences'];
});

onMounted(() => {
    const storedIndex = localStorage.getItem('selectedIndex');
    storedIndex !== null ? index.value = Number(storedIndex) : '';
});
</script>