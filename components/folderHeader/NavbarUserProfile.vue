<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white w-100 position-fixed indexNavbarPerint">
        <div class="container d-flex flex-row-reverse flex-lg-row">
            <div class="d-flex justify-content-center">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <router-link to="/">
                <img src="/assets/images/OpportunityPioneers.png" alt="">
            </router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="d-flex w-100 flex-column flex-lg-row align-items-lg-center p-4 p-md-0 gap-3 gap-md-0">
                    <div class="d-flex align-items-center gap-4">
                        <ul class="navbar-nav d-flex gap-3 gap-lg-5">
                            <li class="nav-item">
                                <router-link to="" class="text-decoration-none lineNone">page1</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="" class="text-decoration-none lineNone">page2</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="" class="text-decoration-none lineNone">page3</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="" class="text-decoration-none lineNone">page4</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="" class="text-decoration-none lineNone">page5</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="w-100 px-lg-3 position-relative">
                        <span v-if="containsAcshen"></span>
                        <img src="/assets/images/search.png" class="position-absolute imageSearch"
                            v-else-if="!inputGange" />
                        <input type="text" placeholder="search" class="w-100 p-2 rounded-3 border border-2 inputPadding"
                            v-model="inputGange" />
                    </div>
                </div>
                <ul class="row mt-3 listNoneMobile align-items-center">
                    <li class="col-lg-4">
                        <div @click="functionBlockMassage" class="imageMouse">
                            <img src="/assets/images/massage.png" alt="">
                        </div>
                        <div class="position-relative">
                            <div class="position-absolute shadow rounded-3 overflow-hidden divMessaging bg-white"
                                :class="{ 'activeMessaging': refMessaging }">
                                <div class="pb-0 p-3">
                                    <h2 class="fs-5">messaging</h2>
                                    <hr>
                                </div>
                                <div class="d-flex flex-column gap-2 justify-content-center align-items-center hieght100">
                                    <img src="/assets/images/messagingBlack.png" alt="">
                                    <h2 class="fw-bold fs-5">No messages yet</h2>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="position-relative">
                            <div class="position-absolute shadow rounded-3 overflow-auto divMessaging bg-white"
                                :class="{ 'activeMessaging': refMessaging }">
                                <div class="pb-0 p-3">
                                    <h2 class="fs-5">messaging</h2>
                                    <hr>
                                </div>
                                <div class="w-100 position-relative">
                                    <div class="px-3">
                                        <span v-if="containsAcshen1"></span>
                                        <img src="/assets/images/search.png"
                                            class="position-absolute imageSearch imageSearchOverflow"
                                            v-else-if="!inputGange1" />
                                        <input type="text" placeholder="search messages"
                                            class="w-100 p-2 rounded-3 border border-2 inputPadding inputPaddingOverflowColor"
                                            v-model="inputGange1" />
                                        <span v-if="containsAcshen1"></span>
                                        <img src="/assets/images/inputMessages.png" alt=""
                                            class="position-absolute imgMessages" v-else-if="!inputGange1">
                                    </div>
                                    <ul class="px-0 mt-3 position-relative">
                                        <li class="py-3 imageMouse listStyleHoverMessages" v-for="test in 4" :key="test">
                                            <div class="px-3 d-flex justify-content-between position-relative">
                                                <div class="d-flex gap-2 align-items-center">
                                                    <div>
                                                        <img src="/assets/images/userMessages.png" alt="">
                                                    </div>
                                                    <div>
                                                        <h2 class="mb-0 fs-6">tarek mohamed</h2>
                                                        <span class="text-nowrap labelSize">placeat in assumenda sed sint.
                                                            officiis non</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span>sep 12</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> -->
                    </li>
                    <li class="col-lg-4">
                        <div>
                            <img src="/assets/images/bell.png" alt="">
                        </div>
                    </li>
                    <li class="col-lg-4">
                        <router-link to="/pageCreateDataUser">
                            <img src="/assets/images/user.png" alt="" class="w-100" v-if="currentRoute == '/userProfile'">
                        </router-link>
                        <router-link to="/">
                            <img src="/assets/images/imageCompanyNavbar.png" alt="" class="w-100"
                                v-if="currentRoute == '/companyProfile'">
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const inputGange = ref('');
const inputGange1 = ref('');
const route = useRoute();
const currentRoute = computed(() => route.path);
const refMessaging = ref(false);

const functionBlockMassage = () => {
    if (refMessaging.value == false) {
        return refMessaging.value = true;
    } else {
        return refMessaging.value = false;
    }
}

const containsAcshen = computed(() => {
    return inputGange.value.includes('acshen');
});

const containsAcshen1 = computed(() => {
    return inputGange1.value.includes('acshen');
});
</script>