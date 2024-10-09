<template>
    <div>
        <div class="modal fade" tabindex="-1" v-if="showModal" @click.self="closeModal">
            <div class="modal-dialog shadow-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New Project</h5>
                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="">
                            <div class="d-flex flex-column gap-3">
                                <div class="d-flex flex-column gap-1">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <label for="">Project Title</label>
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
                                    <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                                    <span>Helper Place holder</span>
                                </div>
                                <div class="d-flex flex-column gap-1">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <label for="">Project Description</label>
                                        <label for="" class="fs-5 text-danger mt-2">*</label>
                                    </div>
                                    <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                                    <span>Helper Place holder</span>
                                </div>
                                <div class="d-flex flex-column gap-1">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <label for="">Project Content</label>
                                        <label for="" class="fs-5 text-danger mt-2">*</label>
                                    </div>
                                    <div class="position-relative">
                                        <textarea name="" id="" cols="100" rows="4" class="textArea rounded-3 p-2 border">
                                            </textarea>
                                        <ul class="position-absolute d-flex align-items-center divImageTextErea gap-4">
                                            <li class="imageMouse">
                                                <img src="/assets/images/Gallery.png" alt="" class="w-100">
                                            </li>
                                            <li class="imageMouse">
                                                <img src="/assets/images/Videocam.png" alt="" class="w-100">
                                            </li>
                                            <li class="imageMouse">
                                                <img src="/assets/images/Link.png" alt="" class="w-100">
                                            </li>
                                            <li class="imageMouse">
                                                <img src="/assets/images/File.png" alt="" class="w-100">
                                            </li>
                                        </ul>
                                    </div>
                                    <span>Helper Place holder</span>
                                </div>
                                <div class="d-flex flex-column gap-1 position-relative">
                                    <textarea name="" id="" cols="100" rows="6" value=""
                                        placeholder="Your Uploaded Content Will display here"
                                        class="textArea textAreaPlaceholder rounded-3 p-2">
                                        </textarea>
                                </div>
                            </div>
                            <div class="modal-footer d-flex justify-content-between">
                                <div>
                                    <router-link to="" class="linkGreen fw-bold">Preview</router-link>
                                </div>
                                <div class="d-flex gap-3">
                                    <input type="submit" class="btn btn-outline-success" @click="closeModal"
                                        value="Save as draft" />
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
</template>

<script setup>
import { ref } from 'vue';
const showModal = ref(false);

const closeModal = () => {
    showModal.value = false;
    const modalElement = document.querySelector('.modal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
        modal.hide();
    }
};

const saveChanges = () => {
    closeModal();
};
</script>