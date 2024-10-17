<template>
    <div style="padding-top: 150px; max-width: 600px; margin: auto;">
        <div class="stepper">
            <div class="step" v-for="(item, index) in items" :key="index">
                <div class="step-header" :class="{ active: currentStep == index, completed: currentStep > index }"
                    @click="goToStep(index)">
                    {{ item }}
                </div>
            </div>
            <div class="navigation">
                <button @click="prevStep" :disabled="currentStep == 0">Previous</button>
                <button @click="nextStep" :disabled="currentStep >= items.length - 1">Next</button>
            </div>
        </div>
        <div v-if="currentStep == 0">
            <p>Welcome to Step 1!</p>
        </div>
        <div v-if="currentStep == 1">
            <p>Welcome to Step 2!</p>
        </div>
        <div v-if="currentStep == 2">
            <p>Welcome to Step 3!</p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            currentStep: 0,
            items: ['Step 1', 'Step 2', 'Step 3'],
        };
    },
    methods: {
        nextStep() {
            if (this.currentStep < this.items.length - 1) {
                this.currentStep++;
            }
        },
        prevStep() {
            if (this.currentStep > 0) {
                this.currentStep--;
            }
        },
        goToStep(index) {
            this.currentStep = index;
        },
    },
};
</script>
  
<style scoped>
.stepper {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    background-color: #f5f5f5;
}

.step {
    margin-bottom: 20px;
}

.step-header {
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #e0e0e0;
    /* Default background for inactive steps */
    transition: background-color 0.3s;
}

.step-header:hover {
    background-color: #d5d5d5;
    /* Change on hover */
}

.step-header.active {
    background-color: #007bff;
    /* Active step color */
    color: white;
}

.step-header.completed {
    background-color: #28a745;
    /* Completed step color */
    color: white;
}

.navigation {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
</style>  