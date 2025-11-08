<script setup>
import { ref, onMounted } from "vue";
import { useForm, useField } from "vee-validate";
import { object, string } from "yup";
import { useAuthStore } from "@/stores/auth";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const feedbackMessage = ref('');
const successMessage = ref('');
const userEmail = ref('');
const token = ref('');

onMounted(async () => {
  token.value = route.params.token;
  
  // Buscar informações do token (email do usuário)
  try {
    await validateToken();
  } catch (error) {
    feedbackMessage.value = 'Token inválido ou expirado.';
  }
});

const validateToken = async () => {
  try {
    const response = await axios.get(`api/reset-password-by-token/${token.value}`);
    userEmail.value = response.data.email;
  } catch (error) {
    feedbackMessage.value = 'Token inválido ou expirado.';
    throw error;
  }
};

const schema = object({
  password: string()
    .min(8)
    .required()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])/,
      "Senha deve conter 8 caracteres e pelo menos uma letra e um número"
    )
    .label("Senha"),
  password_confirmation: string()
    .required()
    .test('passwords-match', 'As senhas devem ser iguais', function(value) {
      return this.parent.password === value;
    })
    .label("Confirmar Senha"),
});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    password: '',
    password_confirmation: ''
  }
});

const submit = handleSubmit(async (values) => {
  feedbackMessage.value = '';
  successMessage.value = '';

  try {
    await authStore.resetPasswordByToken(token.value, values.password, values.password_confirmation);
    successMessage.value = 'Senha redefinida com sucesso! Redirecionando para o login...';
    setTimeout(() => {
      router.push({ name: 'login' });
    }, 2000);
  } catch (e) {
    feedbackMessage.value = e.response?.data?.message || e.message || 'Erro ao redefinir senha';
  }
});

const { value: password } = useField('password');
const { value: passwordConfirmation } = useField('password_confirmation');
</script>

<template>
  <div>
    <VAlert v-if="feedbackMessage" color="error" class="mb-4">
      {{ feedbackMessage }}
    </VAlert>
    <VAlert v-if="successMessage" color="success" class="mb-4">
      {{ successMessage }}
    </VAlert>

    <div class="mb-6">
      <h6 class="text-h6 mb-2">Redefinir Senha</h6>
      <p class="text-subtitle-1 text-medium-emphasis">
        Defina uma nova senha para sua conta.
      </p>
    </div>

    <v-form class="mt-5" @submit.prevent="submit">
      <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
        E-mail
      </v-label>
      <VTextField
        :value="userEmail || 'Carregando...'"
        disabled
        class="mb-4"
        type="email"
      ></VTextField>

      <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
        Nova Senha
      </v-label>
      <VTextField
        v-model="password"
        class="mb-4"
        type="password"
        autofocus
        :error-messages="errors.password"
      ></VTextField>

      <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
        Confirmar Nova Senha
      </v-label>
      <VTextField
        v-model="passwordConfirmation"
        class="mb-8"
        type="password"
        :error-messages="errors.password_confirmation"
      ></VTextField>

      <v-btn
        size="large"
        type="submit"
        :loading="isSubmitting"
        color="primary"
        block
        flat
      >
        Redefinir Senha
      </v-btn>
    </v-form>
  </div>
</template>

