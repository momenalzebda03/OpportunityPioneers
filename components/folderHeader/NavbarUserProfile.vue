<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom w-100 position-fixed">
        <div class="container d-flex flex-row-reverse flex-lg-row">
            <div class="d-flex justify-content-center">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <img src="/assets/images/OpportunityPioneers.png" alt="">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="d-flex w-100 flex-column flex-lg-row align-items-lg-center">
                    <div class="d-flex align-items-center gap-4">
                        <ul class="navbar-nav d-flex gap-3 gap-lg-5 mb-2">
                            <li class="nav-item">
                                <router-link to="" class="lineNone">page1</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="" class="lineNone">page2</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="" class="lineNone">page3</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="" class="lineNone">page4</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="" class="lineNone">page5</router-link>
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
                <ul class="row mt-3 listNoneMobile">
                    <li class="col-lg-4">
                        <img src="/assets/images/massage.png" alt="">
                    </li>
                    <li class="col-lg-4">
                        <img src="/assets/images/bell.png" alt="">
                    </li>
                    <li class="col-lg-4">
                        <img src="/assets/images/user.png" alt="" class="w-100">
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed } from 'vue';

const inputGange = ref('');

const containsAcshen = computed(() => {
    return inputGange.value.includes('acshen');
});
</script>