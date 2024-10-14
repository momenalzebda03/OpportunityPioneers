<template>
    <div class="mt-4 mx-3">
        <h2 class="fw-bold fs-5 pb-3 border-bottom border-2 text-center text-md-start"> Open vacancies at NexaSoft</h2>
        <div class="mt-4 d-flex justify-content-center justify-content-md-start">
            <router-link to=""
                class="d-flex divAddNewButton divAddNewButtonOverflow text-white gap-2 justify-content-center align-items-center py-2 btn btn-success">
                <img src="/assets/images/latestJobs.png" alt="">
                <span>Latest published jobs</span>
            </router-link>
        </div>
        <div class="mt-3" v-for="test in 3" :key="test">
            <div class="d-flex gap-3 align-items-center justify-content-between border border-1 p-3 rounded-2">
                <div>
                    <div class="d-flex flex-column flex-md-row gap-3 align-items-start align-items-md-center">
                        <span class="fw-bold">Senior UX / UI Designer-Cairo, Egypt</span>
                        <router-link to=""
                            class="btn btn-success text-white py-1 px-2 rounded-3 d-flex align-items-center gap-2">
                            <img src="/assets/images/iconYay.png" alt="" class="imageYay">
                            <span>12 Show applicants</span>
                        </router-link>
                    </div>
                    <ul class="d-flex gap-2 mt-2 px-0">
                        <li>
                            <router-link to="" class="text-black divList py-1 px-2 rounded-3 text-decoration-none">
                                <span>full time</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="" class="text-black divList py-1 px-2 rounded-3 text-decoration-none">
                                <span>remove</span>
                            </router-link>
                        </li>
                    </ul>
                    <div class="d-flex gap-2">
                        <span class="fw-bold">skills:</span>
                        <ul class="px-0 d-flex gap-2 listColor my-0">
                            <li>JavaScript (Basic)</li>
                            <li>HTML/CSS</li>
                            <li>User Research</li>
                            <li>Visual Design</li>
                        </ul>
                    </div>
                    <div class="mt-2">
                        <span class="colorProfile">6 days ago</span>
                    </div>
                </div>
                <router-link to="">
                    <img src="/assets/images/menu.png" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>