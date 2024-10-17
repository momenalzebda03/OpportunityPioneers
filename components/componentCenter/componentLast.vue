<!-- <template>
    <ul class="row p-0 mt-4 gap-3 gap-md-0">
        <li class="col">
            <div class="d-flex flex-column gap-2">
                <span class="text-nowrap spanLast"
                    :class="{ active: currentRoute == '/PageEmailAddressVerification' || currentRoute == '/formCreateUser' || currentRoute == '/JobPreferences', activeEmail: currentRoute == '/PageEmailAddressVerification' || currentRoute == '/JobPreferences' }">
                    Personal Information
                </span>
                <div class="lineLast ms-3 position-relative rounded-2"
                    :class="{ active: currentRoute == '/PageEmailAddressVerification' || currentRoute == '/formCreateUser' || currentRoute == '/JobPreferences', activeEmail: currentRoute == '/PageEmailAddressVerification' || currentRoute == '/JobPreferences' }">
                </div>
            </div>
        </li>
        <li class="col">
            <div class="d-flex flex-column gap-2">
                <span class="text-nowrap spanLast"
                    :class="{ active: currentRoute == '/JobPreferences', activeEmail: currentRoute == '/JobPreferences' }">
                    Email Verification
                </span>
                <div class="lineLast ms-3 position-relative rounded-2"
                    :class="{ active: currentRoute == '/JobPreferences', activeEmail: currentRoute == '/JobPreferences' }">
                </div>
            </div>
        </li>
        <li class="col"
            v-if="((activeIndex !== 1 && activeIndex !== 2) || currentRoute == '/PageEmailAddressVerification' || currentRoute == '/JobPreferences') && !hideJobPreferences">
            <div class="d-flex flex-column gap-2">
                <span class="text-nowrap spanLast">Job Preferences</span>
                <div class="lineLast ms-3 position-relative rounded-2"></div>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const currentRoute = ref(route.path);
const activeIndex = ref(null);
const props = defineProps({
    hideJobPreferences: {
        type: Boolean,
        default: false
    }
});

onMounted(() => {
    const storedIndex = localStorage.getItem('selectedIndex');

    if (storedIndex !== null) {
        activeIndex.value = Number(storedIndex);
    }
});
</script> -->