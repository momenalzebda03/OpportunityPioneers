<template>
    <div class="modal fade" tabindex="-1" id="staticBackdrop" aria-hidden="true">
        <div class="modal-dialog shadow-lg">
            <div class="modal-content">
                <div class="modal-header border border-bottom-0">
                    <h5 class="modal-title">Add New Freelance Projects</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form action="" method="">
                        <div class="d-flex flex-column gap-3">
                            <div class="d-flex flex-column gap-1">
                                <div class="d-flex justify-content-between align-items-center">
                                    <label for="">project name</label>
                                    <label for="" class="fs-5 text-danger mt-2">*</label>
                                </div>
                                <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                                <span>Helper Place holder</span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                                <div class="d-flex justify-content-between align-items-center">
                                    <label for="">project title</label>
                                    <label for="" class="fs-5 text-danger mt-2">*</label>
                                </div>
                                <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                                <span>Helper Place holder</span>
                            </div>
                            <div class="mt-1 d-flex flex-column gap-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <label class="fw-bold">about the project</label>
                                    <label for="" class="fs-5 text-danger mt-2">*</label>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" placeholder="content"
                                    class="rounded-3 border border-2 p-2 textArea"></textarea>
                                <span>Helper Placeholder</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <label class="fw-bold" for="">Upload File</label>
                                <label for="" class="fs-5 text-danger mt-2">*</label>
                            </div>
                            <div class="d-flex flex-column gap-1 position-relative">
                                <div
                                    class="position-absolute d-flex flex-column gap-1 justify-content-center align-items-center h-100 w-100">
                                    <img src="/assets/images/uploadFile.png" alt="" class="imageMouse"
                                        @click="triggerFileInput">
                                    <span>Drag and Drop file here or <span
                                            class="fw-bold imageMouse text-decoration-underline"
                                            @click="triggerFileInput">choose file</span></span>
                                    <input type="file" ref="fileInput" class="d-none" />
                                </div>
                                <textarea name="" id="" cols="100" rows="7"
                                    class="textArea textAreaPlaceholder textAreaPlaceholderOverflow rounded-3 p-2"></textarea>
                                <div class="d-flex justify-content-between">
                                    <span>Supported formats: <span class="fw-bold">Pdf</span></span>
                                    <span>Maximum size: <span class="fw-bold">30MB</span></span>
                                </div>
                            </div>
                            <ul class="px-0">
                                <li v-for="(item, index) in arrayList" :key="index"
                                    class="my-3 divUploadFile px-2 pt-3 pb-0 rounded-3">
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-white p-2 rounded-3">
                                                <img :src="item.image" alt="">
                                            </div>
                                            <div class="d-flex flex-column">
                                                <span class="fw-bold">{{ item.typeSpan }}</span>
                                                <span class="fw-bold listColor">{{ item.sizeSpane }}</span>
                                            </div>
                                        </div>
                                        <button type="button" class="btn-close" @click="removeTiem(index)"></button>
                                    </div>
                                    <div class="px-0 mt-2">
                                        <div class="w-100 d-flex gap-3 align-items-center">
                                            <div class="position-relative w-100">
                                                <div
                                                    class="w-100 bg-white rounded-5 position-absolute divOpload overflow-hidden">
                                                    <div class="divOploadDonwload" :style="{ width: item.spanWidth }"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <span class="listColor">{{ item.spanWidth }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="modal-footer d-flex justify-content-end">
                            <div class="d-flex gap-3">
                                <input type="submit" class="btn btn-success inputConfirm" value="send" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const arrayList = ref([
    { key: 0, image: 'http://localhost:3000/_nuxt/assets/images/imagePdf.png', typeSpan: 'My cv', sizeSpane: '4 MB', spanWidth: '55%' },
    { key: 1, image: 'http://localhost:3000/_nuxt/assets/images/imagePdf.png', typeSpan: 'My cv', sizeSpane: '4 MB', spanWidth: '15%' },
    { key: 2, image: 'http://localhost:3000/_nuxt/assets/images/imagePdf.png', typeSpan: 'My cv', sizeSpane: '4 MB', spanWidth: '80%' }
])

const removeTiem = (index) => {
    arrayList.value.splice(index, 1);
}

const fileInput = ref(null);
const triggerFileInput = () => {
    fileInput.value.click();
};
</script>
