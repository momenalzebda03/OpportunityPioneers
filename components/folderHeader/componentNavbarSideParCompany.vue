<template>
    <div class="border border-1 rounded-3 divPaddingSideBarCompany">
        <div class="container py-3">
            <div class="d-flex flex-column gap-5 divSidePar">
                <div>
                    <h2 class="fs-5 fw-bold mb-3">Company Information</h2>
                    <ul class="px-0 d-flex flex-column gap-2">
                        <li>
                            <span>Location:Cairo, Egypt</span>
                        </li>
                        <li>
                            <span>Founded:2023</span>
                        </li>
                        <li>
                            <span>Company Size:11-50 employees</span>
                        </li>
                    </ul>
                    <hr>
                </div>
                <div>
                    <h2 class="fs-5 fw-bold mb-3">About</h2>
                    <div class="d-flex flex-column gap-2">
                        <span class="">Experienced UX/UI designer with 8 years in creating intuitive and engaging digital
                            products. Proficient in user research, wireframing, prototyping, and testing.<router-link to=""
                                class="text-black text-decoration-none fw-bold">read more</router-link></span>
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
                        <div class="position-relative hoverButton">
                            <div class="mt-5">
                                <router-link to="" type="button"
                                    class="w-100 linkEdit btn btn-outline-success px-4 py-1">Edit
                                    Profile Information</router-link>
                            </div>
                        </div>
                    </ul>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>