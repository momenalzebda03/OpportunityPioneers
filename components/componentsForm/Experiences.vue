<template>
    <div class="px-lg-5 mx-lg-5">
        <div class="mt-5 border border-2 p-4 rounded-3">
            <div class="d-flex justify-content-between">
                <h2 class="fs-5 mt-2 mt-md-0">My Experiences</h2>
                <img src="/assets/images/plus.png" alt="Open Modal" class="imageMouse" />
            </div>
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
            <div class="text-end mt-5">
                <router-link to="" class="btn btn-success inputConfirm px-3">save</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const arrayExerience = ref([
    { key: 0, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
    { key: 1, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
    { key: 2, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
    { key: 3, imgSoptify: 'http://localhost:3000/_nuxt/assets/images/spotify.png', title: 'Senior UX / UI Designer', spanTitle: 'Spotify', span: 'Aug 2019 - Dec 2020' },
]);

const functionDeleteKey = (key) => {
    arrayExerience.value = arrayExerience.value.filter(item => item.key !== key);
};
</script>
