<script setup>
import { ref } from "vue";
import { useForm, useField } from "vee-validate";
import { object, string } from "yup";
import { useAuthStore } from "@/stores/auth";

const emits = defineEmits(['after-reset']);
const authStore = useAuthStore();
const feedbackMessage = ref(null);
const schema = object({
    token: string().required().label('Token'),
    password: string()
    .min(8)
    .required()
    .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])/,
        "Senha deve conter 8 caracteres e pelo menos uma letra e um número"
    )
    .label("Senha"),
});

const { handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: schema,
    initialValues: {
        token: '',
        password: ''
    }
});

const submit = handleSubmit(async (values) => {
    feedbackMessage.value = null 
    await authStore.resetPassword(values.token, values.password)
        .then(() => {
            emits('after-reset')
        })
        .catch((e) => {
            feedbackMessage.value = e.message
        })
});

const { value: token } = useField('token');
const { value: password } = useField('password');
</script>

<template>
    <VAlert v-if="feedbackMessage" color="error">
    {{ feedbackMessage }}
    </VAlert>
    <v-form @submit.prevent='submit' class="mt-sm-13 mt-8">
        <div class="mt-sm-13 mt-8">
            <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">Digite o seu código de segurança de 6 dígitos.</v-label>
            <div class="d-flex">
                <VTextField
                    v-model="token"
                    autofocus
                    :maxlength="6"
                    :error-messages="errors.token">
                </VTextField>
            </div>
            <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">Digite a nova senha.</v-label>
            <div class="d-flex">
                <VTextField
                    v-model="password"
                    type="password"
                    autofocus
                    :error-messages="errors.password">
                </VTextField>
            </div>
            <v-btn size="large"
                type="submit"
                :loading="isSubmitting"
                color="primary"
                block
                flat
                >Resetar a senha
            </v-btn>
            <h6 class="text-h6 mt-5 font-weight-regular">
                Não recebeu o código?
                <RouterLink to="/forgot-password" class="text-primary text-subtitle-1 text-decoration-none pl-1 font-weight-medium"> Solicitar novamente</RouterLink>
            </h6>
        </div>
    </v-form>
</template>
