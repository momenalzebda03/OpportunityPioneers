<template>
    <div class="border border-1 rounded-3 py-4">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container d-flex flex-row-reverse flex-lg-row">
                    <div class="d-flex justify-content-center">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                        <ul class="navbar-nav">
                            <li class="nav-item mx-2" v-for="(item, index) in listCard" :key="index">
                                <router-link to="" class="text-decoration-none linkColorNavbarProfile"
                                    :class="{ 'active': item.active }" @click="setActive(index)">
                                    {{ item.textLink }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <centerProjects v-if="listCard[0].active" />
            <centerExperience v-if="listCard[1].active" />
            <!-- <centerExperience v-if="listCard[1].active" @open-modal="openModal('experience')" /> -->
            <centerCertifical v-if="listCard[2].active" />
            <centerDrafts v-if="listCard[3].active" />
            <!-- <componentModal :activeForm="activeForm" :showModal="showModal" @close-modal="closeModal" /> -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import centerProjects from "../componentCenterProfile/centerProjects";
import centerExperience from "../componentCenterProfile/centerExperience";
import centerCertifical from "../componentCenterProfile/centerCertifications";
import centerDrafts from "../componentCenterProfile/centerDrafts";
// import componentModal from "../componentCenterProfile/compnentModal";

// const showModal = ref(false);
// const activeForm = ref('');

const listCard = ref([
    { textLink: 'projects', active: true },
    { textLink: 'Experience', active: false },
    { textLink: 'Certifications', active: false },
    { textLink: 'Drafts', active: false }
]);

const setActive = (index) => {
    listCard.value.forEach((item, i) => {
        item.active = (i === index);
    });
};

// const openModal = (formType) => {
//     activeForm.value = formType;
//     showModal.value = true;
// };

// const closeModal = () => {
//     showModal.value = false;
// };
</script>