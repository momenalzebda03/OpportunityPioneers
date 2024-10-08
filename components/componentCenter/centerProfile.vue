<template>
    <div class="border border-1 rounded-3 py-4">
        <div class="container ">
            <NavbarChildProfile />
            <div class="mx-3 d-flex flex-column gap-4">
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3 divBorderBottomProfileText">
                    <h2 class="mt-3 fw-bold fs-6">projects</h2>
                    <img src="/assets/images/plus.png" alt="" class="imageMouse">
                </div>
                <div class="row rowChild">
                    <div class="col col-lg-4" v-for="test in 9" :key="test">
                        <div class="position-relative hoverImageCard">
                            <img src="/assets/images/LiveProjectCard.png" alt="" class="w-100">
                            <div class="position-absolute divAbsoluteCardHover bottom-0 w-100 text-white py-4">
                                <div class="container">
                                    <h2 class="fs-6">Real Estate Mobile App Case Study</h2>
                                    <ul class="row px-0 mt-2 mb-0">
                                        <li class="col-4">
                                            <div class="d-flex align-items-center gap-2">
                                                <img src="/assets/images/yay.png" alt="">
                                                <span>2500</span>
                                            </div>
                                        </li>
                                        <li class="col-4">
                                            <div class="d-flex align-items-center gap-2">
                                                <img src="/assets/images/like.png" alt="">
                                                <span>2500</span>
                                            </div>
                                        </li>
                                        <li class="col-4">
                                            <div class="d-flex align-items-center gap-2">
                                                <img src="/assets/images/messageList.png" alt="">
                                                <span>2500</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavbarChildProfile from "../folderHeader/navbarChildProfile.vue";

// const apiImage = ref ([
//     {}
// ])
</script>