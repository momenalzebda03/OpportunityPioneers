<template>
    <div class="mx-3 d-flex flex-column gap-4">
        <div class="d-flex align-items-center justify-content-between mt-3 pb-3 divBorderBottomProfileText">
            <h2 class="mt-3 fw-bold fs-6">projects</h2>
            <img src="/assets/images/plus.png" alt="Open Modal" class="imageMouse" />
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