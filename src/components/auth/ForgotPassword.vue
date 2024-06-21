<script setup>
import { ref } from 'vue';
import ForgotPasswordForm from './ForgotPasswordForm.vue';
import ResetPasswordForm from './ResetPasswordForm.vue';

const state = ref('forgotPassword')
</script>

<template>
    <div>
        <ForgotPasswordForm
            v-if="state === 'forgotPassword'"
            @after-request="state = 'resetPassword'"
        />
        <ResetPasswordForm 
            v-if="state === 'resetPassword'"
            @after-reset="state = 'reset'"
        />
        <VAlert
            v-if="state === 'reset'"
            color="success"
            class="mb-2"
        >
            Sua senha foi redefinida com sucesso!
        </VAlert>
    </div>
</template>
