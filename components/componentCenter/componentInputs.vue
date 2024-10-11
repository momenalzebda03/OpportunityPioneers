<template>
    <form action="" method="get" class="mt-4 row gap-3 gap-md-0">
        <div class="row gap-3 gap-lg-0">
            <div class="col text-center" v-for="index in 5" :key="index">
                <input type="text" maxlength="1" v-model="inputValues[index]" @input="updateClass(index)"
                    :class="inputClasses[index]" class="rounded-3 text-center inputWidthEmail pt-3 pb-2 fw-bold"
                    placeholder="*" />
            </div>
        </div>
    </form>
</template>

<script setup>
const inputValues = ref(['', '', '', '']);
const inputClasses = ref(['borderColorNormal', 'borderColorNormal', 'borderColorNormal', 'borderColorNormal']);

const updateClass = (index) => {
    const value = inputValues.value[index];

    if (isNaN(value) || value == '') {
        inputClasses.value[index] = 'borderColorNormal';
    } else if (value == '8') {
        inputClasses.value[index] = 'inputWidthEmailTrue';
    } else {
        inputClasses.value[index] = 'inputWidthEmailFalse';
    }
};
</script>