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
                                <div class="text-center w-100">
                                    <label class="fw-bold">or</label>
                                </div>
                                <label for="" class="fs-5 text-danger mt-2">*</label>
                            </div>
                            <div class="d-flex flex-column gap-1 position-relative">
                                <textarea name="" id="" cols="100" rows="6" placeholder="Upload your document"
                                    class="textArea textAreaPlaceholder textAreaPlaceholderOverflow rounded-3 p-2"></textarea>
                                <span>Helper Placeholder</span>
                            </div>
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
const closeModal = () => {
    const modalElement = document.querySelector('.modal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
        modal.hide();
    }
    showModal.value = false;
};
</script>
