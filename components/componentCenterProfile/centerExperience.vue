<template>
    <div class="mx-3 d-flex flex-column gap-4">
        <div class="d-flex align-items-center justify-content-between mt-3 pb-3 divBorderBottomProfileText">
            <h2 class="mt-3 fw-bold fs-6">Experience</h2>
            <div>
                <img src="/assets/images/plus.png" alt="Open Modal" class="imageMouse" @click="openModal" />
                <div class="modal fade" tabindex="-1" v-if="showModal" @click.self="closeModal">
                    <div class="modal-dialog shadow-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Add New Experience</h5>
                                <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form action="" method="">
                                    <div class="d-flex flex-column gap-3">
                                        <div class="d-flex flex-column gap-1">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <label for="">Company Name</label>
                                                <label for="" class="fs-5 text-danger mt-2">*</label>
                                            </div>
                                            <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                                            <span>Helper Place holder</span>
                                        </div>
                                        <div class="d-flex w-100 gap-4">
                                            <div class="position-relative w-100">
                                                <label for="">Employment Type</label>
                                                <select class="mt-2 rounded-3 p-2 border border-2 w-100"
                                                    :class="['selectJobPreferences', { 'select-open': isOpen }]"
                                                    @focus="isOpen = true" @blur="isOpen = false">
                                                    <option value="">content</option>
                                                    <option value="role1">content</option>
                                                    <option value="role2">content</option>
                                                </select>
                                                <div class="position-absolute arrow arrowOverflow"
                                                    :class="{ 'select-open': isOpen }">
                                                </div>
                                            </div>
                                            <div class="position-relative w-100">
                                                <label for="">Employment Type</label>
                                                <select class="mt-2 rounded-3 p-2 border border-2 w-100"
                                                    :class="['selectJobPreferences', { 'select-open': isOpen1 }]"
                                                    @focus="isOpen1 = true" @blur="isOpen1 = false">
                                                    <option value="">content</option>
                                                    <option value="role1">content</option>
                                                    <option value="role2">content</option>
                                                </select>
                                                <div class="position-absolute arrow arrowOverflow"
                                                    :class="{ 'select-open': isOpen1 }">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column gap-1">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <label for="">Location</label>
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
                                            <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                                            <span>Helper Place holder</span>
                                        </div>
                                        <div class="d-flex gap-1">
                                            <input type="checkbox" id="currently" class="inputBox">
                                            <label for="currently" class="sizeLabel">I am currently working in this
                                                role</label>
                                        </div>
                                    </div>
                                    <div class="d-flex w-100 gap-4">
                                        <div class="w-100">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <label for="">Start Date</label>
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
                                    <div class="modal-footer mt-4">
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
            </div>
        </div>
        <ul>
            <li class="d-flex gap-3 align-items-center" v-for="item in arrayExperience" :key="item.key">
                <div>
                    <img src="/assets/images/arrow.png" alt="">
                </div>
                <div
                    class="d-flex justify-content-between align-items-center w-100 p-3 rounded-3 divHoverListExperience imageMouse">
                    <div class="d-flex gap-3">
                        <div>
                            <img :src="item.imgSoptify" alt="">
                        </div>
                        <div>
                            <h2 class="fw-bold fs-6">{{ item.title }}</h2>
                            <div class="d-flex flex-column gap-1">
                                <span>{{ item.spanTitle }}</span>
                                <span>{{ item.span }}</span>
                            </div>
                        </div>
                    </div>
                    <div @click="openModalDelete(item.key)">
                        <img src="/assets/images/delete.png" alt="" class="d-none">
                    </div>
                </div>
                <div class="modal fade delete" id="exampleModalCenter" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header justify-content-between">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Delete Experience</h5>
                                <button type="button" class="btn-close" @click="closeModalDelete"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <span>Are you sure you want to delete this experience? This action is permanent and cannot
                                    be undone. Deleting this experience will remove it from your profile and any associated
                                    records.</span>
                            </div>
                            <div class="modal-footer gap-3">
                                <button type="button" class="fw-bold border border-0 bg-transparent colorProfile"
                                    @click="closeModalDelete">Cancel</button>
                                <button type="button" class="btn btn-danger"
                                    @click="functionDeleteKey(deleteKey)">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
const isOpen = ref(false);
const isOpen1 = ref(false);
const showModal = ref(false);
let deleteKey = ref(null);

const arrayExperience = ref([
    { key: 0, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer 0', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
    { key: 1, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer 1', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
    { key: 2, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer 2', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
    { key: 3, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer 3', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
    { key: 4, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer 4', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
    { key: 5, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer 5', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
]);

const openModal = () => {
    showModal.value = true;
    nextTick(() => {
        const modalElement = document.querySelector('.modal.fade');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    });
};

const closeModal = () => {
    const modalElement = document.querySelector('.modal.fade');
    const modal = bootstrap.Modal.getInstance(modalElement);

    if (modal) {
        modal.hide();
    }
};

const openModalDelete = (key) => {
    deleteKey.value = key;
    nextTick(() => {
        const modalElement = document.querySelector('.modal.fade.delete');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    });
};

const closeModalDelete = () => {
    const modalElement = document.querySelector('.modal.fade.delete');
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
        modal.hide();
    }
};

const functionDeleteKey = (key) => {
    if (key !== null) {
        arrayExperience.value = arrayExperience.value.filter(item => item.key !== key);
    }
    closeModalDelete();
};
</script>