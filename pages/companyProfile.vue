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
                            <router-link to="" @click="openModal"
                                class="d-flex divAddNewButton text-white gap-2 justify-content-center align-items-center py-2 btn btn-success">
                                <img src="/assets/images/iconplus.png" alt="">
                                <span>Add new</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" tabindex="-1">
                <div class="modal-dialog shadow-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add New Job</h5>
                            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="" method="">
                                <div class="d-flex flex-column gap-3">
                                    <div class="d-flex flex-column gap-1">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <label for="">Title job</label>
                                            <label for="" class="fs-5 text-danger mt-2">*</label>
                                        </div>
                                        <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                                        <span>Helper Place holder</span>
                                    </div>
                                    <div class="d-flex flex-column gap-1">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <label for="">Your Role</label>
                                            <label for="" class="fs-5 text-danger mt-2">*</label>
                                        </div>
                                        <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                                        <span>Helper Place holder</span>
                                    </div>
                                    <div class="d-flex flex-column gap-1">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <label for="">Skills</label>
                                            <label for="" class="fs-5 text-danger mt-2">*</label>
                                        </div>
                                        <div class="d-flex flex-column gap-0">
                                            <div class="row w-100 mx-0 py-2 border border-2 rounded-3">
                                                <div class="col mt-2 px-1">
                                                    <div
                                                        class="py-1 ps-1 text-white divSkillsGreen text-center rounded-3 d-flex align-items-center gap-2">
                                                        <span>UI/UX</span>
                                                        <img src="/assets/images/closeSkill.png" alt="" class="imageMouse">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="py-2 px-1 border border-2 border-top-0 rounded-3">
                                                <span class="spanPLacholdere">Suggested tags:</span>
                                                <div class="mt-2 row w-100 pe-4">
                                                    <div class="col mt-2" v-for="test in 14" :key="test">
                                                        <div class="imageMouse text-center backgroundSkills rounded-3">
                                                            <span>UI/UX</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex w-100 gap-4">
                                        <div class="w-100">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <label for="">salary</label>
                                                <label for="" class="fs-5 text-danger mt-2">*</label>
                                            </div>
                                            <div class="d-flex w-100 gap-3">
                                                <div class="d-flex flex-column gap-1 w-100">
                                                    <div class="d-flex gap-2">
                                                        <div
                                                            class="d-flex gap-1 align-items-center custom-radio position-relative">
                                                            <input type="radio" id="radioMonthly" name="paymentOption"
                                                                value="monthly">
                                                            <label for="radioMonthly" class="labelSize ms-2">Monthly</label>
                                                        </div>
                                                        <input type="text" placeholder="$250"
                                                            class="w-100 rounded-3 p-2 border blackPlashorlder">
                                                    </div>
                                                    <span>Helper Placeholder</span>
                                                </div>
                                                <div class="d-flex flex-column gap-1 w-100">
                                                    <div class="d-flex gap-2">
                                                        <div
                                                            class="d-flex gap-1 align-items-center custom-radio position-relative">
                                                            <input type="radio" id="radioAnnually" name="paymentOption"
                                                                value="annually">
                                                            <label for="radioAnnually" class="labelSize ms-2">hourly</label>
                                                        </div>
                                                        <input type="text" placeholder="$25"
                                                            class="w-100 rounded-3 p-2 border blackPlashorlder">
                                                    </div>
                                                    <span>Helper Placeholder</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <label for="">End Date</label>
                                                <label for="" class="fs-5 text-danger mt-2">*</label>
                                            </div>
                                            <div class="d-flex w-100 gap-3">
                                                <div class="d-flex flex-column gap-1 w-100">
                                                    <select name="" id="" class="w-100 rounded-3 p-2 border">
                                                        <option value="">Year</option>
                                                        <option value="">Year</option>
                                                    </select>
                                                    <span>Helper Place holder</span>
                                                </div>
                                                <div class="d-flex flex-column gap-1 w-100">
                                                    <select name="" id="" class="w-100 rounded-3 p-2 border">
                                                        <option value="">Month</option>
                                                        <option value="">Month</option>
                                                    </select>
                                                    <span>Helper Place holder</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer d-flex justify-content-end">
                                    <div class="d-flex gap-3">
                                        <input type="submit" class="btn btn-success inputConfirm" @click="saveChanges"
                                            value="Confirm" />
                                    </div>
                                </div>
                            </form>
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
import { ref, nextTick } from 'vue';

const showModal = ref(false);

const openModal = () => {
    showModal.value = true;
    nextTick(() => {
        const modalElement = document.querySelector('.modal');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    });
};

const closeModal = () => {
    const modalElement = document.querySelector('.modal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
        modal.hide();
    }
    showModal.value = false;
};

const saveChanges = () => {
    closeModal();
};
</script>