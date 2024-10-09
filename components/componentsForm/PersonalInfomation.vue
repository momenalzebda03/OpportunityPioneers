<template>
    <div class="px-lg-5 mx-lg-5">
        <div class="mt-5 border border-2 p-4 rounded-3">
            <h2 class="fs-5">my personal information</h2>
            <div class="mt-5 text-center">
                <div class="d-flex flex-column position-relative align-items-center">
                    <img src="/assets/images/user.png" alt="">
                    <router-link to="">
                        <img src="/assets/images/photo.png" alt="" class="position-absolute linkPhoto linkPhotoForm">
                    </router-link>
                </div>
                <form action="" method="" class="mt-4">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex flex-column gap-1 text-start">
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="">full name</label>
                                <label for="" class="fs-5 text-danger mt-2">*</label>
                            </div>
                            <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                            <span>Helper Place holder</span>
                        </div>
                        <div class="d-flex flex-column gap-1 text-start">
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="">ocoupation</label>
                                <label for="" class="fs-5 text-danger mt-2">*</label>
                            </div>
                            <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                            <span>Helper Place holder</span>
                        </div>
                        <div class="d-flex flex-column gap-1 text-start">
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="">Skills</label>
                                <label for="" class="fs-5 text-danger mt-2">*</label>
                            </div>
                            <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                            <span>Helper Place holder</span>
                        </div>
                        <div class="d-flex flex-column gap-1 text-start">
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="">Project Description</label>
                                <label for="" class="fs-5 text-danger mt-2">*</label>
                            </div>
                            <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                            <span>Helper Place holder</span>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="d-flex flex-column gap-1 text-start w-100">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <label for="">country</label>
                                        <label for="" class="fs-5 text-danger mt-2">*</label>
                                    </div>
                                    <select name="" id="" class="p-2 rounded-3 border border-2">
                                        <option value="">Content</option>
                                        <option value="">Content</option>
                                        <option value="">Content</option>
                                    </select>
                                    <span>Helper Place holder</span>
                                </div>
                            </div>
                            <div class="col">
                                <div class="d-flex flex-column gap-1 text-start w-100">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <label for="">city</label>
                                        <label for="" class="fs-5 text-danger mt-2">*</label>
                                    </div>
                                    <select name="" id="" class="p-2 rounded-3 border border-2">
                                        <option value="">Content</option>
                                        <option value="">Content</option>
                                        <option value="">Content</option>
                                    </select>
                                    <span>Helper Place holder</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-1 text-start">
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="">website</label>
                                <label for="" class="fs-5 text-danger mt-2">*</label>
                            </div>
                            <input type="text" placeholder="Content" class="w-100 rounded-3 p-2 border">
                            <span>Helper Place holder</span>
                        </div>
                    </div>
                    <div class="text-end mt-3">
                        <router-link to="" class="btn btn-success inputConfirm px-4 py-2">save</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>