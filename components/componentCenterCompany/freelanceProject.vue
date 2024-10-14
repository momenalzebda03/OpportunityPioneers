<template>
    <div class="mt-4 mx-3">
        <h2 class="fw-bold fs-5 pb-3 border-bottom border-2 text-center text-md-start"> Open vacancies at NexaSoft</h2>
        <div
            class="mt-4 d-flex align-items-center justify-content-center justify-content-md-start gap-2 flex-column flex-md-row">
            <router-link to=""
                class="d-flex divAddNewButton divAddNewButtonOverflow1 text-white gap-2 justify-content-center align-items-center py-2 btn btn-success">
                <img src="/assets/images/latestJobs.png" alt="">
                <span>latest published freelance projects</span>
            </router-link>
            <div class="position-relative">
                <div class="imageSearch">
                    <input type="text" placeholder="search" class="fw-bold py-2 rounded-3 border paddingInputSearch">
                </div>
            </div>
        </div>
        <div class="mt-3" v-for="test in 3" :key="test">
            <div class="d-flex gap-3 align-items-center justify-content-between border border-1 p-3 rounded-2">
                <div class="w-100">
                    <div class="d-flex flex-column flex-md-row gap-5 align-items-start align-items-md-center">
                        <span class="fw-bold">e-commerce website design</span>
                        <router-link to=""
                            class="btn btn-success text-white px-2 rounded-3 d-flex align-items-center gap-2">
                            <img src="/assets/images/iconYay.png" alt="" class="imageYay">
                            <span>12 requests</span>
                        </router-link>
                    </div>
                    <div class="d-flex flex-column flex-md-row gap-2">
                        <span class="fw-bold">skills:</span>
                        <ul class="px-0 d-flex gap-2 listColor my-0">
                            <li>HTML/CSS Knowledge</li>
                            <li>User Research</li>
                            <li>Attention to Detail</li>
                        </ul>
                    </div>
                    <div class="mt-2">
                        <span class="colorProfile">6 hours ago</span>
                    </div>
                </div>
                <router-link to="">
                    <img src="/assets/images/menu.png" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>