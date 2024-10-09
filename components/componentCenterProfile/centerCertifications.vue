<template>
    <div class="mx-3 d-flex flex-column gap-4">
        <div class="d-flex align-items-center justify-content-between mt-3 pb-3 divBorderBottomProfileText">
            <h2 class="mt-3 fw-bold fs-6">experience</h2>
            <img src="/assets/images/plus.png" alt="Open Modal" class="imageMouse" @click="openModal" />
        </div>
        <ComponentModal />
        <ul class="px-0">
            <li class="d-flex gap-3 align-items-center" v-for="(item, index) in arrayExerience" :key="index">
                <div>
                    <img src="/assets/images/arrow.png" alt="">
                </div>
                <div
                    class="d-flex justify-content-between align-items-center w-100 divHoverListExperience p-3 rounded-3 imageMouse">
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
    { key: 0, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/googleLogo.png', title: 'google', spanTitle: 'google ux pyphssicess', span: 'Aug 2019 - Dec 2020' },
    { key: 1, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/googleLogo.png', title: 'google', spanTitle: 'google ux pyphssicess', span: 'Aug 2019 - Dec 2020' },
    { key: 2, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/googleLogo.png', title: 'google', spanTitle: 'google ux pyphssicess', span: 'Aug 2019 - Dec 2020' },
    { key: 3, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/googleLogo.png', title: 'google', spanTitle: 'google ux pyphssicess', span: 'Aug 2019 - Dec 2020' },
    { key: 4, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/googleLogo.png', title: 'google', spanTitle: 'google ux pyphssicess', span: 'Aug 2019 - Dec 2020' },
    { key: 5, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/googleLogo.png', title: 'google', spanTitle: 'google ux pyphssicess', span: 'Aug 2019 - Dec 2020' },
])

const functionDeleteKey = (element) => {
    console.log(element);
}
</script>