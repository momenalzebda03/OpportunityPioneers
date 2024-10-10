<template>
    <div>
        <img src="/assets/images/plus.png" alt="Open Modal" class="imageMouse" @click="openModal" />
        <div class="modal fade" tabindex="-1">
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
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New experience</h5>
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
                                    <div class="d-flex flex-column gap-1 w-100">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <label for="">Employment Type</label>
                                            <label for="" class="fs-5 text-danger mt-2">*</label>
                                        </div>
                                        <select name="" id="" class="w-100 rounded-3 p-2 border">
                                            <option value="">content</option>
                                            <option value="">content</option>
                                        </select>
                                        <span>Helper Place holder</span>
                                    </div>
                                    <div class="d-flex flex-column gap-1 w-100">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <label for="">Employment Type</label>
                                            <label for="" class="fs-5 text-danger mt-2">*</label>
                                        </div>
                                        <select name="" id="" class="w-100 rounded-3 p-2 border">
                                            <option value="">content</option>
                                            <option value="">content</option>
                                        </select>
                                        <span>Helper Place holder</span>
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
                                    <label for="currently" class="sizeLabel">I am currently working in this role</label>
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
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';

const props = defineProps(['activeForm', 'showModal']);
const emit = defineEmits(['close-modal']);

const showModal = ref(false);
const activeForm = ref('');

const modalTitle = computed(() => {
    return activeForm.value == 'projects' ? 'Add New Project' :
        activeForm.value == 'experience' ? 'Add New Experience' : '';
});

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
    // Implement your save logic here
    closeModal();
};
</script>