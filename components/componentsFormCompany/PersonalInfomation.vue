<template>
    <div class="px-lg-5 mx-lg-5">
        <div class="mt-5 border border-2 p-4 rounded-3">
            <h2 class="fs-5">my personal information</h2>
            <div class="mt-5 text-center">
                <div class="d-flex flex-column position-relative align-items-center">
                    <img src="/assets/images/imageCompanyPersonalInformation.png" alt="">
                    <div @click="triggerFileInput">
                        <img src="/assets/images/photo.png" alt=""
                            class="position-absolute linkPhoto linkPhotoFormCompany imageMouse">
                        <input type="file" ref="fileInput" class="d-none" @change="handleFileChange" />
                    </div>
                </div>
                <form action="" method="" class="mt-4">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex flex-column gap-1 text-start">
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="">name</label>
                                <label for="" class="fs-5 text-danger mt-2">*</label>
                            </div>
                            <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                            <span>Helper Place holder</span>
                        </div>
                        <div class="d-flex flex-column gap-1 text-start">
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="">description</label>
                                <label for="" class="fs-5 text-danger mt-2">*</label>
                            </div>
                            <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                            <span>Helper Place holder</span>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-start position-relative w-100">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <label for="">country</label>
                                        <label for="" class="fs-5 text-danger mt-2">*</label>
                                    </div>
                                    <select class="rounded-3 p-2 border border-2 w-100"
                                        :class="['selectJobPreferences', { 'selectOpen': isOpen }]" @focus="isOpen = true"
                                        @blur="isOpen = false">
                                        <option value="">content</option>
                                        <option value="role1">content</option>
                                        <option value="role2">content</option>
                                    </select>
                                    <div class="position-absolute arrow arrowOverflowCompany"
                                        :class="{ 'selectOpen': isOpen }">
                                    </div>
                                    <span>Helper Place holder</span>
                                </div>
                            </div>
                            <div class="col">
                                <div class="text-start position-relative w-100">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <label for="">city</label>
                                        <label for="" class="fs-5 text-danger mt-2">*</label>
                                    </div>
                                    <select class="rounded-3 p-2 border border-2 w-100"
                                        :class="['selectJobPreferences', { 'selectOpen': isOpen1 }]" @focus="isOpen1 = true"
                                        @blur="isOpen1 = false">
                                        <option value="">content</option>
                                        <option value="role1">content</option>
                                        <option value="role2">content</option>
                                    </select>
                                    <div class="position-absolute arrow arrowOverflowCompany"
                                        :class="{ 'selectOpen': isOpen1 }">
                                    </div>
                                    <span>Helper Place holder</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-1 text-start">
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="">socail media</label>
                                <label for="" class="fs-5 text-danger mt-2">*</label>
                            </div>
                            <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                            <span>Helper Place holder</span>
                        </div>
                    </div>
                    <div class="text-end mt-3">
                        <input type="submit" class="btn btn-success inputConfirm px-4 py-2" value="save" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

const isOpen = ref(false);
const isOpen1 = ref(false);

import { ref } from 'vue';

const fileInput = ref(null);

const triggerFileInput = () => {
    if (fileInput.value) {
        fileInput.value.click();
    }
};

const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
        console.log('Selected file:', files[0]);
    }
};
</script>