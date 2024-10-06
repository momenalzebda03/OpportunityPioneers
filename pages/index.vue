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
                            <ul class="col-md-6 col-lg-4" v-for="(item, index) in listCard" :key="index">
                                <li class="d-flex flex-column rounded-2 gap-2 divCard h-100 p-2"
                                    :class="{ 'active': item.activeComponent }" @click="toggleActiveState(index)">
                                    <div class="divPoint position-relative rounded-circle"></div>
                                    <div class="text-center fw-bold divBoxImage">
                                        <img :src="item.srcImage" alt="">
                                        <p class="pt-3">{{ item.titleNavbar }}</p>
                                    </div>
                                </li>
                            </ul>
                            <div class="d-flex justify-content-end mt-3">
                                <router-link :to="getRouterLink()" class="border ButtonContinue rounded-1"
                                    :class="{ 'hoverable': listCard.some(item => item.activeComponent) }">
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
    { titleNavbar: "Job Seeker", srcImage: "http://localhost:3000/_nuxt/assets/images/job.png?t=1728137159158", activeComponent: false },
    { titleNavbar: "Employer", srcImage: "http://localhost:3000/_nuxt/assets/images/employeer.png?t=1728137159158", activeComponent: false },
    { titleNavbar: "Supporting Initiative", srcImage: "http://localhost:3000/_nuxt/assets/images/hart.png?t=1728137159158", activeComponent: false }
]);

const getRouterLink = () => {
    const urlMap = [
        "/SignUpJobSeeker",
        "/test1",
        "/test2"
    ];
    const activeElement = listCard.value.find(element => element.activeComponent);
    if (activeElement) {
        const idActive = listCard.value.indexOf(activeElement);
        return urlMap[idActive] || '/';
    }
    return '/';
};

onMounted(() => {
    isClient.value = true;
});

const toggleActiveState = (index) => {
    listCard.value.forEach((checkList, idx) => {
        checkList.activeComponent = idx === index;
    });
};

</script>