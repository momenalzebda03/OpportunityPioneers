<template>
    <!-- page HayThere -->
    <div class="divHayThere pt-4 pt-md-0">
        <div class="h-100 d-flex justify-content-center align-items-start align-items-md-center">
            <div class="shadow rounded-4 p-5 divHayPerint">
                <div class="text-center d-flex flex-column gap-2">
                    <h1 class="fs-3 fw-bold">Hey there, What brings your here today?</h1>
                    <h2 class="fs-6 hChild">Please choose the option that best describes you to proceed with the sign-up
                        process.
                    </h2>
                </div>
                <div class="mt-4">
                    <div class="container">
                        <div class="row rowGapColumn">
                            <ul class="col-md-6 col-lg-4" v-for="(listCard, index) in listCard" :key="listCard">
                                <li class="d-flex flex-column rounded-2 gap-2 divCard p-3"
                                    :class="{ 'active': listCard.activeComponent }" @click="toggleActiveState(index)">
                                    <div class="divPoint position-relative rounded-circle"></div>
                                    <div class="text-center fw-bold divBoxImage">
                                        <img :src="listCard.srcImage" alt="">
                                        <p class="pt-3">{{ listCard.titleNavbar }}</p>
                                    </div>
                                </li>
                            </ul>
                            <div class="d-flex justify-content-end mt-3">
                                <router-link @click=" routerLinkButton(element)" to="/"
                                    class="border ButtonContinue rounded-1">
                                    <span class="fw-bold spanContinue">Continue</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- page HayThere -->
    <div v-if="isClient"></div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
const isClient = ref(false);

const listCard = ref([
    { titleNavbar: "Job Seeker", srcImage: "http://localhost:3000/_nuxt/assets/images/job.png?t=1728137159158", activeComponent: true, url: "SignUpJobSeeker" },
    { titleNavbar: "Employer", srcImage: "http://localhost:3000/_nuxt/assets/images/employeer.png?t=1728137159158", activeComponent: false, url: "/test1" },
    { titleNavbar: "Supporting Initiative", srcImage: "http://localhost:3000/_nuxt/assets/images/hart.png?t=1728137159158", activeComponent: false, url: "/test2" }
])

const routerLinkButton = (element) => {
    listCard.value.forEach((element, idActive) => {
        const elementActive = element.activeComponent == true;
        console.log(idActive == true);
        // console.log(elementActive);
        // if (element.activeComponent == 0) {
        //     // const url =
        //     console.log("SignUpJobSeeker");
        // } else if (element.activeComponent == 1) {
        //     console.log(element.url);
        // } else {
        //     console.log(element.url);
        // }
    });
}

onMounted(() => {
    isClient.value = true;
});

const toggleActiveState = (index) => {
    listCard.value.forEach((checkList, idx) => {
        checkList.activeComponent = idx === index;
    });

    // if (index == 0) {
    //     console.log("hello world index 0");
    // } else if (index == 1) {
    //     console.log("hello world index 1");
    // } else {
    //     console.log("hello world index 2");
    // }
};
</script>