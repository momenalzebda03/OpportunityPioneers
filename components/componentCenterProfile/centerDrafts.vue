<template>
    <div class="mx-3 d-flex flex-column gap-4">
        <div class="d-flex align-items-center justify-content-between mt-3 pb-3 divBorderBottomProfileText">
            <h2 class="mt-3 fw-bold fs-6">drafts</h2>
        </div>
        <div class="row rowChild">
            <div class="col-md-6 col-lg-4" v-for="(item, index) in apiImage" :key="index">
                <div class="position-relative hoverImageCard">
                    <img :src="item.image" alt="" class="w-100">
                    <div class="position-absolute divAbsoluteCardHover bottom-0 w-100 text-white py-2">
                        <div class="container">
                            <h2 class="fs-6">{{ item.title }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const apiImage = ref([
    { image: 'http://localhost:3000/_nuxt/assets/images/DraftCards.png', title: 'Real Estate Mobile App Case Study' },
    { image: 'http://localhost:3000/_nuxt/assets/images/DraftCards.png', title: 'Real Estate Mobile App Case Study' },
    { image: 'http://localhost:3000/_nuxt/assets/images/DraftCards.png', title: 'Real Estate Mobile App Case Study' },
    { image: 'http://localhost:3000/_nuxt/assets/images/DraftCards.png', title: 'Real Estate Mobile App Case Study' },
    { image: 'http://localhost:3000/_nuxt/assets/images/DraftCards.png', title: 'Real Estate Mobile App Case Study' },
    { image: 'http://localhost:3000/_nuxt/assets/images/DraftCards.png', title: 'Real Estate Mobile App Case Study' },
    { image: 'http://localhost:3000/_nuxt/assets/images/DraftCards.png', title: 'Real Estate Mobile App Case Study' },
    { image: 'http://localhost:3000/_nuxt/assets/images/DraftCards.png', title: 'Real Estate Mobile App Case Study' },
    { image: 'http://localhost:3000/_nuxt/assets/images/DraftCards.png', title: 'Real Estate Mobile App Case Study' }
])
</script>