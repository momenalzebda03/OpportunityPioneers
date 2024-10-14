<template>
    <div class="paddingPageProfile">
        <div class="container d-flex flex-column gap-3">
            <div class="border border-1 p-3 rounded-3">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="d-flex flex-column flex-md-row gap-3 align-items-center">
                            <div>
                                <img src="/assets/images/imageCompany.png" alt="">
                            </div>
                            <div>
                                <div class="d-flex gapText">
                                    <h2 class="fs-5">NexaSoft</h2>
                                    <router-link to="" class="d-flex gap-2 align-items-center text-decoration-none">
                                        <img src="/assets/images/share.png" alt="">
                                        <span class="fw-bold colorProfile">share</span>
                                    </router-link>
                                </div>
                                <span class="spanDesign fw-bold text-nowrap">Web Software Company</span>
                                <ul class="d-flex gap-2 align-items-center mt-2 px-0">
                                    <li>
                                        <router-link to="">
                                            <img src="/assets/images/linkedinIcon.png" alt="">
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="">
                                            <img src="/assets/images/iconWorld.png" alt="">
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 text-end">
                        <div class="d-flex justify-content-center justify-content-md-end">
                            <router-link to=""
                                class="d-flex divAddNewButton text-white gap-2 justify-content-center align-items-center py-2 btn btn-success">
                                <img src="/assets/images/iconplus.png" alt="">
                                <span>Add new</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-4">
                    <componentNavbarSideParCompany />
                </div>
                <div class="col-12 col-lg-8">
                    <centerCompany />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import componentNavbarSideParCompany from "/components/folderHeader/componentNavbarSideParCompany";
import centerCompany from "/components/componentCenter/centerCompany";
</script>