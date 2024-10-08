<template>
    <div class="mx-3 d-flex flex-column gap-4">
        <div class="d-flex align-items-center justify-content-between mt-3 pb-3 divBorderBottomProfileText">
            <h2 class="mt-3 fw-bold fs-6">experience</h2>
            <img src="/assets/images/plus.png" alt="Open Modal" class="imageMouse" @click="openModal" />
        </div>
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
                                            <textarea name="" id="" cols="100" rows="4"
                                                class="textArea rounded-3 p-2 border">
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
                                        <textarea name="" id="" cols="100" rows="6"
                                            placeholder="Your Uploaded Content Will display here"
                                            class="textArea textAreaPlaceholder rounded-3 p-2 border">
                                        </textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                            <button type="button" class="btn btn-primary" @click="saveChanges">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row rowChild">
            <div class="col-md-6 col-lg-4" v-for="(item, index) in apiImage" :key="index">
                <div class="position-relative hoverImageCard">
                    <img :src="item.image" alt="" class="w-100">
                    <div class="position-absolute divAbsoluteCardHover bottom-0 w-100 text-white py-4">
                        <div class="container">
                            <h2 class="fs-6">{{ item.title }}</h2>
                            <ul class="row px-0 mt-2 mb-0">
                                <li class="col-4">
                                    <div class="d-flex align-items-center gap-2">
                                        <img src="/assets/images/yay.png" alt="">
                                        <span>{{ item.lastSpanyay }}</span>
                                    </div>
                                </li>
                                <li class="col-4">
                                    <div class="d-flex align-items-center gap-2">
                                        <img src="/assets/images/like.png" alt="">
                                        <span>{{ item.lastSpanLike }}</span>
                                    </div>
                                </li>
                                <li class="col-4">
                                    <div class="d-flex align-items-center gap-2">
                                        <img src="/assets/images/messageList.png" alt="">
                                        <span>{{ item.lastSpanList }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
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
    showModal.value = false;
    const modalElement = document.querySelector('.modal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
        modal.hide();
    }
};

const saveChanges = () => {
    console.log('Changes saved!');
    closeModal();
};

const apiImage = ref([
    { image: 'http://localhost:3000/_nuxt/assets/images/LiveProjectCard.png', title: 'Real Estate Mobile App Case Study', lastSpanyay: '2500', lastSpanLike: '2500', lastSpanList: '2500' },
    { image: 'http://localhost:3000/_nuxt/assets/images/LiveProjectCard4.png', title: 'Real Estate Mobile App Case Study', lastSpanyay: '2500', lastSpanLike: '2500', lastSpanList: '2500' },
    { image: 'http://localhost:3000/_nuxt/assets/images/LiveProjectCard1.png', title: 'Real Estate Mobile App Case Study', lastSpanyay: '2500', lastSpanLike: '2500', lastSpanList: '2500' },
    { image: 'http://localhost:3000/_nuxt/assets/images/LiveProjectCard2.png', title: 'Real Estate Mobile App Case Study', lastSpanyay: '2500', lastSpanLike: '2500', lastSpanList: '2500' },
    { image: 'http://localhost:3000/_nuxt/assets/images/LiveProjectCard3.png', title: 'Real Estate Mobile App Case Study', lastSpanyay: '2500', lastSpanLike: '2500', lastSpanList: '2500' },
    { image: 'http://localhost:3000/_nuxt/assets/images/LiveProjectCard4.png', title: 'Real Estate Mobile App Case Study', lastSpanyay: '2500', lastSpanLike: '2500', lastSpanList: '2500' },
    { image: 'http://localhost:3000/_nuxt/assets/images/LiveProjectCard1.png', title: 'Real Estate Mobile App Case Study', lastSpanyay: '2500', lastSpanLike: '2500', lastSpanList: '2500' },
    { image: 'http://localhost:3000/_nuxt/assets/images/LiveProjectCard5.png', title: 'Real Estate Mobile App Case Study', lastSpanyay: '2500', lastSpanLike: '2500', lastSpanList: '2500' },
    { image: 'http://localhost:3000/_nuxt/assets/images/LiveProjectCard6.png', title: 'Real Estate Mobile App Case Study', lastSpanyay: '2500', lastSpanLike: '2500', lastSpanList: '2500' }
])
</script>
