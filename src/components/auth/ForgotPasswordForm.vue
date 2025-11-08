<script setup>
import { ref } from "vue";
import { useForm, useField } from "vee-validate";
import { object, string } from "yup";
import { useAuthStore } from "@/stores/auth";

const emits = defineEmits(['after-request']);
const authStore = useAuthStore();
const feedbackMessage = ref(null);
const schema = object({
    email: string().required().email().label('E-mail')
});

const { handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: schema,
    initialValues: {
        email: ''
    }
});

const submit = handleSubmit(async (values) => {
    feedbackMessage.value = null 
    await authStore.forgotPassword(values.email)
        .then(() => {
            emits('after-request', values.email)
        })
        .catch((e) => {
            feedbackMessage.value = e.message
        })
});

const { value: email } = useField('email');
</script>
<template>
    <VAlert v-if="feedbackMessage" color="error">
    {{ feedbackMessage }}
    </VAlert>
    <v-form @submit.prevent='submit' class="mt-sm-13 mt-8">
        <p class="text-subtitle-1 py-6 text-10">
            Por favor, insira o endereço de e-mail associado à sua conta e nós lhe enviaremos um link por e-mail, para redefinir sua senha.
        </p>
        <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">E-mail</v-label>
        <VTextField
            v-model="email"
            placeholder="email@grainproteintech.com"
            type="email"
            autofocus
            :error-messages="errors.email">
        </VTextField>
        <v-btn
            size="large"
            type="submit"
            :loading="isSubmitting"
            color="primary"
            block
            flat
            >Recuperar senha
        </v-btn>
    </v-form>
</template>
