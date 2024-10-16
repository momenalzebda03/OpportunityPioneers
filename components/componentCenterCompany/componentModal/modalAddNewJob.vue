<template>
    <div class="modal fade" tabindex="-1">
        <div class="modal-dialog shadow-lg">
            <div class="modal-content">
                <div class="modal-header border border-bottom-0">
                    <h5 class="modal-title">Add New Job</h5>
                    <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="" method="">
                        <div class="d-flex flex-column gap-3">
                            <div class="d-flex flex-column gap-1">
                                <div class="d-flex justify-content-between align-items-center">
                                    <label for="">Title job</label>
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
                                <div class="d-flex flex-column gap-0">
                                    <div class="py-2 px-1 border border-2 rounded-3 divKillsOverflow overflow-auto">
                                        <div class="d-flex gap-1 flex-wrap">
                                            <div v-for="(item, index) in loopSkills" :key="index">
                                                <div v-if="item.active"
                                                    class="text-center divSkillsGreen text-white rounded-3 p-1 d-flex align-items-center">
                                                    <span>{{ item.titleSkill }}</span>
                                                    <img src="/assets/images/closeSkill.png" alt="" class="imageMouse"
                                                        @click="changeActive(index)">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="py-2 px-1 border border-2 border-top-0 rounded-3 divKills overflow-auto">
                                        <span class="spanPLacholdere">Suggested tags:</span>
                                        <div class="mt-2 d-flex gap-1 flex-wrap">
                                            <div v-for="(item, index) in loopSkills" :key="index"
                                                class="imageMouse text-center backgroundSkills rounded-3 mt-1 p-1"
                                                @click="changeActive(index)">
                                                <span>{{ item.titleSkill }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-column flex-md-row w-100 gap-4">
                                <div class="w-100">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <label for="">salary</label>
                                        <label for="" class="fs-5 text-danger mt-2">*</label>
                                    </div>
                                    <div class="d-flex w-100 gap-3">
                                        <div class="d-flex flex-column gap-1 w-100">
                                            <div class="d-flex gap-2">
                                                <div class="d-flex gap-1 align-items-center custom-radio position-relative">
                                                    <input type="radio" id="radioMonthly" name="paymentOption"
                                                        value="monthly">
                                                    <label for="radioMonthly" class="labelSize ms-2">Monthly</label>
                                                </div>
                                                <input type="text" placeholder="$250"
                                                    class="w-100 rounded-3 p-2 border blackPlashorlder">
                                            </div>
                                            <span>Helper Placeholder</span>
                                        </div>
                                        <div class="d-flex flex-column gap-1 w-100">
                                            <div class="d-flex gap-2">
                                                <div class="d-flex gap-1 align-items-center custom-radio position-relative">
                                                    <input type="radio" id="radioAnnually" name="paymentOption"
                                                        value="annually">
                                                    <label for="radioAnnually" class="labelSize ms-2">hourly</label>
                                                </div>
                                                <input type="text" placeholder="$25"
                                                    class="w-100 rounded-3 p-2 border blackPlashorlder">
                                            </div>
                                            <span>Helper Placeholder</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-100">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <label for="">End Date</label>
                                        <label for="" class="fs-5 text-danger mt-2">*</label>
                                    </div>
                                    <div class="d-flex w-100 gap-3">
                                        <div class="position-relative w-100">
                                            <select class="rounded-3 p-2 border border-2 w-100"
                                                :class="['selectJobPreferences', { 'selectOpen': isOpen }]"
                                                @focus="isOpen = true" @blur="isOpen = false">
                                                <option value="">day</option>
                                                <option value="role1">Role 1</option>
                                                <option value="role2">Role 2</option>
                                            </select>
                                            <div class="position-absolute arrow arrowOverlfow"
                                                :class="{ 'selectOpen': isOpen }">
                                            </div>
                                            <span>Helper Placeholder</span>
                                        </div>
                                        <div class="position-relative w-100">
                                            <select class="rounded-3 p-2 border border-2 w-100"
                                                :class="['selectJobPreferences', { 'selectOpen': isOpen1 }]"
                                                @focus="isOpen1 = true" @blur="isOpen1 = false">
                                                <option value="">month</option>
                                                <option value="role1">Role 1</option>
                                                <option value="role2">Role 2</option>
                                            </select>
                                            <div class="position-absolute arrow arrowOverlfow"
                                                :class="{ 'selectOpen': isOpen1 }">
                                            </div>
                                            <span>Helper Placeholder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-100">
                                <div class="d-flex justify-content-between align-items-center">
                                    <label for="">Type of work</label>
                                    <label for="" class="fs-5 text-danger mt-2">*</label>
                                </div>
                                <div class="d-flex w-100 gap-3 mt-1">
                                    <div
                                        class="d-flex gap-1 align-items-center customRadio customRadioOverflow position-relative">
                                        <input type="radio" id="on-size" name="workOption" value="monthly">
                                        <label for="on-size" class="labelSize ms-2">On-site</label>
                                    </div>
                                    <div
                                        class="d-flex gap-1 align-items-center customRadio customRadioOverflow position-relative">
                                        <input type="radio" id="remote" name="workOption" value="monthly">
                                        <label for="remote" class="labelSize ms-2">Remote</label>
                                    </div>
                                </div>
                            </div>
                            <div class="w-100">
                                <div class="d-flex justify-content-between align-items-center">
                                    <label for="">work time</label>
                                    <label for="" class="fs-5 text-danger mt-2">*</label>
                                </div>
                                <div class="d-flex w-100 gap-3 mt-1">
                                    <div
                                        class="d-flex gap-1 align-items-center customRadio customRadioOverflow position-relative">
                                        <input type="radio" id="fullTime" name="TimeOption" value="monthly">
                                        <label for="fullTime" class="labelSize ms-2">full time</label>
                                    </div>
                                    <div
                                        class="d-flex gap-1 align-items-center customRadio customRadioOverflow position-relative">
                                        <input type="radio" id="partTime" name="TimeOption" value="monthly">
                                        <label for="partTime" class="labelSize ms-2">parit time</label>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-1 d-flex flex-column gap-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <label class="fw-bold">about the job</label>
                                    <label for="" class="fs-5 text-danger mt-2">*</label>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" placeholder="content"
                                    class="rounded-3 border border-2 p-2 textArea"></textarea>
                                <span>Helper Placeholder</span>
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-end">
                            <div class="d-flex gap-3">
                                <input type="submit" class="btn btn-success inputConfirm" value="publish" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const isOpen1 = ref(false);

const loopSkills = ref([
    { key: 0, titleSkill: 'UX/UI', active: false },
    { key: 1, titleSkill: 'UX/UI', active: false },
    { key: 2, titleSkill: 'UX/UI', active: false },
    { key: 3, titleSkill: 'UX/UI', active: false },
    { key: 4, titleSkill: 'UX/UI', active: false },
    { key: 5, titleSkill: 'UX/UI', active: false },
    { key: 6, titleSkill: 'UX/UI', active: false },
    { key: 7, titleSkill: 'UX/UI', active: false },
    { key: 8, titleSkill: 'UX/UI', active: false },
    { key: 9, titleSkill: 'UX/UI', active: false },
    { key: 10, titleSkill: 'UX/UI', active: false },
    { key: 11, titleSkill: 'UX/UI', active: false },
    { key: 12, titleSkill: 'UX/UI', active: false },
    { key: 13, titleSkill: 'UX/UI', active: false },
    { key: 14, titleSkill: 'UX/UI', active: false }
]);

const changeActive = (index) => {
    loopSkills.value[index].active = !loopSkills.value[index].active;
};

const closeModal = () => {
    const modalElement = document.querySelector('.modal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
        modal.hide();
    }
    showModal.value = false;
};
</script>
