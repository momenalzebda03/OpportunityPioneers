<template>
    <div class="border border-1 rounded-3 py-4">
        <div class="container">
            <div class="d-flex flex-column gap-2">
                <div>
                    <router-link to="" type="button" class="btn btn-outline-success px-4 py-1">Export</router-link>
                    <div class="my-3 container d-flex gap-2 align-items-center">
                        <div class="d-flex flex-column position-relative">
                            <img src="/assets/images/user.png" alt="" class="w-100">
                            <router-link to="">
                                <img src="/assets/images/photo.png" alt="" class="position-absolute linkPhoto">
                            </router-link>
                        </div>
                        <div class="d-flex flex-column gap-1">
                            <h2 class="fs-5 fw-bold my-0">Mostafa Saleh</h2>
                            <span>Senior UX / UI Designer</span>
                            <div class="d-flex gap-2 align-items-center">
                                <img src="/assets/images/pioneers.png" alt="">
                                <span class="fw-bold spanPioneers">Pioneers</span>
                            </div>
                        </div>
                    </div>
                    <div class="position-relative hoverButton">
                        <div class="mt-5">
                            <router-link to="" type="button" class="w-100 linkEdit btn btn-outline-success px-4 py-1">Edit
                                Profile Information</router-link>
                        </div>
                    </div>
                    <hr>
                </div>
                <div>
                    <h2 class="fs-5 fw-bold mb-3">Contact Information</h2>
                    <ul class="px-0 d-flex flex-column gap-2">
                        <li class="d-flex gap-2 align-items-center">
                            <img src="/assets/images/Email.png" alt="">
                            <span>email@domain.com</span>
                        </li>
                        <li class="d-flex gap-2 align-items-center">
                            <img src="/assets/images/phone.png" alt="">
                            <span>+201557931164</span>
                        </li>
                        <li class="d-flex gap-2 align-items-center">
                            <img src="/assets/images/map.png" alt="">
                            <span>Cairo, Egypt</span>
                        </li>
                    </ul>
                    <hr>
                </div>
                <div>
                    <h2 class="fs-5 fw-bold mb-3">Connected Profiles</h2>
                    <ul class="px-0 d-flex flex-column gap-2">
                        <li class="d-flex gap-2 align-items-center">
                            <img src="/assets/images/githubIcon.png" alt="">
                            <span>@Username</span>
                        </li>
                        <li class="d-flex gap-2 align-items-center">
                            <img src="/assets/images/behance.png" alt="">
                            <span>@Username</span>
                        </li>
                        <li class="d-flex gap-2 align-items-center">
                            <img src="/assets/images/linkedinIcon.png" alt="">
                            <span>@Username</span>
                        </li>
                    </ul>
                    <hr>
                </div>
                <div>
                    <h2 class="fs-5 fw-bold mb-3">About</h2>
                    <div class="d-flex flex-column gap-2">
                        <span class="">Experienced UX/UI designer with 8 years in creating intuitive and engaging digital
                            products. Proficient in user research, wireframing, prototyping, and testing.</span>
                        <router-link to="" class="text-black text-decoration-none fw-bold">read more</router-link>
                    </div>
                    <hr>
                </div>
                <div>
                    <h2 class="fs-5 fw-bold mb-3">Profile Insights</h2>
                    <ul class="px-0 d-flex flex-column gap-2">
                        <li class="d-flex justify-content-between gap-2">
                            <span>Profile Views</span>
                            <span>0</span>
                        </li>
                        <li class="d-flex justify-content-between gap-2">
                            <span>Profile Views</span>
                            <span>0</span>
                        </li>
                        <li class="d-flex justify-content-between gap-2">
                            <span>Followers</span>
                            <span>0</span>
                        </li>
                        <li class="d-flex justify-content-between gap-2">
                            <span>Following</span>
                            <span>0</span>
                        </li>
                    </ul>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>