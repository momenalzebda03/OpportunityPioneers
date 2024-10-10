<template>
    <div class="mx-3 d-flex flex-column gap-4">
        <div class="d-flex align-items-center justify-content-between mt-3 pb-3 divBorderBottomProfileText">
            <h2 class="mt-3 fw-bold fs-6">Experience</h2>
            <ComponentModal />
        </div>
        <!-- <div>
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
        </div> -->
        <ul class="px-0">
            <li class="d-flex gap-3 align-items-center" v-for="item in arrayExerience" :key="item.key">
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
                    <div @click="functionDeleteKey(item.key)">
                        <img src="/assets/images/delete.png" alt="" class="d-none">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import ComponentModal from "../componentCenterProfile/compnentModal.vue";

const arrayExerience = ref([
    { key: 0, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
    { key: 1, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
    { key: 2, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
    { key: 3, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
    { key: 4, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
    { key: 5, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
]);

const functionDeleteKey = (key) => {
    arrayExerience.value = arrayExerience.value.filter(item => item.key !== key);
};
</script>