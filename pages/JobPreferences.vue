<template>
    <ComponentCenter>
        <div class="container">
            <button @click="goBack" class="border border-0 bg-transparent">
                <img src="/assets/images/arrowBack.png" alt="Back">
            </button>
            <ComponentLast />
            <div class="text-center mt-5">
                <componentText />
            </div>
            <form action="" method="" class="mt-3">
                <span>Select Your Job Preference</span>
                <div class="d-flex gap-4 mt-4">
                    <div class="d-flex gap-2">
                        <input type="checkbox" class="inputBox" id="fullTime">
                        <label for="fullTime">full time</label>
                    </div>
                    <div class="d-flex gap-2">
                        <input type="checkbox" class="inputBox" id="partTime">
                        <label for="partTime">part time</label>
                    </div>
                </div>
                <div class="d-flex flex-column gap-2 mt-4">
                    <div class="d-flex justify-content-between fw-bold">
                        <span>your role</span>
                        <span class="fs-5 text-danger mt-1">*</span>
                    </div>
                    <div class="position-relative">
                        <select class="rounded-3 p-2 border border-2 w-100"
                            :class="['selectJobPreferences', { 'select-open': isOpen }]" @focus="isOpen = true"
                            @blur="isOpen = false">
                            <option value="">Select role</option>
                            <option value="role1">Role 1</option>
                            <option value="role2">Role 2</option>
                        </select>
                        <div class="position-absolute arrow" :class="{ 'select-open': isOpen }"></div>
                    </div>
                    <span>Helper Place holder</span>
                    <div class="text-end">
                        <router-link to="/userProfile" class="border ButtonContinue rounded-1">
                            <span class="fw-bold spanContinue">submit</span>
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
    </ComponentCenter>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ComponentCenter from "/components/componentCenter/componentCenter.vue";
import ComponentLast from "/components/componentCenter/componentLast";
import componentText from "/components/componentCenter/textComponent";

const isOpen = ref(false);
const router = useRouter();
const activeIndex = ref(null);

const goBack = () => {
    router.go(-1);
};

onMounted(() => {
    const storedIndex = localStorage.getItem('selectedIndex');
    storedIndex !== null ? activeIndex.value = Number(storedIndex) : '';
    // if (storedIndex == 0) {
    //     console.log(`welcome ${url}`);
    //     // const url = ref("/userProfile");
    // } else if (storedIndex == 1) {
    //     console.log(`welcome ${url}`);
    //     // const url = ref("/userProfile");
    // } else if (storedIndex == 2) {
    //     console.log(`welcome ${url}`);
    //     // const url = ref("/companyProfile");
    // }
})
</script>