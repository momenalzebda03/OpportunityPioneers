<template>
    <div class="px-lg-5 mx-lg-5">
        <div class="mt-5 border border-2 p-4 rounded-3">
            <h2 class="fs-5">My Password</h2>
            <div class="mt-5 text-center">
                <form action="" method="" class="mt-4">
                    <input type="text" v-model="username" style="display: none;" autocomplete="username" />
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex flex-column gap-1 text-start position-relative">
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="currentPassword">Current Password</label>
                                <label for="" class="fs-5 text-danger mt-2">*</label>
                            </div>
                            <input type="password" id="currentPassword" placeholder="Content"
                                class="w-100 rounded-3 p-2 border" v-model="inputGange" autocomplete="current-password" />
                            <span>Helper Placeholder</span>
                            <span v-if="containsAcshen"></span>
                            <img src="/assets/images/yayClose.png" alt="" v-else-if="!inputGange"
                                class="position-absolute imageWidthInput imageWidthInputOverflow imageWidthInputOverflow1" />
                        </div>
                        <div class="d-flex flex-column gap-1 text-start position-relative">
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="newPassword">New Password</label>
                                <label for="" class="fs-5 text-danger mt-2">*</label>
                            </div>
                            <input type="password" id="newPassword" placeholder="Content" class="w-100 rounded-3 p-2 border"
                                v-model="inputGange1" autocomplete="new-password" />
                            <span>Helper Placeholder</span>
                            <span v-if="containsAcshen1"></span>
                            <img src="/assets/images/yayClose.png" alt="" v-else-if="!inputGange1"
                                class="position-absolute imageWidthInput imageWidthInputOverflow imageWidthInputOverflow1" />
                        </div>
                        <div class="d-flex flex-column gap-1 text-start position-relative">
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="confirmPassword">Confirm New Password</label>
                                <label for="" class="fs-5 text-danger mt-2">*</label>
                            </div>
                            <input type="password" id="confirmPassword" placeholder="Content"
                                class="w-100 rounded-3 p-2 border" v-model="inputGange2" autocomplete="new-password" />
                            <span>Helper Placeholder</span>
                            <span v-if="containsAcshen2"></span>
                            <img src="/assets/images/yayClose.png" alt="" v-else-if="!inputGange2"
                                class="position-absolute imageWidthInput imageWidthInputOverflow imageWidthInputOverflow1" />
                        </div>
                    </div>
                    <div class="text-end mt-3">
                        <input type="submit" class="btn btn-success inputConfirm px-4 py-2" value="Save" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const inputGange = ref('');
const inputGange1 = ref('');
const inputGange2 = ref('');
const username = ref('');

const containsAcshen = computed(() => {
    return inputGange.value.includes('acshen');
});

const containsAcshen1 = computed(() => {
    return inputGange1.value.includes('acshen');
});

const containsAcshen2 = computed(() => {
    return inputGange2.value.includes('acshen');
});
</script>