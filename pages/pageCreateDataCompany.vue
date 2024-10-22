<template>
    <div class="paddingPageProfile">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 mt-2">
                    <router-link to="/companyProfile" class="text-decoration-none fw-bold colorProfile text-nowrap">back to
                        profile</router-link>
                </div>
                <div class="col-lg-10">
                    <div class="d-flex justify-content-start justify-content-lg-center">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <div class="d-flex flex-row-reverse flex-lg-row">
                                <div>
                                    <ul class="navbar-nav">
                                        <li class="nav-item mx-lg-3" v-for="(item, index) in listCard" :key="index">
                                            <router-link to="" class="text-decoration-none linkColorNavbarProfile"
                                                :class="{ 'active': item.active }" @click="setActive(index)">
                                                {{ item.textLink }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <PersonalInfomation v-if="listCard[0].active" />
                    <password v-if="listCard[1].active" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PersonalInfomation from "../components/componentsFormCompany/PersonalInfomation";
import password from "../components/componentsForm/password";

const listCard = ref([
    { textLink: 'personal infomation', active: true },
    { textLink: 'password', active: false },
]);

const setActive = (index) => {
    listCard.value.forEach((item, i) => {
        item.active = (i === index);
    });
};
</script>