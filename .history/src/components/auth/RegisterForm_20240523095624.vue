<script setup lang="ts">
import { ref } from 'vue';
import Logo from '@/layouts/full/logo/Logo.vue';
import axios from 'axios';
import { object, string } from "yup";
import { useForm, useField } from "vee-validate";

// import { useRouter } from "vue-router";

// const router = useRouter();
const schema = object({
    first_name: string().required().label('Nome'),
    email: string().required().email().label('E-mail'),
    password: string().min(8).required().label('Senha'),
});

const { handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: schema,
  initialValues: {
    first_name: 'Enner',
    email: 'enner@internacional.com.br',
    password: '1234567A'
  }
})

const { value: first_name } = useField('first_name');
const { value: email } = useField('email');
const { value: password } = useField('password');

const submit = handleSubmit(async (values) => {
  await login(values)
});

const authStore = useAuthStore();

const feedbackMessage = ref('');

function login(values) {
  feedbackMessage.value = ''

  authStore
      .sanctum()
      .then(() => {
        authStore
          .login(values.email, values.password )
          .then(() => {
        router.push({ name: 'dashboard' })
      })
      .catch(() => {
        feedbackMessage.value = "E-mail ou senha estão inválidos!";
      })
    })

function register(){
    const data = {
        first_name: 'New',
        last_name: 'User',
        email: 'newuser@test.com',
        password: '1234567A'
    }
    axios.post('api/register', data)
}
</script>
<template>
<VAlert v-if="feedbackMessage" color="error" variant="tonal">
    {{ feedbackMessage }}
  </VAlert>
  <v-form
    @submit.prevent='submit'
    class="mt-5"
  >
    <v-label class="text-subtitle-1 font-weight-medium pb-2" :error-messages="errors.first_name">Nome</v-label>
    <VTextField v-model="first_name"></VTextField>
    <v-label class="text-subtitle-1 font-weight-medium pb-2" :error-messages="errors.email">E-mail</v-label>
    <VTextField v-model="email"></VTextField>
    <v-label class="text-subtitle-1 font-weight-medium pb-2" :error-messages="errors.password">Senha</v-label>
    <VTextField
      v-model="password"
      variant="outlined"
      type="password"
      color="primary"
    ></VTextField>
    <v-btn
      size="large"
      class="mt-2"
      color="primary"
      block
      type="submit"
      :loading="isSubmitting"
      flat
      >Sign Up</v-btn
    >
  </v-form>
</template>
