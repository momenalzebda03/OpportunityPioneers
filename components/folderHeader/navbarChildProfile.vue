<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container d-flex flex-row-reverse flex-lg-row">
            <div class="d-flex justify-content-center">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav" v-for="(item, index) in listCard" :key="index">
                    <li class="nav-item mx-2">
                        <router-link to="" class="text-decoration-none linkColorNavbarProfile"
                            :class="{ 'active': item.active }" @click="toggleActiveState(index)">{{ item.textLink
                            }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
const listCard = ref([
    { textLink: 'projects', active: true },
    { textLink: 'Experience', active: false },
    { textLink: 'Certifications', active: false },
    { textLink: 'Drafts', active: false },
])

const toggleActiveState = (index) => {
    listCard.value.forEach((checkList, idx) => {
        checkList.active = idx === index;
    });
};

</script>