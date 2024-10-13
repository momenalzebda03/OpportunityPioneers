<template>
    <div class="px-lg-5 mx-lg-5">
        <div class="mt-5 border border-2 p-4 rounded-3">
            <h2 class="fs-5">My Connected Profiles</h2>
            <ul class="mt-4 px-0 d-flex flex-column gap-4">
                <li class="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                    <div class="d-flex gap-3 align-items-center">
                        <img src="/assets/images/arrow.png" alt="">
                        <div class="d-flex align-items-center gap-2">
                            <img src="/assets/images/githubIcon.png" alt="">
                            <span class="fw-bold">github</span>
                        </div>
                    </div>
                    <div class="pt-3">
                        <router-link to="" type="button" class="btn btn-outline-success px-4 py-1">add the create
                            now</router-link>
                    </div>
                </li>
                <li class="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                    <div class="d-flex gap-3 align-items-center">
                        <img src="/assets/images/arrow.png" alt="">
                        <div class="d-flex align-items-center gap-2">
                            <img src="/assets/images/linkedinIcon.png" alt="">
                            <span class="fw-bold">linkedin</span>
                        </div>
                    </div>
                    <div class="pt-3 row rowChild w-100 text-start text-lg-end justify-content-end">
                        <div class="col col-lg-4">
                            <router-link to="" type="button" class="btn py-1 fw-bold linkConnectedProfile">add the
                                linkedin now</router-link>
                        </div>
                        <div class="col col-lg-2">
                            <router-link to="" type="button"
                                class="btn py-1 fw-bold linkConnectedProfile">upload</router-link>
                        </div>
                        <div class="col col-lg-2">
                            <router-link to="" type="button"
                                class="btn py-1 fw-bold linkConnectedProfile">close</router-link>
                        </div>
                    </div>
                </li>
                <li class="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                    <div class="d-flex gap-3 align-items-center">
                        <img src="/assets/images/arrow.png" alt="">
                        <div class="d-flex align-items-center gap-2">
                            <img src="/assets/images/linkedinIcon.png" alt="">
                            <span class="fw-bold">linkedin</span>
                        </div>
                    </div>
                    <div class="pt-3">
                        <router-link to="" type="button" class="btn btn-outline-success px-4 py-1">add the create
                            now</router-link>
                    </div>
                </li>
                <li class="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                    <div class="d-flex gap-3 align-items-center">
                        <img src="/assets/images/arrow.png" alt="">
                        <div class="d-flex align-items-center gap-2">
                            <img src="/assets/images/githubIcon.png" alt="">
                            <span class="fw-bold">github</span>
                        </div>
                    </div>
                    <div class="pt-3">
                        <router-link to="" type="button" class="btn btn-outline-success px-4 py-1">add the create
                            now</router-link>
                    </div>
                </li>
            </ul>
            <div class="text-end mt-5">
                <router-link to="" class="btn btn-success inputConfirm px-3">save</router-link>
            </div>
        </div>
    </div>
</template>