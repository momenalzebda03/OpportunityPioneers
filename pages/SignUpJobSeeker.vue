<template>
    <componentCenter>
        <!-- start Sign Up Seeker -->
        <div class="container">
            <router-link to="/">
                <img src="/assets/images/arrowBack.png">
            </router-link>
            <ul class="row p-0 mt-4">
                <li class="col col-lg-3">
                    <div class="d-flex flex-column gap-2">
                        <span class="text-nowrap spanLast active">Personal Information</span>
                        <div class="lineLast active ms-3 position-relative rounded-2"></div>
                    </div>
                </li>
                <li class="col col-lg-3">
                    <div class="d-flex flex-column gap-2">
                        <span class="text-nowrap spanLast">Email Verification</span>
                        <div class="lineLast ms-3 position-relative rounded-2"></div>
                    </div>
                </li>
                <li class="col col-lg-3">
                    <div class="d-flex flex-column gap-2">
                        <span class="text-nowrap spanLast">Phone Verification</span>
                        <div class="lineLast ms-3 position-relative rounded-2"></div>
                    </div>
                </li>
                <li class="col col-lg-3">
                    <div class="d-flex flex-column gap-2">
                        <span class="text-nowrap spanLast">Job Preferences</span>
                        <div class="lineLast ms-3 position-relative rounded-2"></div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- end Sign Up Seeker -->
        <div class="mt-5 pt-2">
            <ComponentCenterText />
            <form action="" method="get">
                <div class="mt-4 d-flex flex-column gap-1">
                    <div class="w-100 position-relative">
                        <label class="labelVaild fw-bold">Full Name</label>
                        <div class="d-flex flex-column mt-3 gap-2">
                            <input type="text" placeholder="Content" class="rounded-3 p-2 border">
                            <span>Helper Place holder</span>
                        </div>
                    </div>
                    <!-- <div>
                        <input type="text" placeholder="Content" class="rounded-3 p-2 border">
                        <span>Helper Place holder</span>
                    </div> -->
                </div>
                <!-- <input type=""> -->
            </form>
        </div>
    </componentCenter>
</template>

<script setup>
import componentCenter from "/components/componentCenter/componentCenter";
import ComponentCenterText from "/components/componentCenter/textComponent";
</script>