<script setup lang="ts">
import { ref } from 'vue';
import Logo from '@/layouts/full/logo/Logo.vue';
import axios from 'axios';
import axios from "axios";
import { object, string } from "yup";
import { useRouter } from "vue-router";

const router = useRouter();

const schema = object({
  email: string().required().email().label('E-mail'),
  password: string().required().label('Senha'),
});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    email: 'teste@teste.com',
    password: '12345'
  }
});

const submit = handleSubmit(async (values) => {
  await login(values)
});

const { value: email } = useField('email');
const { value: password } = useField('password');

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
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    action="/pages/boxedlogin"
    class="mt-5"
  >
    <v-label class="text-subtitle-1 font-weight-medium pb-2">Nome</v-label>
    <VTextField v-model="ffirst_name" required></VTextField>
    <v-label class="text-subtitle-1 font-weight-medium pb-2">E-mail</v-label>
    <VTextField v-model="email" required></VTextField>
    <v-label class="text-subtitle-1 font-weight-medium pb-2">Senha</v-label>
    <VTextField
      v-model="password"
      :counter="10"
      required
      variant="outlined"
      type="password"
      color="primary"
    ></VTextField>
    <v-btn
      size="large"
      class="mt-2"
      color="primary"
      block
      @click="register"
      flat
      >Sign Up</v-btn
    >
  </v-form>
</template>
