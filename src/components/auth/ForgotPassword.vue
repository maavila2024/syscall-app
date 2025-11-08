<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ForgotPasswordForm from './ForgotPasswordForm.vue';
import WaitForEmail from './WaitForEmail.vue';

const router = useRouter();
const state = ref('forgotPassword');
const userEmail = ref('');

const handleAfterRequest = (email) => {
  userEmail.value = email;
  state.value = 'waitForEmail';
}
</script>

<template>
    <div>
        <ForgotPasswordForm
            v-if="state === 'forgotPassword'"
            @after-request="handleAfterRequest"
        />
        <WaitForEmail 
            v-if="state === 'waitForEmail'"
            :email="userEmail"
        />
    </div>
</template>
