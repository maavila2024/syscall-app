<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useForm, useField } from "vee-validate";
import { object, string } from "yup";
import { useRouter } from "vue-router";

const schema = object({
  current_password: string().required().label('Senha Atual'),
  new_password: string().required().min(8).label('Nova Senha'),
  new_password_confirmation: string()
    .required()
    .test('passwords-match', 'As senhas devem ser iguais', function(value) {
      return this.parent.new_password === value;
    })
    .label('Confirmar Nova Senha')
});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    current_password: '',
    new_password: '',
    new_password_confirmation: ''
  }
});

const submit = handleSubmit(async (values) => {
  await changePassword(values);
});

const { value: currentPassword } = useField('current_password');
const { value: newPassword } = useField('new_password');
const { value: newPasswordConfirmation } = useField('new_password_confirmation');

const feedbackMessage = ref('');
const successMessage = ref('');

const authStore = useAuthStore();
const router = useRouter();

function changePassword(values) {
  feedbackMessage.value = '';
  successMessage.value = '';

  authStore
    .forceChangePassword(
      values.current_password,
      values.new_password,
      values.new_password_confirmation
    )
    .then(() => {
      successMessage.value = 'Senha alterada com sucesso! Redirecionando...';
      setTimeout(() => {
        router.push({ name: 'dashboard' });
      }, 2000);
    })
    .catch((e) => {
      feedbackMessage.value = e.response?.data?.message || e.message || 'Erro ao alterar senha';
    });
}
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
      <h6 class="text-h6 mb-2">Alteração Obrigatória de Senha</h6>
      <p class="text-subtitle-1 text-medium-emphasis">
        Por questões de segurança, você precisa alterar sua senha antes de continuar.
      </p>
    </div>

    <VForm class="mt-5" @submit.prevent="submit">
      <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
        Senha Atual
      </v-label>
      <VTextField
        v-model="currentPassword"
        class="mb-4"
        type="password"
        autofocus
        :error-messages="errors.current_password"
      ></VTextField>

      <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
        Nova Senha
      </v-label>
      <VTextField
        v-model="newPassword"
        class="mb-4"
        type="password"
        :error-messages="errors.new_password"
      ></VTextField>

      <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
        Confirmar Nova Senha
      </v-label>
      <VTextField
        v-model="newPasswordConfirmation"
        class="mb-8"
        type="password"
        :error-messages="errors.new_password_confirmation"
      ></VTextField>

      <v-btn
        size="large"
        type="submit"
        :loading="isSubmitting"
        color="primary"
        block
        flat
      >
        Alterar Senha
      </v-btn>
    </VForm>
  </div>
</template>

